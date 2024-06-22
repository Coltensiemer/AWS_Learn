import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';
import { count } from 'console';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'Atomic/Progress',
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The value of the progress bar',
    },
    countdown: {
      control: { type: 'boolean' },
      description: 'Whether the progress bar will countdown or not',
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = (args: any) => (
  <div className='w-96'>
    <Progress {...args}></Progress>
  </div>
);

Default.args = {
  value: 50,
  countdown: false,
};
