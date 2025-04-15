import React from 'react'
interface HeroTitleGradientProps {
  title: string
}
export default function HeroTitleGradient({ title }: HeroTitleGradientProps) {
  return (
    <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] text-center font-medium bg-gradient-to-b from-[#FFFFFF] to-[#999999] via-[#fff] bg-clip-text text-transparent max-w-7xl'>
      {title}
    </h1>
  )
}
