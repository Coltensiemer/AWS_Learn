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
		  question: "What is the capital of France?",
		  options: ["Paris", "London", "Berlin", "Rome"],
		  correct_answer: "Paris",
		},
		{
		  question: "Who wrote 'Romeo and Juliet'?",
		  options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
		  correct_answer: "William Shakespeare",
		},

	  ],
	  questionIndex: 0, 
	},
  };

  Primary.parameters = { 
	button: { 
		size: 'default',
		variant: 'default',
	} 

  } 