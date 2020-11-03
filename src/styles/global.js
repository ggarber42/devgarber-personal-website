import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import * as V from './variables';

const GlobalStyles = createGlobalStyle`
${normalize}

/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html{
    background: var(--clr-dark);
    min-heigth: 100vh;
  }

  ol, ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:visited { 
    text-decoration: none;
    color: inherit;
  }
  

  button {
    background: none;
    border: 0;
    padding: 0;
  }

  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  html {
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

 
  input[type="search"] {
    -webkit-appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  /* Custom Propertires */

  :root{

  --clr-lightest: ${V.Color.lightest};
  --clr-light: ${V.Color.light};
  --clr-dark: ${V.Color.dark};
  --clr-darkest: ${V.Color.darkest};
  --clr-accent: ${V.Color.accent};
  --clr-card: ${V.Color.card};

  }

  :focus {
    outline: none;
}

  body{
    background-color: var(--clr-lightest);
    color: var(--clr-dark);    
  }

  .hide{
    display: none;
  }

  .show{
    display: block;
  }

  /* Typography */

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    min-height: calc(100vh);
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  section{
    margin-bottom: 1em;
  }

  h1{
    ${V.Heading1}
  }

  h2{
    ${V.Heading2}
  }

  h3{
    ${V.Heading3}
  }

  h4{
    ${V.Heading4}
  }

  p{
    ${V.Text1}
  }

  pre[class*="language-"]{
    margin: 2em 0;
    ${V.Text1}
  }

  header{
    
    ul{
        li{
            ${V.Text3}
            
        }
    }
  }

  a{
    color: inherit;
  }

  .small,
  small {
    ${V.Text2}
  }

  b, strong {
    font-weight: ${V.FontWeight.bold}
  }

  i, em {
    font-style: italic;
  }

`

export default GlobalStyles;