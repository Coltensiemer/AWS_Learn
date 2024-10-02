import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
	loginWith: {
		email: true,
		externalProviders: {
			callbackUrls: ['http://localhost:3000/'],
			logoutUrls: ['http://localhost:3000/'],
		},
	},

	/**
	 * Add post confirmation trigger
	 * Everyone gets added to the group defined in the environment variable
	 */
	groups: ['apiGeneral'],
	triggers: {
		postConfirmation: postConfirmation,
	},
	access: (allow) => [
		allow.resource(postConfirmation).to(['addUserToGroup']),
	],
});
