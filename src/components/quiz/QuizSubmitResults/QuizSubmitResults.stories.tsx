// src/components/QuizAutoSubmit.stories.tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QuizAutoSubmit } from './QuizSubmitResults';
import { action } from '@storybook/addon-actions';



const meta = {
	title: 'Components/QuizAutoSubmit',
	component: QuizAutoSubmit,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	argTypes: {

	},
} satisfies Meta<typeof QuizAutoSubmit>;

export default meta;
type Story = StoryObj<typeof QuizAutoSubmit>;



export const Default: Story = {
	
	render: (args) => (
		<QuizAutoSubmit {...args} />
	),
};
