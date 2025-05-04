import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="About Page">
            <p>We are a team of passionate individuals.</p>
        </Layout>
    );
    }

export const Head = () => <SEO title="About Us" />
export default AboutPage;

