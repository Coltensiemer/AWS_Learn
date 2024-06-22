'use server';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD:src/useClient/Results.tsx
} from '../components/shadcn/card/card';
import { Button } from '../components/shadcn/button/button';
=======
} from '../../components/atomic/card/card';
import { Button } from '../../components/atomic/button/button';
>>>>>>> 6e60b80 (updated folder structure from shadcn to atomoic):src/components/useClient/Results.tsx
import Link from 'next/link';





export default async function Results(sessionData: any) {
  const data = sessionData.sessionData.completedquiz[0]
  
  const correctanswersNumber = data.correctanswers.length;
  const totalquestions = data.quizidused.length; 
  const tags = data.tags
  const score = data.score

  return (
    <Card>
      <CardHeader>Congrats on the quiz!</CardHeader>
      <CardDescription>Here are your Results.</CardDescription>
      <CardContent className='flex flex-col gap-2 justify-center'>
        {/* <p>{correctanswersNumber} Correct Answers</p> */}
        <p>Score: {score}%</p>
        {tags.length > 0 && <p>Tags used: {tags}</p>}
        <p>{correctanswersNumber}/{totalquestions} Answered correctly</p>
        <Button>
          <Link href="/Questions">Start a new quiz quiz</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
