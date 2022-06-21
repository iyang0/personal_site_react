import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { themeCloud, themeRed, themeTan } from "../../consts/consts";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 70%;
  height: 100%;
  background-color: ${themeRed}e0;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.4s ease-in-out;
  //if the hamburger bar clicked, slide in from right and make avaliable
  //otherwise is hidden and to the right
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${themeCloud};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1em;
  right: 1.5em;
  background: transparent;
  font-size: 2em;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 55px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-decoration: none;
  list-style: none;
  transition: 0.4s ease-in-out;
  color: ${themeCloud};
  cursor: pointer;

  //scss selector as if it was this-element:hover{}
  &:hover {
    color: ${themeTan};
    transition: 0.3s ease-in-out;
  }
`;
