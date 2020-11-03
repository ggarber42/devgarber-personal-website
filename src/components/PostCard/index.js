import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AiFillTags } from "react-icons/ai"

import * as S from "./styled"

const PostCard = ({ edge }) => {
  const { date, slug, title, tags, description } = edge.node.frontmatter

  return (
    <S.Postli>
      <AniLink cover direction="down" bg="#fff" duration={1} to={slug}>
        <small>{date}</small>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>
          <AiFillTags size={25}/>
          {tags ? tags.map(tag => <span>{tag}</span>) : ""}
        </small>
      </AniLink>
    </S.Postli>
  )
}

export default PostCard
