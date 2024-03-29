export interface QuizIndexTrackerProps {
  currentQuestion: number;
  quizList: number[];
  direction: string;
}

export function getNextorPrevIndex({
  currentQuestion,
  quizList,
  direction,
}: QuizIndexTrackerProps) {

  if (currentQuestion === 0) {
    const nextQuestion = quizList[1]
    return nextQuestion;
  }
  ///params number will enter, needs to find the index of the number in the array
  const quizListIndex = quizList.indexOf(currentQuestion);

  // If quizListIndex is not found
  if (quizListIndex === -1) {
    throw 'Index out of bounds in quizList';
  }
  // If direction is next and index is found
  else if (direction === 'next') {

    const nextIndex = quizListIndex + 1;

    const nextQuestion = quizList[nextIndex]
    //Returns a number of next Question 
    return nextQuestion;
    //if direction is prev and index is found
  } else if (direction === 'prev') {
    const prevIndex = quizListIndex - 1;

    const prevQuestion = quizList[prevIndex]
    return prevQuestion;

    //if direction is neither next nor prev
  } else if (direction !== 'next' || 'prev') {
    throw 'Error with next or prev index';
  }
}
