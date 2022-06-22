import styled from "styled-components";
import { Link } from "react-scroll";
import { themeCloud, themeOffBlack, themeRed } from "../consts/consts";

export const Btn = styled(Link)`
  border-radius: 2rem;
  background: ${({ dark }) => (dark ? themeRed : themeCloud)};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: ${({ dark }) => (dark ? "white" : themeOffBlack)};
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ dark }) => (dark ? themeCloud : themeRed)};
    color: ${({ dark }) => (dark ? themeOffBlack : "white")};
  }
`;
