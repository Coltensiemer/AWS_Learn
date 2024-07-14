import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";



const getSecert = async () => {
	try {
		const hostname = process.env.DB_HOSTNAME || "";
		const DB_SECRET_ARN = process.env.DB_SECRET_ARN || "";
		const client = new SecretsManagerClient({ region: "us-east-2" });
		const data = await client.send(
			new GetSecretValueCommand({ SecretId: DB_SECRET_ARN })
		);
	
		return data.SecretString;
	} 
	catch (error) { 
		console.error("Error fetching secret: ", error);
		return error; 
	}

}


exports.handler = async () => {
  try {

const result = getSecert()
console.log(result)
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
				message: "Successfully retrieved secret value from AWS Secrets Manager",
				result
			})			
    };
  } catch (error) {
    console.error("Error processing request:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
};
