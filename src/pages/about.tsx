import type { PageProps } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="About Page">
			<p>We are a team of passionate individuals.</p>
		</Layout>
	);
};

export const Head = () => <Seo title="About Us" />;
export default AboutPage;
