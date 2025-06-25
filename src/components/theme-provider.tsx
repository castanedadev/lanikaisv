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

				// CSS custom properties for theming
				const themeStyles = {
					"--bg-primary": theme === "dark" ? "#1a1a1a" : "#ffffff",
					"--bg-secondary": theme === "dark" ? "#2d2d2d" : "#f5f5f5",
					"--text-primary": theme === "dark" ? "#ffffff" : "#333333",
					"--text-secondary": theme === "dark" ? "#cccccc" : "#666666",
					"--accent-color": theme === "dark" ? "#8b5cf6" : "#663399",
					"--border-color": theme === "dark" ? "#404040" : "#e0e0e0",
					"--link-color": theme === "dark" ? "#a78bfa" : "#663399",
					"--link-hover": theme === "dark" ? "#c4b5fd" : "#8b5cf6",
				} as React.CSSProperties;

				return (
					<div style={themeStyles} data-theme={theme || "light"}>
						{children}
					</div>
				);
			}}
		</ThemeToggler>
	);
};

export default ThemeProvider;
