'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    id: '01',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '02',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '03',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '04',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '05',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '06',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
  {
    id: '07',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we offer continuous support, maintenance, and update services to keep your product secure, performant, and aligned with your business needs.',
  },
]

export default function FaqAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4'
    >
      {faqs.map(faq => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className='border-0 rounded-xl bg-[#0f1315] px-4 py-3 flex flex-col items-center justify-between group hover:bg-[#151a1c] transition'
        >
          <AccordionTrigger className='flex w-full items-center gap-4 text-left [&[data-state=open]>svg]:rotate-45'>
            <div className='w-10 h-10 rounded-md bg-[#1b1f22] text-white text-sm font-semibold flex items-center justify-center shrink-0'>
              {faq.id}
            </div>
            <span className='text-white text-sm sm:text-base font-normal'>
              {faq.question}
            </span>
          </AccordionTrigger>

          <Plus className='text-white w-4 h-4 shrink-0 transition-transform duration-200' />
          <AccordionContent className='pl-14 text-sm text-white/80 pt-2'>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
