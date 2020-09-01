import * as S from "./styles"

import React, { useState } from "react"

import LogoSvg from "../../images/logo-vetor-preto.svg"
import Nav from "./nav"
import SocialLinks from "../SocialLinks"
import media from "styled-media-query"
import styled from "styled-components"

// import links from "./content"

const Menu = () => {
  const [open, setOpen] = useState(false)
  const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    ${media.lessThan("medium")`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  `}
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "#ccc" : "#333")};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Logo to="/" title="Guielu Fotografia">
            <LogoSvg />
          </S.Logo>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
            <Nav open={open} />
          </StyledBurger>
          <SocialLinks />
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Menu
