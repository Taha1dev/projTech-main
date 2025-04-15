import { landingPageContent } from '../constants'
import MagicButton from './ui/MagicButton'

export default function Hero() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col gap-6 sm:gap-8 items-center justify-center'>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] text-center font-medium bg-gradient-to-b from-[#FFFFFF] to-[#999999] via-[#fff] bg-clip-text text-transparent max-w-7xl'>
        {landingPageContent.hero.title}
      </h1>

      <p className='text-base sm:text-lg lg:text-xl text-white max-w-full sm:max-w-2xl lg:max-w-4xl text-center'>
        {landingPageContent.hero.sub}
      </p>

      <MagicButton value={`Let's work together`} />
    </div>
  )
}
