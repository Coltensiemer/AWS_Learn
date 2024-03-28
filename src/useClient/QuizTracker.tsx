

interface QuizTrackerProps {
	CurrentQuestion: number 
	TotalQuestions: number 
  }
  

export default function QuizTracker({CurrentQuestion, TotalQuestions}: QuizTrackerProps) {
	

    return (
		<div>
			<h1>Question {CurrentQuestion} of {TotalQuestions}</h1>
		</div>
	)
}
