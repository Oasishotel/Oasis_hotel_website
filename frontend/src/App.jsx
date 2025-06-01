import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StayWithUs from './components/StayWithUsSection';
import OurRooms from './components/OurRooms';
import Testimonial from './components/Testimonial';
import Amenities from './components/Amenities';
import Landmark from './components/Landmark';
import ContactUsSection from './components/ContactUsSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StayWithUs />
      <OurRooms />
      <Testimonial />
      <Amenities />
      <Landmark />
      <ContactUsSection />
    </div>
  );
};

export default App;