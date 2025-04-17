import ContactForm from '../components/contact/contact-form'
import GradientText from '../components/gradient-text'
import IZDBSection from '../components/projects/projects'
import { ServiceCard } from '../components/services/service-card'
import { contactContent, servicesContent } from '../constants'

const services = [
  {
    title: 'Website Development',
    description:
      'Creating dynamic, user-friendly websites optimized for performance and growth.',
    image: '/sp/2.png',
  },
  {
    title: 'Mobile App Development',
    description:
      'When you have issues on mobile pages, we find them out by ranking differences.',
    image: '/sp/1.png',
  },
  {
    title: 'AI & Data Analytics',
    description:
      'Using AI, machine learning, and big data to optimize decisions and automate processes.',
    image: '/sp/6.png',
  },
  {
    title: 'UI/UX Design',
    description:
      'The pages that create cannibalization can be merged for a quick fix to regain positions.',
    image: '/sp/5.png',
  },
  {
    title: 'Cloud Services & Infrastructure',
    description:
      'The best market intelligence is provided by SERP feature-based CTR calculation.',
    image: '/sp/3.png',
  },
  {
    title: 'IT Support & Project Management',
    description:
      'A few position changes can bring the most traffic by using the opportunity metric.',
    image: '/sp/4.png',
  },
]

export default function ServicesPage() {
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className='lg:mt-20 mt-10 flex flex-col items-center justify-center gap-12'>
        <GradientText title={servicesContent.form} />
        {/* <ContactForm /> */}
        <IZDBSection />
      </div>
    </section>
  )
}
