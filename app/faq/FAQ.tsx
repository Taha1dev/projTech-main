'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqItems = [
    {
      id: '01',
      question: 'What services does PROJTECH provide?',
      answer:
        'PROJTECH offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
    },
    {
      id: '02',
      question: 'How can PROJTECH help my business?',
      answer:
        'PROJTECH can help your business by providing tailored digital solutions that enhance your online presence, streamline operations, and improve customer engagement. Our team works closely with you to understand your specific needs and deliver solutions that drive growth and success.',
    },
    {
      id: '03',
      question: 'What industries does PROJTECH work with?',
      answer:
        'PROJTECH works with a diverse range of industries including healthcare, finance, education, retail, technology, and more. Our experience across various sectors allows us to bring unique insights and best practices to your project.',
    },
    {
      id: '04',
      question: 'How long does it take to complete a project with PROJTECH?',
      answer:
        'Project timelines vary depending on scope, complexity, and requirements. We provide detailed timelines during the initial consultation phase. Our team is committed to delivering high-quality work within agreed timeframes while maintaining transparent communication throughout the process.',
    },
    {
      id: '05',
      question:
        'Do you offer ongoing support and maintenance after the project is completed?',
      answer:
        'Yes, we offer comprehensive ongoing support and maintenance packages to ensure your digital assets continue to perform optimally. Our support services include regular updates, bug fixes, security patches, and performance optimization.',
    },
    {
      id: '06',
      question: 'Can you work with existing design or development frameworks?',
      answer:
        'Absolutely. Our team is experienced in working with a wide range of design and development frameworks. We can seamlessly integrate with your existing systems or recommend the most suitable frameworks for your specific project needs.',
    },
    {
      id: '07',
      question: 'How involved will I be in the project development process?',
      answer:
        "We believe in collaborative development. You'll be involved throughout the project lifecycle with regular updates, feedback sessions, and milestone approvals. The level of involvement can be tailored to your preferences and availability.",
    },
    {
      id: '08',
      question: 'Can you help with website or app maintenance and updates?',
      answer:
        'Yes, we provide comprehensive maintenance and update services for websites and applications. Our team can handle everything from content updates and feature enhancements to security patches and performance optimization.',
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className='py-12 px-6 md:px-10 '>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`border border-gray-800 rounded-xl p-6 transition-all duration-200 ${
                openItem === index
                  ? 'bg-gray-900/50 border-theme-primary/30'
                  : 'hover:bg-gray-900/30 hover:border-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <span
                    className={`font-extrabold text-xl ${
                      openItem === index ? 'text-theme-primary' : 'text-white'
                    } `}
                  >
                    {item.id}
                  </span>
                  <h3 className='text-white font-medium'>{item.question}</h3>
                </div>
                <button
                  onClick={() => toggleItem(index)}
                  className={`p-2 rounded-full ${
                    openItem === index
                      ? 'bg-theme-primary/10 text-theme-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  {openItem === index ? (
                    <X className='h-5 w-5' />
                  ) : (
                    <Plus className='h-5 w-5' />
                  )}
                </button>
              </div>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    className='mt-4 ml-14 text-gray-300 text-sm'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
