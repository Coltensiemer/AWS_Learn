'use client';

import { useContext } from 'react';
import { UserContext } from '@root/src/useContext/UserAuthProvider';
import { Separator } from '@atomic/separator';
import { Input } from '@atomic/input/input';
import { Button } from '@atomic/button/button';

export default function UserSettings() {
	const user = useContext(UserContext);
	const profileSettings = [
		{
			title: 'Name',
			description: 'Your viewable name. This name can not be changed',
			input: false,
			value_input: user?.user?.preferred_username,
		},
		{
			title: 'Public Email',
			description: 'Your viewable email. This email is not change able',
			input: false,
			value_input: user?.user?.email,
		},
	];

	return (
		<div className="">
			<h1 className="font-bold">Public Profile</h1>
			<Separator className="w-1/2" />
			{profileSettings.map((item) => (
				<div key={item.title} className="pb-10 space-y-2">
					<h2 className="bold">{item.title}</h2>

					<Input
						value={item.value_input}
						disabled={!item.input}
						className="w-1/3"
					/>

					<h3>{item.description}</h3>
					<Separator className="w-1/2" />
				</div>
			))}
			<Button variant="outline">Save</Button>
		</div>
	);
}
