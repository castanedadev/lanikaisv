import { ThemeToggler } from "gatsby-plugin-dark-mode";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

/**
 * Theme toggle component that allows switching between light and dark modes.
 */
const ThemeToggle = () => {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<button
					type="button"
					onClick={toggleTheme}
					aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					style={{
						background: "rgba(255, 255, 255, 0.1)",
						border: "1px solid rgba(255, 255, 255, 0.2)",
						cursor: "pointer",
						padding: "8px 12px",
						borderRadius: "8px",
						color: "rgba(255, 255, 255, 0.9)",
						fontSize: "1.1rem",
						transition: "all 0.3s ease",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
						e.currentTarget.style.transform = "translateY(-1px)";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
						e.currentTarget.style.transform = "translateY(0)";
					}}
				>
					{theme === "dark" ? "☀️" : "🌙"}
				</button>
			)}
		</ThemeToggler>
	);
};

export default ThemeToggle;
