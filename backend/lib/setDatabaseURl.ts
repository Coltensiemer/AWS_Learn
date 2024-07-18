import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const getSecret = async () => {
	try {
		const hostname = process.env.DB_HOSTNAME || "";
		const DB_SECRET_ARN = process.env.DB_SECRET_ARN || "";
		const client = new SecretsManagerClient({ region: "us-east-2" });
		const data = await client.send(
			new GetSecretValueCommand({ SecretId: DB_SECRET_ARN })
		);
	
		return data;
	} 
	catch (error) { 
		console.error("Error fetching secret: ", error);
		return error; 
	}

}



/// Creates the database URL from the secret values from secrets manager
async function getDataURL()
{ 
	const secretValue = await getSecret()
	const secret = JSON.parse(secretValue)

	return `postgresql://${secret.username}:${secret.password}@${secret.host}:${secret.port}/${secret.dbname}`;

}



//!Set the database URL in the .env file?? 

(async () => {
  try {
    const dataURL = await getDataURL();
    const envFilePath = path.resolve(__dirname, '.env');
    writeFileSync(envFilePath, `DATABASE_URL=${dataURL}\n`);
    console.log(`DATABASE_URL written to ${envFilePath}`);
  } catch (error) {
    console.log('Failed to set database URL', error);
    process.exit(1);
  }
})();