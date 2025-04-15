'use client'
import { useState } from 'react'

export default function DevelopmentProcess() {
  const steps = [
    {
      label: 'Planning',
      position: 'below',
      title: 'Planning',
      description:
        'We start by thoroughly understanding your business goals, challenges, and requirements, ensuring a clear vision and roadmap for the project.',
    },
    {
      label: 'Design & Prototyping',
      position: 'above',
      title: 'Design & Prototyping',
      description:
        'We transform ideas into visually appealing and interactive prototypes, focusing on user experience and consistent design systems.',
    },
    {
      label: 'Development & Coding',
      position: 'below',
      title: 'Development & Coding',
      description:
        'Our developers bring designs to life with clean, performant, and scalable code using modern frontend frameworks.',
    },
    {
      label: 'Quality Assurance',
      position: 'above',
      title: 'Quality Assurance',
      description:
        'We rigorously test across devices, browsers, and edge cases to ensure stability, usability, and bug-free delivery.',
    },
    {
      label: 'Deployment & Launch',
      position: 'below',
      title: 'Deployment & Launch',
      description:
        'Once everything is polished, we deploy your product with confidence, monitor performance, and support post-launch success.',
    },
  ]

  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className='container mx-auto flex flex-col items-center justify-center px-4 py-8 gap-14 lg:gap-20 lg:py-16'>
      <h3 className='text-2xl sm:text-3xl text-center font-medium bg-gradient-to-b from-[#FFFFFF] to-[#999999] via-[#fff] bg-clip-text text-transparent max-w-7xl'>
        Our Development Process
      </h3>

      <div className='flex flex-col items-center gap-9 w-full min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] py-20 lg:py-28 bg-[#181f22] text-white backdrop-blur-[100px] border-2 border-[#2d3336] rounded-[33px]'>
        <div className='relative text-center max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl break-words transition-all duration-300'>
          <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold relative z-10'>
            {steps[activeStep].title}
          </h4>

          <div className='absolute -top-24 sm:-top-28 left-1/2 -translate-x-1/2 text-[100px] sm:text-[130px] lg:text-[150px] font-extrabold text-theme-primary/15 z-0 select-none pointer-events-none'>
            {String(activeStep + 1).padStart(2, '0')}
          </div>

          <p className='text-base sm:text-lg lg:text-xl mt-6 relative z-10'>
            {steps[activeStep].description}
          </p>
        </div>

        <div className='flex flex-wrap sm:hidden gap-2 overflow-x-auto px-1 w-full justify-start'>
          {steps.map((step, index) => {
            const isActive = index === activeStep
            return (
              <button
                key={step.label}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 px-4 py-1.5 text-sm rounded-full border transition-all duration-200 
          ${
            isActive
              ? 'bg-theme-primary text-white border-theme-primary'
              : 'bg-transparent text-white border-white/20 hover:border-white/40'
          }`}
              >
                {step.label}
              </button>
            )
          })}
        </div>

        <div className='hidden sm:block w-full px-2 sm:px-6 md:px-8'>
          <div className='relative flex justify-between items-center gap-x-4 sm:gap-x-8 lg:gap-x-14'>
            <div className='absolute top-1/2 left-0 w-full h-0.5 bg-theme-primary z-0' />
            {steps.map((step, index) => {
              const isActive = index === activeStep
              return (
                <div
                  key={index}
                  className='relative z-10 flex flex-col items-center flex-1 text-center group cursor-pointer'
                  onClick={() => setActiveStep(index)}
                >
                  {step.position === 'above' && (
                    <span className='mb-6 text-sm sm:text-base text-white group-hover:text-theme-primary/70 transition-colors'>
                      {step.label}
                    </span>
                  )}
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 
            ${
              isActive
                ? 'bg-theme-primary border-theme-primary scale-110'
                : 'border-theme-primary bg-zinc-900'
            }`}
                  />
                  {step.position === 'below' && (
                    <span className='mt-6 text-sm sm:text-base text-white group-hover:text-theme-primary/70 transition-colors'>
                      {step.label}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
