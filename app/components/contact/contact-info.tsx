import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className='bg-[#1b2225] backdrop-blur-[80px] text-white p-6 rounded-2xl border-2 border-[#454a4c]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
        <div className='flex flex-col items-center text-center'>
          <div className='relative mb-4'>
            <div className='w-16 h-16 rounded-full border border-theme-primary flex items-center justify-center'>
              <Mail className='w-6 h-6 text-theme-primary' />
            </div>
          </div>
          <a
            href='mailto:info@projtech.com'
            className='hover:text-gray-300 transition-colors'
          >
            info@projtech.com
          </a>
        </div>

        <div className='flex flex-col items-center text-center'>
          <div className='relative mb-4'>
            <div className='w-16 h-16 rounded-full border border-theme-primary flex items-center justify-center'>
              <Phone className='w-6 h-6 text-theme-primary' />
            </div>
          </div>
          <a
            href='tel:+11234567890'
            className='hover:text-gray-300 transition-colors'
          >
            +1 (123) 456-7890
          </a>
        </div>

        <div className='flex flex-col items-center text-center'>
          <div className='relative mb-4'>
            <div className='w-16 h-16 rounded-full border border-theme-primary flex items-center justify-center'>
              <MapPin className='w-6 h-6 text-theme-primary' />
            </div>
          </div>
          <span>Berlin, Germany</span>
        </div>
      </div>
    </div>
  )
}
