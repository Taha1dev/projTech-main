import Image from 'next/image'
import square from '@/public/sq.png'
import { sponsers } from '../constants'

export default function Sponsers() {
  return (
    <div className='relative'>
      <Image
        className='-z-10 absolute lg:block hidden left-4 bottom-2 animate-bounce-slow transition duration-1000'
        src={square}
        alt='square'
      />

      <div className='z-0 lg:block hidden absolute right-24 bottom-16 bg-gradient-to-br from-[#2F3868] to-[#504DFF] blurry-100 size-0 lg:size-28'></div>

      <div className='relative z-[2] bg-[#4D5659] bg-opacity-5 flex justify-evenly py-4 items-center gap-16 backdrop-blur-lg flex-col sm:flex-row'>
        {sponsers.reverse().map(item => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            height={item.height}
            width={item.width}
            loading={item.loading}
          />
        ))}
      </div>
    </div>
  )
}
