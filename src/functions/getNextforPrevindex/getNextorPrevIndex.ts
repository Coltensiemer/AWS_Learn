export interface QuizIndexTrackerProps {
	currentQuestion: number;
	quizList: string[];
	direction: string;
  }

export function getNextorPrevIndex({
	currentQuestion,
	quizList,
	direction,
  }: QuizIndexTrackerProps) {
	
	if (currentQuestion === null) {
	  console.error('Current Index is undefined');
	}

	///params number will enter, needs to find the index of the number in the array
	const quizListIndex = quizList.indexOf(currentQuestion.toString());
  
	if (direction === 'next') {
	  //Needs to take the current index and find the next index in the array
	  const nextIndex = currentQuestion+ 1;
	  const nextQuestion = quizList[nextIndex].toString();
	  return nextQuestion;
	} else if (direction === 'prev') {
	  const prevIndex = currentQuestion - 1;
	  const prevQuestion = quizList[prevIndex].toString();
	  return prevQuestion;
	} else {
	  console.error('Error with next or prev index');
	}
  }