import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Select from 'react-select'

export const MobileMenu = ({ toggleMenu, isMenuOpen, countryOptions }: any) => {
  const links = [
    { id: 1, title: 'Home', href: '' },
    { id: 2, title: 'About us', href: 'about' },
    { id: 3, title: 'Our Projects', href: 'projects' },
    { id: 4, title: 'Our Services', href: 'services' },
    { id: 5, title: 'Our Process', href: 'process' },
    { id: 6, title: 'FAQ', href: 'faq' },
    { id: 7, title: 'Contact us', href: 'contact' },
  ]
  return (
    <div
      className={`md:hidden fixed top-0 left-0 h-full w-full bg-[#151c20] z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex justify-end p-6'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          <XMarkIcon className='h-8 w-8' />
        </button>
      </div>

      <div className='flex flex-col gap-4 p-6'>
        {links.map((item, i) => (
          <Link className='font-medium text-lg' key={item.id} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* <div className='mt-4 p-6'>
        <Select
          styles={{
            control: provided => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
            }),
            singleValue: provided => ({
              ...provided,
              color: 'white',
            }),
            placeholder: provided => ({
              ...provided,
              color: 'white',
            }),
            menu: provided => ({
              ...provided,
              backgroundColor: '#525965',
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#525965' : '#525965',
              color: state.isSelected ? 'white' : 'white',
              '&:hover': {
                backgroundColor: '#6b7280',
              },
            }),
          }}
          options={countryOptions}
          placeholder='Select Country'
        />
      </div> */}
    </div>
  )
}
