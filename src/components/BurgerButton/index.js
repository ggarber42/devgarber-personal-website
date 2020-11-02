import React, { useState }  from 'react';
import HamburgerMenu from "react-hamburger-menu";

import * as V from "../../styles/variables";
import * as S from "./styled";

const BurgerButton = ({isOpen, handleMenuClick}) => {

    const [color, setColor] = useState(V.Color.lightest);
    const [animationTime, setAnimationTime] = useState(0);
    
    const mouseOverEffects = () =>{
        setColor(V.Color.accent);
        setAnimationTime(.5);
    }

    const mouseLeaveEffects = () =>{
        setColor(V.Color.lightest);
        setAnimationTime(0);
    }

    return (
        <S.Div 
            onMouseOver={mouseOverEffects}
            onMouseLeave={mouseLeaveEffects}
        >
        <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleMenuClick}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color={color}
            borderRadius={0}
            animationDuration={animationTime}
        />
        </S.Div >
    );
}

export default BurgerButton;