import * as S from "./styles"

import Burger from "./burger"
import Logo from "../Logo"
import React from "react"
import SocialLinks from "../SocialLinks"

const Navbar = () => {
  return (
    <S.Nav>
      <S.Container>
        <Logo />
        <Burger />
        <SocialLinks hideMobile />
      </S.Container>
    </S.Nav>
  )
}

export default Navbar
