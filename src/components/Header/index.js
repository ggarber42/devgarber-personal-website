import React, { useState } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from "./styled"
import Navigation from "../Navigation"
import BurgerButton from '../BurgerButton';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenuClick = () =>{
      setTimeout(()=>{
        setIsOpen(!isOpen);
      },100)
  }

  return (
    <S.Header>
      <div className="logo">
        <AniLink
            cover
            direction="right"
            bg="var(--clr-dark)"
            duration={1}
            to="/"
            title="Voltar para home">LOGO</AniLink>
      </div>
      <S.Nav>
        <Navigation isBlogPost={props.isBlogPost} />
      </S.Nav>
      <S.Overlay isOpen={isOpen} onClick={handleMenuClick}></S.Overlay>
      <S.VerticalNav isOpen={isOpen} className={isOpen ? 'open' : ''}>
        <Navigation isVertical={true} handleMenuClick={handleMenuClick}/>
      </S.VerticalNav>
      <BurgerButton handleMenuClick={handleMenuClick} isOpen={isOpen}/>
    </S.Header>
  )
}

export default Header