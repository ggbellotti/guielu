import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
`
export const ButtonBack = styled(AniLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: black;
  svg {
    width: 17px;
    padding-top: 2px;
    margin-right: 10px;
  }
`
