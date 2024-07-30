import { nextQuestion } from './nextQuestion';
import { QuestionType } from '../../../prisma/dataTypes';


describe('nextQuestion function', () => {
  const questions: QuestionType[] = [
    { id: 1, tag: 'tag1', sub_tag: "tag", question: 'question1', correct_answer: 'correct1', options: []},
    { id: 2, tag: 'tag2', sub_tag: "tag", question: 'question2', correct_answer: 'correct2', options: []},
    { id: 3, tag: 'tag3', sub_tag: "tag", question: 'question3', correct_answer: 'correct3', options: []},
    { id: 4, tag: 'tag4', sub_tag: "tag", question: 'question4', correct_answer: 'correct4', options: []},
    
  ];


  it('should return the next question when direction is "next"', () => {
    const currentQuestionID = 1; // Assuming the current question ID is 1
    const expectedResult = 2;

    const result = nextQuestion(currentQuestionID, questions, 'next');

    expect(result).toEqual(expectedResult);
  });

  it('should return the previous question when direction is "prev"', () => {
      const currentQuestionID = 2; // Assuming the current question ID is 2
      const expectedResult = 1
  
      const result = nextQuestion(currentQuestionID, questions, 'prev');
  
      expect(result).toEqual(expectedResult);
    });

  it('should return -1 if the question is not found', () => {
    const result = nextQuestion(100, questions, 'next'); // Assuming question ID 100 doesn't exist
    expect(result).toEqual(-1);
  });

  it('should throw an error if direction is neither "next" nor "prev"', () => {
    expect(() => {
      nextQuestion(1, questions, 'invalid');
    }).toThrow('Error with next or prev index');
  });
});
