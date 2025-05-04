// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";

const pageStyles = {
	color: "#232129",
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};
const headingAccentStyles = {
	color: "#663399",
};
const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
};
const listStyles = {
	marginBottom: 96,
	paddingLeft: 0,
};
const doclistStyles = {
	paddingLeft: 0,
};
const listItemStyles = {
	fontWeight: 300,
	fontSize: 24,
	maxWidth: 560,
	marginBottom: 30,
};

const linkStyle = {
	color: "#8954A8",
	fontWeight: "bold",
	fontSize: 16,
	verticalAlign: "5%",
};

const docLinkStyle = {
	...linkStyle,
	listStyleType: "none",
	display: "inline-block",
	marginBottom: 24,
	marginRight: 12,
};

const descriptionStyle = {
	color: "#232129",
	fontSize: 14,
	marginTop: 10,
	marginBottom: 0,
	lineHeight: 1.25,
};

const badgeStyle = {
	color: "#fff",
	backgroundColor: "#088413",
	border: "1px solid #088413",
	fontSize: 11,
	fontWeight: "bold",
	letterSpacing: 1,
	borderRadius: 4,
	padding: "4px 6px",
	display: "inline-block",
	position: "relative" as const,
	top: -2,
	marginLeft: 10,
	lineHeight: 1,
};

const IndexPage: React.FC<PageProps> = () => (
	<Layout pageTitle="Home Page">
		<StaticImage
			alt="Chuntaro. An orange cat with a white belly and paws. He is sitting on a table posing for the camera."
			src="../images/chunti.jpeg"
		/>
		<StaticImage
			alt="Mimosa. A white cat. She is laying on a desk sleeping."
			src="../images/mimi.jpeg"
		/>
	</Layout>
);

export const Head = () => <SEO title="Home Page (from SEO component)" />;
export default IndexPage;
