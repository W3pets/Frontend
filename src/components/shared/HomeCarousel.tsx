import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/dog-banner-again.jpg',
      title: 'Find Your Perfect Pet Companion',
      description:
        'Browse thousands of pets or list your own. Your new best friend is just a click away!',
    },
    {
      image: '/chicken-banner-again.jpeg',
      title: 'Another Title',
      description: 'Another description for the second image.',
    },
    {
      image: '/cat-banner.jpg',
      title: 'Yet Another Title',
      description: 'Another description for the third image.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleIndicatorClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-5 flex h-60 gap-4 text-white">
      {/* <Image src='/hero-img.png' alt='W3pets' width={1000} height={1000} className='w-full h-full object-cover'/> */}

      <div className="relative h-full w-9/12 overflow-hidden rounded-md">
        <div
          className="relative flex h-full w-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 right-2 flex flex-col items-center p-4 text-white">
                <h2 className="text-xl">{slide.title}</h2>
                <p className="max-w-[23rem] text-center text-xs font-medium">
                  {slide.description}
                </p>
                <button className="mt-4 w-fit rounded-sm bg-tertiary px-4 py-1 font-light text-white">
                  Find now!
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="absolute bottom-2 flex w-full justify-center">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`mx-[0.39rem] h-[0.6rem] w-[0.6rem] cursor-pointer rounded-full ${currentIndex === index ? 'bg-white' : 'bg-[#757575]'}`}
              onClick={() => handleIndicatorClick(index)}
              style={{ zIndex: 10 }}
            />
          ))}
        </div>
      </div>

      <div className="flex h-full w-3/12 flex-col justify-between">
        <div className="h-10/12 flex w-full flex-col items-center justify-center gap-2 rounded-md bg-[#8B4513] px-2 py-3 text-center font-light">
          <p>Effortless pet sales. Wide audience. Zero cost.</p>
          <Image
            src="/hero-plus-icon.png"
            alt="sell"
            width={1000}
            height={1000}
            className="w-[4.5rem]"
          />
          <p className="text-center font-light">Sell on W3pets now!</p>
        </div>

        <div className="h-4/12 w-full rounded-md bg-tertiary px-2 py-2 text-center">
          <p>High demand, sell chickens!</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
