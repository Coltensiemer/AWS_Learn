"use client"; 

import Link from 'next/link';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { useContext, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { EasyQA } from '../../Data';





export default function EasyQuestions(params: { QuestionID: string }) {

  const  QuizContext  = useContext(QuizProgressContext);

  ///Creating a quiz list of IDs to be used in the QuizTracker component
  //Once Quize are in Database, this will be used to fetch the questions base off of settings
  const QuizListIDs = EasyQA.map((question) => question.id.toString());
 

useEffect(() => {
  QuizContext?.SET_QUIZ_LIST(QuizListIDs);
}, []);

  

  return (
    <>
      
        <div>
          <h1>Easy Mode</h1>
          <Button >
            {/* /// start off with first question in the array */}
          <Link href={`Easy_Questions/${QuizListIDs[0]}`}>
            Start Quiz
          </Link>
          </Button>
          <p>Options</p>
        </div> 
    </>
  );
}
