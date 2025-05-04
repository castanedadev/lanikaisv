import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
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
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}
export default SEO