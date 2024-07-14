import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as ln from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
// import { ApiGateway } from 'aws-cdk-lib/aws-events-targets';
// import { DESTRUCTION } from 'dns';
// import { after, before } from 'node:test';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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
      removalPolicy: cdk.RemovalPolicy.DESTROY,
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
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publiclyAccessible: true,
    });



    // Lambda function with Prisma bundled
    const createLambdaFunction = (name: string, entry: string ) => {
    const lambdaFunction = new ln.NodejsFunction(this, name, {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: path.join(__dirname, `../api/${entry}/index.ts`),
      handler: 'handler', // Add the actual handler function name
      timeout: cdk.Duration.seconds(5),
      environment: { 
        DB_ENDPOINT: rdsInstance.dbInstanceEndpointAddress,
        DB_Name: 'TestDB',
        DB_SECRET_ARN: secret.secretArn,
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

// Create the Lambda function with proxy integration
const getQuizLambda = createLambdaFunction('quizzesLambda', 'quizzes');
const addusersLambda = createLambdaFunction('usersLambda', 'users');


// API Gateway
    const api = new apigateway.RestApi(this, 'Endpoint', {
      restApiName: 'lambda-api',
    });

    const quizzes = api.root.addResource('quizzes');
    const users = api.root.addResource('users');

    quizzes.addMethod('GET', new apigateway.LambdaIntegration(getQuizLambda));
    users.addMethod('POST', new apigateway.LambdaIntegration(addusersLambda));

  }
}
