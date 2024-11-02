'use client';
import React, { useState } from 'react';
import { AccountSettings } from '@aws-amplify/ui-react';

export const ResetPasswordForm = () => {
	const handleSuccess = () => {
		alert('password is successfully changed!');
	};

	const components = {
		NewPasswordField: (props: any) => (
			<AccountSettings.ChangePassword.NewPasswordField
				{...props}
				label="Enter Your New Password"
			/>
		),
		ConfirmPasswordField: (props: any) => (
			<AccountSettings.ChangePassword.ConfirmPasswordField
				{...props}
				label="Confirm New Password"
			/>
		),
	};

	return (
		<div>
			<AccountSettings.ChangePassword
				components={components}
				onSuccess={handleSuccess}
			/>
		</div>
	);
};

export default ResetPasswordForm;
