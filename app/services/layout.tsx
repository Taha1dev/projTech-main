import React from 'react'
import HeroComponent from '../components/hero-component'
import { servicesContent } from '../constants'
import ContactSection from '../components/contact/contact-info'

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <HeroComponent title={servicesContent.title} sub={servicesContent.sub} />
      {children}
    </div>
  )
}
