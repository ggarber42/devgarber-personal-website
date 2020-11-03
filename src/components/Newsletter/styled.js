import styled from 'styled-components';
import media from 'styled-media-query'

import * as V from '../../styles/variables';

export const Newsletter = styled(V.Card)`

background: ${V.Color.dark};
color: ${V.Color.lightest};
border-radius: .75em;
margin: 1em auto;

${media.greaterThan('1000px')`
    width: 700px;    
    min-width: auto;
    `}

${media.lessThan('1000px')`
    width: 80%;    
    min-width: auto;
    `}

${media.lessThan('750px')`
    margin: 1em 2.5em;
    min-width: auto;
    `}

${media.lessThan('400px')`
    h2{
        font-size: 1.5rem;
    }
    `}
${media.lessThan('350px')`
    width: 97%;
    margin: 2.5em auto;
    // border-radius: 0;
`}
&:before{
    visibility: hidden;
    z-index: 0;
}

h2{
    border-bottom: 2px solid;
    text-align: center;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, textarea{
        margin: .75em 0;
        border-radius: 10px;
        min-width: 50%;
        padding: 1.2em 1em;
        border: 2px solid var(--clr-light);
        background: var(--clr-dark);
        color: var(--clr-lightest);
        &[type=submit]{
            padding:  1em;
            min-width: 25%;
            cursor: pointer;
            width: auto;
            background: var(--clr-dark);
            color: var(--clr-lightest);
            border: 2px solid var(--clr-light);
            transition: all ease .3s;

            &:hover{
                background: var(--clr-accent);
                border-color: var(--clr-accent);
                color: var(--clr-dark);
                font-weight: ${V.FontWeight.boldest};
                transform: scale(1.075);
            }
        }
    }
    textarea{
        min-height: 20vh;
    }
}
`