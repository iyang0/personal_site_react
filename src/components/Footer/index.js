import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  Email,
  FooterLink,
  Github,
  Linkedin,
  FooterTitle,
} from "./FooterElements";

export default function Footer() {
  return (
    <FooterContainer id='contact'>
      <FooterTitle>Contact Me</FooterTitle>
      <FooterWrap>
        <FooterLinkItems>
          <FooterLink href="https://github.com/iyang0">
            <Github />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/i-yang">
            <Linkedin />
          </FooterLink>
          <FooterLink href="mailto:ivan.yang00@gmail.com?subject = Website Contact">
            <Email />
          </FooterLink>
        </FooterLinkItems>
      </FooterWrap>
    </FooterContainer>
  );
}
