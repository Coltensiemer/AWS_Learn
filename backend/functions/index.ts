import {ProxyHandler} from 'aws-lambda';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient({
	datasources: { 
		db: {
			url: process.env.DATABASE_URL_LOCAL
		}
	}
})


export const handler: ProxyHandler = async (event, context) => { 

	let users = await prisma.user.findMany()

	return {
		statusCode: 200,
		body: JSON.stringify(users),
		headers: { 
			'content-type': 'application/json'
		}
	}

} 
