import React from 'react';
import { useOutsideClick } from '../../hooks/outsideClick';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import { aboutMeContent, interestsContent } from '../../components/ContentSection/Data';
import ListSection from '../../components/ListSection';
import Footer from '../../components/Footer';

export default function Home() {
  const [isOpen, setIsOpen, ref] = useOutsideClick(false);

  function toggleSidebar(){
    setIsOpen(!isOpen);
  }

  return (
    <div id='top'>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} innerRef={ref}/>
      <Navbar toggle={toggleSidebar} />
      <HeroSection />
      <ContentSection {...aboutMeContent} />
      <ContentSection {...interestsContent} />
      <ListSection />
      <Footer />
    </div>
  )
}
