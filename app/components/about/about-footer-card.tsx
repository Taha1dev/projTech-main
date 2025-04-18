'use client'

import { motion } from 'framer-motion'

interface AboutFooterCard {
  title: string
  desc: string
}

export default function AboutFooterCard({ title, desc }: AboutFooterCard) {
  return (
    <motion.div
      whileHover={{
        rotate: -3,
        scale: 1.02,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      className='flex flex-col lg:flex-row justify-between lg:items-center items-start p-8 drop-shadow bg-[#0f171b] rounded-3xl lg:gap-6 gap-2'
    >
      <img src='/service-icon.png' alt='service icon' className='w-12 h-12' />
      <h4 className='text-white font-semibold text-2xl'>{title}</h4>
      <p className='text-white/85'>{desc}</p>
    </motion.div>
  )
}
