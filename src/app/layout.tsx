import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutProvider from '../useContext/LayoutProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { isAuthenticated } from '@amplify/utils/amplifyServerUtils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'AWS Learn',
	description: 'Tool to quiz yourself on AWS services',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LayoutProvider>
					<Header isSignedIn={await isAuthenticated()} />
					{children}
					<Footer />
				</LayoutProvider>
			</body>
		</html>
	);
}
