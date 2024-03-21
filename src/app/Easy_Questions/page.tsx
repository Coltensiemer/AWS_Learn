"use client"
import Link from 'next/link';
import { QuizProgressProvider, QuizProgressContext } from '../context/QuizProgressContext';
import { useContext } from 'react';

export default function EasyQuestions() {
  const  incrementCurrentQuestion  = useContext(QuizProgressContext);


  const StartQuiz = () => { 
    incrementCurrentQuestion
  }   

  return (
    <>
      <QuizProgressProvider>
        <div>
          <h1>Easy Mode</h1>
          <Link href='Easy_Questions/1' onClick={StartQuiz}>Start Quiz</Link>
          <p>Options</p>
        </div>
      </QuizProgressProvider>
    </>
  );
}
