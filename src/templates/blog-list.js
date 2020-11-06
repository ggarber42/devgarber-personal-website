import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { CardDiv2, PostList, Heading } from "../styles/utils"
import * as V from "../styles/variables"

const BlogIndex = () => {

  const postQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { template: { eq: "blog-post" } } }
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
  `);

  const emptyQuery = "";
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const allPosts = postQuery.allMarkdownRemark.edges

  const handleInputChange = e => {
    const query = e.target.value;
    const filteredData = allPosts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      );
    });
    setState({
      query,
      filteredData,
    });
  }

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <SEO title="Blog List" />
      <CardDiv2>
        <input
          type="text"
          aria-label="Search"
          placeholder="Filtre aqui os posts..."
          onChange={handleInputChange}
        />
        <span>{posts.length}</span>
      </CardDiv2>
      <PostList>
        <ul>
          {posts.map(edge => (
            <PostCard edge={edge} />
          ))}
        </ul>
      </PostList>
    </Layout>
  )
}

export default BlogIndex
