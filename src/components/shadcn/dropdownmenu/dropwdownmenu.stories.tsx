import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdownmenu';
import { Button, buttonVariants } from "../button/button";
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

const meta: Meta = { 
	title: 'Atomic/DropdownMenu',
	component: DropdownMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// Define any argTypes here if needed
	},
	args: { 
		ButtonVarient: 'default',

	}
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: any) => ( 
	<DropdownMenu>
		<DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>List</DropdownMenuLabel>
			<DropdownMenuItem>Item 1</DropdownMenuItem>
			<DropdownMenuItem>Item 2</DropdownMenuItem>
			<DropdownMenuItem>Item 3</DropdownMenuItem>
			</DropdownMenuContent>
	</DropdownMenu>
)
Default.args = {}



export const WithCheckbox: Story = (args: any) => (


	<DropdownMenu>
		<DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>List</DropdownMenuLabel>
			<DropdownMenuCheckboxItem>Item 1</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem>Item 2</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem>Item 3</DropdownMenuCheckboxItem>
		</DropdownMenuContent>	
	</DropdownMenu>
)

WithCheckbox.args = {}


export const WithRadio: Story = (args: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )

WithRadio.args = {}

