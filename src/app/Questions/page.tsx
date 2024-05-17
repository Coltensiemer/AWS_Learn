'use client';

import Link from 'next/link';
import { Button } from '../../components/shadcn/button/button';
import QuizOption from '../../useClient/QuizOption';
import { useContext, useEffect } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { createCookie } from '../../../actions/cookieActions/cookieActions';

export default function EasyQuestions() {
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext) {
    throw new Error(
      'QuizProgressContext must be used within a QuizProgressProvider'
    );
  }

const { Tags } = QuizContext;

  useEffect(() => {
    createCookie();
  }, []);

  return (
    <>
      <div className='flex flex-col lg:w-1/2'>
        <Button>
          <Link href={{ pathname: '/Questions/Quiz', query: { tags: Tags } }}>
            Start Quiz
          </Link>
        </Button>
        <QuizOption />
      </div>
    </>
  );
}
