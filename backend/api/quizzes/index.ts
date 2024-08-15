import prisma from '../../../prisma/prisma';
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { QuestionType } from '../../../prisma/dataTypes';

const DefaultHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
};

enum QuestionRoute {
	GET_QUESTIONS = 'GET /api/quizzes',
}

//Test to get all quiz questions

export const handler = async (event: APIGatewayEvent, context: Context) => {
	let response: Promise<APIGatewayProxyResult>;

	switch (`${event.httpMethod} ${event.resource}`) {
		case QuestionRoute.GET_QUESTIONS:
			response = getQuestions(event);
			break;
		default:
			response = Promise.resolve({
				statusCode: 404,
				headers: { ...DefaultHeaders },
				body: JSON.stringify({ message: 'Route Not Found' }),
			});
			break;
	}
	return response;
};

const getQuestions = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { tags, length } = event.queryStringParameters || {
		tags: null,
		length: 65,
	};

	// When no tags are selected, return all questions
	if (!tags) {
		const data: QuestionType[] = await prisma.quiz.findMany({
			include: {
				options: true,
			},
			take: Number(length),
		});
		return {
			statusCode: 200,
			headers: DefaultHeaders,
			body: JSON.stringify(data),
		};
	} else {
		return {
			statusCode: 400,
			headers: DefaultHeaders,
			body: JSON.stringify({ message: 'Route Not Found' }),
		};
	}
};
