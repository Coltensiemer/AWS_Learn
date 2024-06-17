'use client';

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { QuestionType } from '@prisma/dataTypes';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
} from '../../shadcn/alert-dialog';
import { Button } from '../../shadcn/button/button';
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../../shadcn/card/card';
import { QuizProgressContext } from '../../../useContext/QuizProgressContext';
import { getSession } from '../../../../actions/cookieActions/cookieActions';

//* Calculate the total score of the quiz
function totalScore(questions: QuestionType[], correct: number[]) {
  const total = questions.length;
  const score = (correct.length / total) * 100;
  return Math.round(score * 100) / 100;
}

//* Calculate the total questions answered and remaining
function totalQuestionsAnswered(
  questions: QuestionType[],
  correct: number[],
  incorrect: number[]
) {
  const total = questions.length;
  const answered = correct.length + incorrect.length;
  const remaining = total - answered;
  const answeredQuestionIds = [...correct, ...incorrect];
  const unansweredQuestions = questions.filter(
    (q) => !answeredQuestionIds.includes(q.id)
  );
  return { total, answered, remaining, unansweredQuestions };
}

//* Displays a countdown timer and automatically submits the quiz when the timer reaches zero
export function QuizAutoSubmit({ handleSubmit }: { handleSubmit: () => Promise<void> }) {
  const [remainingTime, setRemainingTime] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevValue) => Math.max(prevValue - 1, 0));
    }, 1000);

    if (remainingTime === 0) {
      handleSubmit();
    }

    return () => clearInterval(interval);
  }, [remainingTime, router, handleSubmit]);

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <Card className='p-10'>
          <CardHeader>
            <CardTitle>Submit Quiz</CardTitle>
          </CardHeader>
          <CardDescription>
            <p>Your time has ended.</p>
            <p>Submitting quiz in {remainingTime} seconds...</p>
          </CardDescription>
          <CardFooter>
            <Button onClick={handleSubmit}>
              Continue to Results
            </Button>
          </CardFooter>
        </Card>
      </AlertDialogContent>
    </AlertDialog>
  );
}

//* Handles quiz submission and displays an alert dialog for confirmation
export function QuizSubmit({
  questions,
  correct,
  currentIndex,
  incorrect,
  onSubmit,
}: {
  questions: QuestionType[];
  correct: number[];
  incorrect: number[];
  currentIndex: number;
  onSubmit: (data: any) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAutoSubmit, setShowAutoSubmit] = useState(false);
  const { total, answered, remaining, unansweredQuestions } =
    totalQuestionsAnswered(questions, correct, incorrect);
  const score = totalScore(questions, correct);
  const router = useRouter();
  const quizContext = useContext(QuizProgressContext);
  if (!quizContext) return null;

  //* Handle quiz submission and send the results to the server
  const handleSubmit = async () => {
    const cookieID = await getSession();
    const response = await fetch('/api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionCookie_or_email: cookieID,
        quizidused: quizContext.QuizList,
        correctanswers: quizContext.Correct_Answered,
        incorrectanswers: quizContext.Incorrect_Answered,
        score,
        starttimer: quizContext.QuizTime,
        finishedat: 0,
        tags: quizContext.Tags,
        quizselectedoptions: quizContext.optionSelected,
      }),
    });
    if (response.ok) {
      router.push('/Questions/Results');
    } else if (response.status === 401) {
      throw new Error('Network Error');
    }
  };

  //* Automatically submit the quiz when the timer reaches zero
  useEffect(() => {
    if (quizContext.QuizTime === 0) {
      setShowAutoSubmit(true);
    }
  }, [quizContext.QuizTime]);

  return (
    <>
      {quizContext.QuizTime > 0 && (
        <AlertDialog open={isOpen}>
          <AlertDialogContent>
            <Card className='p-10'>
              <CardHeader>
                <CardTitle>Submit Quiz</CardTitle>
              </CardHeader>
              <CardDescription className='flex flex-col-reverse'>
                <p>Are you sure you want to submit the quiz?</p>
                <p className='font-bold'>
                  {answered}/{total} answered.
                </p>
              </CardDescription>
              <CardFooter className='flex justify-evenly m-2'>
                <AlertDialogCancel onClick={() => setIsOpen(!isOpen)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleSubmit}
                >
                  Submit
                </AlertDialogAction>
              </CardFooter>
            </Card>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {currentIndex === questions.length - 1 && quizContext.QuizTime > 1 ? (
        <div className='flex'>
          <Button onClick={() => setIsOpen(true)}>Submit Quiz</Button>
        </div>
      ) : null}
      {showAutoSubmit && <QuizAutoSubmit handleSubmit={handleSubmit} />}
    </>
  );
}
