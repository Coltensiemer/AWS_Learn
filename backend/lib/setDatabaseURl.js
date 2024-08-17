const {
	SecretsManagerClient,
	GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');
const path = require('path');
const fs = require('fs');
const { writeFileSync } = fs;

//Running this function will create a .env file in the root of the project with the DATABASE_URL set to the value from the secret in secrets manager
//Place DB ARN as a value in terminal as DB_SECRET_ARN

const getSecret = async () => {
	try {
		const DB_SECRET_ARN = process.env.DB_SECRET_ARN;
		if (!DB_SECRET_ARN) return 'No secret ARN provided';
		const client = new SecretsManagerClient({ region: 'us-east-2' });
		const data = await client.send(
			new GetSecretValueCommand({ SecretId: DB_SECRET_ARN })
		);

		return data.SecretString;
	} catch (error) {
		console.error('Error fetching secret: ', error);
		return error;
	}
};

/// Creates the database URL from the secret values from secrets manager
async function getDataURL() {
	const secretString = await getSecret();
	const secret = JSON.parse(secretString);

	return `postgresql://${secret.username}:${secret.password}@${secret.host}:${secret.port}/${secret.dbname}`;
}

(async () => {
	try {
		const dataURL = await getDataURL();
		const projectRoot = path.resolve(__dirname, '../..');
		const envFilePath = path.join(projectRoot, '.env');

		writeFileSync(envFilePath, `DATABASE_URL=${dataURL}\n`);
		console.log(`DATABASE_URL written to ${envFilePath}`);
	} catch (error) {
		console.log('Failed to set database URL', error);
		process.exit(1);
	}
})();
