'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface AboutServiceCardProps {
  title: string
  desc: string
}
export default function AboutServiceCard({
  title,
  desc,
}: AboutServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className=' relative border border-theme-variant rounded-2xl p-5 space-y-4 z-10 overflow-hidden'
    >
      <div className='-z-10 absolute top-0 left-0 w-full h-1/4 bg-theme-primary/50 rounded-full filter blur-[100px]'></div>
      <img src='/service-icon.png' alt='service icon' className='' />
      <div className='space-y-2'>
        <h4 className='text-xl text-white font-semibold'>{title}</h4>
        <p className='text-lg font-light text-[#666666]'>{desc}</p>
      </div>
    </motion.div>
  )
}
