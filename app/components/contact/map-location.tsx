import React from 'react'
import HeroComponent from '../hero-component'
import HeroTitleGradient from '../hero-title-gradient'
import Image from 'next/image'
import mapImage from '@/public/map.png'
import { MapPin } from 'lucide-react'
export default function MapLocation() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-8 md:gap-12 pt-12 md:pt-20 pb-8 px-4 sm:px-6'>
      <div className='space-y-3 md:space-y-4 text-center w-full flex items-center justify-center flex-col'>
        <HeroTitleGradient title='Our Location' />
        <p className='text-sm sm:text-base lg:text-lg text-white/90 max-w-full md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed'>
          From all corners of the world, our team is ready to handle your
          project with expertise and precision, delivering tailored solutions no
          matter where you are.
        </p>
      </div>

      <div className='flex items-center justify-center relative w-full h-full'>
        <Image
          className='w-full h-full object-cover rounded-xl'
          alt='Map Location'
          src={mapImage}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md p-8 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl flex flex-col gap-4 text-white items-center justify-center text-center shadow-xl'>
          <div className='p-4 bg-theme-primary/20 rounded-full border border-white/10'>
            <MapPin className='text-white' size={48} />
          </div>
          <p className='text-lg font-medium'>27 Division St</p>
          <p className='text-white/80'>Berlin, NY 10002</p>
          <p className='text-white/60'>GERMANY</p>
        </div>
      </div>
    </div>
  )
}
