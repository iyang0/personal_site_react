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
  Img
} from "./ContentElements";

export default function ContentSection() {
  return (
    <ContentContainer>
      <InfoWrapper>
        <InfoRow>
          <Col1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Btn to="home">Button</Btn>
              </BtnWrap>
            </TextWrapper>
          </Col1>
          <Col2>
            <ImgWrap>
              <Img/>
            </ImgWrap>
          </Col2>
        </InfoRow>
      </InfoWrapper>
    </ContentContainer>
  );
}
