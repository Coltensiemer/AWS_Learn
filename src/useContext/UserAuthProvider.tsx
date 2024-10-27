'use client';

import { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import {
	type FetchUserAttributesOutput,
	fetchUserAttributes,
} from 'aws-amplify/auth';

/**
 * Define the UserContext type
 */
interface UserContextType {
	user: FetchUserAttributesOutput | undefined;
}

/**
 * Create a context to store the user data
 */
export const UserContext = createContext<UserContextType | undefined>(
	undefined
);

/**
 * UserProvider props interface
 */
interface UserProviderProps {
	children: ReactNode;
}

/**
 * UserProvider component to wrap parts of the app that need user data
 */
export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<FetchUserAttributesOutput | undefined>(
		undefined
	);

	const getUser = async () => {
		try {
			const currentUser = await fetchUserAttributes();
			setUser(currentUser);
		} catch (error) {}
	};

	const userContextValue = useMemo(() => ({ user }), [user]);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<UserContext.Provider value={userContextValue}>
			{children}
		</UserContext.Provider>
	);
};
