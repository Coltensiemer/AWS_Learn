'use client'
import { QuestionType } from "@prisma/dataTypes";
import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "../components/shadcn/alert-dialog";
import { useState } from "react";
import { Button } from "../components/shadcn/button/button";

function totalScore(questions: QuestionType[], correct: number[]) {
  const total = questions.length;
  const score = (correct.length / total) * 100;
  return Math.round(score * 100) / 100;
}

function totalQuestionsAnswered(
  questions: QuestionType[],
	
  correct: number[],
  incorrect: number[]
) {
  const total = questions.length;
  const answered = correct.length;
  const reminding = total - answered;
  const answeredQuestionIds = [...correct, ...incorrect];
  const unansweredQuestions = questions.filter(
    (q) => !answeredQuestionIds.includes(q.id)
  );
  return { total, answered, reminding, unansweredQuestions };
}








export function QuizSubmit({
  questions,
  correct,
	currentIndex, 
  incorrect,
}: {
  questions: QuestionType[];
  correct: number[];
  incorrect: number[];
	currentIndex: number;
}) {

	const [isOpen, setIsOpen] = useState(false);

  const { total, answered, reminding, unansweredQuestions } =
    totalQuestionsAnswered(questions, correct, incorrect);
  const Score = totalScore(questions, correct);

 const handleSubmit = () => {
    // Submit the quiz
    // creates a post request to the server send data to the server
    // if the server returns a 200 status code, then the quiz is submitted
    // if the server returns a 400 status code, then the quiz is not submitted
    // redirect to loading page
    return (
      <>
        <p>
          `${answered}/${total}`;
        </p>
        <p>`${reminding} questions left`;</p>
        {unansweredQuestions.map((q, index) => (
          <li key={index}>{q.id}</li>
        ))}
      </>
    );
  };

  return (
			<>
    <AlertDialog open={isOpen} >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Submit Quiz</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to submit the quiz?
          {/* IF NOT ALL QUESTIONS ARE ANSWERED */}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
	{currentIndex === questions.length - 1 ? (
	 <div className='flex'>
		 <Button onClick={() => setIsOpen(true)}>Submit Quiz</Button>
	 </div>
 ) : null}
	</>
  

)}
