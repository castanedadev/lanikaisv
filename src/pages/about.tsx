import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "./layout";

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="About Us">
            <p>We are a team of passionate individuals.</p>
        </Layout>
    );
    }

export default AboutPage;
export const Head: HeadFC = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )
