import styled from "styled-components";
import {
  themeCloud,
  themeOffBlack,
  themePink,
  themeRed,
  themeTan,
} from "../../consts/consts";

export const ContentContainer = styled.div`
  color: white;
  background: ${({ lightTheme }) => (lightTheme ? themeCloud : themeOffBlack)};
  position: relative;

  @media screen and (max-width: 780px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 24px 0;
  justify-content: center;

  @media screen and (max-width: 780px) {
    height: 150vh;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 780px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: ${({ lightTheme }) => (lightTheme ? themeRed : themePink)};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightTheme }) => (lightTheme ? "black" : "white")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ lightTheme }) => (lightTheme ? "black" : "white")};
`;

export const ImgWrap = styled.div`
  max-width: 25rem;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  border-radius: 15% 30% 15% 30%;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${themeTan};
  transition: ease-in-out 0.2s;

  :hover {
    color: ${themePink};
  }
`;

export const BlendLight = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${themeCloud} 100%
     );
  height: 3.5rem;
  width: 100%;
  z-index: 2;
`;

export const BlendDark = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      ${themeOffBlack} 100%
     );
  height: 3.5rem;
  width: 100%;
  z-index: 2;
`;
