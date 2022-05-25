import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroHeader,
  HeroText,
  HeroBtnContainer
} from './HeroSectionElements';
import {Btn} from '../Btn';
import bg from '../../images/background.jpg'; //credit: Stephen Leonardi from unsplash

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg image={bg}>
        <HeroContent>
          <HeroHeader>
            Ivan Yang
          </HeroHeader>
          <HeroText>
            Fullstack Developer
          </HeroText>
          <HeroBtnContainer>
            <Btn to='about'
                light='false'>
              About Me
            </Btn>
          </HeroBtnContainer>
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  )
}
