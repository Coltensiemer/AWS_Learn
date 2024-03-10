import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label"; 

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
            <RadioGroupDemo options={questions[questionIndex].options} />
          </div>
        )}
      </div>
    </>
  );
};

interface RadioGroupDemoProps {
  options: string[];
}

export function RadioGroupDemo({ options }: RadioGroupDemoProps) {
  return (
    <RadioGroup defaultValue="">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={option} id={`r${index}`} />
          <Label htmlFor={`r${index}`}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
