import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

//creating a layer for prisma bunding is to create a new lambda function?


export default class PrismaLayer extends Stack { 
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const prismaLayer = new lambda.LayerVersion(this, 'PrismaLayer', {
			code: lambda.Code.fromAsset('layers/nodejs/prisma'),
			compatibleRuntimes: [lambda.Runtime.NODEJS_20_X],
			description: 'Prisma Layer',
		});
	}
}

