'use client';
import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../atomic/card/card';
import { Button } from '../../atomic/button/button';
import { Input } from '../../atomic/input/input';
import { Label } from '../../atomic/label';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { signUp, SignUpInput } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../../../amplify_outputs.json';
import { Sign } from 'crypto';

Amplify.configure(outputs);

const components = {
	SignIn: {},
};

export default function LoginOrSignUp() {
	return (
		<div>
			<Authenticator>
				{({ signOut, user }) => (
					<Card>
						<h1>Hello,</h1>
						<button onClick={signOut}>Signout</button>
					</Card>
				)}
			</Authenticator>

			{/* <Card className="w-full max-w-md mx-auto bg-white">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold">
						Sign in
					</CardTitle>
					<CardDescription>
						Enter your email and password to access your account.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" />
					</div>
					<Button variant="default">Sign In</Button>
					<Button variant="link">Sign Up</Button>
				</CardContent>
				<CardFooter className="flex flex-col">
					<p className="text-sm text-gray-500">or</p>
					<Button className="w-full" variant="default">
						Github
					</Button>
				</CardFooter>
			</Card> */}
		</div>
	);
}