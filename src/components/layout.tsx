import { Link, graphql, useStaticQuery } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import {
	container,
	heading,
	navLinkItem,
	navLinkText,
	navLinks,
	siteTitle,
} from "./layout.module.css";

/**
 * Layout component for page structure and navigation.
 */
interface LayoutProps {
	pageTitle?: string;
	children?: React.ReactNode;
}

const Layout = ({ pageTitle = "", children }: LayoutProps) => {
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
