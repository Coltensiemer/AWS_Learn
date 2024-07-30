import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TimeInput } from './inputTimer'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atomic/TimeInput',
  component: TimeInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    identifier: { control: 'text' },
    inputSize: { control: { type: 'select', options: ['default', 'sm', 'md', 'lg'] } },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/react/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof TimeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    identifier: 'default',
    value: '',
    inputSize: 'default',
  },
};

export const Small: Story = {
  args: {
    identifier: 'small',
    value: '',
    inputSize: 'sm',
  },
};

export const Medium: Story = {
  args: {
    identifier: 'medium',
    value: '',
    inputSize: 'md',
  },
};

export const Large: Story = {
  args: {
    identifier: 'large',
    value: '',
    inputSize: 'lg',
  },
};

export const MinInput: Story = {
  args: {
    identifier: 'min',
    value: '',
    inputSize: 'default',
  },
};

export const SecInput: Story = {
  args: {
    identifier: 'sec',
    value: '',
    inputSize: 'default',
  },
};
