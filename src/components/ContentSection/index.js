import React from "react";
import {
  ContentContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Col2,
  ImgWrap,
  Img,
  BlendLight,
  BlendDark,
} from "./ContentElements";

export default function ContentSection({
  lightTheme,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  img,
  alt,
  lightNext,
}) {
  return (
    <ContentContainer lightTheme={lightTheme} id={id} lightAfter={lightNext}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Col1>
            <TextWrapper>
              <TopLine lightTheme={lightTheme}>{topLine}</TopLine>
              <Heading lightTheme={lightTheme}>{headLine}</Heading>
              <Subtitle lightTheme={lightTheme}>{description}</Subtitle>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Col2>
        </InfoRow>
      </InfoWrapper>
      {lightNext ? <BlendLight /> : <BlendDark />}
    </ContentContainer>
  );
}
