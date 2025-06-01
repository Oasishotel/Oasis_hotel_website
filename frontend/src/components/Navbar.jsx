import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-transparent absolute w-full top-0 z-10 shadow-sm">

      <div>
        <img src={logo} alt="The Oasis Logo" className="h-[50px]" />
      </div>

      <ul className="flex list-none gap-[30px] font-['Open_Sans',_sans-serif] text-base">
        <li>
          <a href="#about" className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#rooms" className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300">
            Our Rooms
          </a>
        </li>
        <li>
          <a href="#amenities" className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300">
            Amenities
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>

      <a
        href="https://direct-book.com/properties/OasisHotel"
        className="group flex items-center py-2 px-5 bg-transparent text-white border border-[#E8D5B5] no-underline font-['Open_Sans',_sans-serif] text-base hover:pr-[30px] transition-all duration-300 relative after:content-['→'] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100"
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;