'use client';

import React, { Children, Component } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs, { ssr: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
