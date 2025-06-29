// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

/**
 * SEO component for setting meta tags and social sharing info.
 */
export interface SeoProps {
	title?: string;
	description?: string;
	pathname?: string;
	children?: React.ReactNode;
}

const Seo = ({ title, description, pathname, children }: SeoProps) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata();

	const seo = {
		title: title ? `${defaultTitle} | ${title}` : defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname || ""}`,
		twitterUsername,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title || "LanikaiSV"} />
			<meta
				name="twitter:url"
				content={seo.url || "https://lanikaisv.netlify.app/"}
			/>
			<meta
				name="twitter:description"
				content={seo.description || "LanikaiSV"}
			/>
			<meta name="twitter:image" content={seo.image} />
			<meta name="twitter:creator" content={seo.twitterUsername} />
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
			/>
			{children}
		</>
	);
};

export default Seo;
