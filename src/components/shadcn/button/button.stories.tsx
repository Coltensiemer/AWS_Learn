import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {Button} from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['default', 'sm', 'lg', 'icon'] } },
    variant: { control: { type: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] } },
    AnswerType: { control: { type: 'select', options: ['correct', 'incorrect', 'neutral'] } },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children:"Enter text here",
    label: 'Button',
    backgroundColor: 'black',
    size: 'default',
    variant: 'default',
  },
};

export const Secondary: Story = { 
  args: {
    children:"Enter text here",
    label: 'Button',
    backgroundColor: 'black',
    size: 'default',
    variant: 'secondary',
  },
}; 

export const AnswerType: Story = { 
  args: {
    children:"Enter text here",
    label: 'Button',
    size: 'default',
    AnswerType: 'current',
} 
} 
