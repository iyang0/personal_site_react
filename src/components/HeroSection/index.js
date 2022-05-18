import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroText
} from './HeroSectionElements';
import bg from '../../images/background.jpg'; //credit: Stephen Leonardi from unsplash

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg image={bg}>
        <HeroText>
          test
        </HeroText>
      </HeroBg>
    </HeroContainer>
  )
}
