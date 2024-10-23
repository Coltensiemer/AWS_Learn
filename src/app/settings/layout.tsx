import {
	SidebarProvider,
	SidebarTrigger,
} from '@root/src/components/atomic/sidebar/sidebar';
import { UserSettingsSidebar } from '@root/src/components/userSettings/userSetttings-sidebar';

export default function SettignsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<UserSettingsSidebar />
			<section>
				<aside>
					<SidebarTrigger />
				</aside>
				<div className="flex justify-center m-4 min-h-screen">
					{children}
				</div>
			</section>
		</SidebarProvider>
	);
}
