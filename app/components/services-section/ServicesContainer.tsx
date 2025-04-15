'use client'

import { services } from '@/app/constants'
import { ServiceSection } from './ServiceSection'

export default function ServicesContainer() {
  return services.map((service: { id: any }, index: any) => (
    <ServiceSection key={service.id} service={service} services={services} index={index} />
  ))
}
