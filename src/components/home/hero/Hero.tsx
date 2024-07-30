import { Button } from '../../atomic/button/button';
import LoginOrSignUp from '../loginorsignup/LoginOrSignUp';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../atomic/card/card';
import { Label } from '../../atomic/label';
import { Input } from '../../atomic/input/input';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
	return (
		<div>
			<div className="w-full min-h-[100dvh] grid lg:grid-cols-2 gap-10 items-center px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4ca1af] to-[#c4e0e5]">
				<div className="space-y-4 relative">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Learn and pass your exam.
					</h1>
					<div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
						Our platform provides all the tools you need to
						effectively prepare for and test yourself on any AWS
						Cloud Certification exam.
					</div>
					<div className="flex gap-2">
						<Button>
							<Link href="/options" prefetch={false}>
								Start a quiz
							</Link>
						</Button>
					</div>
				</div>
				<LoginOrSignUp />
			</div>
		</div>
	);
}
