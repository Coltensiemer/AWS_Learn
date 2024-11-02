'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Separator } from '@root/src/components/atomic/separator';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@atomic/accordion';
import { signOut } from 'aws-amplify/auth';
import { Button } from '@root/src/components/atomic/button/button';
import ResetPasswordForm from '@root/src/components/userSettings/security/ResetPasswordForm';
import { AccordionHeader } from '@radix-ui/react-accordion';

interface AccordionProps {
	name: string;
	header: string | null;
	component: any;
}

export function AccordionDropDown({ name, header, component }: AccordionProps) {
	return (
		<Accordion type="single" collapsible className="w-3/4">
			<AccordionItem value="item-1">
				<AccordionTrigger className="text-lg">{name}</AccordionTrigger>
				<AccordionContent>{component}</AccordionContent>
				<AccordionHeader>{header}</AccordionHeader>
			</AccordionItem>
		</Accordion>
	);
}

export default function Security() {
	const router = useRouter();

	const Security_Settings = [
		{
			name: 'Password',
			description: 'Change your password',
			accordion: true,
			accordionComponent: <ResetPasswordForm />,
		},
		{
			name: 'Logout',
			handler: () => signOut().then(() => router.push('/')),
			description: null,
			accordion: false,
		},
	];

	return (
		<div>
			<h1>Security</h1>
			<Separator />
			<ul>
				{Security_Settings.map((setting) => (
					<div key={setting.name} className="pb-10 space-y-2">
						{setting.accordion ? (
							<AccordionDropDown
								name={setting.name}
								component={setting.accordionComponent}
								header={setting.description}
							/>
						) : (
							<Button onClick={setting.handler}>
								{setting.name}
							</Button>
						)}
					</div>
				))}
			</ul>
		</div>
	);
}
