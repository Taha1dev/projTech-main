import Image from 'next/image'
import { features, landingPageContent } from '../constants'

// Main WhyChooseUs Component
export default function WhyChooseUs() {
  return (
    <section className='container mx-auto w-full py-8 md:py-16 text-white overflow-x-hidden'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 flex-row-reverse gap-8 lg:gap-16 items-center'>
          {/* Features Section */}
          <FeaturesSection features={features} />

          {/* Content Section */}
          <ContentSection content={landingPageContent.whyChooseUs} />
        </div>
      </div>
    </section>
  )
}

// Features Section Component
const FeaturesSection = ({ features }: any) => {
  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl shadow-lg glassy bg-[#898989] bg-opacity-5 min-h-96 z-20'>
      <BackgroundDecorations />

      {features.map((feature: any, index: any) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  )
}

// Background Decorations Component
const BackgroundDecorations = () => {
  return (
    <>
      <div className='-z-20 lg:block hidden absolute right-4 size-20 bg-blue-700 blurry-50 top-36'></div>
      <div className='-z-20 lg:block hidden absolute left-4 size-20 bg-blue-700 blurry-50 top-36'></div>
      <div className='-z-20 absolute left-64 top-4 size-20 bg-[#898888] blurry-50'></div>
    </>
  )
}

const FeatureCard = ({ feature }: any) => {
  return (
    <div className='p-4 sm:p-6 bg-[#17181E] border border-[#B3B3B3] rounded-xl text-center flex flex-col items-center gap-3 shadow-md hover:shadow-lg transition h-full'>
      <Image
        src={feature.icon}
        width={68}
        height={68}
        alt={`${feature.title} icon`}
      />
      <p className='font-medium text-sm sm:text-base'>{feature.title}</p>
    </div>
  )
}

const ContentSection = ({ content }: any) => {
  return (
    <div className='mt-8 lg:mt-0'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-4'>{content.title}</h2>

      <p className='text-[#B3B3B3] font-light text-sm sm:text-base mb-6'>
        {content.desc}
      </p>

      <StatsList stats={content.stats} />
    </div>
  )
}

const StatsList = ({ stats }: any) => {
  return (
    <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 text-lg sm:text-xl font-semibold'>
      {stats.map((stat: any, index: any) => (
        <StatItem key={index} stat={stat} />
      ))}
    </div>
  )
}

const StatItem = ({ stat }: any) => {
  return (
    <div className='text-center sm:text-left'>
      <span className='gradient-text text-2xl sm:text-3xl'>{stat.value}</span>
      <p className='text-[#B3B3B3] font-light text-sm sm:text-base'>
        {stat.label}
      </p>
    </div>
  )
}
