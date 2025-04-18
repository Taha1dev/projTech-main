import MagicButton from '../ui/MagicButton'

export const ServiceSidebar = ({ service }: any) => {
  return (
    <div className='lg:h-screen flex flex-col col-span-1 lg:col-span-3 lg:sticky top-0'>
      <h2 className='uppercase text-sm font-bold text-theme-primary tracking-wide'>
        our services
      </h2>
      <h3 className='text-4xl sm:text-5xl lg:text-6xl inline-block font-medium gradient-text leading-tight sm:leading-[70px] lg:leading-[86px] mb-6'>
        {service.title}
      </h3>
      <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
        {service.description}
      </p>
      <div className='mt-6 sm:mt-8'>
        <MagicButton value={service.cta.value} />
      </div>
    </div>
  )
}
