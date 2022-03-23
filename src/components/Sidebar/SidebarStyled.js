import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position:fixed;
  z-index: 999;
  width: 60%;
  height: 100%;
  background: grey;
  display:grid;
  align-items: right;
  top: 0;
  right: 0;
  transition: right .4s ease-in-out;
  opacity: 90%;
  //if the hamburger bar clicked, slide in from right and make avaliable
  //otherwise is hidden and to the right
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`

export const CloseIcon = styled(FaTimes)`
  color: white;
`