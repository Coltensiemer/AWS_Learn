import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";




const getSecert = async () => {
const secret_name = "BackendStackMyRdsInstanceSe-ViX8PqhMPhe1";
const client = new SecretsManagerClient()
const data = await client.send(new GetSecretValueCommand({SecretId: secret_name}))
return data
}



exports.handler = async () => {
  try {

const result = getSecert()
  
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
