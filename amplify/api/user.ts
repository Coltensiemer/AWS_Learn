import type { APIGatewayProxyHandler } from 'aws-lambda';

/**
 * This Uses the access token to access the API and get the user's information
 * Makes a request on behalf of the user to the GitHub API
 *
 * @returns login, id, avatar_url
 */

export const handler: APIGatewayProxyHandler = async (event) => {
	if (!event.headers['Authorization']) {
		return {
			statusCode: 401,
			body: JSON.stringify({
				message: 'Unauthorized',
			}),
		};
	}

	try {
		const response = await fetch('https://api.github.com/user', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${event.headers['Authorization'].split('Bearer ')[1]}`,
				Accept: 'application/json',
			},
		});

		if (!response.ok) {
			return {
				statusCode: response.status,
				body: JSON.stringify({
					message: `GitHub API request failed with status ${response.status}`,
				}),
			};
		}

		const token = (await response.json()) as {
			login: string;
			id: number;
			avatar_url: string;
		};

		return {
			statusCode: 200,
			body: JSON.stringify({ sub: token.id, ...token }),
		};
	} catch (error) {
		console.error('Error:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: 'Internal Server Error',
			}),
		};
	}
};
