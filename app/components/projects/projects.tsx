'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import MagicButton from '../ui/MagicButton'

export default function IZDBPage() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const slides = [
    {
      id: 1,
      image: '/mock.png',
      alt: 'IZDB website mockup showing mosque interior',
    },
    {
      id: 2,
      image: '/mock.png',
      alt: 'IZDB website mockup showing community activities',
    },
    {
      id: 3,
      image: '/mock.png',
      alt: 'IZDB website mockup showing educational programs',
    },
    {
      id: 4,
      image: '/mock.png',
      alt: 'IZDB website mockup showing events calendar',
    },
    {
      id: 5,
      image: '/mock.png',
      alt: 'IZDB website mockup showing contact information',
    },
    {
      id: 6,
      image: '/project.png',
      alt: 'IZDB website mockup showing mobile app',
    },
  ]

  const handleBulletClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  return (
    <div className='flex flex-col text-white'>
      <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-start'>
        {/* Left side with description and vertical bullets */}
        <div className='w-full md:w-2/5 flex flex-col relative'>
          {/* Vertical navigation bullets */}
          <div className='absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4'>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-500'
                }`}
                onClick={() => handleBulletClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className='pl-10'>
            <h1 className='text-3xl font-bold mb-6'>IZDB</h1>

            <p className='text-lg mb-8'>
              The Interkulturelles Zentrum für Dialog und Bildung e.V. (IZDB) in
              Berlin is a vibrant non-profit organization that not only
              functions as a mosque center but also plays a crucial role in
              fostering social dialogue. It actively builds networks within the
              community and offers a diverse array of educational programs
              tailored for individuals of all ages. From workshops to cultural
              events, the IZDB is dedicated to enhancing understanding and
              cooperation among different cultural groups.
            </p>

            <MagicButton value='Check website' />
          </div>
        </div>

        {/* Right side with vertical slider */}
        <div className='w-full md:w-3/5'>
          {mounted && (
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              direction='vertical'
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              className='h-[600px] rounded-xl overflow-hidden'
            >
              {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div className='relative h-full'>
                    <Image
                      src={slide.image || '/placeholder.svg'}
                      alt={slide.alt}
                      fill
                      className='object-cover'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}
