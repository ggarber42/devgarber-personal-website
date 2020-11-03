import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as V from "../styles/variables"

export const PostAniLink = styled(AniLink)`
  ${V.Text3}
  border-bottom: 1px solid #fff;
  padding: 0.1em 0;
  transition: all ease 0.3s;
  &:hover {
    border-color: var(--clr-dark);
  }
`

export const InputSearch = styled(V.Card)`
  h2,
  h3 {
    display: inline-block;
  }

  h2 {
    border-bottom: 2px solid;
  }
  h3 {
    ${V.Text3}
  }

  input {
    border-radius: 4px;
    padding: 1em 0.75em;
    border: 2px solid #c3c2c2;
    width: 80%;
    ${media.lessThan("medium")`
        width: 60%;
        `}
    ${media.lessThan("475px")`
        ::placeholder{
            opacity: 0;
        }
    `}
    &:focus {
      border-color: var(--clr-dark);
    }
  }

  input + span {
    background: var(--clr-dark);
    color: var(--clr-accent);
    margin-left: 1em;
    padding: 0.5em;
    font-weight: ${V.boldest};
    border: 0;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
    font-size: 1.2rem;
    width: 40px;
  }

  &:before {
    content: none;
  }
  &:after {
    right: 100%;
    left: 0;
    transition-property: right;
  }
  &:hover {
    &:after {
      right: 0;
    }
  }
`

export const PostList = styled(V.Card)`
  min-height: 100vh;
`

export const BlogMain = styled.article`
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  min-height: 100vh;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-top: 2em;

  time{
      display:block;
  }

  hr {
    margin: 5em 0;
  }
  ${media.lessThan("1100px")`
        width: auto;
        width: 80%;
        padding: 0 1em;
    `}
  ${media.lessThan("700px")`
        padding: 0 1em;
        width: 90%;
    `}
`
export const PostNavLinkCard = styled(V.Card)`
cursor: pointer;
transition: all ease .3s;
border: 1px solid #b7b7b769;
&:hover{
  border-color: var(--clr-dark);
}
`

export const SectionWrapper = styled.section`
${V.Wrapper}
flex-direction: column;
`