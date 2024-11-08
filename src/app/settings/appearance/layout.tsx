import React from 'react';

export default function AppearanceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
