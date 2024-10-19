'use client';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@atomic/sheet/sheet';
import { Button } from '@atomic/button/button';
import Image from 'next/image';
import { Separator } from '@atomic/separator';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
/// Profile pic
// Name
// Security
//Theme
//Logout

export const UserSettings = () => {
	const router = useRouter();

	const setting_options = [
		{
			name: 'Profile',
		},
		{
			name: 'Security',
		},
		{
			name: 'Logout',
			handler: () => signOut().then(() => router.push('/')),
		},
	];

	return (
		<Sheet>
			<SheetTrigger>
				<Image
					src="/settings-Icon.svg"
					alt="Settings"
					width={24}
					height={24}
					style={{
						cursor: 'pointer',
					}}
					priority={false}
				/>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Settings</SheetTitle>
				</SheetHeader>
				<SheetDescription>
					Manage your account settings
				</SheetDescription>
				<div className="flex flex-col space-y-5">
					{setting_options.map((option) => (
						<div key={option.name}>
							<Button variant="link" onClick={option.handler}>
								{option.name}
							</Button>
							<Separator className="w-full my-2" />
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
