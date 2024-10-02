import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { fetchAuthSession } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

export async function middleware(request: NextRequest) {
	const session = await fetchAuthSession();
	const user = await getCurrentUser();
	if (session.tokens === null || session.tokens === undefined) {
		console.log('users', user);
		console.log('tokens', session.tokens, session.credentials);
		console.log('No session found');
		return NextResponse.redirect(new URL('/', request.nextUrl));
	} else {
		console.log('tokens', session.tokens, session.credentials);
		console.log('Session found');
	}
}

export const config = {
	matcher: '/dashboard',
};
