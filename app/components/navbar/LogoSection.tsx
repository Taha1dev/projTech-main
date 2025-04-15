import Image from 'next/image'

export const LogoSection = () => {
  const logo = '/logo.png' 
  return <Image src={logo} alt='logo' loading='lazy' width={100} height={30} />
}
