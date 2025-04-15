import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }: any) {
  const renderStars = (rate: number) => {
    const stars = []
    const totalStars = 5

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rate) {
        stars.push(
          <Star
            key={i}
            className='w-5 h-5 fill-yellow-400 stroke-yellow-400'
          />,
        )
      } else {
        stars.push(<Star key={i} className='w-5 h-5 stroke-yellow-400' />)
      }
    }

    return stars
  }

  return (
    <div
      className={`p-6 rounded-xl max-w-md bg-[#151d26] min-h-[300px] flex flex-col justify-between`}
    >
      <div className='space-y-4 '>
        <img src={'/qoute.png'} alt={`qoute`} className='object-cover' />
        <p className={`text-gray-700 leading-loose mb-12`}>
          {testimonial?.content}
        </p>
        <h3 className='font-bold text-start text-lg text-white'>
          {testimonial.testimonial}
        </h3>
      </div>
      <div className='text-start'>
        <p className='text-gray-500 text-sm font-medium'>{testimonial.author}</p>
        <div className='flex gap-1'>{renderStars(testimonial?.rate || 0)}</div>
      </div>
    </div>
  )
}
