import React from 'react';
import backgroundImage from '../assets/background.jpg.jpg';
import woodenTexture from '../assets/wooden-texture.jpg.png';
import roomImage from '../assets/King-Whirlpool-Room.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative flex items-start justify-center gap-12 h-[120vh] px-[5%] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      <div className="w-[55%] text-white z-[2] mt-[150px]">
        <h1 className="font-['Playfair_Display',_serif] font-bold text-[48px] leading-tight">
          The Oasis Hotel in Sheboygan Falls, WI
        </h1>
        <h2 className="mb-5">
          <span className="font-['Montserrat',_sans-serif] font-bold uppercase text-[60px] leading-tight">
            Your Home Away
          </span>
          <br />
          <span className="font-['Montserrat',_sans-serif] font-extrabold uppercase text-[60px] leading-tight text-[#D4A373]">
            From Home.
          </span>
        </h2>
        <p className="font-['Open_Sans',_sans-serif] text-[18px] leading-relaxed max-w-[600px] text-[#B0B0B0] mb-10">
          Now fully renovated and under new ownership, The Oasis is conveniently located in Sheboygan Falls, and not too far from Plymouth, Elkhart Lake & Kohler, WI. We offer many amenities such as a bar and pool to enhance your stay and are within driving distance from Road America and many other attractions.
        </p>
        <a
          href="https://direct-book.com/properties/OasisHotel"
          className="inline-block py-2 px-4 bg-transparent text-white border border-[#E8D5B5] no-underline font-['Open_Sans',_sans-serif] text-sm hover:pr-8 transition-all duration-300 relative after:content-['→'] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-[#E8D5B5] after:opacity-0 hover:after:opacity-100 hover:after:right-4"
        >
          Book Now
        </a>
      </div>

      <div className="w-[35%] h-[60%] relative overflow-visible mt-[150px]">
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
          className="absolute w-full h-full object-contain top-1/2 left-[-10%] transform -translate-y-1/2 z-[2]"
        />
      </div>
    </section>
  );
};

export default HeroSection;