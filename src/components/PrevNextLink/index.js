import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

const PrevNextLink = ({description, direction, context}) => {
  return (
    <S.PostNavLinkCard>
      <AniLink
        cover
        direction={direction}
        bg="#fff"
        duration={1}
        to={`${context.frontmatter.slug}`}
        title={`Ir para ${description}`}
      >
        <small>{context.frontmatter.date}</small>
        <p>{description}</p>
        <h3>{context.frontmatter.title}</h3>
      </AniLink>
    </S.PostNavLinkCard>
  )
}
export default PrevNextLink;
