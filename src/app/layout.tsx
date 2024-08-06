import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutProvider from '../useContext/LayoutProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '@aws-amplify/ui-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'AWS Learn',
	description: 'Tool to quiz yourself on AWS services',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <ThemeProvider>
		<html lang="en" className="bg-background">
			<body className={inter.className}>
				<Header />
				<LayoutProvider>{children}</LayoutProvider>
				<Footer />
			</body>
		</html>
		// </ThemeProvider>
	);
}
