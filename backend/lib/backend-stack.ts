
import { Aws, Stack, Tags, CfnOutput, StackProps, Duration, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as ln from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as Congito from 'aws-cdk-lib/aws-cognito';



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
  
    const securityGroup = new ec2.SecurityGroup(this, 'BackendStackResourceInitializerFnSg', {
    securityGroupName: `${id}ResourceInitializerFnSg`,
      vpc,
      allowAllOutbound: true,
    });

    securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(5432),
      'Opening RDS to Lambda Function'
    );

    // Subnet Group for RDS
    const subNetGroup = new rds.SubnetGroup(this, 'rds-subnet-group', {
      vpc,
      subnetGroupName: 'rds-subnet-group',
      description: 'Subnet group for RDS instance',
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });
    
    ///Secrets Manager
    //Documenitation: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda-readme.html
    const secret = secretsmanager.Secret.fromSecretAttributes(this, `${id}-SecretDB`, {
      secretCompleteArn: 'arn:aws:secretsmanager:us-east-2:339713106432:secret:BackendStackMyRdsInstanceSe-ViX8PqhMPhe1-BD8Jt1'
    })

    

    // RDS Instance
    const rdsInstance = new rds.DatabaseInstance(this, 'MyRdsInstance', {
      vpc,
      databaseName: 'TestDB',
      subnetGroup: subNetGroup,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_16_3,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO), // Change to free tier eligible instance
      allocatedStorage: 20,
      securityGroups: [securityGroup], // This is the security group created above to allow traffic from the Lambda function
      credentials: rds.Credentials.fromGeneratedSecret('postgres'), // Automatically generates a password for the 'postgres' user
      removalPolicy: RemovalPolicy.DESTROY,
      publiclyAccessible: true,
    });



    // Lambda function with Prisma bundled
    const createLambdaFunction = (name: string, entry: string ) => {
      const secretValue = secret.secretValue.toJSON()
    const lambdaFunction = new ln.NodejsFunction(this, name, {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: path.join(__dirname, `../api/${entry}/index.ts`),
      handler: 'handler', 
      timeout: Duration.seconds(60),
      environment: { 
      DATABASE_URL: `postgresql://${secretValue.engine}:${secretValue.password}@${secretValue.host}:{secretValue.port}/${secretValue.dbname}`,
      },
      vpc: vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      bundling: { 
        nodeModules: ['@prisma/client', 'prisma'],
        commandHooks: {
          beforeBundling(_inputDir: string, _outputDir: string) {            
            return [];
          },
          beforeInstall(_inputDir: string, _outputDir: string) {
            // Copy the prisma folder to the output directory
            console.log(_inputDir, _outputDir)
            return [
              `cd ${_inputDir}`,
              'cd ..',
              `cp -R ./prisma ${_outputDir}/`];
          },
          afterBundling(_inputDir: string, _outputDir: string) {
            // Generate the Prisma client and remove the prisma folders to decrease the size of the deployment package
            return [
              `cd ${_outputDir}`,
              'npx prisma generate',
              'rm -rf node_modules/@prisma/engines', // Remove the engines folder to decrease the size of the deployment package
              'rm -rf node_modules/@prisma/client/node_modules node_modules/.bin node_modules/prisma',
            ];
          },
        },
      },
    });

    rdsInstance.secret?.grantRead(lambdaFunction);
    secret.grantRead(lambdaFunction); 
    return lambdaFunction;
  }

  
  
  // API Gateway
    const api = new apigateway.RestApi(this, 'users-api', {
      deployOptions: {
        stageName: 'dev',
        tracingEnabled: true,
        
      },
      restApiName: 'lambda-api',
    });
    
    // Output the API Gateway URL
    new CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API Gateway',
    });
    
    // Create the Lambda function with proxy integration
    const users = api.root.addResource('users');
    users.addMethod('POST', new apigateway.LambdaIntegration(createLambdaFunction('addusersLambda', 'users')));
    users.addMethod('GET', new apigateway.LambdaIntegration(createLambdaFunction('getusersLambda', 'users')));
    
    
    const user_id = users.addResource('{user_id}');
    user_id.addMethod('GET', new apigateway.LambdaIntegration(createLambdaFunction('getuserbyidLambda', 'users')));
    user_id.addMethod('PUT', new apigateway.LambdaIntegration(createLambdaFunction('updateuserbyidLambda', 'users')));  
    user_id.addMethod('DELETE', new apigateway.LambdaIntegration(createLambdaFunction('deleteuserbyidLambda', 'users')));
    
    const quizzes = api.root.addResource('quizzes');
    quizzes.addMethod('GET', new apigateway.LambdaIntegration(createLambdaFunction('getquizzesLambda', 'quizzes')));
    

    // USER POOL with AWS Coginito

  const userPool = new Congito.UserPool(this, 'user-Pool', { 
    userPoolName: `${Aws.STACK_NAME}-user-pool`,
    selfSignUpEnabled: true,
    signInAliases: { email: true },
    keepOriginal: { email: true },
    autoVerify: { email: true },
    standardAttributes: { email: { required: true } },
    removalPolicy: RemovalPolicy.DESTROY,
  })


    
  //API Docs: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cognito.UserPoolClient.html
  const userPoolClient = userPool.addClient('user-Pool-Client', { 
    userPoolClientName: `${Aws.STACK_NAME}-user-pool-client`,
    authFlows: { userSrp: true },
    supportedIdentityProviders: [Congito.UserPoolClientIdentityProvider.COGNITO],
    refreshTokenValidity: Duration.days(1),
  }) 
  const userPoolCLientID = userPoolClient.userPoolClientId; 

  userPool.addDomain('user-pool-domain', {
    cognitoDomain: { 
     domainPrefix: `${userPoolCLientID}`
    }
  })

  new CfnOutput( this, 'user-pool', { 
    description: 'User Pool',
    value: userPool.userPoolId,
  })

  new CfnOutput(this, 'user-pool-client', {
    description: 'User Pool Client',
    value: userPoolCLientID,
  })


  


    
    



    
  }
  
}

