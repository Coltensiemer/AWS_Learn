import React from 'react';

export default function dashBoardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex justify-center items-center min-h-screen">
			{children}
		</section>
	);
}
