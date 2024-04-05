import Link from 'next/link';

import { Button } from '../../components/ui/button';
import { Quiz } from '../../useClient/Quiz';
import QuizTags from '../../useClient/Quiz_Tags';

export default function EasyQuestions() {
  return (
    <>
      <div>
        <h1>Easy Mode</h1>
        <Button>
          {/* /// start off with first question in the array */}
          <Link href={`Questions/Quiz`}>Start Quiz</Link>
        </Button>
        <p>Options</p>
        <QuizTags />
      </div>
    </>
  );
}
