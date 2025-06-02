import React from 'react';
import roomImage from '../assets/King-Whirlpool-Room.jpg';
import woodenTexture from '../assets/wooden-texture.jpg.png';

const amenitiesList = [
  'Free Wi-Fi',
  'Complimentary Breakfast',
  '24-Hour Reception Desk',
  'Indoor Pool & Hot Tub',
  'Facilities for disabled guests',
  'Express Check-out',
  'Laundry Facilities',
  'Bar',
  'Coffee Maker in all rooms',
  'Fitness Center',
];

const Amenities = ({ id }) => {
  return (
    <section id={id} className="bg-white py-8 sm:py-12 lg:py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Left Column: Overlapping Image with Wooden Texture */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[60vh] relative overflow-visible mt-6">
            <div
              className="absolute w-full h-full right-0 z-[1] bg-[#A68B5A] bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url(${woodenTexture})`,
                backgroundBlendMode: 'overlay',
              }}
            />
            <img
              src={roomImage}
              alt="King Whirlpool Room"
              className="absolute w-full max-w-[90%] sm:max-w-[80%] lg:max-w-full h-full object-contain top-1/2 left-[-5%] sm:left-[-8%] lg:left-[-10%] transform -translate-y-1/2 z-[2]"
            />
          </div>

          {/* Right Column: Amenities List */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6">
            <p className="font-['Montserrat',_sans-serif] text-sm sm:text-base font-bold uppercase text-[#555] mb-2">
              Complimentary Breakfast, Bar & More
            </p>
            <h2 className="font-['Montserrat',_sans-serif] text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase text-[#0c0c0c] mb-4 leading-tight">
              Hotel Amenities
            </h2>
            <ul className="space-y-3 mb-6">
              {amenitiesList.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A373] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-['Open_Sans',_sans-serif] text-base sm:text-lg text-[#555]">
                    {amenity}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="https://direct-book.com/properties/OasisHotel"
                className="inline-block py-2 sm:py-3 px-6 sm:px-8 bg-[#D4A373] text-[#FFFFFF] font-['Open_Sans',_sans-serif] text-sm sm:text-base font-bold uppercase tracking-wider no-underline transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md transform hover:-translate-y-1"
              >
                Book a Room Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;