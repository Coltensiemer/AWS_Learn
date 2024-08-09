import type { APIGatewayProxyHandler } from 'aws-lambda';
import parser from 'lambda-multipart-parser';

/**
 * Redirects the user to the site with a temporary code.
 * temporary code is used to get the access token
 *
 * @return {string} token
 */
export const handler: APIGatewayProxyHandler = async (e) => {
	const event = await parser.parse(e);

	const { client_id, client_secret, code, redirect_uri } = event;

	const url = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				accept: 'application/json',
			},
		});
		const token = await response.json();
		return {
			statusCode: 200,
			body: JSON.stringify(token),
		};
	} catch (error) {
		console.log('error', error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				body: JSON.stringify(error),
			}),
		};
	}
};
