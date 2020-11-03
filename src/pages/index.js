import React from "react"

import SEO from "../components/seo"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import PostListHome from "../components/PostListHome"
import Newsletter from "../components/Newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <PostListHome />
    <Newsletter />
  </Layout>
)

export default IndexPage
