import React from 'react'
import HeroComponent from '../hero-component'
import { aboutContent } from '@/app/constants'
import MagicButton from '../ui/MagicButton'

export default function AboutBreif() {
  return (
    <HeroComponent
      title={aboutContent.title}
      sub={aboutContent.sub}
      isBlurry={false}
      className='!text-4xl font-semibold'
      children={<MagicButton value={aboutContent.form} />}
    />
  )
}
