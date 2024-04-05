interface OptionType {
	id: number;
	value: string;
	isCorrect: boolean;
	quizId: number;
  }
  
  // Define the data type for the questions
 export interface QuestionType {
	id: number;
	tag: string;
	question: string;
	correctAnswer: string;
	options: OptionType[];
  }
  
  export interface QuizProps {
	questions: QuestionType[] | null;
  }