import Link from 'next/link'

export const DesktopNavigationLinks = () => {
  const links = [
    'Home',
    'About us',
    'Our Projects',
    'Our Services',
    'Our Process',
    'FAQ',
    'Contact us',
  ]

  return (
    <div className='hidden md:flex gap-12 items-center'>
      {links.map((item, i) => (
        <Link
          className='font-medium text-lg'
          key={i}
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {item}
        </Link>
      ))}
    </div>
  )
}
