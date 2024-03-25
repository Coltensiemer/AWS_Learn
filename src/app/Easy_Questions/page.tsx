
import Link from 'next/link';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { useContext } from 'react';
import { Button } from '../../components/ui/button';
import { EasyQA } from '../../Data';


export async function generateStaticParams() {
  return EasyQA.map((question) => ({
    params: {
      QuestionID: question.id.toString(),
    }, 
  }
  ));
}


export default function EasyQuestions(params: { QuestionID: string }) {


  return (
    <>
      
        <div>
          <h1>Easy Mode</h1>
          <Button >
            /// start off with first question in the array
          <Link href={`Easy_Questions/`}>
            Start Quiz
          </Link>
          </Button>
          <p>Options</p>
        </div> 
    </>
  );
}
