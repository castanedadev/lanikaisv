import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";

const AboutPage: React.FC<PageProps> = () => {
    return (
        <div>
        <h1>About Us</h1>
        <p>We are a team of passionate individuals.</p>
        <Link to="/">Back to Home</Link>
        </div>
    );
    }

export default AboutPage;
export const Head: HeadFC = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )
