import { QuestionType } from '../../../prisma/dataTypes'

export const nextQuestion = (questionIndex: number, questions: QuestionType[], direction: string) => {
  
  console.log(questionIndex, 'questionIndex')
  if (questionIndex === -1) {
    return questionIndex; // if the question is not found return the current index
  } else {
    if (direction === 'next') {
      const nextQuestion = questions[questionIndex]
      //Returns a number of next Question 
      return nextQuestion.id
    } else if (direction === 'prev'){
      const prevQuestion = questions[questionIndex - 2]
     return prevQuestion.id
    }
    else if (direction !== 'next' || 'prev') {
      throw 'Error with next or prev index';
    }
  }
};