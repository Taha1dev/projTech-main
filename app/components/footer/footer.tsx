'use client'
import {
  Dice1,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { id: 1, name: 'About Us', href: '/' },
    { id: 2, name: 'Our projects', href: '/courses' },
    { id: 3, name: 'Why choose us', href: '/about' },
    { id: 4, name: 'Our services', href: '/faq' },
    { id: 5, name: 'FAQ’s', href: '/courses' },
    { id: 6, name: 'Terms & Conditions', href: '/about' },
    { id: 7, name: 'Privacy Policy', href: '/about' },
    { id: 8, name: 'Contact Us', href: '/about' },
  ]

  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className='text-theme-primary' />,
      text: 'Location: 27 Division St, Berlin, NY 10002, GERMANY',
    },
    {
      id: 2,
      icon: <Mail className='text-theme-primary' />,
      text: 'info@bguw.de',
    },
    {
      id: 3,
      icon: <Phone className='text-theme-primary' />,
      text: '+49 159 01985196',
    },
  ]

  const socialMedia = [
    {
      id: 1,
      icon: <Twitter className='size-7 p-1' />,
      href: '#',
    },
    {
      id: 2,
      icon: <Linkedin className='size-7 p-1' />,
      href: '#',
    },
    {
      id: 3,
      icon: <Facebook className='size-7 p-1' />,
      href: '',
    },
  ]

  return (
    <footer className='bg-card text-white py-12 font-cairo z-10 w-full mt-10'>
      <div className='container mx-auto px-4 mb-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-5 md:!p-0'>
          <div className='space-y-5'>
            <img src={'/logo.png'} alt='Proj Tech Logo' />
            <p className='text-white text-lg leading-relaxed'>
              ProjTech Company provides innovative software solutions designed
              to enhance efficiency and productivity for businesses. Experience
              streamlined operations
            </p>
            <div className='flex gap-2 items-center'>
              <p>stay connected</p>
              <div className='flex gap-2 items-center'>
                {socialMedia.map(item => {
                  return (
                    <Link
                      className='bg-[#080c13] p-1 text-theme-primary rounded-lg'
                      key={item.id}
                      href={item.href}
                    >
                      {item.icon}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold mb-6 w-fit text-theme-primary border-b-2 border-theme-primary'>
              Company
            </h3>
            <ul className='space-y-3 custom-list'>
              {navLinks.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link
                    href={service.href || ''}
                    className='text-white hover:text-theme-primary duration-300 transition-colors'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold mb-6 w-fit text-theme-primary'>
              Support
            </h3>
            <ul className='space-y-3 custom-list'>
              {navLinks.slice(4, 8).map(service => (
                <li key={service.id}>
                  <Link
                    href={service.href || ''}
                    className='text-white hover:text-theme-primary duration-300 transition-colors'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold mb-6 w-fit text-theme-primary'>
              Adress
            </h3>

            <ul className='space-y-3'>
              {contactInfo.map(info => (
                <li key={info.id}>
                  <Link href='' className='flex items-center gap-2'>
                    <span>{info.icon}</span>
                    <p>{info.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className='border-b border-white' />

      <div className='relative text-center text-sm text-gray-400 mt-8'>
        <p>PROJTECH. All Rights Reserved - {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
