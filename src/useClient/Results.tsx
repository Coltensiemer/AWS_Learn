'use client';

import React, {useContext} from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { Card, CardContent, CardDescription, CardHeader } from '../components/shadcn/card/card';


/// Need to localscope the QuizContext to get the Correct_Answered, Incorrect_Answered, and QuizList on results page 
/// Or research passing the QuizContext to the Results with params. 
// Pass timer to the results page.

export default function Results() {
  const QuizContext = useContext(QuizProgressContext);
  if(!QuizContext) throw new Error('useClient/Results.tsx must be used within a QuizProgressContextProvider');
  const { Correct_Answered, Incorrect_Answered, QuizList } = QuizContext; 
  return (
<Card>
  <CardHeader>Congrats on the quiz!</CardHeader>
  <CardDescription>Here are your Results.</CardDescription>
  <CardContent>
    <CardHeader>Correct Answers</CardHeader>
    <CardContent>
      {Correct_Answered.map((q) => {
        const question = QuizList.find((question) => question.id === q);
        return <CardDescription key={q}>{question?.question}</CardDescription>;
      })}
    </CardContent>
  </CardContent>
</Card>  );
}
