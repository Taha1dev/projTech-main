import { aboutContent } from '@/app/constants'
import HeroComponent from '../hero-component'
import AboutFooterCard from './about-footer-card'

export default function AboutFooter() {
  const data = [
    {
      title: 'Continuous Innovation',
      description:
        'Innovation drives us forward, ensuring we stay ahead in a changing world.',
    },
    {
      title: 'Business Growth',
      description:
        'We create impactful solutions that help businesses grow and succeed effortlessly.',
    },
    {
      title: 'Trusted Partnerships',
      description:
        'We build long-term partnerships based on trust, transparency, and client satisfaction.',
    },
    {
      title: 'Passionate Team',
      description:
        'Our passionate team is committed to delivering excellence, creativity, and innovation.',
    },
  ]
  return (
    <div className='container mx-auto'>
      <HeroComponent
        title={aboutContent.footer.title}
        sub={aboutContent.footer.desc}
        className='!text-4xl font-semibold'
        isBlurry={false}
      />
      <div className='max-w-5xl mx-auto grid gird-cols-1 lg:grid-cols-2 gap-8'>
        {data.map((item, index) => {
          return (
            <AboutFooterCard
              key={index}
              title={item.title}
              desc={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}
