'use client';
import { QuestionType } from '@prisma/dataTypes';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '../components/shadcn/alert-dialog';
import { useState, useContext } from 'react';
import { Button } from '../components/shadcn/button/button';
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../components/shadcn/card/card';
// import { useRouter } from 'next/navigation';
import { PostBody } from '../app/api/quiz/route';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { getSession } from '../../lib';
import { generateCookieID } from '../functions/generateSessionID/generateCookieID';

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
  const answered = correct.length + incorrect.length;
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
  // const router = useRouter();
  const { total, answered, reminding, unansweredQuestions } =
    totalQuestionsAnswered(questions, correct, incorrect);
  const Score = totalScore(questions, correct);
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext) return null;

  const handleSubmit = async () => {
    const cookieID = await getSession();
    const cookie = generateCookieID(); 
    // Here we are sending the quiz results to the server
    fetch('/api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "sessionCookie_or_email": cookieID,
        "quizidused": QuizContext.QuizList, 
        "correctanswers": QuizContext.Correct_Answered,
        "incorrectanswers": QuizContext.Incorrect_Answered,
        "score": Score,
        "starttimer": QuizContext.QuizTime,
        "finishedat": 0,
        "tags": QuizContext.Tags,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log('Quiz submitted successfully');
        // router.push('/quiz/results');
      } else if (res.status === 401) {
        throw new Error('Network Error');
      }
    });
    // redirect to loading page
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <Card className='p-10'>
            <CardHeader>
              <CardTitle>Submit Quiz </CardTitle>
            </CardHeader>
            <CardDescription className='flex flex-col-reverse'>
              <p>Are you sure you want to submit the quiz?</p>
              <p className='font-bold'>
                {answered}/{total} answered.
              </p>
            </CardDescription>
            <CardFooter className='flex justify-evenly m-2'>
              <AlertDialogCancel
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmit}>
                Submit
              </AlertDialogAction>
            </CardFooter>
          </Card>
        </AlertDialogContent>
      </AlertDialog>
      {currentIndex === questions.length - 1 ? (
        <div className='flex'>
          <Button onClick={() => setIsOpen(true)}>Submit Quiz</Button>
        </div>
      ) : null}
    </>
  );
}
