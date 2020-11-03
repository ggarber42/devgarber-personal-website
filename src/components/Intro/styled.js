import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Section = styled.section`
    ${V.Wrapper}
    position: relative;
    background: linear-gradient(180deg,#0e121d 50%,#3a4461);
    color: #fff;
    min-height: 70vh;
    padding: 0;
    h1{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    &{
        flex-direction: column;
        justify-content: flex-start;
    }
    & > *{
        margin: .25em 0;
    }
`