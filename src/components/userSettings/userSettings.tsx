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
import {
	signOut,
	type FetchUserAttributesOutput,
	fetchUserAttributes,
} from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@atomic/accordion';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { handler } from '@root/backend/lib/layers/prisma_layer';

/// Profile pic
// Name
// Security
//Theme
//Logout

const ProfileAccordion = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>
					<div className="flex gap-2">
						<Image
							src="/profile-icon.svg"
							alt="profile"
							width={14}
							height={14}
							style={{
								cursor: 'pointer',
							}}
							priority={false}
						/>
						Profile Settings
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div>
						<Button variant="link">Profile Picture</Button>
						<Separator className="w-full my-2" />
					</div>
					<div>
						<Button variant="link">Name</Button>
						<Separator className="w-full my-2" />
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

const SecurityAccordion = () => {
	const router = useRouter();
	const secuirty_settings = [
		{
			name: 'Change Password',
			handler: () => router.push('/settings'),
		},
		{
			name: 'Delete Account',
			handler: () => router.push('/settings'),
		},
	];
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>
					<div className="flex gap-2">
						<Image
							src="/settings-Icon.svg"
							alt="Settings"
							width={14}
							height={14}
							style={{
								cursor: 'pointer',
							}}
							priority={false}
						/>
						Security Settings
					</div>
				</AccordionTrigger>
				<AccordionContent>
					{secuirty_settings.map((setting) => (
						<div key={setting.name}>
							<Button variant="link" onClick={setting.handler}>
								{setting.name}
							</Button>
							<Separator className="w-full my-2" />
						</div>
					))}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export const UserSettings = () => {
	const router = useRouter();
	const [user, setUser] = useState<FetchUserAttributesOutput | null>(null);

	///Unable to fetch user attributes due to IAM Identity Pool rules
	const getUser = async () => {
		try {
			const currentUser = await fetchUserAttributes();
			setUser(currentUser);
			console.log(currentUser, 'user');
		} catch (error) {
			console.error(error);
			console.log('error with getUser');
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const setting_options = [
		{
			name: 'Logout',
			handler: () => signOut().then(() => router.push('/')),
		},
	];

	return (
		<Sheet>
			<SheetTrigger>
				<Image
					src="/menu-meatballs.svg"
					alt="Menu"
					width={14}
					height={14}
					style={{
						cursor: 'pointer',
					}}
					priority={false}
				/>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						{user?.preferred_username?.toLocaleUpperCase()}
					</SheetTitle>
				</SheetHeader>
				<SheetDescription>
					Manage your account settings
				</SheetDescription>
				<div className="flex flex-col space-y-5">
					<ProfileAccordion />
					<SecurityAccordion />
					{setting_options.map((option) => (
						<div key={option.name}>
							<Separator className="w-full my-2" />
							<div className="flex">
								<Image
									src="/log-out-icon.svg"
									alt="Logout"
									width={14}
									height={14}
									style={{
										cursor: 'pointer',
									}}
									priority={false}
								/>
								<Button variant="link" onClick={option.handler}>
									{option.name}
								</Button>
							</div>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
