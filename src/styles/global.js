import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

const GlobalStyle = createGlobalStyle`
  :root{
    --color-secondary: rgba(100, 156, 195, 1);
    --color-tertiary: rgba(68, 123, 160, 1);
    --transition-default: color 0.125s ease-in;
  }
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
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1.6;
    font-size: 18px;
    font-family: "Barlow Semi Condensed";
    font-weight: 400;
  }
  h1{
    font-size: 1.75rem;
    font-weight: 600;
    margin: 40px 0;
    ${media.lessThan("small")`
      line-height: 1.25;
    `}
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
}
`
export default GlobalStyle
