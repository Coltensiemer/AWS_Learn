import * as React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
import { Button } from "../button/button";

const meta: Meta = {
  title: 'Atomic/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define any argTypes here if needed
  },
  args: {
		title: 'Card Title',
		description: 'This is a card description',
		content: 'Card Content',
		button: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: any) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>{args.title}</CardTitle>
      <CardDescription>{args.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{args.content}</p>
    </CardContent>
    <CardFooter>
      <Button variant="default">{args.button}</Button>
    </CardFooter>
  </Card>
);
Default.args = {

};

