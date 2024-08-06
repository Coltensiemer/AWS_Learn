'use client';

import { QuizProgressProvider } from './QuizProgressContext';
import { AuthProvider } from '../components/auth/AuthProvider';

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<QuizProgressProvider>{children}</QuizProgressProvider>;
		</AuthProvider>
	);
}
