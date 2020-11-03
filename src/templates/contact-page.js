import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter"
import { SectionWrapper } from "../styles/utils"
import * as V from "../styles/variables"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <SectionWrapper>
        <V.Card>
          <h1>{frontmatter.title}</h1>
          <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        </V.Card>
      </SectionWrapper>
      <Newsletter />
    </Layout>
  )
}

export default Contact