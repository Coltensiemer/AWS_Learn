//creating a layer for prisma bunding is to create a new lambda function?

import { Runtime } from 'aws-cdk-lib/aws-lambda';

export function prismaLayer() {
	return {
		bundling: {
			image: Runtime.NODEJS_20_X,
			nodeModules: ['@prisma/client', 'prisma'],
			commandHooks: {
				beforeBundling(_inputDir: string, _outputDir: string) {
					return [];
				},
				beforeInstall(_inputDir: string, _outputDir: string) {
					// Copy the prisma folder to the output directory
					return [
						`cd ${_inputDir}`,
						'cd ../../',
						`cp -R ${_inputDir}/prisma ${_outputDir}/`,
						`cp ${_inputDir}/node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node ${_outputDir}/node_modules/.prisma/client`,
					];
				},
				afterBundling(_inputDir: string, _outputDir: string) {
					// Generate the Prisma client and remove the prisma folders to decrease the size of the deployment package
					return [
						`cd ${_outputDir}`,
						'npx prisma generate',
						`rm -rf ${_outputDir}/node_modules/@prisma/engines`, // Remove the engines folder to decrease the size of the deployment package
						`rm -rf ${_outputDir}/node_modules/@prisma/client/node_modules node_modules/.bin node_modules/prisma`,
					];
				},
			},
		},
	};
}
