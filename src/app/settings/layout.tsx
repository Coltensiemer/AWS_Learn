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
		<div className="flex justify-center border">
			<aside className=" w-1/3"></aside>
			<SidebarProvider>
				<UserSettingsSidebar />
			</SidebarProvider>
			<section className="flex w-full  min-h-screen">{children}</section>
		</div>
	);
}
