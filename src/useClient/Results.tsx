'use server';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '../components/shadcn/card/card';
import { Button } from '../components/shadcn/button/button';
import Link from 'next/link';





export default async function Results(sessionData: any) {
  const { sessionDataResults } = sessionData;
  const quizData = sessionData.sessionData.completedquiz[0];
  const correctanwers = quizData.correctanswers;
  const score = quizData.score;
  const correctanswersNumber = correctanwers.length;

  return (
    <Card>
      <CardHeader>Congrats on the quiz!</CardHeader>
      <CardDescription>Here are your Results.</CardDescription>
      <CardContent className='flex flex-col gap-2 justify-center'>
        <p>{correctanswersNumber} Correct Answers</p>
        <p>Score: {score}%</p>
        <Button>
          <Link href="/Questions">Start a new quiz quiz</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
