import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from '@atomic/sidebar/sidebar';

import { Separator } from '@atomic/separator';

// ACCOUNT SETTINGS
// Display username
// Display email
// Display avatar

// SECURITY SETTINGS
// Change password
// Two-factor authentication?
// Delete account

const settings = [
	{
		title: 'Profile Settings',
	},
];

//

export function UserSettingsSidebar() {
	return (
		<Sidebar collapsible="none">
			<SidebarHeader>
				<h1>Settings</h1>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					{settings.map((setting, index) => (
						<div key={index}>
							<h2>{setting.title}</h2>
							<Separator className="w-full" />
						</div>
					))}
				</SidebarGroup>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
