import Burger from './burger';
import Logo from '../Logo'
import React from 'react';
import SocialLinks from '../SocialLinks';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-height: 80px;
  background-color: white;
`
const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 45px;
`
const SocialLinksDesk = styled(SocialLinks)`
  display:none;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo />
        <Burger />
        <SocialLinksDesk />
      </Nav>
    </Wrapper>

  )
}

export default Navbar
