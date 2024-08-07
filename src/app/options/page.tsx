'use client';

import Link from 'next/link';
import { Button } from '../../components/atomic/button/button';
import QuizOption from '../../components/options/QuizOption';
import { useContext, useEffect } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { createCookie } from '../../../actions/cookieActions/cookieActions';

export default function EasyQuestions() {
	const QuizContext = useContext(QuizProgressContext);
	if (!QuizContext) {
		throw new Error(
			'QuizProgressContext must be used within a QuizProgressProvider'
		);
	}

	const { Tags, quizLength } = QuizContext;

	useEffect(() => {
		createCookie();
	}, []);

	return (
		<>
			<div className="flex flex-col lg:w-1/2">
				<Button>
					<Link
						href={{
							pathname: '/options/quiz',
							query: { tags: Tags, length: quizLength },
						}}
					>
						Start Quiz
					</Link>
				</Button>
				<QuizOption />
			</div>
		</>
	);
}
