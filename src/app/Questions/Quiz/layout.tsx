import QuizCountDownTimer from "../../../useClient/QuizCountDownTimer"

export default function QuizQuestionLayout({
	children, 
  }: {
	children: React.ReactNode
  }) {
	return (
		<>
		<aside className="flex justify-center items-start h-screen fixed top-0 left-10 pr-4">
		<QuizCountDownTimer />
		</aside>
	  <section className="flex justify-center items-center min-h-screen">
		{children}
	  </section>
		</>
	)
  }