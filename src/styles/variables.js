import styled, { css } from 'styled-components'
import media from 'styled-media-query'

// ==================================================
// Variables
//
// 1. Spaces
// 2. Colors
// 3. zIndex
// 4. Misc
// 5. Typography
// 6. Utils
// ==================================================

// --------------------------------------------------
// 1. Spaces
// --------------------------------------------------

export const Space = {
    xxs: `.4rem`,
    xs: `.8rem`,
    sm: `1.6rem`,
    default: `2.4rem`,
    md: `3.2rem`,
    lg: `4.8rem`,
    xlg: `6.4rem`,
    xxlg: `9.6rem`,
  }
  
  export const Height = {
    headerSm: `${Space.lg}`,
    headerLg: `${Space.xlg}`,
    footer: `4rem`,
    mainTop: `${Space.md}`
  }
  
  // --------------------------------------------------
  // 2. Colors
  // --------------------------------------------------
  
  export const Color = {

    lightest: `#ffffff`,
    light: `#f0f0f069`,
    dark: `#1b243f`,
    darkest: `#000`,
    accent: `#09b3af`,
    card: `#fdfdfd`
  }
  
  // --------------------------------------------------
  // 3. zIndex
  // --------------------------------------------------
  
  export const ZIndex = {
    bg: `-1`,
    default: `1`,
    footer: `5`,
    header: `5`,
    overlay: `10`,
    modal: `15`,
    hamburgerButton: `20`
  }
  
  // --------------------------------------------------
  // 4. Misc
  // --------------------------------------------------
  
  export const Transition = {
    default: `.25s`,
  }
  
  export const BorderRadius = {
    box: `2px`,
  }
  
  export const Border = {
    box: `1px solid var(--borderColor)`,
    default: `1px solid var(--borderColor)`,
  }
  
  export const BoxShadow = {
    box: `0 1px 3px var(--boxShadow)`,
  }
  
  export const MaxSize = {
    md: `750px`,
    lg: `1080px`,
  }

  // --------------------------------------------------
  // 5. Typography
  // --------------------------------------------------

  export const FontWeight = {
    regular: '300',
    bold: '400',
    boldest: '900'
  }


  export const Title = css`
  & {
    color: var(--primaryColor);
    font-size: 3.4rem;
    line-height: 1.1em;

    ${media.greaterThan('medium')`
      font-size: 4.2rem;
    `}
  }
`

export const Subtitle1 = css`
  & {
    // color: var(--secondaryColor);
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`

export const Subtitle2 = css`
 & {
  font-size: 2rem;
  letter-spacing: -0.04px;
  line-height: 1.3em;
 }
`

export const Heading1 = css`
  & {
    display: inline-block;
    font-size: 2.6rem;
    font-weight: ${FontWeight.bold};
    letter-spacing: -0.022em;
    line-height: 1.3em;

    ${media.greaterThan('medium')`
      font-size: 3rem;
    `}
  }
`

export const Heading2 = css`
  & {
    display: inline-block;
    font-size: 2.1rem;
    font-weight: ${FontWeight.bold};
    letter-spacing: -0.04px;
    line-height: 1.5em;
    margin-bottom: .35em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`

export const Heading3 = css`
  & {
    font-size: 2.1rem;
    font-weight: ${FontWeight.bold};
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`

export const Heading4 = css`
  & {
    font-size: 2rem;
    font-weight: ${FontWeight.regular};
    letter-spacing: -0.04px;
    line-height: 1.5em;
  }
`
export const Text1 = css`
  & {
    font-size: 1.45rem;
    font-weight: ${FontWeight.regular};
    letter-spacing: -0.14px;
    line-height: 1.55em;
    margin: 1em 0;
    ${media.lessThan('medium')`
      font-size: 1.2rem;
    `}
  }
`
export const Text2 = css`
  & {
    font-size: .78rem;
    font-weight: ${FontWeight.regular};
    letter-spacing: -0.14px;
    line-height: 1.65em;
  }
`

export const Text3 = css`
    position: relative;
    font-size: 1.2rem;
    font-weight: ${FontWeight.bold};
    letter-spacing: -0.14px;
    line-height: 1.65em;
  `

// --------------------------------------------------
// 6. Utils
// --------------------------------------------------

export const Section =css`
  &{
    padding: 1em 2em;
  }
`

export const Wrapper = css`
${Section}
&{
  display:flex;
  justify-content: space-between;
}
`

export const Card = styled.section`
  ${Section}
  background: ${Color.card};
  box-shadow: 0px 3px 44px 13px rgba(0,0,0,0.08);
  position: relative;
  margin: 1em 2em;
  &:before{
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    top: 0;
    background: ${Color.dark};
    height: 4px;
    transition-property: right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:after{
    content: "";
    position: absolute;
    right: 0;
    left: 100%;
    bottom: 0;
    background: ${Color.dark};
    height: 4px;
    transition-property: left;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover{
    &:before{
      right: 0;
    }
    &:after{
      left: 0;
    }
  }
`