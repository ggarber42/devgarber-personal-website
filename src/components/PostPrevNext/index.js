import React from "react"

import * as S from "./styled"
import PrevNextLink from "../PrevNextLink"

const PostPrevNext = ({ next, previous }) => {
  console.log('next',next);
  console.log('previous',previous);
  return (
    <S.PostNavSection>
      {next && /posts+/.test(next.fields.slug) ? (
        <div className="post-nav-link next-link">
          <PrevNextLink
            description={"Anterior"}
            direction={"right"}
            context={next}
          />
        </div>
      ) : (
        ""
      )}
      {previous && /posts+/.test(previous.fields.slug) ? (
        <div className="post-nav-link previous-link">
          <PrevNextLink
            description={"Próximo"}
            direction={"left"}
            context={previous}
          />
        </div>
      ) : (
        ""
      )}
    </S.PostNavSection>
  )
}

export default PostPrevNext
