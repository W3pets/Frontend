import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Carousel = () => {
  const slides = [
    {
      image: '/hero-img.png',
      title: 'Find Your Perfect Pet Companion',
      description: 'Browse thousands of pets or list your own. Your new best friend is just a click away!',
    },
    {
      image: '/Chicken-pic.png',
      title: 'Another Title',
      description: 'Another description for the second image.',
    },
    {
      image: '/dog-pic.png',
      title: 'Yet Another Title',
      description: 'Another description for the third image.',
    },
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} width={1000} height={1000} className="w-full h-full object-cover" />
          {/* <div className="relative h-64 flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-center">{slide.description}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Find now!</button>
            </div>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
