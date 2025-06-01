import React from 'react';
import logo from '../assets/logo.png';
import contactImage from '../assets/contact_image.jpeg';

const ContactUsSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-black/70 rounded-lg py-12 px-16 max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-12 border-b-[8px] border-[#D4A373]">
  
        <div className="flex items-center justify-center">
          <img src={logo} alt="The Oasis Logo" className="h-[100px]" />
        </div>

        <div className="text-white font-['Open_Sans',_sans-serif] text-[18px]">
          <h3 className="font-bold uppercase text-[20px] mb-2">Our Location</h3>
          <p>600 North Main Street</p>
          <p>Sheboygan Falls, WI</p>
          <p>53085</p>
        </div>

        {/* 3rd Column: Contact */}
        <div className="text-white font-['Open_Sans',_sans-serif] text-[18px]">
          <h3 className="font-bold uppercase text-[20px] mb-2">Contact</h3>
          <p>(920) 467-4314</p>
          <a
            href="mailto:info@theoasishotelwi.com"
            className="inline-block mt-2 py-2 px-5 bg-[#D4A373] text-white no-underline font-['Open_Sans',_sans-serif] text-base transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md"
          >
            info@theoasishotelwi.com
          </a>
        </div>

        {/* 4th Column: Check-In/Out and Book Now */}
        <div className="text-white font-['Open_Sans',_sans-serif] text-[18px]">
          <p className="font-bold uppercase">Check In 3 PM</p>
          <p className="font-bold uppercase mb-4">Check Out 11 AM</p>
          <a
            href="https://direct-book.com/properties/OasisHotel"
            className="group inline-block py-2 px-5 bg-transparent text-white border border-[#E8D5B5] no-underline font-['Open_Sans',_sans-serif] text-base hover:pr-[30px] transition-all duration-300 relative after:content-['▶'] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;