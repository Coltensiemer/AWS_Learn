/// Used to compare the answer to the correct answer
export function compareAnswer(answer: string[] | string, correct_answer: string[]): boolean {
	// Ensure answer is always an array for uniform comparison
	const answerArray = Array.isArray(answer) ? answer : [answer];

	// Check if lengths are different
	if (answerArray.length !== correct_answer.length) {
			return false;
	}

	// Sort and compare arrays
	return answerArray.sort().join(',') === correct_answer.sort().join(',');
}