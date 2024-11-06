import React from 'react';
import { AccountSettings } from '@aws-amplify/ui-react';
import { Button } from '@atomic/button/button';

export const DeleteUserUI = () => {
	const components = {
		DeleteButton: (props: any) => (
			<AccountSettings.DeleteUser.DeleteButton {...props}>
				<Button variant="destructive">Delete Accounts</Button>
			</AccountSettings.DeleteUser.DeleteButton>
		),
	};

	return <AccountSettings.DeleteUser components={components} />;
};

export default DeleteUserUI;
