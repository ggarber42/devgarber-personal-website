import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Logo from "../logo"
import Footer from "../Footer"
import ScrollButton from "../ScrollButton"
import Navigation from "../Navigation"

// import "../assets/scss/style.scss"
import GlobalStyles from "../../styles/global"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const [showScrollButton, setShowScrollButton] = useState(true)

  useEffect(() => {
    if (window.pageYOffset < 70) {
      setShowScrollButton(false)
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = e => {
    if (window.pageYOffset < 70) {
      setShowScrollButton(false)
    } else {
      setShowScrollButton(true)
    }
  }

  return (
    <div className="primary-container">
      <GlobalStyles />
      <span id="top"></span>
      <Header>
        <Logo title={siteTitle} />
        <Navigation />
      </Header>
      <main className={"container " + className}>{children}</main>
      <ScrollButton showScrollButton={showScrollButton} />
      <Footer />
    </div>
  )
}

export default Layout
