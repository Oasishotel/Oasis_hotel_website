import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/relaxing_lobby.jpeg';
import img2 from '../assets/King-Whirlpool-Room.jpg';
import img3 from '../assets/wooden-texture.jpg.png';
import img4 from '../assets/wooden-texture.jpg.png';
import img5 from '../assets/King-Whirlpool-Room.jpg';

const rooms = [
  {
    name: 'Two Queen Bed',
    images: [img1, img2, img3],
    description: 'This room offers two comfortable Queen Beds, complimentary Wi-Fi, free local calls, a desk with a chair, a phone, and a range of amenities for your convenience. Enjoy the convenience of a refrigerator and coffeemaker in the room, along with a hairdryer, iron/ironing board, and an alarm clock. Maintain your preferred climate with the self-controlled AC/Heat system. Additionally, take advantage of wake-up call services to start your day on time.'
  },
  {
    name: 'One King Bed',
    images: [img2, img3, img4],
    description: 'This inviting room boasts a comfortable King Bed, complimentary Wi-Fi, free local calls, a well-appointed desk with a chair, and essential amenities including a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Take control of your comfort with the self-regulated AC/Heat system, and ensure a timely start to your day with the convenient wake-up call services.'
  },
  {
    name: 'Double Queen Family Suite',
    images: [img3, img4, img5],
    description: 'Spacious suite featuring two Queen beds, a pull out loveseat, complimentary Wi-Fi, and free local calls. The room is equipped with a desk and chair, Jet Shower, and phone. Additionally, enjoy the convenience of a full kitchenette complete with cabinetry, refrigerator, and coffeemaker. For added convenience, amenities such as a hairdryer, iron/ironing board, and an alarm clock are provided. Take control of your well-being with the self-controlled AC/Heat system, ensuring a soothing stay.'
  },
  {
    name: 'One King Bed Accessible',
    images: [img4, img5, img1],
    description: 'Accessible Room with 1 King Bed offers complimentary Wi-Fi, free local calls, a desk with a chair, and essential amenities like a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Guests can regulate their own comfort with the self-controlled AC/Heat system, and wake up promptly with the available wake-up call services.'
  },
  {
    name: 'King Suite Whirlpool',
    images: [img5, img1, img2],
    description: 'This suite features a luxurious King Bed, complimentary Wi-Fi, free local calls, a desk with a chair, and a relaxing whirlpool. Additionally, amenities include a phone, refrigerator, coffeemaker, hairdryer, iron/ironing board, and an alarm clock. Guests can manage their own climate with the self-controlled AC/Heat system, and enjoy the convenience of wake-up call services.'
  },
];

const OurRooms = ({ id }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: windowWidth > 768, // Show arrows only on desktop
    appendDots: dots => (
      <div className="absolute bottom-4 w-full text-center">
        <ul className="m-0 p-0 list-none inline-flex"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 mx-1 rounded-full bg-[#D4A373] opacity-50 hover:opacity-75 focus:opacity-75 transition-opacity duration-200"></button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section id={id} className="bg-[#F8F1E5] py-12 sm:py-16 lg:py-20 px-4 sm:px-[5%] min-h-screen">
      <div className="md:flex md:items-start md:gap-8 max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="md:w-1/3 md:sticky md:top-0 p-4 mb-8 md:mb-0">
          <h2 className="font-['Playfair_Display',_serif] text-3xl sm:text-4xl lg:text-[42px] text-[#0c0c0c] mb-2 leading-tight tracking-wide">
            Our Rooms
          </h2>
          <h3 className="font-['Playfair_Display',_serif] text-2xl sm:text-3xl lg:text-[32px] italic text-[#D4A373] mb-4">
            Great Comfort
          </h3>
          <p className="font-['Open_Sans',_sans-serif] text-base sm:text-[18px] text-[#555] leading-relaxed">
            The Oasis has many room options with two beds, double queen family suite, king beds and more. Each room is equipped with a flat-screen TV featuring cable channels and a coffee maker for your convenience. We ensure that every room is furnished with fresh and comfortable bed linens and towels. Guests can indulge in a complimentary breakfast, truly transforming The Oasis into your "home away from home."
          </p>
        </div>

        {/* Right Column - Room Cards */}
        <div className="md:w-2/3">
          <div className="space-y-8 sm:space-y-12">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Room Image Slider */}
                <div className="h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden relative">
                  <Slider {...sliderSettings}>
                    {room.images.map((image, imgIndex) => (
                      <div key={imgIndex}>
                        <img
                          src={image}
                          alt={`${room.name} - ${imgIndex + 1}`}
                          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                
                {/* Room Details */}
                <div className="mt-4 sm:mt-6">
                  <h4 className="font-['Playfair_Display',_serif] text-xl sm:text-2xl lg:text-[24px] text-[#D4A373] text-center mb-2">
                    {room.name}
                  </h4>
                  <p className="font-['Open_Sans',_sans-serif] text-sm sm:text-base text-[#555] text-center leading-relaxed mb-4 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                    {room.description}
                  </p>
                  <div className="text-center">
                    <a
                      href="https://direct-book.com/properties/OasisHotel"
                      className="inline-block py-2 px-4 sm:py-2 sm:px-6 bg-[#D4A373] text-[#0c0c0c] font-['Open_Sans',_sans-serif] text-sm font-bold uppercase tracking-wider no-underline rounded-md transition-all duration-300 hover:bg-[#c18d5d] hover:shadow-md transform hover:-translate-y-1"
                    >
                      Book Room
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRooms;