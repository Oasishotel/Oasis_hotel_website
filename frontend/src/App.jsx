import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StayWithUs from './components/StayWithUsSection';
import OurRooms from './components/OurRooms';
import Testimonial from './components/Testimonial';
import Amenities from './components/Amenities';
import Landmark from './components/Landmark';
import ContactUsSection from './components/ContactUsSection';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <HeroSection id="hero" />
        <StayWithUs id="about" />
        <OurRooms id="rooms" />
        <Testimonial />
        <Amenities id="amenities" />
        <Landmark />
        <ContactUsSection id="contact" />
      </div>
    </Router>
  );
};

export default App;