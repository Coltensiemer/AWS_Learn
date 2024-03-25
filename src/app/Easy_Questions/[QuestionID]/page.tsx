import { collectGenerateParams } from 'next/dist/build/utils';
import { EasyQA } from '../../../Data';
import { Quiz } from '../../../useClient/Quiz';
import QuizTracker from '../../../useClient/QuizTracker';


/**
 * Generates static paths based on the data in EasyQA.
 * Each path contains the ID of a question.
 * returns An array of objects, each containing a params object with the question ID.
 */
export async function generateStaticParams() {
  return EasyQA.map((question) => ({
    params: {
      QuestionID: question.id.toString(),
    }, 
  }
  ));
}

/// This could be a static rendering GETSTATICPROPS once data is in a server.
/// Data will be cached at build time and cach to a CDN
export default function Page({ params }: { params: { QuestionID: string } }) {
  const questionID = params.QuestionID;
console.log(params.QuestionID, 'params')
  return (
    <div className='flex flex-col'>
      {/* <QuizTracker /> */}
      <Quiz questions={EasyQA} questionID={questionID} />
    </div>
  );
}


