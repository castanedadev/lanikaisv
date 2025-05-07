import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

interface SeoProps {
	title: string;
}

const Seo = ({ title }: SeoProps) => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

	return (
		<title>
			{title} | {data.site.siteMetadata.title}
		</title>
	);
};
export default Seo;
