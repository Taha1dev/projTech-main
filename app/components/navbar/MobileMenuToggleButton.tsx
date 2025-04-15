import { XMarkIcon, Bars2Icon } from '@heroicons/react/24/solid'

export const MobileMenuToggleButton = ({ toggleMenu, isMenuOpen }: any) => {
  return (
    <div className='md:hidden'>
      <button onClick={toggleMenu} className='text-white focus:outline-none'>
        {isMenuOpen ? (
          <XMarkIcon className='h-8 w-8' />
        ) : (
          <Bars2Icon className='h-8 w-8' />
        )}
      </button>
    </div>
  )
}
