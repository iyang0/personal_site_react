import styled from "styled-components";
import { themeCloud, themeGrey, themeOffBlack } from "../../consts/consts";

export const ListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${themeOffBlack};
  padding-bottom: 2rem;
  padding-top: 4rem;
`;

export const ItemsWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    margin: 2rem;
    padding: 0 20px;
  }
`;

export const ItemCard = styled.div`
  position: relative;
  background: ${themeCloud};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.02s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const LinkLeft = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
`;

export const LeftLinkWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGrey};
  border-radius: 10px 0 0 10px;
  z-index: 10;
  opacity: 0;
  transition: all .3s ease-in-out;

  &:hover{
    opacity: 80%;
  }
`;

export const LinkRight = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0;
`;

export const RightLinkWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGrey};
  border-radius: 0 10px 10px 0;
  z-index: 10;
  opacity: 0;
  transition: all .3s ease-in-out;

  &:hover{
    opacity: 80%;
  }
`;

export const ItemImage = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
  color: ${themeCloud};
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;
