import React from "react";
import { Btn } from "../Btn";
import {
  ContentContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Col2,
  ImgWrap,
  Img,
} from "./ContentElements";

export default function ContentSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) {
  return (
    <ContentContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Col1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darktext={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Btn to="home">{buttonLabel}</Btn>
              </BtnWrap>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Col2>
        </InfoRow>
      </InfoWrapper>
    </ContentContainer>
  );
}
