'use client'
import { useState } from 'react'
import { DesktopCountrySelector } from './DesktopCountrySelector'
import { DesktopNavigationLinks } from './DesktopNavigationLinks'
import { LogoSection } from './LogoSection'
import { MobileMenuToggleButton } from './MobileMenuToggleButton'
import { MobileMenu } from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const countryOptions = [
    { value: 'uae', label: 'United Arab Emarites' },
    { value: 'us', label: 'United States' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='container mx-auto py-8 px-4'>
      <nav className='flex justify-between items-center rounded-full bg-[#525965] text-white bg-opacity-25 border border-white/10 px-6 md:px-14 py-4 gap-6 md:gap-14'>
        <LogoSection />

        <MobileMenuToggleButton
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />

        <DesktopNavigationLinks />

        {/* <DesktopCountrySelector countryOptions={countryOptions} /> */}
        <div></div>

        <MobileMenu
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          countryOptions={countryOptions}
        />
      </nav>
    </header>
  )
}
