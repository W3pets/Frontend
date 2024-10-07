import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: '/dog-banner-again.jpg',
      title: 'Find Your Perfect Pet Companion',
      description: 'Browse thousands of pets or list your own. Your new best friend is just a click away!',
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

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='h-60 text-white flex gap-4 mb-5'>
      {/* <Image src='/hero-img.png' alt='W3pets' width={1000} height={1000} className='w-full h-full object-cover'/> */}

      <div className="relative w-9/12 h-full rounded-md overflow-hidden">
  <div className="relative h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
    {slides.map((slide, index) => (
      <div key={index} className="w-full h-full flex-shrink-0 relative">
        <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        <div className="absolute right-2 bottom-3 items-center flex flex-col text-white p-4">
          <h2 className="text-xl">{slide.title}</h2>
          <p className="text-center text-xs  font-medium max-w-[23rem]">{slide.description}</p>
          <button className="mt-4 bg-tertiary text-white px-4 py-1 w-fit rounded-sm font-light">Find now!</button>
        </div>
      </div>
    ))}
  </div>
  {/* Indicators */}
  <div className="absolute bottom-2 w-full flex justify-center">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`w-[0.6rem] h-[0.6rem] rounded-full mx-[0.39rem] cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-[#757575]'}`}
        onClick={() => handleIndicatorClick(index)}
        style={{ zIndex: 10 }}
      />
    ))}
  </div>
</div>


      <div className='w-3/12 h-full flex flex-col justify-between'>
        <div className='w-full font-light text-center h-10/12 bg-[#8B4513] px-2 py-3 rounded-md flex flex-col gap-2 items-center justify-center'>
        <p>Effortless pet sales. Wide audience. Zero cost.</p>
        <Image src='/hero-plus-icon.png' alt='sell' width={1000} height={1000} className='w-[4.5rem]' />
        <p className='text-center font-light'>Sell on W3pets now!</p>
        </div>
        
        <div className='w-full h-4/12 text-center bg-tertiary px-2 py-2 rounded-md'>
        <p>High demand, sell chickens!</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel