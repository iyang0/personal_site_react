import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import {
  themeCloud,
  themeOffBlack,
  themeRed,
  themeTan,
} from "../../consts/consts";

export const Nav = styled.nav`
  background: ${themeOffBlack};
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  border-bottom: 3px solid ${themeRed};
  z-index: 900;

  @media screen and (max-width: 960px) {
    transition: 1s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkScroll)`
  color: ${themeCloud};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const HamburgerBar = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${themeCloud};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1rem;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 4rem;
`;

export const NavLinkScroll = styled(LinkScroll)`
  color: ${themeCloud};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px double ${themeTan};
  }
`;
