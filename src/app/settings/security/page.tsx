'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@root/src/useContext/UserAuthProvider';
import { useContext, useEffect } from 'react';
import { Separator } from '@root/src/components/atomic/separator';
import {
	signOut,
	resetPassword,
	type ResetPasswordInput,
} from 'aws-amplify/auth';
import { Button } from '@root/src/components/atomic/button/button';
import ResetPasswordForm from '@root/src/components/userSettings/security/resetPassword';

const handleResetPassword = (username: string | undefined) => {
	if (typeof username !== 'string')
		throw new Error('Username is not defined');
	resetPassword({ username: username })
		.then((output) => {
			const { nextStep } = output;
			switch (nextStep.resetPasswordStep) {
				case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
					const codeDeliveryDetails = nextStep.codeDeliveryDetails;
					console.log(
						`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
					);
					// Collect and confirm code here if necessary
					break;
				case 'DONE':
					console.log('Successfully reset password.');
					break;
				default:
					console.log('Unexpected step');
			}
		})
		.catch((error) => {
			console.error('Error resetting password:', error);
		});
};
//Confirmation code was sent to EMAIL
// 014107

export default function Security() {
	const user = useContext(UserContext);
	const router = useRouter();

	const email = user?.user?.email;
	// if (email === undefined) {
	// 	throw new Error('Email is not defined');
	// }
	console.log(user?.user?.email, 'email in security');
	const Security_Settings = [
		{
			name: 'Change Password',
			handler: () => handleResetPassword(email),
		},
		{
			name: 'Logout',
			handler: () => signOut().then(() => router.push('/')),
		},
	];

	return (
		<div>
			<h1>Security</h1>
			<ul>
				{Security_Settings.map((setting) => (
					<div key={setting.name} className="pb-10 space-y-2">
						<h2 key={setting.name} onClick={setting.handler}>
							{setting.name}
						</h2>
						<Separator />
					</div>
				))}
				<ResetPasswordForm />
			</ul>
		</div>
	);
}
