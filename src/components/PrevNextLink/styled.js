import styled from "styled-components"
import media from "styled-media-query"

import * as V from "../../styles/variables"

export const PostNavLinkCard = styled(V.Card)`
cursor: pointer;
transition: all ease .3s;
border: 1px solid #b7b7b769;
&:hover{
  border-color: var(--clr-dark);
}
${media.lessThan("medium")`
  max-width: 60%;
  margin: 0 auto;
`}
${media.lessThan("small")`
  padding: 0;
  max-width: none;
  margin: 0;
`}
`