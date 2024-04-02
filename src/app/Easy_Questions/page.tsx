"use client"; 

import Link from 'next/link';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { useContext, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { EasyQA } from '../../Data';
import { Quiz } from '../../useClient/Quiz';





export default function EasyQuestions() {


  return (
    <>
      
        <div>
          <h1>Easy Mode</h1>
          <Button >
            {/* /// start off with first question in the array */}
          <Link href={`Easy_Questions/Quiz`}>
            Start Quiz
          </Link>
          </Button>
          <p>Options</p>
        </div> 
    </>
  );
}
