import React from 'react';
import barImage from '../assets/barimage.jpeg';
import frontDeskImage from '../assets/Front-desk-980x735.webp';
import lobbyImage from '../assets/relaxing_lobby.jpeg';
import breakfastImage from '../assets/Lobby-Vending-980x552.webp';

const StayWithUs = () => {
  return (
    <section className="relative bg-white py-20 px-[5%]">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A373] via-[#E8D5B5] to-[#D4A373]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {/* Full-width content section */}
          <div className="bg-[#F8F1E5] p-12">
            <div className="mb-10 text-center">
              <h2 className="font-['Playfair_Display',_serif] text-[42px] text-[#0c0c0c] mb-2 tracking-wide">
                STAY WITH US
              </h2>
              <h3 className="font-['Playfair_Display',_serif] text-[32px] text-[#D4A373] italic">
                Unparalleled Service
              </h3>
            </div>
            
            <p className="font-['Open_Sans',_sans-serif] text-[18px] text-[#555] mb-10 leading-relaxed max-w-4xl mx-auto">
              The Oasis hotel in Sheboygan Falls Wisconsin, offers lodging options featuring a bar, pool, hot tub, laundry facilities, and complimentary private parking. Additionally, air-conditioned rooms equipped with free Wi-Fi are available. Guests can benefit from a 24-hour front desk and an on-site ATM for added convenience.
            </p>
            
            {/* Image Grid - 2x2 with larger images */}
            <div className="grid grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
              <div className="group overflow-hidden">
                <div className="h-[320px] overflow-hidden rounded-lg">
                  <img 
                    src={barImage} 
                    alt="Bar in Sheboygan Falls WI" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Bar in Sheboygan Falls WI
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[320px] overflow-hidden rounded-lg">
                  <img 
                    src={frontDeskImage} 
                    alt="24-Hours Front Desk" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  24-Hours Front Desk
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[320px] overflow-hidden rounded-lg">
                  <img 
                    src={lobbyImage} 
                    alt="Relaxing Lobby" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Relaxing Lobby
                </p>
              </div>
              
              <div className="group overflow-hidden">
                <div className="h-[320px] overflow-hidden rounded-lg">
                  <img 
                    src={breakfastImage} 
                    alt="Complimentary Breakfast" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="font-['Open_Sans',_sans-serif] text-[18px] text-[#D4A373] text-center mt-3 font-semibold">
                  Complimentary Breakfast
                </p>
              </div>
            </div>
            
            {/* Book Now Button */}
            <div className="text-center">
              <a
                href="https://direct-book.com/properties/OasisHotel"
                className="inline-block py-3 px-8 bg-[#D4A373] text-[#0c0c0c] font-['Open_Sans',_sans-serif] text-[18px] font-bold uppercase tracking-wider no-underline transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-lg transform hover:scale-105"
              >
                Book a Room Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayWithUs;