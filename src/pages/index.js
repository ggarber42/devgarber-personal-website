import React from "react"

import Intro from "../components/Intro"
import Layout from "../components/Layout"
import PostListHome from "../components/PostListHome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <PostListHome />
  </Layout>
)

export default IndexPage
