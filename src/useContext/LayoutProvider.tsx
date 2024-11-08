// LayoutProvider.tsx

'use client';

import React from 'react';
import { QuizProgressProvider } from './QuizProgressContext';
import { AuthProvider } from '../components/auth/AuthProvider';
import { UserProvider } from './UserAuthProvider';
import { ThemeProvider } from './ThemeProvider';

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<AuthProvider>
				<UserProvider>
					<QuizProgressProvider>{children}</QuizProgressProvider>
				</UserProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
