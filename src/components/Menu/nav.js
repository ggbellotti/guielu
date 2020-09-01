import { Link } from "gatsby"
import React from "react"
import links from "./content"
import media from "styled-media-query"
import styled from "styled-components"

const LinksMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  ${media.lessThan("medium")`
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  `}
`
export const ListLink = styled.li`
  margin-right: 60px;
  .active {
    &::after {
      opacity: 1;
    }
  }
  &:last-of-type {
    margin-right: 0;
  }
`
export const Links = styled(Link)`
  color: #000;
  text-decoration: none;
  transition: var(--transition-default);
  &::after {
    content: "";
    height: 2px;
    background-color: var(--color-secondary);
    display: block;
    margin-left: -1px;
    margin-right: -2px;
    opacity: 0;
  }
  &:hover {
    color: var(--color-secondary);
  }
`

const RightNav = ({ open }) => {
  return (
    <LinksMenu open={open}>
      {links.map((link, i) => (
        <ListLink key={i}>
          <Links to={link.url} activeClassName="active" title={link.label}>
            {link.label}
          </Links>
        </ListLink>
      ))}
    </LinksMenu>
  )
}

export default RightNav
