import { aboutContent } from '@/app/constants'
import HeroComponent from '../hero-component'
import AboutServiceCard from './about-service-card'

export default function AboutServices() {
  const services = [
    {
      title: 'Mobile App Development',
      description:
        'Designing and developing high-performance mobile apps with seamless user experience, security, and cross-platform compatibility.',
    },
    {
      title: 'Website Development',
      description:
        'Creating dynamic, user-friendly, and responsive websites optimized for performance, security, and business growth.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Crafting intuitive UI/UX designs to enhance user experience, increase engagement, and optimize conversion rates.',
    },
    {
      title: 'Cloud Services & Infrastructure',
      description:
        'Deploying and managing cloud infrastructure, ensuring security, high availability, and seamless scalability for businesses.',
    },
    {
      title: 'AI & Data Analytics',
      description:
        'Leveraging AI, machine learning, and big data analytics to optimize decision-making and automate business processes.',
    },
    {
      title: 'IT Support & Project Management',
      description:
        'Providing expert technical support, maintenance, and agile project management to ensure seamless business operations.',
    },
  ]

  return (
    <div className='container mx-auto'>
      <HeroComponent
        title={aboutContent.services.title}
        sub={aboutContent.services.desc}
        className='!text-4xl font-semibold'
        isBlurry={false}
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {services.map((item, index) => {
          return (
            <AboutServiceCard
              key={index}
              desc={item.description}
              title={item.title}
            />
          )
        })}
      </div>
    </div>
  )
}
