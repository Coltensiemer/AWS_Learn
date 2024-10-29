import React from 'react';

export default function SecurityLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
