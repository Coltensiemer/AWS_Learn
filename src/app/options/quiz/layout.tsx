import QuizCountDownTimer from "../../../components/quiz/QuizCountDownTimer"
import {Button} from "../../../components/atomic/button/button"; 
import Link from "next/link";

export default function QuizQuestionLayout({
	children, 
  }: {
	children: React.ReactNode
  }) {
	return (
		<>
		<aside className="flex flex-col justify-start items-start h-screen fixed top-24 left-10 space-y-4">
		<Button className='text-xs' size="sm">
			<Link href="/options">
			Back to Quiz Settings
			</Link>
		</Button>
		</aside>
	  <section className="flex justify-center items-center min-h-screen">
		{children}
	  </section>
		</>
	)
  }