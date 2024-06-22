<<<<<<< HEAD:src/app/Questions/Quiz/layout.tsx
<<<<<<< HEAD
import QuizCountDownTimer from "../../../useClient/QuizCountDownTimer"
import {Button} from "../../../components/shadcn/button/button"; 
=======
import QuizCountDownTimer from "../../../components/useClient/QuizCountDownTimer"
=======
import QuizCountDownTimer from "../../../components/quiz/QuizCountDownTimer"
>>>>>>> 1c7c77e (updated component structure and route direction):src/app/options/quiz/layout.tsx
import {Button} from "../../../components/atomic/button/button"; 
>>>>>>> 6e60b80 (updated folder structure from shadcn to atomoic)
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