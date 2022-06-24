import React, { useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg1,
  HeroBg2,
  HeroContent,
  HeroHeader,
  HeroText,
  HeroBtnContainer,
  ChevronDown,
} from "./HeroSectionElements";
import { Btn } from "../Btn";
//credit: Stephen Leonardi from unsplash
import bg1 from "../../images/background-paralax-1.png";
import bg2 from "../../images/background-paralax-2.png";

export default function HeroSection() {
  const [hover, setHover] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <HeroContainer>
      <HeroBg1 image={bg1} offset={offsetY} />
      <HeroBg2 image={bg2} offset={offsetY} />
      <HeroContent>
        <HeroHeader>Ivan Yang</HeroHeader>
        <HeroText>Fullstack Developer</HeroText>
        <HeroBtnContainer>
          <Btn
                to="about"
                dark="true"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              >
                {hover ? <ChevronDown/> : "About Me" }
              </Btn>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
}
