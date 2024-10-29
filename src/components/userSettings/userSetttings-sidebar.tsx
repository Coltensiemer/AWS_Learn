import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from '@atomic/sidebar/sidebar';
import Link from 'next/link';

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
		link: '/settings/profile',
	},
	{
		title: 'Security Settings',
		link: '/settings/security',
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
							<Link href={setting.link}>
								<h2>{setting.title}</h2>
							</Link>
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
