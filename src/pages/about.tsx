import type { HeadFC, PageProps } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

/**
 * About page component.
 */
const AboutPage = (props: PageProps): JSX.Element => {
	return (
		<Layout pageTitle="About Page">
			<p>We are a team of passionate individuals.</p>
		</Layout>
	);
};

export const Head: HeadFC = () => <Seo title="About Us" />;
export default AboutPage;
