import { Runtime } from 'aws-cdk-lib/aws-lambda';

/**
 * AWS Documentation:
 * https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html#nodejs-package-dependencies
 *
 */

/**
 * Prisma Documentation:
 * https://www.prisma.io/docs/orm/prisma-client/deployment/caveats-when-deploying-to-aws-platforms
 */

export function handler() {
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
						`cp -R prisma/schema.prisma ${_outputDir},
						`,
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
