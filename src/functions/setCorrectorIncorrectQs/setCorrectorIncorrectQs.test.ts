import exp from "constants";
import { setCorrectorIncorrectQs } from "./setCorrectorIncorrectQs";



describe('setCorrectorIncorrectQs function', () => {
	let QuizContext: any;
  
	  // Initialize QuizContext with mock data
	  QuizContext = {
		Correct_Answered: [1432, 1142, 1242],
		Incorrect_Answered: [155, 156, 457],
		SET_CORRECT_ANSWERED: jest.fn(),
		SET_INCORRECT_ANSWERED: jest.fn(),
	  }
  
	it('should check if answer is already in Correct Array, if so removes answer and place into inCorrect Array', () => {
	  const questionID = 1423;

	  // Because the answer is correct, the test fails
	  const isCorrect = true;

  
	  setCorrectorIncorrectQs(QuizContext, questionID, isCorrect);

	  // This expect is failing 
	  expect(QuizContext.Correct_Answered).not.toContain(questionID);
	  expect(QuizContext.SET_INCORRECT_ANSWERED).toHaveBeenCalledWith(questionID);
	 
	});
  
	it('should check if answer is already in incorrect Array, if so removes answer and place into Correct Array ', () => {
	  const questionID = 155;
	  const isCorrect = false;

  
	  setCorrectorIncorrectQs(QuizContext, questionID, isCorrect);
  
	  expect(QuizContext.Incorrect_Answered).not.toContain(questionID);
	  expect(QuizContext.Correct_Answered).not.toContain(questionID);
	  expect(QuizContext.SET_CORRECT_ANSWERED).toHaveBeenCalledWith(questionID);
	
	});
  
	it('should push ID into Correct Array when the answer is correct', () => {
	  const questionID = 22;
	  const isCorrect = true;

  
	  setCorrectorIncorrectQs(QuizContext, questionID, isCorrect);
 
	  expect(QuizContext.Correct_Answered).not.toContain(questionID);
	  expect(QuizContext.Incorrect_Answered).not.toContain(questionID);
	  expect(QuizContext.SET_CORRECT_ANSWERED).toHaveBeenCalledWith(questionID);
	});
  
	it('should push ID into Incorrect Array when the answer is incorrect', () => {
	  const questionID = 1;
	  const isCorrect = false;
  
	  setCorrectorIncorrectQs(QuizContext, questionID, isCorrect);
  
	  expect(QuizContext.Incorrect_Answered).not.toContain(questionID);
	  expect(QuizContext.Correct_Answered).not.toContain(questionID);
	  expect(QuizContext.SET_INCORRECT_ANSWERED).toHaveBeenCalledWith(questionID);
	});
  });