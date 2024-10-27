'use client';

import { QuizProgressProvider } from './QuizProgressContext';
import { AuthProvider } from '../components/auth/AuthProvider';
import { UserProvider } from './UserAuthProvider';

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<UserProvider>
				<QuizProgressProvider>{children}</QuizProgressProvider>;
			</UserProvider>
		</AuthProvider>
	);
}
