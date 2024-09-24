import {
	Aws,
	Stack,
	Tags,
	CfnOutput,
	StackProps,
	Duration,
	RemovalPolicy,
	CfnParameter,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as ln from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as Congito from 'aws-cdk-lib/aws-cognito';
import dotenv from 'dotenv';

dotenv.config();

/**
 * BackendStack VPC
 * Creates a VPC with 2 subnets, one public and one private
 * The public subnet is used for the Lambda function
 * The private subnet is used for the RDS instance
 *
 *
 */

export class BackendStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const vpc = new ec2.Vpc(this, 'MyVpc', {
			maxAzs: 2,
			natGateways: 0,
			subnetConfiguration: [
				{
					cidrMask: 22,
					name: 'public',
					subnetType: ec2.SubnetType.PUBLIC,
				},
				{
					cidrMask: 22,
					name: 'private',
					subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
				},
			],
		});

		// Create a tag for the project
		Tags.of(this).add('Project', 'Backend');

		/*****************SUBNET GATEWAY SECTION **********************************/
		const securityGroup = new ec2.SecurityGroup(
			this,
			'BackendStackResourceInitializerFnSg',
			{
				securityGroupName: `${id}ResourceInitializerFnSg`,
				vpc,
				allowAllOutbound: true,
			}
		);

		securityGroup.addIngressRule(
			ec2.Peer.anyIpv4(),
			ec2.Port.tcp(5432),
			'Allow inbound traffic from Lambda function to RDS instance'
		);

		/***************** SUBNET SECTION **********************************/
		const subNetGroup = new rds.SubnetGroup(this, 'rds-subnet-group', {
			vpc,
			subnetGroupName: 'rds-subnet-group',
			description: 'Subnet group for RDS instance',
			vpcSubnets: {
				subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
			},
			removalPolicy: RemovalPolicy.DESTROY,
		});

		/***************** SECRETS MANGER SECTION **********************************
		 * Documenitation: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda-readme.html
		 */
		const secret = secretsmanager.Secret.fromSecretAttributes(
			this,
			`${id}-SecretDB`,
			{
				secretCompleteArn: process.env.SECRET_ARN || '',
			}
		);

		/***************** RDS DATABASE SECTION **********************************/
		const rdsInstance = new rds.DatabaseInstance(this, 'MyRdsInstance', {
			vpc,
			databaseName: 'TestDB',
			subnetGroup: subNetGroup,
			engine: rds.DatabaseInstanceEngine.postgres({
				version: rds.PostgresEngineVersion.VER_16_3,
			}),
			instanceType: ec2.InstanceType.of(
				ec2.InstanceClass.T3,
				ec2.InstanceSize.MICRO
			), // Change to free tier eligible instance
			allocatedStorage: 20,
			securityGroups: [securityGroup], // This is the security group created above to allow traffic from the Lambda function
			credentials: rds.Credentials.fromGeneratedSecret('postgres'), // Automatically generates a password for the 'postgres' user
			removalPolicy: RemovalPolicy.DESTROY,
			publiclyAccessible: true,
		});

		/*****************LAMBDA LAYERS SECTION **********************************/

		/**
		 * Prisma ORM Layer for Lambda.
		 * Bundles the Prisma ORM with the Lambda functions that will be using it
		 */
		const apiPrismaLayer = new lambda.LayerVersion(
			this,
			'APILayerWithPrisma',
			{
				code: lambda.Code.fromAsset(
					path.join(__dirname, './layers/prisma.zip')
				),
				compatibleRuntimes: [lambda.Runtime.NODEJS_20_X],
				description: 'Prisma ORM Layer',
			}
		);

		/*****************NODEJS FUNCTION SECTION **********************************/

		/**
		 * Node js function props
		 * Contains the runtime, handler, timeout, and VPC
		 */
		const nodejsFunctionProps = {
			runtime: lambda.Runtime.NODEJS_20_X,
			handler: 'handler',
			timeout: Duration.seconds(29),
			vpc: vpc,
		};

		/**
		 * Creates a Lambda function with the given name and entry point
		 * @param name - The name of the Lambda function
		 * @param entry - The entry point for the Lambda function from API folder
		 */

		const createLambdaFunction = (name: string, entry: string) => {
			const lambdaFunction = new ln.NodejsFunction(this, name, {
				...nodejsFunctionProps,
				entry: path.join(__dirname, `../api/${entry}/index.ts`),
				environment: {
					//! Add the database URL to the environment variables for Prisma?
					DATABASE_URL: '',
				},
				vpcSubnets: {
					subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
				},
				layers: [apiPrismaLayer],
			});

			rdsInstance.secret?.grantRead(lambdaFunction);
			rdsInstance.grantConnect(lambdaFunction);
			secret.grantRead(lambdaFunction);
			return lambdaFunction;
		};

		/*****************LAMBDA AUTHORIZER SECTION **********************************/
		const authorizerLambda = new ln.NodejsFunction(
			this,
			'authorizerLambda',
			{
				...nodejsFunctionProps,
				entry: 'api/authorizer/index.ts',
			}
		);

		/**
		 * Created the TokenAuthorizer that will be used to authorize the API Gateway for 'users-api
		 * Placed as default method options for the API Gateway
		 */
		const authorizer = new apigateway.TokenAuthorizer(this, 'authorizer', {
			handler: authorizerLambda,
		});

		/*****************API GATEWAY SECTION **********************************/
		/**
		 * Creates the API Gateway for Lambda functions to route to RDS in private Subnet
		 *
		 */
		const api = new apigateway.RestApi(this, 'users-api', {
			//! Enable caching for APU Gateway
			defaultMethodOptions: { authorizer },
			deployOptions: {
				stageName: 'dev',
				tracingEnabled: true,
			},
			restApiName: 'lambda-api',
		});

		/**
		 * Output the API Gateway URL
		 */
		new CfnOutput(this, 'ApiUrl', {
			value: api.url,
			description: 'The URL of the API Gateway',
		});

		/*****************PROXY LAMBDA SECTION **********************************/

		const users = api.root.addResource('users');
		users.addMethod(
			'POST',
			new apigateway.LambdaIntegration(
				createLambdaFunction('addusersLambda', 'users')
			)
		);
		users.addMethod(
			'GET',
			new apigateway.LambdaIntegration(
				createLambdaFunction('getusersLambda', 'users')
			)
		);

		const user_id = users.addResource('{user_id}');
		user_id.addMethod(
			'GET',
			new apigateway.LambdaIntegration(
				createLambdaFunction('getuserbyidLambda', 'users')
			)
		);
		user_id.addMethod(
			'PUT',
			new apigateway.LambdaIntegration(
				createLambdaFunction('updateuserbyidLambda', 'users')
			)
		);
		user_id.addMethod(
			'DELETE',
			new apigateway.LambdaIntegration(
				createLambdaFunction('deleteuserbyidLambda', 'users')
			)
		);

		const quizzes = api.root.addResource('quizzes');
		quizzes.addMethod(
			'GET',
			new apigateway.LambdaIntegration(
				createLambdaFunction('getquizzesLambda', 'quizzes')
			),
			{
				authorizationType: apigateway.AuthorizationType.NONE,
			}
		);

		/***************** USER POOL SECTION **********************************/

		// USER POOL with AWS Coginito
		const userPool = new Congito.UserPool(this, 'user-Pool', {
			userPoolName: `${Aws.STACK_NAME}-user-pool`,
			selfSignUpEnabled: true,
			signInAliases: { email: true },
			standardAttributes: {
				email: { required: true, mutable: true },
				preferredUsername: { required: true, mutable: true },
			},
			autoVerify: { email: true },

			removalPolicy: RemovalPolicy.DESTROY,
		});

		//API Docs: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cognito.UserPoolClient.html
		const userPoolClient = userPool.addClient('user-Pool-Client', {
			userPoolClientName: `${Aws.STACK_NAME}-user-pool-client`,
			authFlows: { userSrp: true, userPassword: true },
			supportedIdentityProviders: [
				Congito.UserPoolClientIdentityProvider.COGNITO,
			],
			refreshTokenValidity: Duration.days(1),
			oAuth: {
				flows: { authorizationCodeGrant: true },
				scopes: [Congito.OAuthScope.EMAIL, Congito.OAuthScope.OPENID],
				callbackUrls: ['http://localhost'],
			},
		});

		const userPoolCLientID = userPoolClient.userPoolClientId;

		// Admin users class
		const apiAdminGroupName = new CfnParameter(
			this,
			'api-admin-group-name',
			{
				type: 'String',
				description: 'Admin Group Name',
				default: `apiAdmins`,
			}
		);
		const adminGroup = new Congito.CfnUserPoolGroup(
			this,
			'api-admin-group',
			{
				groupName: apiAdminGroupName.valueAsString,
				description: 'Admin Group',
				userPoolId: userPool.userPoolId,
			}
		);

		// General users
		const apiGeneralGroupName = new CfnParameter(
			this,
			'api-general-group-name',
			{
				type: 'String',
				description: 'General Group Name',
				default: `apiGeneral`,
			}
		);

		const generalGroup = new Congito.CfnUserPoolGroup(
			this,
			'api-general-group',
			{
				groupName: 'EVERYONE',
				description: 'Group for all users by default.',
				userPoolId: userPool.userPoolId,
			}
		);

		/**
		 * Identity Pool
		 */
		const IdentityPool = new Congito.CfnIdentityPool(this, 'IdentityPool', {
			allowUnauthenticatedIdentities: false,
			allowClassicFlow: true,
			cognitoIdentityProviders: [
				{
					clientId: userPoolClient.userPoolClientId,
					providerName: userPool.userPoolProviderName,
				},
			],
		});

		/**
		 * Domain for user pool
		 */
		userPool.addDomain('user-pool-domain', {
			cognitoDomain: {
				domainPrefix: `${userPoolCLientID}`,
			},
		});

		/**
		 * Add the user pool id and client id to the authorizer lambda
		 * Gives the lambda function's exectuion environment access to the user pool id and client id
		 * Keys for environment are listen in api/authorizer/index.ts
		 *
		 */
		authorizerLambda.addEnvironment('USER_POOL_ID', userPool.userPoolId);
		authorizerLambda.addEnvironment(
			'APPLICATION_CLIENT_ID',
			userPoolCLientID
		);
		authorizerLambda.addEnvironment(
			'ADMIN_GROUP_NAME',
			adminGroup.groupName || ''
		);

		new CfnOutput(this, 'user-pool', {
			description: 'User Pool',
			value: userPool.userPoolId,
		});

		new CfnOutput(this, 'user-pool-client', {
			description: 'User Pool Client',
			value: userPoolCLientID,
		});

		new CfnOutput(this, 'admin-group', {
			description: 'Admin Group name',
			value: adminGroup.groupName || '',
		});

		new CfnOutput(this, 'general-group', {
			description: 'General Group name',
			value: generalGroup.groupName || '',
		});

		new CfnOutput(this, 'IdentityPoolId', {
			description: 'Identity Pool Id',
			value: IdentityPool.ref,
		});

		new CfnOutput(this, 'CongitoLoginURL', {
			description: 'Congito Login URL',
			value: `https://${userPoolCLientID}.auth.${Aws.REGION}.amazoncognito.com/login?client_id=${userPoolCLientID}&response_type=code&redirect_uri=http://localhost`,
		});

		new CfnOutput(this, 'CongitoAuthCommand', {
			description:
				'AWS ClI command for Amazon Congnito User Pool Authentication',
			value: `aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id ${userPoolCLientID} --auth-parameters USERNAME=<username>,PASSWORD=<password>`,
		});
	}
}
