'use client'
import bg1 from '@/public/background/bg1.jpg'
import bg2 from '@/public/background/bg2.jpg'
import bg3 from '@/public/background/bg3.jpg'

const StickyScroll = () => {
  return (
    <div className='relative h-[300vh] flex flex-col gap-28'>
      <div
        className='sticky z-[1] top-0 left-0 w-full h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${bg1.src})` }}
      />
      <div
        className='sticky z-[2] top-0 left-0 w-full h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${bg2.src})` }}
      />
      <div
        className='sticky z-[3] top-0 left-0 w-full h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${bg3.src})` }}
      />
    </div>
  )
}

export default StickyScroll
