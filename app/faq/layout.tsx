import React from 'react'
import HeroComponent from '../components/hero-component'
import { faqContent } from '../constants'

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <HeroComponent title={faqContent.title} sub={faqContent.sub} />
      {children}
    </div>
  )
}
