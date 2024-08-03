import { APIGatewayProxyWithCognitoAuthorizerHandler } from 'aws-lambda';

export const handler: APIGatewayProxyWithCognitoAuthorizerHandler = async (
	event
) => {
	return {
		statusCode: 200,
		body: JSON.stringify('Hello World!'),
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
		},
	};
};
