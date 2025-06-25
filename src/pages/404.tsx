import { type HeadFC, Link, type PageProps } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const pageStyles = {
	color: "var(--text-primary)",
	padding: "96px",
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};

const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: "var(--text-primary)",
	padding: 4,
	backgroundColor: "var(--bg-secondary)",
	fontSize: "1.25rem",
	borderRadius: 4,
};

/**
 * 404 Not Found page component.
 */
const NotFoundPage = (): JSX.Element => {
	return (
		<Layout pageTitle="Page Not Found">
			<main style={pageStyles}>
				<h1 style={headingStyles}>Page not found</h1>
				<p style={paragraphStyles}>
					Sorry 😔, we couldn't find what you were looking for.
					<br />
					{process.env.NODE_ENV === "development" ? (
						<>
							<br />
							Try creating a page in <code style={codeStyles}>src/pages/</code>.
							<br />
						</>
					) : null}
					<br />
					<Link to="/">Go home</Link>.
				</p>
			</main>
		</Layout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Not Found" />;
