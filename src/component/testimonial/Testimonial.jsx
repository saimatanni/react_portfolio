import React from 'react'
import './testimonial.css'
import {  Pagination,  } from 'swiper';
import AVT1 from '../../assets/avatar1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const Testimonial = () => {

  const data =[
    {
      avatar: AVT1,
      name: "Tina Snow",
      review:"Depending on how often you go back and forth between users, you may also want to consider keeping all of the items for all users in the "
    }
  ]
  return (
    <section id='testimonial'>
 <Swiper className="mySwiper"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
 
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </section>
  )
}

export default Testimonial