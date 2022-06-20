import styled from "styled-components";
import { Link } from "react-scroll";
import {
  themeBrown,
  themeCloud,
  themeOffBlack,
} from "../consts/consts";

export const Btn = styled(Link)`
  border-radius: 2rem;
  background: ${({ light }) => (light ? themeBrown : themeCloud)};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: ${({ light }) => (light ? "white" : themeOffBlack)};
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
    background: ${({ light }) => (light ? themeCloud : themeBrown)};
    color: ${({ light }) => (light ? themeOffBlack : "white")};
  }
`;
