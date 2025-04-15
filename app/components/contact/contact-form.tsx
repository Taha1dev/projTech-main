'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CuboidIcon as Cube } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import MagicButton from '../ui/MagicButton'
import Image from 'next/image'
import square from '@/public/sq.png'
export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className=' flex items-center justify-center p-4'>
      <div className='w-full container mx-auto relative bg-[#181f22] bg-opacity-85 backdrop-blur-2xl border-2 border-[#2d3336] rounded-3xl p-8 md:p-12 shadow-xl'>
        <div className='absolute top-4 right-4'>
          <div className='relative size-24'>
            <Image className='size-full object-cover' src={square} alt='square' />
            <div className='absolute inset-0 bg-theme-primary blur-xl opacity-50 rounded-full'></div>
          </div>
        </div>

        <div className='space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl md:text-4xl font-bold text-white'>
              Let&apos;s Connect
            </h1>
            <p className='text-gray-400 text-sm md:text-base'>
              We&apos;re excited to connect with you and learn more about your
              goals. Use the form below to get in touch with ZWIFTPAY. Whether
              you&apos;re a prospective client, partner, or simply curious about
              our services, we&apos;re here to answer your questions and provide
              the assistance you need.
            </p>
          </div>

          <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='space-y-2'>
                <label htmlFor='firstName' className='text-sm text-gray-300'>
                  First Name
                </label>
                <Input
                  id='firstName'
                  placeholder='Enter First Name'
                  className='bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='lastName' className='text-sm text-gray-300'>
                  Last Name
                </label>
                <Input
                  id='lastName'
                  placeholder='Enter Last Name'
                  className='bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm text-gray-300'>
                  Email
                </label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your Email'
                  className='bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='phone' className='text-sm text-gray-300'>
                  Phone
                </label>
                <Input
                  id='phone'
                  placeholder='Enter Phone Number'
                  className='bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='inquiryType' className='text-sm text-gray-300'>
                  Inquiry Type
                </label>
                <Select>
                  <SelectTrigger className='bg-gray-800/50 border-gray-700 text-white'>
                    <SelectValue placeholder='Select Inquiry Type' />
                  </SelectTrigger>
                  <SelectContent className='bg-gray-800 border-gray-700 text-white'>
                    <SelectItem value='general'>General Inquiry</SelectItem>
                    <SelectItem value='support'>Support</SelectItem>
                    <SelectItem value='sales'>Sales</SelectItem>
                    <SelectItem value='partnership'>Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <label htmlFor='source' className='text-sm text-gray-300'>
                  How Did You Hear About Us?
                </label>
                <Select>
                  <SelectTrigger className='bg-gray-800/50 border-gray-700 text-white'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent className='bg-gray-800 border-gray-700 text-white'>
                    <SelectItem value='search'>Search Engine</SelectItem>
                    <SelectItem value='social'>Social Media</SelectItem>
                    <SelectItem value='referral'>Referral</SelectItem>
                    <SelectItem value='advertisement'>Advertisement</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm text-gray-300'>
                Message
              </label>
              <Textarea
                id='message'
                placeholder='Enter your Message here...'
                className='bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]'
              />
            </div>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='terms'
                  checked={agreed}
                  onCheckedChange={(checked: boolean) =>
                    setAgreed(checked as boolean)
                  }
                  className='border-gray-600 data-[state=checked]:bg-blue-600'
                />
                <label htmlFor='terms' className='text-sm text-gray-300'>
                  I agree with{' '}
                  <Link href='#' className='text-blue-400 hover:underline'>
                    Terms of Use
                  </Link>{' '}
                  and{' '}
                  <Link href='#' className='text-blue-400 hover:underline'>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <MagicButton value={`Let's work together`} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
