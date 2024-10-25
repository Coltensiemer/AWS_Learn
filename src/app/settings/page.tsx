'use client';

import { Separator } from '@atomic/separator';
import { Input } from '@atomic/input/input';
import { Button } from '@atomic/button/button';
import {
	fetchUserAttributes,
	type FetchUserAttributesOutput,
} from 'aws-amplify/auth';
const profileSettings = [
	{
		title: 'Name',
		description: 'Preferred User Name.',
		input: true,
	},
	{
		title: 'Public Email',
		description: 'Your viewable email. This email is not change able',
		input: false,
	},
];

export default function UserSettings() {
	return (
		<div className="">
			<h1 className="font-bold">Public Profile</h1>
			<Separator className="w-full" />
			{profileSettings.map((item) => (
				<div key={item.title} className="pb-10 space-y-2">
					<h2 className="bold">{item.title}</h2>
					{item.input === true && <Input className="w-1/3" />}
					<h3>{item.description}</h3>
					<Separator className="w-full" />
				</div>
			))}
			<Button variant="outline">Save</Button>
		</div>
	);
}
