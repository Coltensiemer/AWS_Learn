import { Button } from '../components/atomic/button/button';
import Link from 'next/link';
import { Progress } from '../components/atomic/progress/progress';
import HomePageNoUser from '../components/home/HomePageNoUser';
import HomePageSignIn from '../components/home/HomePageSignIn';
import React from 'react';
import Hero from '../components/home/hero/Hero';
import LoginOrSignUp from '../components/home/loginorsignup/LoginOrSignUp';

export default function Home() {
	return (
		<div>
			<Hero />
		</div>
	);
}
