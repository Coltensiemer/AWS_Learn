'use client';

import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('dark');

	// Toggle theme function
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		const background = newTheme === 'light' ? 'bg-light' : 'bg-dark';

		setTheme(newTheme);
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
		}
	};

	/**
	 * Load theme from local storage on initial load
	 */

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedTheme =
				(localStorage.getItem('theme') as Theme) || 'light';
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={`theme-${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);
};

// Hook to use theme context
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('useTheme must be used within a ThemeProvider');
	return context;
};
