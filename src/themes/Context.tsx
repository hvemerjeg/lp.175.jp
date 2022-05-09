import React from 'react';
import { Theme } from '@mui/material/styles';
import LightTheme from '@/themes/Light';
import DarkTheme from '@/themes/Dark';

type ThemeContextType = {
	theme: Theme;
	//setTheme: React.Dispatch<React.SetStateAction<Theme>>;
	setTheme: (name: string) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(
	{} as ThemeContextType
);

export type ThemeContextProviderProps = {
	children: React.ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = React.useState(LightTheme);

	const handleSetTheme = (name: string) => {
		localStorage.setItem('theme', name);

		switch (name) {
			case 'Light':
				setTheme(LightTheme);
				break;
			case 'Dark':
				setTheme(DarkTheme);
				break;
			default:
				setTheme(LightTheme);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
