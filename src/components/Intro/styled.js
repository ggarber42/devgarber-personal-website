import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Section = styled.section`
    ${V.Wrapper}
    padding: 0;
    &{
        flex-direction: column;
        justify-content: flex-start;
    }
    & > *{
        margin: .25em 0;
    }
`