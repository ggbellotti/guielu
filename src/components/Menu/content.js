import * as S from "./styles"

import React from "react"
import SocialLinks from "../SocialLinks"

const Navbar = ({ open }) => {
  return (
    <S.WrapperMenu open={open}>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink
            cover
            direction="up"
            top="entry"
            duration={0.6}
            bg="#ffffff"
            activeClassName="active"
            to="/home"
            title="Inicio"
          >
            Inicio
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink
            cover
            direction="up"
            top="entry"
            duration={0.6}
            bg="#ffffff"
            activeClassName="active"
            to="/ensaios"
            title="Ensaios"
          >
            Ensaios
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink
            cover
            direction="up"
            top="entry"
            duration={0.6}
            bg="#ffffff"
            activeClassName="active"
            to="/blog"
            title="Blog"
          >
            Blog
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink
            cover
            direction="up"
            top="entry"
            duration={0.75}
            bg="#ffffff"
            activeClassName="active"
            to="/contato"
            title="Contato"
          >
            Contato
          </S.MenuLink>
        </S.MenuItem>
        <SocialLinks />
      </S.MenuList>
    </S.WrapperMenu>
  )
}

export default Navbar
