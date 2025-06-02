import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-5 px-4 sm:px-10 bg-transparent absolute w-full top-0 z-10 shadow-sm">
      {/* Logo and Hamburger for Mobile */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link 
          to="#hero" 
          onClick={closeMenu}
          className="focus:outline-none"
        >
          <img src={logo} alt="The Oasis Logo" className="h-[40px] sm:h-[50px]" />
        </Link>
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col sm:flex-row list-none gap-4 sm:gap-[30px] font-['Open_Sans',_sans-serif] text-sm sm:text-base w-full sm:w-auto mt-4 sm:mt-0 ${
          isMenuOpen ? 'block' : 'hidden sm:flex'
        }`}
      >
        <li>
          <Link
            to="#about"
            onClick={closeMenu}
            className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300 block sm:inline-block py-2 sm:py-0"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="#rooms"
            onClick={closeMenu}
            className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300 block sm:inline-block py-2 sm:py-0"
          >
            Our Rooms
          </Link>
        </li>
        <li>
          <Link
            to="#amenities"
            onClick={closeMenu}
            className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300 block sm:inline-block py-2 sm:py-0"
          >
            Amenities
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            onClick={closeMenu}
            className="text-[#B0B0B0] no-underline hover:text-[#D4A373] transition-colors duration-300 block sm:inline-block py-2 sm:py-0"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Book Now Button */}
      <a
        href="https://direct-book.com/properties/OasisHotel"
        className="group flex items-center py-1.5 sm:py-2 px-3 sm:px-5 bg-transparent text-white border border-[#E8D5B5] no-underline font-['Open_Sans',_sans-serif] text-sm sm:text-base hover:pr-6 sm:hover:pr-[30px] transition-all duration-300 relative after:content-['→'] after:absolute after:right-1 sm:after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100 hover:after:right-2 sm:hover:after:right-4 mt-4 sm:mt-0"
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;