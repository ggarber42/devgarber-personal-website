import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '../../styles/variables'

export const Section = styled.section`
    ${V.Wrapper}
    position: relative;
    background: linear-gradient(180deg,#0e121d 50%,#262e44);
    color: #fff;
    min-height: 55vh;
    padding: 0;
      &{
        flex-direction: column;
        justify-content: flex-start;
    }
    & > *{
        margin: .25em 0;
    }
    ${media.lessThan('950px')`
    min-height: 35vh;
    `}
    ${media.lessThan('560px')`
    min-height: 40vh;
    `}
`

export const StyledH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    span{
        margin: 0 .5em;
        font-size: 1.5rem;
        color: var(--clr-accent);
    }
    ${media.lessThan('950px')`
    font-size: 2.5rem;
    `}
    ${media.lessThan('810px')`
    font-size: 2.3rem;
    `}
    ${media.lessThan('810px')`
    font-size: 2rem;
    `}
    ${media.lessThan('690px')`
    font-size: 1.75rem;
    `}
    ${media.lessThan('690px')`
    font-size: 1.5rem;
    `}
    ${media.lessThan('560px')`
    flex-direction: column;
    `}
`
export const TypeWriterH2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.lessThan('950px')`
    font-size: 1.8rem;
    `}
    ${media.lessThan('690px')`
    font-size: 1.5rem;
    `}
`