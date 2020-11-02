import styled, { css } from "styled-components"
import media from "styled-media-query"

import * as V from "../../styles/variables"

export const Div = styled.div`
    cursor: pointer;
    ${media.greaterThan("medium")`
                display:none`}
    z-index: ${V.ZIndex.hamburgerButton};
`