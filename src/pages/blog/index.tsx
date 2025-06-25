import { Link, graphql } from "gatsby";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../../components/layout";
import {
	blogPost,
	blogPostDate,
	blogPostExcerpt,
	blogPostTitle,
} from "../../components/layout.module.css";
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
		<Layout pageTitle="">
			{data.allMdx.nodes.map((node) => (
				<div className={blogPost} key={node.id}>
					<h2 className={blogPostTitle}>
						<Link to={`/blog/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
					</h2>
					<div className={blogPostDate}>{node.frontmatter.date}</div>
					{node.excerpt && (
						<div className={blogPostExcerpt}>{node.excerpt}</div>
					)}
				</div>
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
        date(formatString: "MMMM D, YYYY")
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

export const Head = () => <Seo title="Blog Posts" />;

export default BlogPage;
