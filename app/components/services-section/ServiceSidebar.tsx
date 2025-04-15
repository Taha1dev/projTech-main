import MagicButton from "../ui/MagicButton"

export const ServiceSidebar = ({ service }: any) => {
  return (
    <div className='lg:h-screen flex flex-col col-span-1 lg:col-span-3 lg:sticky top-0'>
      <h2 className='uppercase text-sm font-bold text-[#5686F6] tracking-wide'>
        our services
      </h2>
      <h3 className='text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-b from-[#5686F6] inline-block text-transparent bg-clip-text to-[#4465f3] font-normal leading-tight sm:leading-[70px] lg:leading-[86px] mb-6'>
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
