import { Link, graphql, useStaticQuery } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import {
	container,
	footer,
	headerAvatar,
	headerBar,
	headerByline,
	headerContent,
	headerTitle,
	main,
	nav,
	navLinkItem,
	navLinkText,
	navLinks,
	pageTitle,
	siteSubtitle,
	siteTitle,
} from "./layout.module.css";
import "../styles/global.css";
import avatarImg from "../images/author.jpeg";

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
			<div className={headerBar}>
				<h1 className={headerTitle}>lanikaisv</h1>
				<div className={headerByline}>
					<span>by</span>
					<img src={avatarImg} alt="Author avatar" className={headerAvatar} />
				</div>
			</div>

			<nav className={nav}>
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

			<main className={main}>
				{pageTitle && <h2 className={pageTitle}>{pageTitle}</h2>}
				{children}
			</main>

			<footer className={footer}>
				<p>
					&copy; {new Date().getFullYear()} LanikaiSV. Built with Gatsby and ❤️
				</p>
			</footer>
		</div>
	);
};

export default Layout;
