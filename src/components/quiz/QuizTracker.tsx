'use client'

import { useContext } from "react"
import { QuizProgressContext } from "../useContext/QuizProgressContext"


interface QuizTrackerProps {
	currentIndex: number;
  }

export default function QuizTracker({ currentIndex }: QuizTrackerProps) {
const quizContext = useContext(QuizProgressContext)

const TotalQuestions = quizContext?.QuizList.length


// Need to add the current question and total questions to the tracker
// Use context to get the current question and total questions

    return (
		<div>
			<p>{currentIndex + 1}/{TotalQuestions} </p>
		</div>
	)
}
