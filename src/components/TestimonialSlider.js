import React from 'react';

// import Swiper React Component
import { Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import 'swiper/css/pagination';

import {Pagination} from 'swiper';

import { slider   } from "../data"


const TestimonialSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView:1,
      spaceBetween:18,
    },
    768: {
      slidesPerView:2,
      spaceBetween:20,
    },
    1024: {
      slidesPerView:3,
      spaceBetween:30,
    }
  }}>
    {slider.map((slider, index) => {
      const {name , image , message,email } = slider
      return <SwiperSlide className='rounded-2xl p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35] ' key={index}>
          <p className='mb-6 min-h-[100px] text-[15px]'>{message}</p>
          <div className='flex flex-col gap-x-4 md:flex-row mb:items-center'>
            <div className='w-14'>
              <img className='mb-3 md:mb-0'  src={image} alt="/" />
            </div>
            <div>
              <div className=' font-medium text-base'>{name}</div>
              <div className=' font-medium text-rose-600'>{email}</div>
            </div>

          </div>

      </SwiperSlide>
    })}
  </Swiper>;
};

export default TestimonialSlider;
