import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { ImArrowUp } from "react-icons/im"

import * as S from './styled';

const ScrollButton = ({showScrollButton}) => {

    return(
        <S.ScrollButton showScrollButton={showScrollButton} onClick={() => scrollTo('#top')}>
            <ImArrowUp size={20}/>
        </S.ScrollButton>
    )
}

export default ScrollButton;