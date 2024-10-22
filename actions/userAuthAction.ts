'use server';

import { fetchUserAttributes } from 'aws-amplify/auth';

export async function userAuthAction() {
	const user = await fetchUserAttributes();
	console.log(user, 'user');
}
