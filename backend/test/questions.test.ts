import { prismaMock } from '../singleton';
import { handler } from '../api/quizzes/index';
import { APIGatewayEvent, Context } from 'aws-lambda';

/**
 * Events
 */
import getquestions from '../events/questions/event-get-questions.json';

afterEach(() => {
	prismaMock.mockClear();
});

describe('Quizzes api services', () => {
	const context: Partial<Context> = {
		awsRequestId: 'DummyAWSRequstID',
	};

	it('should get all questions', async () => {
		//Arrange
		const input = getquestions as unknown as APIGatewayEvent;
		const expectedResponse = JSON.parse(input.body || '{}');
		prismaMock.quiz.findMany.mockResolvedValue(expectedResponse);

		//Act
		const result = await handler(input, context as Context);
		const body = JSON.parse(result.body);

		//Assert
		expect(result.statusCode).toBe(200);
		expect(body).toEqual(expectedResponse);
		expect(prismaMock.quiz.findMany).toHaveBeenCalledTimes(1);
	});
});
