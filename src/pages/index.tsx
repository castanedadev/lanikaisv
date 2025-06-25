import { type HeadFC, Link, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../components/layout";
import {
	blogPostDate,
	blogPostExcerpt,
	blogPostTitle,
} from "../components/layout.module.css";
import Seo from "../components/seo";

/**
 * Home page component with Overreacted-inspired design.
 */
const IndexPage = (): JSX.Element => (
	<Layout pageTitle="">
		<div
			className={blogPostDate}
			style={{ fontSize: "1.25rem", marginBottom: "2.5rem" }}
		>
			A personal blog about technology, development, and the journey of building
			amazing things.
		</div>

		<div className={blogPostExcerpt} style={{ marginBottom: "2.5rem" }}>
			Explore our latest posts or learn more{" "}
			<Link
				to="/about"
				style={{ color: "#ffb6c1", textDecoration: "underline" }}
			>
				about us
			</Link>
			.
		</div>

		<div style={{ textAlign: "center", marginTop: "3rem" }}>
			<h3 className={blogPostDate} style={{ marginBottom: "1rem" }}>
				Featured Images
			</h3>
			<div
				style={{
					display: "flex",
					gap: "1rem",
					justifyContent: "center",
					flexWrap: "wrap",
				}}
			>
				<StaticImage
					alt="Chuntaro. An orange cat with a white belly and paws. He is sitting on a table posing for the camera."
					src="../images/chunti.jpeg"
					style={{ borderRadius: "12px", maxWidth: "300px" }}
				/>
				<StaticImage
					alt="Mimosa. A white cat. She is laying on a desk sleeping."
					src="../images/mimi.jpeg"
					style={{ borderRadius: "12px", maxWidth: "300px" }}
				/>
			</div>
		</div>
	</Layout>
);

export const Head: HeadFC = () => <Seo title="Home" />;
export default IndexPage;
