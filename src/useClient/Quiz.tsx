"use Client"

interface QuestionType {
  question: string;
  options: string[];
  correct_answer: string;
}

interface QuizProps {
  questions: QuestionType[];
  questionIndex: number;
}

export const Quiz: React.FC<QuizProps> = ({ questions, questionIndex }) => {
  return (
    <>
      <div>
        {questions[questionIndex] && (
          <div key={questionIndex}>
            <h2>{questions[questionIndex].question}</h2>
            {questions[questionIndex].options.map((option, index) => {
              return <p key={index}>{option}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};
