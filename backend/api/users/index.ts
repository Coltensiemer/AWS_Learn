import {
	DynamoDBClient,
	PutItemCommand,
	DeleteItemCommand,
	GetItemCommand,
	ScanCommand,
	UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';

import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';

const dynamoDBClient = new DynamoDBClient({ region: 'us-east-2' });

const USERS_TABLE = '';

enum UserRoutes {
	CREATE_USER = 'POST /api/users',
	DELETE_USER = 'DELETE /api/users/{userid}',
	GET_USER = 'GET /api/users/{userid}',
	GET_USERS = 'GET /api/users',
	UPDATE_USER = 'PUT /api/users/{userid}',
}

const defaultHeaders = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

export const handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	let response: APIGatewayProxyResult;

	switch (`${event.httpMethod} ${event.resource}`) {
		case UserRoutes.CREATE_USER:
			response = await createUser(event);
			break;
		case UserRoutes.DELETE_USER:
			response = await deleteUser(event);
			break;
		case UserRoutes.GET_USER:
			response = await getUser(event);
			break;
		case UserRoutes.GET_USERS:
			response = await getUsers();
			break;
		case UserRoutes.UPDATE_USER:
			response = await updateUser(event);
			break;
		default:
			response = {
				statusCode: 404,
				headers: { ...defaultHeaders },
				body: JSON.stringify({ message: 'Route Not Found' }),
			};
			break;
	}
	return response;
};

// Create User
const createUser = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { username, email } = JSON.parse(event.body || '{}');
	const params = {
		TableName: USERS_TABLE,
		Item: {
			id: { S: Date.now().toString() },
			username: { S: username },
			email: { S: email },
		},
	};

	await dynamoDBClient.send(new PutItemCommand(params));

	return {
		statusCode: 201,
		headers: { ...defaultHeaders },
		body: JSON.stringify({
			message: 'User created successfully',
			username,
		}),
	};
};

// Delete User
const deleteUser = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { userid } = event.pathParameters || {};

	// Ensure `userid` is not undefined
	if (!userid) {
		return {
			statusCode: 400,
			headers: defaultHeaders,
			body: JSON.stringify({ message: 'userid is required' }),
		};
	}

	const params = {
		TableName: USERS_TABLE,
		Key: {
			id: { S: userid },
		},
	};

	await dynamoDBClient.send(new DeleteItemCommand(params));

	return {
		statusCode: 200,
		headers: { ...defaultHeaders },
		body: JSON.stringify({ message: 'User deleted successfully', userid }),
	};
};

// Get User
const getUser = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { userid } = event.pathParameters || {};

	// Ensure `userid` is not undefined
	if (!userid) {
		return {
			statusCode: 400,
			headers: defaultHeaders,
			body: JSON.stringify({ message: 'userid is required' }),
		};
	}

	const params = {
		TableName: USERS_TABLE,
		Key: {
			id: { S: userid },
		},
	};

	const result = await dynamoDBClient.send(new GetItemCommand(params));
	return {
		statusCode: 200,
		headers: { ...defaultHeaders },
		body: JSON.stringify({
			message: 'User retrieved successfully',
			user: result.Item,
		}),
	};
};

// Get All Users
const getUsers = async (): Promise<APIGatewayProxyResult> => {
	const params = {
		TableName: USERS_TABLE,
	};

	const result = await dynamoDBClient.send(new ScanCommand(params));
	const users = result.Items || [];

	return {
		statusCode: 200,
		headers: { ...defaultHeaders },
		body: JSON.stringify({
			message: 'All users retrieved successfully',
			users,
		}),
	};
};

// Update User
const updateUser = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	return {
		statusCode: 200,
		headers: { ...defaultHeaders },
		body: JSON.stringify({ message: 'User updated successfully' }),
	};

	// const { userid } = event.pathParameters || {};

	// const body = JSON.parse(event.body || '{}');

	// const updateExpression = Object.keys(body)
	// 	.map((key, index) => `#field${index} = :value${index}`)
	// 	.join(', ');

	// const expressionAttributeNames = Object.keys(body).reduce(
	// 	(acc, key, index) => {
	// 		acc[`#field${index}`] = key;
	// 		return acc;
	// 	},
	// 	{}
	// );

	// const expressionAttributeValues = Object.keys(body).reduce(
	// 	(acc, key, index) => {
	// 		acc[`:value${index}`] = { S: body[key] };
	// 		return acc;
	// 	},
	// 	{}
	// );

	// const params = {
	// 	TableName: USERS_TABLE,
	// 	Key: {
	// 		id: { S: userid },
	// 	},
	// 	UpdateExpression: `SET ${updateExpression}`,
	// 	ExpressionAttributeNames: expressionAttributeNames,
	// 	ExpressionAttributeValues: expressionAttributeValues,
	// };

	// await dynamoDBClient.send(new UpdateItemCommand(params));

	// return {
	// 	statusCode: 200,
	// 	headers: { ...defaultHeaders },
	// 	body: JSON.stringify({ message: 'User updated successfully' }),
	// };
};
