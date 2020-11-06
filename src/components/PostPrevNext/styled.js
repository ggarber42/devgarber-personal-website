import styled from "styled-components"
import media from "styled-media-query"

import * as V from "../../styles/variables"

export const PostNavSection = styled.section`
  ${V.Section}
  h3{
    ${V.Heading3}
  }
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
  ${media.lessThan("1100px")`
    display: flex;
    justify-content: center;
    min-width: auto;
`}
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    min-width: 70%;
    h3{
      font-size: 1rem;
    }
`}
`
