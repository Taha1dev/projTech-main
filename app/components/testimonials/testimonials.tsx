'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TestimonialCard from './testimonials-card'
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem, ipsum',
      rate: 5,
    },
    {
      id: 2,
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem, ipsum',
      rate: 3,
    },
    {
      id: 3,
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem, ipsum',
      rate: 4,
    },
    {
      id: 4,
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem, ipsum',
      rate: 5,
    },
    {
      id: 5,
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Lorem, ipsum',
      rate: 3,
    },
  ]

  return (
    <section className='p-6 md:p-10 lg:p-12 text-center lg:pt-20 pt-8'>
      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className='mySwiper'
        >
          {testimonials?.map(testimonial => (
            <SwiperSlide key={testimonial.id} className='flex justify-center'>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='custom-pagination mt-10'></div>
      </div>
    </section>
  )
}
