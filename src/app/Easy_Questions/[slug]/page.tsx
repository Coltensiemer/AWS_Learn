'use client';
import { EasyQA } from '../../../Data';
import { Quiz } from '../../../useClient/Quiz';
import QuizTracker from '../../../useClient/QuizTracker';
import { QuizProgressContext, QuizProgressProvider } from '../../useContext/QuizProgressContext';
import { useContext } from 'react';

/// This could be a static rendering GETSTATICPROPS once data is in a server.
/// Data will be cached at build time and cach to a CDN
export default function Page({ params }: { params: { slug: string } }) {

  const QuizContext = useContext(QuizProgressContext);
  const questionIndex = parseInt(params.slug + 1);

  

  return (
    
    <div className='flex flex-col'> 
    <QuizTracker currentQuestion={QuizContext?.currentQuestion} />
    <Quiz questions={EasyQA} questionIndex={questionIndex} />
    </div>

  );
}
