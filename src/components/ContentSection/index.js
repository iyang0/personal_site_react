import React from "react";
import { Btn } from "../Btn";
import {
  ContentContainer,
  InfoWrapper,
  InfoRow,
  Col,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./ContentElements";

export default function ContentSection() {
  return (
    <ContentContainer>
      <InfoWrapper>
        <InfoRow>
          <Col>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Btn to="home">Button</Btn>
              </BtnWrap>
            </TextWrapper>
          </Col>
        </InfoRow>
      </InfoWrapper>
    </ContentContainer>
  );
}
