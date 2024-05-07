
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table"
import prisma from "../../lib/prisma"
import Image from "next/image"

async function getQuizList(quizData: {questions: number[]}) { 
		const data = await prisma.quiz.findMany({
		where: { 
			id: { in: quizData.questions }
		},
		include: {options: true}
	})
return data
} 


function SVG(){ 
	return ( 
		<div className="border border-green-500">
		<Image src="/icons/Checkmark.svg" alt="checkmark" width={20} height={20}  />
		</div>
	)
}

export default async function QuizResultsTable({sessionData, sessionID}: any) {
  
  // console.log(sessionData)
	const quizData = sessionData.completedquiz[0]
	const correctanswers = quizData.correctanswers 
	const score = quizData.score
	const questionList = await getQuizList(quizData)	
	


	
  

return (
	<Table>
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Question</TableHead>
      <TableHead>Subject</TableHead>
			<TableHead>Answer</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
		{questionList.map((question: any, index: number) => {
			return (
				<TableRow key={question.id}>
					<TableCell>{index + 1}</TableCell>
					<TableCell>{question.question}</TableCell>
					<TableCell>{correctanswers.includes(question.id) ? <SVG /> : 'Incorrect'}</TableCell>
				</TableRow>
			)
		})}
  </TableBody>
</Table>
)
}
