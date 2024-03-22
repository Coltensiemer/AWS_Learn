
interface QuizTrackerProps {
	currentQuestion: number | undefined
  }
  
export default function QuizTracker({ currentQuestion }: QuizTrackerProps){
	

    return (
		<div>
			<h1>Question {currentQuestion} of 10</h1>
		</div>
	)
}
