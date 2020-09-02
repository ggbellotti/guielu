import Img from "gatsby-image"
import LogoSvg from "../../images/logo-vetor-branco.svg"
import styled from "styled-components"

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 350px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const Infos = styled.div`
  padding: 25px;
  text-align: center;
`
export const Description = styled.h1`
  font-size: 1em;
  color: white;
  text-align: center;
  margin: 25px 0;
`
export const Background = styled(Img)`
  object-fit: cover;
  object-position: center;
  position: absolute !important;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  min-height: 350px;
`
export const Logo = styled(LogoSvg)`
  width: 200px;
  height: auto;
  margin-bottom: 25px;
`
export const SocialLinks = styled.div``
export const Links = styled.a`
  padding: 0 15px;
  svg {
    fill: #fff;
    width: 30px;
    height: auto;
  }
`
