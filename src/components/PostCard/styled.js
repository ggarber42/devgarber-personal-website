import styled from "styled-components"
import * as V from "../../styles/variables"
import media from "styled-media-query"

export const Postli = styled.li`
  margin-bottom: 1em;
  border: 1px solid #b7b7b769;
  padding: 1em;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    border-color: var(--clr-dark);
  }
  a{
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 1.75rem;
      padding-left: 0.5em;
      font-weight: ${V.FontWeight.bold};
      ${media.lessThan("medium")`
          font-size: 1.2rem;
      `}
    }
    small:first-child {
      display: inline-block;
      background: #c3c3c369;
      width: 5.75em;
      padding: 0.25em;
    }
    p + small {
      position: relative;
      display: flex;
      align-items: center;
      span {
        margin-left: 1em;
        padding: 0.25em;
        &:not(:first-child) {
          background: #c3c3c369;
        }
      }
      span:first-child {
        position: relative;
        border: 1px solid red;
        border-right: none;
        padding: 0.3em 0.5em;
        border-color: var(--clr-dark);
        border-right: none;
        color: var(--clr-dark);
        margin-right: 1em;
        &:before {
          content: "";
          position: absolute;
          top: -1px;
          right: -18px;
          width: 0;
          height: 0;
          border-color: white white white var(--clr-dark);
          border-style: solid;
          border-width: 13px 0 11px 18px;
        }
      }
    }
  }
`
