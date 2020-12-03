import styled, { css } from "styled-components"
import * as V from "../../styles/variables"
import media from "styled-media-query"

export const Header = styled.header`
    ${V.Wrapper}
    background: var(--clr-dark);  
    color: var(--clr-lightest);
    align-items: center;
        .logo{
            display:block;
        }
    }
    .logo{
      min-width: 50px;
    }
`
export const Nav = styled.nav`
${media.lessThan("medium")`
z-index: ${V.ZIndex.header};
  display:none`}
  ul {
    display: flex;
  }
  li {
    position: relative;
    a{
      ${V.Text3}
      position: relative;
      margin: 0 1.25em;
      &[title*="Home"]{
        display:none;
      }
      &:before{
          transform: translateX(-50%);
          width: 20%;
          height: 4px;
          position: absolute;
          bottom: -5px;
          left: 50%;
          opacity: 0;
          pointer-events: none;
          content: "";
          border-radius: 6px;
          background: var(--clr-accent);
          transition: all ease .3s; 
      }
      &:hover{
          color: var(--clr-accent);
          &:hover{
            &:before{
              width: 70%;
              opacity: 1;
            }   
      }
    }
    
  }
`

function animatedMenuItems(){
  let styles = '';
  let j = 20;
  for (let i = 5; i > 0; i -= 1) {
    styles += `
      li:nth-child(${i}){
        transition-delay: ${j}ms;
      }
    `
    j += 20;
  }
  return css`${styles}`;
}

export const VerticalNav = styled.nav`
  position: fixed;
  z-index: ${V.ZIndex.modal};
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  background: var(--clr-dark);
  transform: ${props => props.isOpen ? 'translateY(0%)' : 'translateY(-100%)'};
  transition: all 250ms cubic-bezier(0.5, 0, 0.5, 1);
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 30vh;
    padding: 1em 0 0;
    li{
      transition: all 100ms ease;
      margin: .5em 0;
      &:hover{
        background: var(--clr-accent);
        color: var(--clr-dark);
      }
      &:last-child{
        margin-bottom: 1.25em;
      }
      a{
        transition: transform 300ms, opacity 250ms cubic-bezier(0.5, 0, 0.5, 1);
        margin: .5em 5em;
        font-size: 1.75rem;
        font-weight: ${V.FontWeight.boldest};
      }
    }
  }
  

  ${props => props.isOpen?
    `li{
      transform: translateY(0%);
      opacity: 1;
    }
    `
    :
    `li{
      transform: translateY(-100%);
      opacity: 0;
    }
    `
  }
  ${animatedMenuItems()}
`
export const Overlay = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    color: inherit;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${V.ZIndex.overlay};
    background: black;
    opacity: .75;
    transition: all 250ms cubic-bezier(0.5, 0, 0.5, 1);
`
