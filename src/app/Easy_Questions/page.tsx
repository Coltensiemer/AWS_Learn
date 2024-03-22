'use client';
import Link from 'next/link';
import {
  QuizProgressContext,
} from '../useContext/QuizProgressContext';
import { useContext } from 'react';
import { Button } from '../../components/ui/button';

export default function EasyQuestions() {
  const QuizContext = useContext(QuizProgressContext);

  /// this will start the quiz and increment the current question
  

  return (
    <>
      
        <div>
          <h1>Easy Mode</h1>
          <Button >
          <Link href='Easy_Questions/1'>
            Start Quiz
          </Link>
          </Button>
          <p>Options</p>
        </div>
      
    </>
  );
}
