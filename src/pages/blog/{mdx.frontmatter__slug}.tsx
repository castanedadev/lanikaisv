import { graphql } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface BlogPostProps {
	children: React.ReactNode;
	data: {
		mdx: {
			frontmatter: {
				title: string;
				date: string;
			};
		};
	};
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
	const { children, data } = props;
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.frontmatter.date}</p>
			{children}
		</Layout>
	);
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
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
