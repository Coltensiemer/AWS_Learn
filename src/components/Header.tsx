'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Hub } from 'aws-amplify/utils';
import { Button } from './atomic/button/button';
import { signOut } from 'aws-amplify/auth';
import { Sheet, SheetTrigger } from './atomic/sheet/sheet';
import { UserSettings } from './userSettings/userSettings';

export default function Header({ isSignedIn }: { isSignedIn: boolean }) {
	const [authCheck, setAuthCheck] = useState(isSignedIn);
	const router = useRouter();

	/**
	 * https://docs.amplify.aws/gen1/react/build-a-backend/utilities/hub/
	 *
	 */
	useEffect(() => {
		const hubListenerCancel = Hub.listen('auth', (data) => {
			switch (data.payload.event) {
				case 'signedIn':
					setAuthCheck(true);
					break;
				case 'signedOut':
					setAuthCheck(false);
					break;
			}
			console.log('auth event:', data.payload.event);
		});

		return () => hubListenerCancel();
	}, [router]);

	const SignInorSignOut = async () => {
		if (authCheck) {
			await signOut();
			setAuthCheck(true);
			router.push('/');
		} else {
			setAuthCheck(false);
			router.push('/');
		}
	};

	const defaultRoutes = [
		{
			href: '/',
			label: 'Home',
		},
		{
			href: '/dashboard',
			label: 'Dashboard',
			loggedIn: true,
		},
		{
			href: '/settings',
			label: 'Settings',
			loggedIn: true,
		},
	];

	const routes = defaultRoutes.filter(
		(route) => route.loggedIn === authCheck || route.loggedIn === undefined
	);

	return (
		<header className="fixed container flex px-10 m-2">
			<h1 className="font-bold text-xl mr-auto">AWS Quiz</h1>
			<nav className="flex items-center justify-between">
				<ul className="flex space-x-4">
					{routes.map((route) => (
						<li key={route.href}>
							<Button variant="link">
								<Link href={route.href}>{route.label}</Link>
							</Button>
						</li>
					))}
					<li>
						<Button variant="link" onClick={SignInorSignOut}>
							{authCheck ? 'Sign Out' : 'Sign In'}
						</Button>
					</li>
					{/* {authCheck && (
						<li>
							<UserSettings />
						</li>
					)} */}
					<li className="flex justify-center hover:fill-white">
						<UserSettings />
					</li>
				</ul>
			</nav>
		</header>
	);
}
