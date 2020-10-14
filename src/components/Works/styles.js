import styled from "styled-components"

export const Content = styled.div`
  margin-top: 120px;
`
export const HeaderWork = styled.header`
  margin-bottom: 40px;
`
export const TitleWork = styled.h1`
  font-size: 32px;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1;
`
export const DateWork = styled.p`
  font-weight: 200;
  font-size: 14px;
  margin-bottom: 10px;
`
export const DescriptionWork = styled.h2`
  font-weight: 200;
  font-size: 22px;
`
export const MainWork = styled.main`
  h1 {
    margin: 10px 0;
  }
  h2 {
    margin: 10px 0;
  }
  p {
    font-weight: 200;
    margin-bottom: 15px;
  }
  strong,
  b {
    font-weight: 600;
  }
  em,
  i {
    font-style: italic;
  }
  pre {
    background-color: #2d2d2d;
    color: #fff;
    padding: 15px;
    margin: 15px 0;
    max-width: 100%;
    overflow: scroll;
  }
  ul {
    list-style: square;
    padding-left: 1em;
    margin: 10px 0;
    li {
      font-weight: 200;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    background-color: var(--color-secondary);
    transition: all 0.125s ease-in;
    &:hover {
      background-color: var(--color-tertiary);
    }
  }
  blockquote {
    margin: 20px 0;
    border-left: 3px solid var(--color-secondary);
    p {
      margin: 0;
      padding-left: 10px;
      font-weight: 400;
    }
  }
  .gatsby-resp-image-wrapper {
    margin: 25px auto;
    max-width: 768px !important;
  }
`
