'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Hub } from 'aws-amplify/utils';
import { Button } from './atomic/button/button';
import { signOut } from 'aws-amplify/auth';
import { UserSettings } from './settings/userSettings';
import ThemeSwitch from './ThemeSwitch';

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
			loggedIn: false,
		},
		{
			href: '/options',
			label: 'Quiz Menu',
		},
		{
			href: '/dashboard',
			label: 'Dashboard',
			loggedIn: true,
		},
	];

	const routes = defaultRoutes.filter(
		(route) => route.loggedIn === authCheck || route.loggedIn === undefined
	);

	return (
		<header className=" z-50 w-full flex px-10 m-2 p-2">
			<h1 className="font-bold flex self-center text-sm md:text-xl mr-auto">
				AWS Quiz
			</h1>
			<nav className="flex items-center justify-between">
				<ul className="flex flex-auto md:space-x-4 justify-center">
					{routes.map((route) => (
						<li key={route.href}>
							<Button variant="link" className="text-sm">
								<Link href={route.href}>{route.label}</Link>
							</Button>
						</li>
					))}
					<li className="flex">
						{authCheck ? (
							<div className="flex justify-center">
								<UserSettings />
							</div>
						) : (
							<Button variant="link" onClick={SignInorSignOut}>
								Sign In
							</Button>
						)}
					</li>
					<li className="flex">
						<ThemeSwitch />
					</li>
				</ul>
			</nav>
		</header>
	);
}
