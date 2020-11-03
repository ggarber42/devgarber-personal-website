import styled from "styled-components"
import media from "styled-media-query"

import * as V from "../../styles/variables"

export const PostNavSection = styled.section`
  ${V.Section}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  min-width: 750px;
  .post-nav-link {
    text-align: center;
  }
  .next-link {
    grid-column-start: 1;
  }
  .previous-link {
    grid-column-start: 2;
  }
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    min-width: 70%;
`}
`
