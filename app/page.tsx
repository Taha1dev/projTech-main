'use client'

import Footer from './components/footer/footer'
import {
  GridPattern,
  Hero,
  Header,
  Sponsers,
  StickyScroll,
  WhyChooseUs,
  ServicesContainer,
  Blurlayer,
  DevelopmentProcess,
  Testimonials
} from './constants/barel.components'

export default function Home() {
  return (
    <div className='bg-foreground'>
      <GridPattern />
      <Header />
      <div className='container mx-auto flex flex-col gap-20 items-center relative mt-7 mb-14'>
        <Blurlayer />
        <Hero />
      </div>
      <Sponsers />
      <WhyChooseUs />
      <StickyScroll />
      <ServicesContainer />
      <DevelopmentProcess />
      <Testimonials />
      <Footer />
      
    </div>
  )
}
