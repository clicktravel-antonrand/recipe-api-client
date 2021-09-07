import styled from 'styled-components';

import logo from '../resources/logo.png'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #fc5271;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  height: 60px;
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 100%;
  justify-content: space-between;
`;

const NavLogoContainer = styled.div`
  display: inline-flex;
  align-items: center;

  a:hover {
    text-decoration: none;
  }
`;

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`

const NavLinksContainer = styled.div`
  padding-right: 20px;
`;

const NavLogo = styled.img`
  width: 40px;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
`

const Header = styled.h1`
  padding-left: 5px;
  position: relative;
  margin: 0;
  color: #fff;
`

export const Navbar = () => <Nav>
  <NavContainer>
      <NavLogoContainer>
        <LogoLink to="/">
          <NavLogo src={logo} alt="Recipe App Logo"/>
          <Header>recipes.</Header>
        </LogoLink>
      </NavLogoContainer>

      <NavLinksContainer>
        <NavLink to="/acknowledgements">
          Acknowledgements
        </NavLink>
      </NavLinksContainer>
  </NavContainer>
</Nav>
