'use client';
import React, { Component } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../atomic/card/card';
import { Button } from '../atomic/button/button';
import { Input } from '../atomic/input/input';
import { Label } from '../atomic/label';
import {
	Authenticator,
	useTheme,
	View,
	Image,
	Text,
	Heading,
	useAuthenticator,
	Placeholder,
} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../../amplify_outputs.json';
import { useRouter } from 'next/navigation';
import { signIn, signUp, SignUpInput } from 'aws-amplify/auth';

Amplify.configure(outputs);

const components = {
	SignIn: {
		Header() {
			const { tokens } = useTheme();

			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Sign in to your account
				</Heading>
			);
		},
		Footer() {
			const { toForgotPassword } = useAuthenticator();

			return (
				<View textAlign="center">
					<Button onClick={toForgotPassword} size="sm" variant="link">
						Reset Password
					</Button>
				</View>
			);
		},
	},

	SignUp: {
		Header() {
			const { tokens } = useTheme();

			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Create a new account
				</Heading>
			);
		},
		Footer() {
			const { toSignIn } = useAuthenticator();

			return (
				<View textAlign="center">
					<Button onClick={toSignIn} variant="link" size="sm">
						Back to Sign In
					</Button>
				</View>
			);
		},
	},
	ConfirmSignUp: {
		Header() {
			return <Heading level={3}>Enter Information:</Heading>;
		},
		Footer() {
			return <Text>Footer Information</Text>;
		},
	},
	SetupTotp: {
		Header() {
			const { tokens } = useTheme();
			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Enter Information:
				</Heading>
			);
		},
		Footer() {
			return <Text>Footer Information</Text>;
		},
	},
	ConfirmSignIn: {
		Header() {
			const { tokens } = useTheme();
			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Enter Information:
				</Heading>
			);
		},
	},
	ForgotPassword: {
		Header() {
			const { tokens } = useTheme();
			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Enter Information:
				</Heading>
			);
		},
	},
	ConfirmResetPassword: {
		Header() {
			const { tokens } = useTheme();
			return (
				<Heading
					padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
					level={3}
				>
					Enter Information:
				</Heading>
			);
		},
		Footer() {
			return <Text>Footer Information</Text>;
		},
	},
};

const formFields = {
	signIn: {
		username: {
			placeholder: 'Enter your Email:',
			order: 1,
		},
		password: {
			order: 2,
		},
	},
	signUp: {},
	forceNewPassword: {
		password: {
			placeholder: 'Enter your Password:',
		},
	},
	forgotPassword: {
		username: {
			placeholder: 'Enter your email:',
		},
	},
	confirmResetPassword: {
		confirmation_code: {
			placeholder: 'Enter your Confirmation Code:',
			label: 'New Label',
			isRequired: false,
		},
		confirm_password: {
			placeholder: 'Enter your Password Please:',
		},
	},
	setupTotp: {
		QR: {
			totpIssuer: 'test issuer',
			totpUsername: 'amplify_qr_test_user',
		},
		confirmation_code: {
			label: 'New Label',
			placeholder: 'Enter your Confirmation Code:',
			isRequired: false,
		},
	},
	confirmSignIn: {
		confirmation_code: {
			label: 'New Label',
			placeholder: 'Enter your Confirmation Code:',
			isRequired: false,
		},
	},
};

export default function AuthClient() {
	const router = useRouter();
	return (
		<Authenticator
			components={components}
			formFields={formFields}
			initialState="signUp"
		>
			{({ signOut, user }) => {
				if (user) {
					// Redirect to the dashboard or any desired page after successful sign-up or sign-in
					router.push('/dashboard');
				}

				return (
					<div>
						<h1>Hello, {user ? user.username : 'Guest'}</h1>
						<button onClick={signOut}>Signout</button>
					</div>
				);
			}}
		</Authenticator>
	);
}
