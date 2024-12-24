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
			commandHooks: {
				beforeBundling(_inputDir: string, _outputDir: string) {
					return [];
				},
				beforeInstall(_inputDir: string, _outputDir: string) {
					return ['mkdir nodejs', 'cd nodejs'];
				},
				afterBundling(_inputDir: string, _outputDir: string) {
					return ['npm init -y', 'npm install --save pg'];
				},
			},
		},
	};
}
