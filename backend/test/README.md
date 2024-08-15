TEST FOlDER README

Table of Contents

1. OverView (#overview)
2. Running Test (#runningtest)

This is an explaination file for the layout of test - including mock explation - and how to run test.

## Running Test

Make sure directory is in 'backend'

```
npm install
npm run test

```

## Mocking Prisma

The mock Prisma client is used to simulate database interactions without affecting the actual database.

Mock Prisma Singleton is located at root of 'backend'.

## Event Driven Architure

Simulate AWS API Gateway events to test Lambda functions.

Example

```
{
	"resource": "/api/users",
	"path": "/index",
	"httpMethod": "GET",
	"headers": null,
	"multiValueHeaders": null,
	"queryStringParameters": null,
	"multiValueQueryStringParameters": null,
	"pathParameters": {},
	"stageVariables": null,
	"requestContext": {
		"requestId": "5c2db7f0-a714-4ca1-84ad-43dgasga26"
	},
	"body": null,
	"isBase64Encoded": false
}

```
