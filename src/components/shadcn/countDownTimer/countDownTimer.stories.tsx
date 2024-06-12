import type { Meta, StoryObj } from '@storybook/react';
import { Counter, CounterHeader, CounterProgress, CounterTimer } from './countDownTimer';

const meta = {
  title: 'Atomic/Counter',
  component: Counter,
  parameters: {
layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    countDownValue: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'The initial value of the countdown',
    },
    countDown: {
      control: 'boolean',
      description: 'Enable or disable the countdown',
    },
    children: {
      control: 'text',
      description: 'The text to display in the counter header',
    },
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    countDownValue: 20,
    countDown: true,
    children: 'Counter Header Text',
  },
  render: (args) => (
    <Counter {...args} />
  ),
};
