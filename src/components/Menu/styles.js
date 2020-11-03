import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import styled from "styled-components"

export const Nav = styled.nav`
  width: 100%;
  max-height: 80px;
  background-color: white;
  position: fixed;
  z-index: 97;
  top: 0;
  box-shadow: 0px -25px 30px black;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 45px;
  ${media.lessThan("medium")`
    padding: 10px;
  `}
`
export const WrapperMenu = styled.div`
  ${media.lessThan("medium")`
    width: 100%;
    background-color: ${({ open }) =>
      open ? "rgba(0,0,0,.75)" : "rgba(0,0,0,0)"};
    height: 100vh;
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    margin-top: 0;
    top: 0;
    left: 0;
    opacity: ${({ open }) => (open ? "1" : "0")};
    z-index: ${({ open }) => (open ? "98" : "-1")};
    transition: opacity 0.175s;
    overflow: auto;
`}
`
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 98;
  transition: all 0.175s;
  ${media.lessThan("medium")`
    flex-flow: column nowrap;
    background-color: #fff;
    height: auto;
    min-height: 350px;
    width: 300px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: 10px 0px 25px #fff;
    margin-left: auto;
  `}
`
export const MenuItem = styled.li`
  padding: 0 10px;
  ${media.lessThan("medium")`
    color: #fff;
    padding: 10px;
    text-align: center;
  `}
`
export const MenuLink = styled(AniLink)`
  text-decoration: none;
  color: #000;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: transparent;
    display: block;
  }
  &.active::after {
    background-color: var(--color-secondary);
  }
  &:hover::after {
    background-color: var(--color-secondary);
  }
  ${media.lessThan("medium")`
    font-size: 1.5rem;
    &::after {
      display: none;
    }
    &.active::after {
      display: none;
    }
    &.active{
      text-decoration: underline;
      color: var(--color-secondary)
    }
  `}
`
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  z-index: 99;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #000;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
