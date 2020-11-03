import styled from "styled-components"

import * as V from "../../styles/variables"

export const PostNavLinkCard = styled(V.Card)`
cursor: pointer;
transition: all ease .3s;
border: 1px solid #b7b7b769;
&:hover{
  border-color: var(--clr-dark);
}
`