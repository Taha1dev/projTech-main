import React from 'react'
import ProjectsSwiper from '../components/projects/projects'
import { projectsContent } from '../constants'
import GradientText from '../components/gradient-text'
import ContactForm from '../components/contact/contact-form'

export default function Projects() {
  return (
    <section className='container mx-auto px-4 py-16'>
      <ProjectsSwiper />
      <div className='lg:mt-20 mt-10 flex flex-col items-center justify-center gap-12'>
        <GradientText title={projectsContent.form} />
        <ContactForm />
      </div>
    </section>
  )
}
