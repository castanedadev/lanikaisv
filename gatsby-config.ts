import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    description:
      "Lanikai SV is a jewelry brand that specializes in selling high-quality, handcrafted jewelry. Our mission is to provide our customers with unique and beautiful pieces that they can cherish for a lifetime.",
    siteUrl: "https://www.lanikaisv.com",
    title: "Lanikai SV",
    twitterUsername: "@lanikaisv",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
  ],
};

export default config;
