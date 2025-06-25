declare module "*.css";

declare module "gatsby-plugin-dark-mode" {
	interface ThemeTogglerProps {
		children: (props: {
			theme: string | null;
			toggleTheme: () => void;
		}) => React.ReactNode;
	}

	export const ThemeToggler: React.FC<ThemeTogglerProps>;
}

declare module "*.jpeg" {
	const value: string;
	export default value;
}
