import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import dotenv from 'dotenv';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */

dotenv.config();

// const backend = defineBackend({ auth });

const backend = defineBackend({});

const authStack = backend.createStack('auth');

const userPool = UserPool.fromUserPoolId(
	authStack,
	'user-pool',
	process.env.USER_POOL_ID || ''
);

const userPoolClient = UserPoolClient.fromUserPoolClientId(
	authStack,
	`${authStack.stackName}-user-pool-client`,
	process.env.USER_POOL_CLIENT_ID || ''
);

const IdentityPoolId = process.env.USER_POOL_IDENTITY_ID || '';

backend.addOutput({
	auth: {
		aws_region: authStack.region,
		user_pool_id: userPool.userPoolId,
		user_pool_client_id: userPoolClient.userPoolClientId,
		identity_pool_id: IdentityPoolId,
		user_verification_types: ['email'],
		standard_required_attributes: ['email'],
		unauthenticated_identities_enabled: true,
		password_policy: {
			min_length: 8,
			require_lowercase: true,
			require_numbers: true,
			require_symbols: true,
			require_uppercase: true,
		},
	},
});
