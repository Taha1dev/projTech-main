import React from 'react'
import { projectsContent } from '../constants'
import HeroComponent from '../components/hero-component'

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <HeroComponent title={projectsContent.title} sub={projectsContent.sub} />
      {children}
    </div>
  )
}
