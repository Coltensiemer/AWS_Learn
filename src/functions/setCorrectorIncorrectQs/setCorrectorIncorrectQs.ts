



export function setCorrectorIncorrectQs(QuizContext: any, questionID: number, isCorrect: boolean) {
	// Ensure that Correct_Answered and Incorrect_Answered are arrays before using .includes()
	const correctAnsweredArray = Array.isArray(QuizContext?.Correct_Answered) ? QuizContext?.Correct_Answered : []
	const incorrectAnsweredArray = Array.isArray(QuizContext?.Incorrect_Answered) ? QuizContext?.Incorrect_Answered : [];
  
	//Arrays are empty 
	// Arrays are logged to the console for debugging purposes
	console.log( incorrectAnsweredArray);

	const isAlreadyCorrect = correctAnsweredArray.includes(questionID);
	const isAlreadyIncorrect = incorrectAnsweredArray.includes(questionID);

	console.log(isAlreadyCorrect, "isAlreadyCorrect")
	console.log(isAlreadyIncorrect, "isAlreadyIncorrect")
  
// fixed the array of Correct_Answered and Incorrect to be an array of numbers
//


	switch (true) {
	  // If the answer is already correct, remove it from the correct array and add it to the incorrect array
	  case isAlreadyCorrect: {
	if (isCorrect) {
		// if the answer is correct, find the index of the questionID in the correctAnsweredArray
	return 
		}
		else {
			const index = correctAnsweredArray.indexOf(questionID);
			console.log(index, "index")
			if (index !== -1) {
		correctAnsweredArray.splice(index, 1);
		console.log(incorrectAnsweredArray, "incorrectAnsweredArray")
		/// this makes the SET_correct come back as undefined... 
		QuizContext.SET_CORRECT_ANSWERED();
		QuizContext.SET_INCORRECT_ANSWERED( questionID);
			}	
		}
		  
		break;
	  }
	  // If the answer is already incorrect, remove it from the incorrect array and add it to the correct array
	  case isAlreadyIncorrect: {
	
		if (!isCorrect) {
			// if the answer is correct, find the index of the questionID in the correctAnsweredArray
		return 
			}
			else {
				const index = correctAnsweredArray.indexOf(questionID);
				console.log(index, "index")
				if (index !== -1) {
			correctAnsweredArray.splice(index, 1);
			console.log(incorrectAnsweredArray, "incorrectAnsweredArray")
			/// this makes the SET_correct come back as undefined... 
			QuizContext.SET_CORRECT_ANSWERED(questionID);
			QuizContext.SET_INCORRECT_ANSWERED();
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
		console.error('Error in the switch statement');
	  }
	}
  }
  

  
  