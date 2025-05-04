// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

interface BlogPageProps {
	data: {
		allFile: {
			nodes: {
				name: string;
			}[];
		};
	};
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<p>My cool posts...</p>
			<ul>
				{data.allFile.nodes.map((node) => (
					<li key={node.name}>{node.name}</li>
				))}
			</ul>
		</Layout>
	);
};

export const query = graphql`{
    allFile {
      nodes {
        name
      }
    }
  }
  `;

export const Head = () => <Seo title="My Blog Posts (SEO)" />;

export default BlogPage;
