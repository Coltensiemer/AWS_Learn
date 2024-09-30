import React from 'react';
import { checkAuth } from '@root/actions/cookieActions/cookieActions';

export default async function Dashboard() {
	checkAuth();

	return <p>Dashboard</p>;
}
