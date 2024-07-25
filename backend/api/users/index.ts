
import prisma from "../../../prisma/prisma"
import { Aws } from "aws-cdk-lib";
import { 
  APIGatewayProxyResult,
  APIGatewayEvent,
	Context
} from 'aws-lambda';
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";


const getSecret = async () => {
	try {
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


enum UserRoutes {
  CREATE_USER = 'POST /api/users',
  DELETE_USER = 'DELETE /api/users/{userid}',
  GET_USER = 'GET /api/users/{userid}',
  GET_USERS = 'GET /api/users',
  UPDATE_USER = 'PUT /api/users/{userid}'
}

export const handler = async (event: APIGatewayEvent, context: Context) => { 
	
	await getSecret()
	let response: Promise<APIGatewayProxyResult>;
	
switch(`${event.httpMethod} ${event.resource}`) {
	case UserRoutes.CREATE_USER:
		response = createUser(event);
		break;
		case UserRoutes.DELETE_USER:
		response = deleteUser(event);
		break;
	case UserRoutes.GET_USER:
	response = getUser(event);
	break; 
	case UserRoutes.GET_USERS:
		response = getUsers(event);
		break;
		case UserRoutes.UPDATE_USER:
			response = updateUser(event);
			break;
	default:
		response = Promise.resolve({
			statusCode: 404,
			headers: {...defaultHeaders},
			body: JSON.stringify({message: 'Route Not Found'})
		})
		break;

}
	return response;
}


const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const createUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
	const { username, email, password } = JSON.parse(event.body || '{}' as string);	
	const user = await prisma.user.create({
		data: {
			name:username,
			email: email,
			password: password
		}
	});

	return {
		statusCode: 201,
		headers: {...defaultHeaders},
		body: JSON.stringify({ message: 'POST: Added user', username }),
	}

}

const deleteUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => { 
	const { userid } = event.pathParameters || {};
	const user = await prisma.user.delete({
		where: {
			id: userid as string
		}
	});

	return {
		statusCode: 200,
		headers: {...defaultHeaders},
		body: JSON.stringify({ message: 'DELETE: user', userid }),
	}
}

const getUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => { 
const {userid, email} = event.pathParameters || {};
const user = await prisma.user.findUnique({
  where: {
		id: userid as string,
  },
	})
	return { 
		statusCode: 200,
		headers: {...defaultHeaders},
		body: JSON.stringify({ message: 'GET: user', user }),
	}
}


const getUsers = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
	const users = await prisma.user.findMany();
	return {
		statusCode: 200,
		headers: {...defaultHeaders},
		body: JSON.stringify({ message: 'GET: All users', users }),
	}
}

const updateUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => { 
	const { userid } = event.pathParameters || {};
	const body = JSON.parse(event.body || '{}' as string);
	const user = await prisma.user.update({
		where: {
			id: (userid as string),
		},
		data: {
			...body
		}
	});

	return {
		statusCode: 200,
		headers: {...defaultHeaders},
		body: JSON.stringify({ message: 'PUT: Updated user', user}),
	}
}