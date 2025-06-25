import type { HeadFC, PageProps } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import Layout from "../components/layout";
import {
	blogPostDate,
	blogPostExcerpt,
	blogPostTitle,
} from "../components/layout.module.css";
import Seo from "../components/seo";

/**
 * About page component with Overreacted-inspired design.
 */
const AboutPage = (): JSX.Element => {
	return (
		<Layout pageTitle="">
			<h1
				className={blogPostTitle}
				style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
			>
				About Lanikai SV
			</h1>
			<div
				className={blogPostDate}
				style={{ fontSize: "1.25rem", marginBottom: "2.5rem" }}
			>
				We are a team of passionate individuals dedicated to creating amazing
				digital experiences.
			</div>

			<div className={blogPostExcerpt} style={{ marginBottom: "2.5rem" }}>
				Our mission is to provide our customers with unique and beautiful pieces
				that they can cherish for a lifetime. We believe in the power of
				thoughtful design and quality craftsmanship.
			</div>

			<div className={blogPostExcerpt} style={{ marginBottom: "2.5rem" }}>
				<strong>Our Values:</strong>
				<ul
					style={{
						margin: "0.5rem 0 0 1.5rem",
						color: "#cfcfcf",
						fontSize: "1.1rem",
					}}
				>
					<li>Quality craftsmanship</li>
					<li>Innovative design</li>
					<li>Customer satisfaction</li>
					<li>Sustainable practices</li>
				</ul>
			</div>

			<div className={blogPostExcerpt}>
				<strong>Get in Touch:</strong> Interested in working with us? We'd love
				to hear from you. Reach out to learn more about our services and how we
				can help bring your vision to life.
			</div>
		</Layout>
	);
};

export const Head: HeadFC = () => <Seo title="About Us" />;
export default AboutPage;
