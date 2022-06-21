import styled from "styled-components";
import { Link } from "react-scroll";
import { themeBrown, themeCloud, themeOffBlack } from "../consts/consts";

export const Btn = styled(Link)`
  border-radius: 2rem;
  background: ${({ dark }) => (dark ? themeBrown : themeCloud)};
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
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ dark }) => (dark ? themeCloud : themeBrown)};
    color: ${({ dark }) => (dark ? themeOffBlack : "white")};
  }
`;
