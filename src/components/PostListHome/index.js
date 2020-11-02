import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

const PostListHome = () => {
  const postQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { template: { eq: "blog-post" } } }
        limit: 2
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              tags
              description
            }
          }
        }
      }
    }
  `)

  const posts = postQuery.allMarkdownRemark.edges

  return (
      <S.PostList>
          {posts.map(edge => {
      const { description, title, tags } = edge.node.frontmatter
      console.log(title)
      return <h3>{title}</h3>
    })}
      </S.PostList>
  )
}

export default PostListHome
