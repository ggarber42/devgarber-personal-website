import styled from 'styled-components';
import media from "styled-media-query"

import * as V from '../../styles/variables';

export const ScrollButton = styled.button`
    opacity: ${props => props.showScrollButton ? '1' : '0'};
    visibility: hidden;
    visibility: ${props => props.showScrollButton ? 'visible' : 'hidden'};
    position: fixed;
    background: var(--clr-dark);
    color: var(--clr-lightest);
    font-size: 1.35rem;
    bottom: .75em;
    right: 0.5em;
    padding: .5em .4em;
    border: 2px solid var(--clr-light);
    border-radius: 18px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        background: var(--clr-accent);
        color: var(--clr-dark);
        border-color: var(--clr-accent);
        transform: scale(1.075);
        font-weight: ${V.FontWeight.boldest};
    }
    ${media.lessThan("medium")`
                display:none`}
                
`