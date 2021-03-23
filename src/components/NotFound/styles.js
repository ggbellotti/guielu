import styled from "styled-components"

export const Container = styled.div`
  margin-top: 125px;
  h1,
  p {
    text-align: center;
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
`
