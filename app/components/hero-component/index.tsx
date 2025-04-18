import React, { ReactNode } from 'react'
import GradientText from '../gradient-text'
import Blurlayer from '../ui/Blurlayer'
interface HeroComponentProps {
  title: string
  sub: string
  className?: string
  isBlurry?: boolean
  children?: ReactNode
}
export default function HeroComponent({
  children,
  sub,
  className,
  title,
  isBlurry,
}: HeroComponentProps) {
  return (
    <div className='container mx-auto flex flex-col gap-20 items-center relative pt-7 pb-14'>
      {isBlurry && <Blurlayer />}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col gap-6 sm:gap-8 items-center justify-center'>
        <GradientText className={className} title={title} />

        <p className='text-base sm:text-lg lg:text-xl text-white max-w-full sm:max-w-2xl lg:max-w-4xl text-center'>
          {sub}
        </p>
        {children}
      </div>
    </div>
  )
}
