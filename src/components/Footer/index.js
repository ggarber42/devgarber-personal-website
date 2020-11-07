import React from 'react'
import { ImRss2 } from "react-icons/im"
import { Link } from "gatsby"

import * as S from './styled'

function Footer(props) {

    const getCurrentYear= () => new Date().getFullYear();

    return (
        <S.Footer>
            <S.SectionFeed>
                <Link title="Abrir o feed" target="_blank" to="/feed.xml">
                    <ImRss2 size={20} color="#fff"/>
                </Link>
            </S.SectionFeed>
            <S.MadeBy>
                 <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby.js</a> 
                <section>
                {getCurrentYear()} - Garber 
                </section>
            </S.MadeBy>
            {/* &#127279; */}
        </S.Footer>
    );
}

export default Footer;