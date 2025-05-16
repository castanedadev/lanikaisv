import { graphql } from "gatsby";
import { GatsbyImage, type ImageDataLike, getImage } from "gatsby-plugin-image";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface BlogPostProps {
	children: React.ReactNode;
	data: {
		mdx: {
			frontmatter: {
				heroImageAlt: string;
				heroImage: ImageDataLike;
				title: string;
				date: string;
			};
		};
	};
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
	const { children, data } = props;
	const image = getImage(data.mdx.frontmatter.heroImage);
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.frontmatter.date}</p>
			{image && (
				<GatsbyImage image={image} alt={data.mdx.frontmatter.heroImageAlt} />
			)}
			{children}
		</Layout>
	);
};

export const query = graphql`
  query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      heroImageAlt
      heroImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`;

export const Head = ({
	data,
}: { data: { mdx: { frontmatter: { title: string } } } }) => (
	<Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
