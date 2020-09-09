import media from "styled-media-query"
import styled from "styled-components"

export const Social = styled.div`
  display: flex;
  svg {
    width: 20px;
    ${media.lessThan("medium")`
      width: 25px;
    `}
  }
  ${media.lessThan("medium")`
    ${props => (props.hideMobile ? "display:none" : "display: flex")};
    margin: 30px auto;
  `}
  ${media.greaterThan("medium")`
    ${props => (props.hideMobile ? "display: flex" : "display:none")}
  `}
`
export const SocialLinks = styled.a`
  color: black;
  margin-right: 22px;
  transition: var(--transition-default);
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: var(--color-secondary);
  }
`
