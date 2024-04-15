import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Quiz } from '../useClient/Quiz';


const meta = {
	title: 'Quiz',
	component: Quiz,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
	  // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	  layout: 'fullscreen',
	  nextjs: { 
		appDirectory: true,
	  } 
	},
	args: {

	},
  } satisfies Meta<typeof Quiz>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
	args: {
	  questions: [
		{
			"id": 1,
			"tag": "EC2",
			"question": "What is AWS EC2 primarily used for?",
			"options": [
			  { "id": 1, "quizId": 1, "value": "A. Storing data", "isCorrect": false },
			  { "id": 1, "quizId": 1, "value": "B. Running virtual servers in the cloud", "isCorrect": true },
			  {"id": 1, "quizId": 1,  "value": "C. Managing DNS records", "isCorrect": false },
			  { "id": 1, "quizId": 1, "value": "D. Distributing content globally", "isCorrect": false }
			],
			"correct_answer": "B"
		  },
		  {
			"id": 2,
			"tag": "EC2",
			"question": "Which of the following instance types provides the highest level of compute power in AWS EC2?",
			"options": [
			  {"id": 1, "quizId": 1, "value": "A. T2", "isCorrect": false },
			  { "id": 1, "quizId": 1, "value": "B. M5", "isCorrect": true },
			  {"id": 1, "quizId": 1,  "value": "C. C4", "isCorrect": false },
			  {"id": 1, "quizId": 1,  "value": "D. R3", "isCorrect": false }
			],
			"correct_answer": "B"
		  },

	  ],
	},
  };

  Primary.parameters = { 
	button: { 
		size: 'default',
		variant: 'default',
	} 

  } 