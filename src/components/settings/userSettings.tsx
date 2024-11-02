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

/// Profile pic
// Name
// Security
//Theme
//Logout

const ProfileAccordion = () => {
	const router = useRouter();

	const profile_settings = [
		{
			name: 'View Profile',
			handler: () => router.push('/settings/profile'),
		},
	];

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>
					<h2 className="flex gap-2">
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
					</h2>
				</AccordionTrigger>
				<AccordionContent>
					{profile_settings.map((setting) => (
						<div key={setting.name}>
							<Button
								size="sm"
								variant="link"
								onClick={setting.handler}
							>
								{setting.name}
							</Button>
						</div>
					))}
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
	];
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>
					<h2 className="flex gap-2">
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
					</h2>
				</AccordionTrigger>
				<AccordionContent>
					{secuirty_settings.map((setting) => (
						<div key={setting.name}>
							<Button
								variant="link"
								size="sm"
								onClick={setting.handler}
							>
								{setting.name}
							</Button>
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
