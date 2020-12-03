import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styled"
import Navigation from "../Navigation"
import BurgerButton from "../BurgerButton"

// query {
//   file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//     childImageSharp {
//       # Specify the image processing specifications right in the query.
//       # Makes it trivial to update as your page's design changes.
//       fixed(width: 125, height: 125) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }

// console.log(dataLogo)

const Header = props => {

  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "6.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  console.log(image)

  const [isOpen, setIsOpen] = useState(false)
  const handleMenuClick = () => {
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 100)
  }

  return (
    <S.Header>
      <div className="logo">
        <AniLink
          cover
          direction="right"
          bg="var(--clr-dark)"
          duration={1}
          to="/"
          title="Voltar para home"
        >
          <Img
            fluid={image.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </AniLink>
      </div>
      <S.Nav>
        <Navigation isBlogPost={props.isBlogPost} />
      </S.Nav>
      <S.Overlay isOpen={isOpen} onClick={handleMenuClick}></S.Overlay>
      <S.VerticalNav isOpen={isOpen} className={isOpen ? "open" : ""}>
        <Navigation isVertical={true} handleMenuClick={handleMenuClick} />
      </S.VerticalNav>
      <BurgerButton handleMenuClick={handleMenuClick} isOpen={isOpen} />
    </S.Header>
  )
}

export default Header
