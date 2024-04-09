

import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Quiz } from '../../useClient/Quiz';
import QuizTags from '../../useClient/Quiz_Tags';
import QuizOption from '../../useClient/QuizOption';
import { useContext } from 'react';

export default function EasyQuestions() {

  const tags = ['EC2', 'Lambda']
  // const tagsString = tags.join(',')
  return (
    <>
      <div>
        <h1>Easy Mode</h1>
        <Button>
          {/* /// start off with first question in the array */}
          {/* <Link href={`Questions/Quiz`}>Start Quiz</Link> */}
          <Link href={{ pathname: '/Questions/Quiz', query: { tags: tags } }}>Start Quiz</Link>
        </Button>
        <p>Options</p>
      <QuizOption />
      </div>
    </>
  );
}
