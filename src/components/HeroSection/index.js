import React from "react";
import {
  HeroContainer,
  HeroBg1,
  HeroBg2,
  HeroContent,
  HeroHeader,
  HeroText,
  HeroBtnContainer,
} from "./HeroSectionElements";
import { Btn } from "../Btn";
//credit: Stephen Leonardi from unsplash
import bg1 from "../../images/background-paralax-1.png";
import bg2 from "../../images/background-paralax-2.png";

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg1 image={bg1}>
        <HeroBg2 image={bg2}>
          <HeroContent>
            <HeroHeader>Ivan Yang</HeroHeader>
            <HeroText>Fullstack Developer</HeroText>
            <HeroBtnContainer>
              <Btn to="about" light="false">
                About Me
              </Btn>
            </HeroBtnContainer>
          </HeroContent>
        </HeroBg2>
      </HeroBg1>
    </HeroContainer>
  );
}
