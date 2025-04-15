import Link from 'next/link'

export const DesktopNavigationLinks = () => {
  const links = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'About us', href: '/about' },
    { id: 3, title: 'Our Projects', href: '/projects' },
    { id: 4, title: 'Our Services', href: '/services' },
    { id: 5, title: 'Our Process', href: '/process' },
    { id: 6, title: 'FAQ', href: '/faq' },
    { id: 7, title: 'Contact us', href: '/contact' },
  ]

  return (
    <nav aria-label='Main navigation'>
      <div className='hidden md:!flex gap-12 items-center'>
        {links.map(item => (
          <Link className='font-medium text-lg' key={item.id} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
