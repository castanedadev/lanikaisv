// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { HeadFC, PageProps } from "gatsby";
import {
	container,
	navLinkText,
	navLinkItem,
	heading,
	navLinks,
	siteTitle,
} from "./layout.module.css";

const Layout: React.FC<{ pageTitle?: string; children?: React.ReactNode }> = ({
	pageTitle,
	children,
}) => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<div className={container}>
			<header>
				<h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>

				<nav>
					<ul className={navLinks}>
						<li className={navLinkItem}>
							<Link to="/" className={navLinkText}>
								Home
							</Link>
						</li>
						<li className={navLinkItem}>
							<Link to="/about" className={navLinkText}>
								About
							</Link>
						</li>
						<li className={navLinkItem}>
							<Link to="/blog" className={navLinkText}>
								Blog
							</Link>
						</li>
					</ul>
				</nav>

				<h3 className={heading}>{pageTitle}</h3>
			</header>
			<main>{children}</main>
			<footer>
				<p>&copy; {new Date().getFullYear()} LanikaiSV</p>
			</footer>
		</div>
	);
};
export default Layout;
