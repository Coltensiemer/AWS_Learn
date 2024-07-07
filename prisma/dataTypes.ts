interface OptionType {
  id: number;
  value: string;
  iscorrect: boolean;
  quizId: number;
}

// Define the data type for the questions
export interface QuestionType {
  id: number;
  tag: string;
  sub_tag: string;
  question: string;
  correct_answer: string;
  options: OptionType[];
}

export interface QuizProps {
  questions: QuestionType[] | null;
}


