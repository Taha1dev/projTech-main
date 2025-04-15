import { ServiceContent } from './ServiceContent'
import { ServiceSidebar } from './ServiceSidebar'

export const ServiceSection = ({ services, service, index }: any) => {
  return (
    <div
      className={` ${
        index === 0 || index === services.length - 1 ? 'bg-[#1b2023]' : ''
      }`}
    >
      <main className='container min-h-screen mx-auto w-full grid grid-cols-1 lg:grid-cols-7 gap-8 sm:gap-12 lg:gap-16 lg:py-52 py-16 px-4 sm:px-6 lg:px-8'>
        <ServiceSidebar service={service} />

        <ServiceContent service={service} />
      </main>
    </div>
  )
}
