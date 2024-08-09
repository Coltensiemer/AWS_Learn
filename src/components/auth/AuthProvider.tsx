'use client';

import React, { Children, Component } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../../amplify_outputs.json';

/**
 * Required to use Amplify with next.js
 * Allows for server-side rendering
 */
Amplify.configure(outputs, { ssr: true });

/**
 * Wraps the children components in the Authenticator componen
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
