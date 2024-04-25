import * as React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from './drawer';
import { Button } from '../button/button';
const meta: Meta = {
  title: 'Atomic/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define any argTypes here if needed
  },
  args: {
		buttonTrigger: 'Open Drawer',
		drawerTitle: 'Drawer Title',
		DrawerDescription: 'Drawer Description',
		footer: 'Footer',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = (args: any) => (
  <Drawer {...args}>
		<DrawerTrigger>
			<Button>{args.buttonTrigger}</Button>
			</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{args.drawerTitle}</DrawerTitle>
        <DrawerDescription>{args.DrawerDescription}</DrawerDescription>
      </DrawerHeader>  
    <DrawerFooter>
      {args.footer}
    </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
Primary.args = {
  shouldScaleBackground: true,
};

