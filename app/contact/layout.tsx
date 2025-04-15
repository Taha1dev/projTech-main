import React from 'react'
import HeroComponent from '../components/hero-component'
import { contactContent, faqContent } from '../constants'
import ContactSection from '../components/contact/contact-info'

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <HeroComponent
        title={contactContent.title}
        sub={contactContent.sub}
        children={<ContactSection />}
      />
      {children}
    </div>
  )
}
