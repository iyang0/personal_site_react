import React from 'react';
import { useOutsideClick } from '../../hooks/outsideClick';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';

export default function Home() {
  const [isOpen, setIsOpen, ref] = useOutsideClick(false);

  function toggleSidebar(){
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} innerRef={ref}/>
      <Navbar toggle={toggleSidebar} />
      <HeroSection />
    </div>
  )
}