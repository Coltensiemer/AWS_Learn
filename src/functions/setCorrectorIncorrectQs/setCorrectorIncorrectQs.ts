export function setCorrectorIncorrectQs(
  QuizContext: any,
  questionID: number,
  isCorrect: boolean
) {
  // Ensure that Correct_Answered and Incorrect_Answered are arrays before using .includes()
  const correctAnsweredArray = Array.isArray(QuizContext?.Correct_Answered)
    ? QuizContext?.Correct_Answered
    : [];
  const incorrectAnsweredArray = Array.isArray(QuizContext?.Incorrect_Answered)
    ? QuizContext?.Incorrect_Answered
    : [];

  // Checks if the questionID is already in the correct or incorrect array
  const isAlreadyCorrect = correctAnsweredArray.includes(questionID);
  const isAlreadyIncorrect = incorrectAnsweredArray.includes(questionID);

  switch (true) {
    // If the answer is already correct, remove it from the correct array and add it to the incorrect array
    case isAlreadyCorrect: {
      if (isCorrect) {
        return;
      } else {
        // if the answer is correct, find the index of the questionID in the correctAnsweredArray
        const index = correctAnsweredArray.indexOf(questionID);
        if (index !== -1) {
          correctAnsweredArray.splice(index, 1);
          QuizContext.SET_INCORRECT_ANSWERED(questionID);
        }
      }
      break;
    }
    // If the answer is already incorrect, remove it from the incorrect array and add it to the correct array
    case isAlreadyIncorrect: {
      if (!isCorrect) {
        return;
      } else {
        // if the answer is correct, find the index of the questionID in the correctAnsweredArray
        const index = incorrectAnsweredArray.indexOf(questionID);

        if (index !== -1) {
          incorrectAnsweredArray.splice(index, 1);
          QuizContext.SET_CORRECT_ANSWERED(questionID);
        }
      }

      break;
    }
    // If the answer is correct, add it to the correct array
    case isCorrect: {
      QuizContext?.SET_CORRECT_ANSWERED(questionID);
      break;
    }
    // If the answer is incorrect, add it to the incorrect array
    case !isCorrect: {
      QuizContext?.SET_INCORRECT_ANSWERED(questionID);
      break;
    }
    // If the answer is not found, log an error
    default: {
      console.error('Error in the switch statement determing correct or incorrect answer.');
    }
  }
}
