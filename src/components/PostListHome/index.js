import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PostCard from "../PostCard"
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
              date(locale: "pt-br", formatString: "DD/MM/YYYY")
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
    <h2>Últimos Posts</h2>
    <ul>
      {posts.map(edge => <PostCard edge={edge} />)}
    </ul>
    <S.PostAniLink
            cover
            direction="right"
            bg="#fff"
            duration={1}
            to="/blog"
            title="Ir para blog"
    >
      Leia Mais
    </S.PostAniLink>
    </S.PostList>
  )
  
}

export default PostListHome
