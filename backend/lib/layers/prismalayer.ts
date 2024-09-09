//creating a layer for prisma bunding is to create a new lambda function?

export function prismaLayer() {
	return {
		bundling: {
			nodeModules: ['@prisma/client', 'prisma'],
			commandHooks: {
				beforeBundling(_inputDir: string, _outputDir: string) {
					return [];
				},
				beforeInstall(_inputDir: string, _outputDir: string) {
					// Copy the prisma folder to the output directory
					return [
						`cd ${_inputDir}`,
						'cd ..',
						`cp -R ./prisma ${_outputDir}/`,
					];
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
	};
}
