'use client';
import React, { useState } from 'react';
import { Input } from '@atomic/input/input';
import { Label } from '@atomic/label';
import { Button } from '@atomic/button/button';

export default function ShadcnVerificationForm() {
	const [email, setEmail] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Verification code submitted:', {
			email,
			verificationCode,
			newPassword,
		});
		// Add your verification handling logic here
	};

	return (
		<div className="max-w-md mx-auto p-6 space-y-4">
			<h2 className="text-xl font-semibold">Reset Password</h2>
			<form onSubmit={handleFormSubmit} className="space-y-4">
				<div>
					<Label htmlFor="email" className="block mb-2">
						Email
					</Label>
					<Input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="verificationCode" className="block mb-2">
						Verification Code
					</Label>
					<Input
						type="text"
						id="verificationCode"
						value={verificationCode}
						onChange={(e) => setVerificationCode(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="newPassword" className="block mb-2">
						New Password
					</Label>
					<Input
						type="password"
						id="newPassword"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						required
					/>
				</div>
				<Button type="submit" variant="default" className="w-full">
					Submit
				</Button>
			</form>
		</div>
	);
}
