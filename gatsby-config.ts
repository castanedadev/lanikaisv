import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		description:
			"Lanikai SV is a jewelry brand that specializes in selling high-quality, handcrafted jewelry. Our mission is to provide our customers with unique and beautiful pieces that they can cherish for a lifetime.",
		image: "/images/lanikai.png",
		siteUrl: "https://lanikaisv.netlify.app/",
		title: "Lanikai SV",
		twitterUsername: "@lanikaisv",
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-dark-mode",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/src/blog`,
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 800,
							showCaptions: true,
							withWebp: true,
						},
					},
					{
						resolve: "gatsby-remark-autolink-headers",
						options: {
							offsetY: 100,
							icon: `<svg aria-hidden="true" height="20" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: "custom-class",
							maintainCase: true,
							removeAccents: true,
							isIconAfterHeader: true,
							elements: ["h1", "h4"],
						},
					},
				],
			},
		},
	],
};

export default config;
