import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import prisma from '../../../prisma/prisma';
import fs from 'fs'; // File system module

const DefaultHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST',
};

enum SeedDataRoute {
	SEED_EVENT = 'POST /api/seed-data',
}

export const handler = async (event: APIGatewayEvent, context: Context) => {
	let response: Promise<APIGatewayProxyResult>;

	switch (`${event.httpMethod} ${event.resource}`) {
		case SeedDataRoute.SEED_EVENT:
			response = SEED_FUNCTION(event);
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

/// This creates a user with the email for seed data
const SEED_FUNCTION = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	try {
		//Delete all users to clear the database
		await prisma.user.deleteMany();
		await prisma.fakeuser.deleteMany();
		await prisma.completedquiz.deleteMany();
		await prisma.quizprogress.deleteMany();

		const user = await prisma.user.upsert({
			where: { email: 'alice@prisma.io' },
			update: {},
			create: {
				email: 'alice@prisma.io',
				name: 'Alice',
				password: 'password',
				completedquiz: {
					create: {
						quizidused: [19, 20, 21, 22, 23, 24, 25, 26, 27],
						correctanswers: [19, 21, 23],
						incorrectanswers: [24, 25, 26],
						tags: ['EC2', 'Lambda'],
						score: 50,
						starttimer: 120,
						finishedat: 20,
						quizDate: new Date(),
						quizselectedoptions: [
							{ id: 19, value: 'A' },
							{ id: 20, value: 'B' },
							{ id: 21, value: 'C' },
							{ id: 22, value: 'D' },
							{ id: 23, value: 'A' },
							{ id: 24, value: 'B' },
						],
					},
				},
				quizprogress: {
					create: {
						quizidused: [1, 2, 3, 4, 5, 6],
						correctanswers: [1, 3],
						incorrectanswers: [2, 4],
						currentquestion: 5,
						quiztimer: 42,
						tags: ['EC2', 'Lambda'],
					},
				},
			},
		});

		//Delete all quizzes, options and questions to clear the database
		await prisma.option.deleteMany();
		await prisma.quiz.deleteMany();

		//! Path may cause an error
		const jsonData = fs.readFileSync('src/Data.ts', 'utf8');
		const data = JSON.parse(jsonData);

		const quizzes = []; // Array to store all quizzes
		for (const item of data) {
			await prisma.quiz.create({
				data: {
					tag: item.tag,
					sub_tag: item.sub_tag,
					question: item.question,
					correct_answer: item.correct_answer,
					options: {
						create: item.options.map((option: any) => ({
							value: option.value,
							iscorrect: option.isCorrect, // Set isCorrect based on the value field of each option
						})),
					},
				},
			});
			quizzes.push(item);
		}

		return {
			statusCode: 200,
			headers: DefaultHeaders,
			body: JSON.stringify({
				message: 'Seed data created successfully',
				user,
				quizzes,
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			headers: DefaultHeaders,
			body: JSON.stringify({
				message: 'Error creating seed data',
				error,
			}),
		};
	}
};

// SEED_FUNCTION()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (e) => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});
