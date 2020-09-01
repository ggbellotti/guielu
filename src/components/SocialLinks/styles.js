import styled from "styled-components"

export const Social = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
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
