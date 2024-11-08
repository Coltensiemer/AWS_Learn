'use client';

import { Switch } from '@atomic/switch';
import { Label } from '@atomic/label';
import { useTheme } from '@root/src/useContext/ThemeProvider';
import { Separator } from '@atomic/separator';

export default function AppearabcePage() {
	const { toggleTheme } = useTheme();
	const handleToggle = () => {
		toggleTheme();
	};

	return (
		<div className="space-y-2">
			<h1>Theme prefereances</h1>
			<h2>Select either a light mode or dark mode theme</h2>
			<Separator className="w-1/2" />
			<div className="flex items-center space-x-2">
				<Switch id="theme-switch" onClick={handleToggle} />
				<Label htmlFor="theme-switch">Toggle theme</Label>
			</div>
		</div>
	);
}
