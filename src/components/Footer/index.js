import React from 'react'
import * as S from './styled'

function Footer(props) {

    const getCurrentYear= () => new Date().getFullYear();

    return (
        <S.Footer>
            <section>
                 <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby.js</a> 
            </section>
            <section>
             {getCurrentYear()} - Garber 
            </section>
            {/* &#127279; */}
        </S.Footer>
    );
}

export default Footer;