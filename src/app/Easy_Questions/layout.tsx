export default function QuizLayout({
	children, 
  }: {
	children: React.ReactNode
  }) {
	return (

	  <section className="flex justify-center items-center min-h-screen">
		{children}
	  </section>
	)
  }