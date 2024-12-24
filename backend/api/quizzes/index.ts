import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

const DefaultHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
};

enum QuestionRoute {
	GET_QUESTIONS = 'GET /api/quizzes',
}

const { Pool, Client } = require('pg');
const pool = new Pool({
	user: process.env.user,
	host: process.env.host,
	database: process.env.database,
	password: process.env.password,
	port: process.env.port,
});

export const handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	console.log('httpMethod:', event.httpMethod);
	console.log('Resource:', event.resource);
	console.log('Path:', event.path);

	try {
		await pool.connect(); // Make sure you connect to the DB before processing

		switch (`${event.httpMethod} ${event.resource}`) {
			case 'GET /api/quizzes':
				try {
					const res = await pool.query('SELECT * FROM quiz');
					console.log(res);

					return {
						statusCode: 200,
						body: JSON.stringify(res.rows), // Assuming you want to return rows from the query
					};
				} catch (err) {
					console.error('Error querying the database:', err);
					return {
						statusCode: 500,
						body: JSON.stringify({
							message: 'Internal Server Error',
						}),
					};
				}
				break;

			default:
				return {
					statusCode: 404,
					body: JSON.stringify({ message: 'Route Not Found' }),
				};
		}
	} catch (err) {
		console.error('Database connection error:', err);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	} finally {
		await pool.end(); // Ensure the DB connection is properly closed after handling the request
	}
};

// const getQuestions = async (
// 	event: APIGatewayEvent
// ): Promise<APIGatewayProxyResult> => {
// 	const { tags, length } = event.multiValueQueryStringParameters || {
// 		tags: null,
// 		length: null,
// 	};

// 	// When no tags are selected, return all questions
// 	if (!tags) {
// 		const data: QuestionType[] = await prisma.quiz.findMany({
// 			include: {
// 				options: true,
// 			},
// 			take: Number(length),
// 		});
// 		return {
// 			statusCode: 200,
// 			headers: DefaultHeaders,
// 			body: JSON.stringify(data),
// 		};
// 	} else if (tags) {
// 		let tagArray = Array.isArray(tags) ? tags : [tags];
// 		// When multiple tags are selected, filter questions by those tags
// 		const data: QuestionType[] = await prisma.quiz.findMany({
// 			where: {
// 				OR: tagArray.map((tag) => ({ tag })),
// 			},
// 			include: {
// 				options: true,
// 			},
// 		});
// 		return {
// 			statusCode: 200,
// 			headers: DefaultHeaders,
// 			body: JSON.stringify(data),
// 		};
// 	} else {
// 		return {
// 			statusCode: 400,
// 			headers: DefaultHeaders,
// 			body: JSON.stringify({ message: 'Route Not Found' }),
// 		};
// 	}
// };
