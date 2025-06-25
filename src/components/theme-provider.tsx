import { ThemeToggler } from "gatsby-plugin-dark-mode";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

/**
 * Theme provider component that manages dark/light mode state
 * and provides CSS custom properties for theming.
 */
interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => {
				// Set initial theme on mount
				React.useEffect(() => {
					const root = document.documentElement;
					root.setAttribute("data-theme", theme || "light");
				}, [theme]);

				return (
					<div data-theme={theme || "light"}>
						{children}
					</div>
				);
			}}
		</ThemeToggler>
	);
};

export default ThemeProvider;
