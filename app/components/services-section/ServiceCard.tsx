export const ServiceCard = ({ item, index }: any) => {
  return (
    <div
      className='flex flex-col sm:flex-row items-center bg-[#1b2023] border border-[#0f1213] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] shadow-xl hover:shadow-2xl transition-shadow duration-300 opacity-0 animate-fade-in-up'
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className='w-full sm:w-2/5 lg:w-1/4 h-48 sm:h-auto lg:h-full object-cover rounded-t-[20px] sm:rounded-l-[25px] lg:rounded-l-[30px] sm:rounded-tr-none'
      />

      <div className='w-full sm:flex-1 p-4 sm:p-6 lg:p-8'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4'>
          {item.title}
        </h3>
        <p className='text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed'>
          {item.description}
        </p>
      </div>
    </div>
  )
}
