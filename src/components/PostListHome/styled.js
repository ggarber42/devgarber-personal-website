import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as V from '../../styles/variables'

export const PostList = styled(V.Card)``

export const PostAniLink = styled(AniLink)`
    ${V.Text3}
    border-bottom: 1px solid #fff;
    padding: .1em 0;
    transition: all ease .3s;
    &:hover{
        border-color: var(--clr-dark);
    }
`