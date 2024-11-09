'use client';

import { useTheme } from '../useContext/ThemeProvider';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@atomic/dropdownmenu/dropdownmenu';
import { Button } from '@atomic/button/button';

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme(); // Retrieve theme and toggleTheme from context

	const handleToggle = () => {
		toggleTheme(); // Switch theme on item click
	};

	const themeIcon = theme === 'dark' ? '🌙' : '☀️';
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{themeIcon}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>Theme</DropdownMenuLabel>
					<DropdownMenuItem
						className="space-x-2"
						onClick={handleToggle}
					>
						{theme === 'light' ? '🌙' : '☀️'}
						{theme === 'light' ? 'Dark' : 'Light'}
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
