import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { themeOffBlack, themePink, themeRed, themeTan } from "../../consts/consts";

export const FooterContainer = styled.footer`
  background: ${themeTan};
  border-top: 3px solid ${themePink};
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterTitle = styled.h1`
  font-size: 2.5rem;
  color: ${themeRed};
  text-align: center;
  padding: 1rem 0;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  text-align: center;
  width: auto;
  box-sizing: border-box;
  gap: 2rem;
`;

export const FooterLink = styled.a`
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 2.5rem;
  color: ${themeOffBlack};
`;

export const Github = styled(FaGithubSquare)`
  font-size: 2.5rem;
  color: ${themeOffBlack};
`;

export const Email = styled(MdEmail)`
  font-size: 2.5rem;
  color: ${themeOffBlack};
`;
