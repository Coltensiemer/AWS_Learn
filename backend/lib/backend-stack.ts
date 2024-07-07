import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as ln from 'aws-cdk-lib/aws-lambda-nodejs';
// import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
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

    const securityGroup = new ec2.SecurityGroup(this, 'ResourceInitializerSG', {
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

    // RDS Instance
    const rdsInstance = new rds.DatabaseInstance(this, 'MyRdsInstance', {
      vpc,
      databaseName: 'TestDB',
      subnetGroup: subNetGroup,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_16_3,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO), // Change to free tier eligible instance
      allocatedStorage: 20,
      securityGroups: [securityGroup], // This is the security group created above to allow traffic from the Lambda function
      credentials: rds.Credentials.fromGeneratedSecret('postgres'), // Automatically generates a password for the 'postgres' user
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publiclyAccessible: true,
    });

    // Lambda function with Prisma bundled
    const handler = new ln.NodejsFunction(this, 'prisma', {
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: 'functions/index.ts', // Correcting the 'handler' field to 'entry'
      handler: 'handler', // Add the actual handler function name
      timeout: cdk.Duration.seconds(5),
      environment: { 
        DB_URL: process.env.DATABASE_URL_LOCAL || '', // Ensure DB_URL is defined
      },
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
            
            return [
              `cd ${_outputDir}`,
              'npx prisma generate',
              'rm -rf node_modules/@prisma/engines', // Remove the engines folder to decrease the size of the deployment package
              'rm -rf node_modules/@prisma/client/node_modules/.bin node_modules/prisma', // Remove the prisma folder to decrease the size of the deployment package
            ];
          },
        },
      },
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler,
    });
  }
}
