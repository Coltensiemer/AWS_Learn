import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { isAuthenticated } from '@root/amplify/utils/amplifyServerUtils';

export async function middleware(request: NextRequest) {
	const session = await isAuthenticated();

	if (session === false || session === undefined) {
		console.log(' No tokens', session);
		console.log('No session found');
		return NextResponse.redirect(new URL('/', request.nextUrl));
	} else {
		console.log('tokens', session);
		console.log('Session found');
	}
}

export const config = {
	matcher: ['/dashboard', '/settings'],
};
