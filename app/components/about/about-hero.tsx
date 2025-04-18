import Link from 'next/link'
import MagicButton from '../ui/MagicButton'
import CodeCard from './code-card'

export default function AboutHero() {
  return (
    <main className=' text-white overflow-hidden relative py-12'>
      <div className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='space-y-8'>
            <p className='text-gray-300 text-lg md:text-xl'>
              "The ideas are yours. The solutions are ours."
            </p>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
              Innovating the Future <br />
              of <span className='text-theme-primary'>Technology</span>
            </h1>

            <p className='text-[#A4A8AC] max-w-lg'>
              ProTech is a leading IT solutions provider, dedicated to
              delivering cutting-edge technology services that help businesses
              thrive in a digital world.
            </p>

            <div>
              <MagicButton value="Let's work together" />
            </div>
          </div>

          <CodeCard />
        </div>
      </div>

      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full filter blur-3xl'></div>
    </main>
  )
}
