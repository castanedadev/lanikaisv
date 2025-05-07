import { Link, graphql } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface BlogPageProps {
	data: {
		allMdx: {
			nodes: {
				excerpt: string;
				parent: {
					modifiedTime: string;
				};
				frontmatter: {
					date: string;
					title: string;
					slug: string;
				};
				id: string;
			}[];
		};
	};
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
					</h2>

					<p>Posted: {node.frontmatter.date}</p>
					<p>Last Modified: {node.parent?.modifiedTime}</p>
					<p>{node.excerpt}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`{
		allMdx (sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
		title
		slug
        title
      }
      id
      excerpt
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
}
  }
  }
  `;

export const Head = () => <Seo title="My Blog Posts (SEO)" />;

export default BlogPage;
