import { ReactNode } from 'react'

interface MagicButtonProps {
  value: ReactNode
}

export default function MagicButton({ value }: MagicButtonProps) {
  return (
    <button
      className='
      relative isolate rounded-full bg-gradient-to-r from-[#0E2539] via-[#3E5AF2] to-[#091129] 
      px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold text-white shadow-[0_0_20px_rgba(62,90,242,0.6)] 
      transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95'
      aria-label={typeof value === 'string' ? value : 'Magic Button'}
    >
      {value}
    </button>
  )
}
