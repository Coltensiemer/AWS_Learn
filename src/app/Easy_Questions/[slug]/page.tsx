"use client"
import { EasyQA } from "@/Data"
import { useParams } from "next/navigation"

export default function Page({ params }: { params: { slug: string } }) {

	const {index} = useParams(); 
	
	const questionIndex = parseInt(params.slug + 1);


	return ( 
		<div>
			{EasyQA[questionIndex] && (
				<div key={questionIndex}>
					<h2>{EasyQA[questionIndex].question}</h2>
					{EasyQA[questionIndex].options.map((option, index) => {
						return <p key={index}>{option}</p>;
					})}
				</div>
			)}
		</div>
	)

  }