import React from 'react'
import AboutHero from '../components/about/about-hero'
import AboutBreif from '../components/about/about-breif'
import AboutServices from '../components/about/about-services'
import AboutFooter from '../components/about/about-footer'

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <img
        src='/about-banner.jpg'
        alt='code image'
        className='object-cover h-[500px] w-full '
      />
      <AboutBreif />
      <img
        src='/mockups.png'
        alt='code image'
        className='object-contain p-10 w-full '
      />
      <AboutServices />
      <AboutFooter />
    </div>
  )
}
