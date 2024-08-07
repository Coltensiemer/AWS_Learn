import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '../../amplify_outputs.json';
import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';

/**
 * Docs: https://docs.amplify.aws/react/build-a-backend/server-side-rendering/
 *
 */
export const { runWithAmplifyServerContext } = createServerRunner({
	config: outputs,
});

/**
 * Check if the user is authenticated
 *
 * @returns {boolean} - True if the user is authenticated
 */

export const isAuthenticated = async () =>
	await runWithAmplifyServerContext({
		nextServerContext: { cookies },
		operation: async (contextSpec) => {
			try {
				const user = await getCurrentUser(contextSpec);
				return !!user;
			} catch (error) {
				return false;
			}
		},
	});
