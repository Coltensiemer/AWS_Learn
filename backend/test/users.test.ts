import { prismaMock } from '../singleton';
import { handler } from '../api/users/index';
import { APIGatewayEvent, Context } from 'aws-lambda';
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { mockClient } from "aws-sdk-client-mock";
import * as rds from 'aws-cdk-lib/aws-rds';

import createUserEvent from '../events/event-post-user.json';
import getAllUsersEvent from '../events/event-get-users.json';
import deleteUserbyIDEvent from '../events/event-delete-users-by-id.json';
import getUserbyIDEvent from '../events/event-get-user-by-id.json';
////////////
///Prisma Unit Docs:https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing
// AWS CDK Unit Doc: https://docs.aws.amazon.com/cdk/v2/guide/testing.html
////////////


const secretMock = mockClient(SecretsManagerClient);


afterEach(() => {
	secretMock.reset();
	prismaMock.mockClear();
})

describe('Users api services', () => {
const orignalEnv = process.env;

// Using Lambda Context object to retrieve Node.js runtime information
// Documentation: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
const context : Partial<Context> = {
	awsRequestId: "DummyAWSRequstID",
}



//! create a test for secertsmanager 

// it('mocks SecretsManagerClient', async () => {
// 	const sm = new SecretsManagerClient({});

// 	const smMock = mockClient(sm);
// 	smMock.on(GetSecretValueCommand)
// 			.resolves({
// 					SecretString: JSON.stringify({my_secret_key: 'my_secret_value'}),
// 			});

// 	const response = await sm.send(new GetSecretValueCommand({
// 			SecretId: 'qq',
// 	}));

// 	expect(response.SecretString).toBe('{"my_secret_key":"my_secret_value"}');
// });



it('should create new user', async () => {

	//Arrange
	const input = (createUserEvent as unknown) as APIGatewayEvent;
	const expectedResponse = JSON.parse(input.body || '{}');
	prismaMock.user.create.mockResolvedValue(expectedResponse);

	//Act
	const result = await handler(input, context as Context);
	const body = JSON.parse(result.body);

	///Assert
	expect(result.statusCode).toBe(201);
	expect(body).toEqual({ message: 'POST: Added user', username: expectedResponse.username });
	expect(prismaMock.user.create).toHaveBeenCalledTimes(1);
})


it ('should get all users', async () => {
	//Arange
	const input = (getAllUsersEvent as unknown) as APIGatewayEvent;
	const expectedResponse = [ 
		{ id: 1, username: 'test1', email: 'test1@gmail.com' },
		{ id: 2, username: 'test2', email: 'test2@gmail.com' },	
	]
	prismaMock.user.findMany.mockResolvedValue(expectedResponse);

	//Act
	const results = await handler(input, context as Context);
	const body = JSON.parse(results.body);

	//Assert
	expect(results.statusCode).toBe(200);
	expect(body).toEqual({ message: 'GET: All users', users: expectedResponse });
	expect(prismaMock.user.findMany).toHaveBeenCalledTimes(1);
})


it('should Delete user by id', async () => {
	//Arrange
	const input = ( deleteUserbyIDEvent as unknown) as APIGatewayEvent;
	prismaMock.user.delete.mockResolvedValue({})

	//Act
	const result = await handler(input, context as Context);
	const body = JSON.parse(result.body);

	//Assert
	expect(body).toEqual({ message: 'DELETE: user', userid: '123' });
	expect(prismaMock.user.delete).toHaveBeenCalledTimes(1);
	expect(result.statusCode).toBe(200);
})


it('should get user by id', async () => {
	//Arrange
	const input = ( getUserbyIDEvent as unknown) as APIGatewayEvent;
	const expectedResponse = { id: "123" }
	prismaMock.user.findUnique.mockResolvedValue({expectedResponse})


	//Act
	const result = await handler(input, context as Context);
	const body = JSON.parse(result.body);

	//Assert
expect(body).toEqual({ message: 'GET: user', user: {expectedResponse} });
	expect(result.statusCode).toBe(200);
	expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
})


})
















// jest.mock("@aws-sdk/client-secrets-manager", () => {
//   const SecretsManagerClient = jest.fn();
//   const send = jest.fn();
//   return { SecretsManagerClient, GetSecretValueCommand, send };
// });

// const mockSecretManagerClient = new SecretsManagerClient();
// const mockSend = mockSecretManagerClient.send as jest.Mock;

// test('should create new user', async () => {
//   const input = createUserEvent;
//   const expectedResponse = JSON.parse(input.body || '{}');

//   // Mock the Secrets Manager response
//   mockSend.mockResolvedValue({
//     SecretString: JSON.stringify({ username: "mockUser", password: "mockPassword" })
//   });

//   // Mock the Prisma client response
//   prismaMock.user.create.mockResolvedValue(expectedResponse);

//   const event: APIGatewayEvent = {
//     ...input,
//     body: JSON.stringify(expectedResponse)
//   } as APIGatewayEvent;

//   const result = await handler(event);

//   expect(result.statusCode).toBe(201);
//   expect(JSON.parse(result.body)).toEqual({ message: 'POST: Added user', username: expectedResponse.username });
// });
