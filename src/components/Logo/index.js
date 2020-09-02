import { Link } from "gatsby"
import LogoBlack from "../../images/logo-vetor-preto.svg"
import LogoWhite from "../../images/logo-vetor-branco.svg"
import React from "react"
import styled from "styled-components"

export const LogoSvg = styled.div`
  background-image: url(${props => (props.white ? LogoWhite : LogoBlack)});
  background-repeat: no-repeat;
  width: ${props => (props.large ? "150px" : "80px")};
  height: ${props => (props.large ? "80px" : "40px")};
  margin: ${props => (props.center ? "0 auto" : "0")};
`
export const LinkLogo = styled(Link)`
  text-decoration: none;
`

const Logo = ({ white, large, center }) => {
  return (
    <LinkLogo to="/">
      <LogoSvg
        white={white}
        large={large}
        center={center}
        alt="Guielu Fotografia"
        title="Guielu Fotografia"
      />
    </LinkLogo>
  )
}

export default Logo
