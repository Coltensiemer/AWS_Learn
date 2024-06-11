import QuizCountDownTimer from "../../../components/useClient/QuizCountDownTimer"
import {Button} from "../../../components/shadcn/button/button"; 
import Link from "next/link";

export default function QuizQuestionLayout({
	children, 
  }: {
	children: React.ReactNode
  }) {
	return (
		<>
		<aside className="flex justify-center items-start h-screen fixed top-0 left-10 pr-4">
		<QuizCountDownTimer />
		<Button className='text-xs' size="sm">
			<Link href="/Questions">
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