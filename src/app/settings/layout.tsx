import {
	SidebarProvider,
	SidebarTrigger,
} from '@root/src/components/atomic/sidebar/sidebar';
import { UserSettingsSidebar } from '@root/src/components/settings/userSetttings-sidebar';

export default function SettignsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-center border">
			<aside className="md:w-1/4"></aside>
			<SidebarProvider>
				<UserSettingsSidebar />
			</SidebarProvider>
			<section className="ml-2 w-2/3 min-h-screen">{children}</section>
		</div>
	);
}
