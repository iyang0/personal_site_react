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
} from './NavbarElements';


export default function Navbar() {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <h1>Navtest</h1>
          </NavLogo>
          <HamburgerBar>
            <FaBars />
          </HamburgerBar>
          <NavMenu>
            <NavItem>
              <NavLinkScroll to='about'>About</NavLinkScroll>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  )
}