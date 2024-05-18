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
  const data = sessionData.sessionData[0] 
  const correctanwers = data.correct_answer
  const score = data.score
  const correctanswersNumber = data.correct_answer.length

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
