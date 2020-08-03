import React from 'react';
import "./App.css";
import NavBar from './NavBar';
import HeaderMain from './HeaderMain';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CopyrightSection from './CopyrightSection';
import ScrolltopButton from './ScrolltopButton';
import Modals from './Modals';

const App = () =>{
  return (
    <React.Fragment>
      <NavBar />
      <HeaderMain />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyrightSection />
      <ScrolltopButton  />
      <Modals />
    </React.Fragment>
  )
}

export default App