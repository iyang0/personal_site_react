import React from 'react';
import { FaBars } from 'react-icons/fa'
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerBar,
  NavMenu,
  NavItem,
  NavLinkScroll
} from './NavbarStyled';


export default function Navbar( {toggle} ) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='top'>
          <h1>Ivan</h1>
        </NavLogo>
        <HamburgerBar onClick={ toggle }>
          <FaBars />
        </HamburgerBar>
        <NavMenu>
          <NavItem>
            <NavLinkScroll to='about'>About</NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll to='interests'>Interests</NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll to='projects'>Projects</NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll to='contact'>Contact</NavLinkScroll>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}