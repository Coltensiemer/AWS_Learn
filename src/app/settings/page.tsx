import { Separator } from '@atomic/separator';
import { Input } from '@atomic/input/input';
const profileSettings = [
	{
		title: 'Name',
		description: 'Preferred User Name.',
		input: true,
		toggle: false,
	},
	{
		title: 'Public Email',
		description: 'Your viewable email. This email is not change able',
		input: false,
	},
];

export default function UserSettings() {
	return (
		<div className="border border-red-400">
			<h1>Public Profile</h1>
			<Separator className="w-full" />
			{profileSettings.map((item) => (
				<div>
					<h2 className="bold">{item.title}</h2>
					<Input />
					<h3>{item.description}</h3>
				</div>
			))}
		</div>
	);
}
