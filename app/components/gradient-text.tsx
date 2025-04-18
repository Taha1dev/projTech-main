import { cn } from '@/lib/utils'
import React from 'react'
interface HeroTitleGradientProps {
  title: string
  className?: string
}
export default function GradientText({
  title,
  className,
}: HeroTitleGradientProps) {
  return (
    <h1
      className={cn(
        'text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-[64px] text-center font-medium bg-gradient-to-b from-[#FFFFFF] to-[#999999] via-[#fff] bg-clip-text text-transparent max-w-7xl py-2',
        className,
      )}
    >
      {title}
    </h1>
  )
}
