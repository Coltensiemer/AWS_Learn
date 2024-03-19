import { EasyQA } from '../../Data';
import Link from 'next/link';

export default function EasyQuestions() {
  return (
    <>
      <div>
        <h1>Easy Mode</h1>
        <Link href='Easy_Questions/1'>Start Quiz</Link>
        <p>Options</p>
      </div>
    </>
  );
}
