import styled from 'styled-components';
import * as V from '../../styles/variables';


export const Footer = styled.footer`
${V.Wrapper}
background: var(--clr-dark);
justify-content: center;
flex-direction: column;

`

export const SectionFeed = styled.section`
    margin: 0;
    text-align: center;
`

export const MadeBy = styled.section`
    ${V.Wrapper}
    
    &{
        background: var(--clr-dark);
        padding-top: 1em;
        padding-right: 0px;
        padding-left: 0px;
        color: var(--clr-lightest);
        font-weight: ${V.FontWeight.bold};
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
        transition: all ease .3s;
        section{
            margin: 0;
        }
        a{
            font-weight: ${V.FontWeight.boldest};
            cursor: pointer;
            &:before{
                content: "</> com ";
                font-weight: ${V.FontWeight.regular};
            }
        }
        &:hover{
            color: var(--clr-accent);
        }
    }
`