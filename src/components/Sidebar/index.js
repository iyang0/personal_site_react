import React from 'react'
import { CloseIcon,
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu } from './SidebarStyled'

export default function Sidebar({ isOpen, toggle, innerRef }) {
  return (
    <SidebarContainer isOpen={isOpen} ref={innerRef}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>projects</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
};
