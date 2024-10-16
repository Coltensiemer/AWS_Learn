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

/// Profile pic
// Name
// Security
//Theme
//Logout

export const UserSettings = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Image
					src="/settings-Icon.svg"
					alt="Settings"
					width={25}
					height={24}
					style={{
						cursor: 'pointer',
					}}
					priority={false}
				/>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};
