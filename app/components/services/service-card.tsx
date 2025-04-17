import Image from 'next/image'
import { cn } from '@/lib/utils'

type ServiceCardProps = {
  title: string
  description: string
  image: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  image,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 shadow-md hover:shadow-lg border-2 border-[#293032] transition-all',
        className,
      )}
    >
      <div className='relative w-full h-40 mb-4'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-muted text-sm leading-relaxed'>{description}</p>
    </div>
  )
}
