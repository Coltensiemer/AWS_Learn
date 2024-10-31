import {
	signOut,
	resetPassword,
	type ResetPasswordInput,
} from 'aws-amplify/auth';

const handleResetPassword = (username: ResetPasswordInput) => {
	if (typeof username !== 'string')
		throw new Error('Username is not defined');
	resetPassword(username)
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

export { handleResetPassword };
