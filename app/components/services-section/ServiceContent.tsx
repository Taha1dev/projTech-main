import { ServiceCard } from "./ServiceCard"

export const ServiceContent = ({ service }: any) => {
  return (
    <div className='flex flex-col col-span-1 lg:col-span-4 gap-6 sm:gap-8 lg:gap-16'>
      {service.data.map((item: { id: any }, index: any) => (
        <ServiceCard key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
