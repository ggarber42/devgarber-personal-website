import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostPrevNext from "../components/PostPrevNext"
import { BlogMain } from "../styles/utils"

export const postQuery = graphql`
  query PostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1980, maxHeight: 768, quality: 80, srcSetBreakpoints: [350, 700, 1050, 1400]) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`


const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : "";
  const { previous, next} = pageContext;

  return(
    <Layout>
      <SEO title={frontmatter.title} />
      <BlogMain>
        <h1>{frontmatter.title}</h1>
        <time>{frontmatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        <PostPrevNext previous={previous} next={next} />
      </BlogMain>
    </Layout>
  )
}

export default Post;