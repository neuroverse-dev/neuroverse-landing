'use client'
import { Images } from '@/constants/data'
import { Location, Mail, Phone } from '@/constants/svg'
import Image from 'next/image'

const Footer = () => {

  return (
    <footer className='md:px-20 h-[333px] '>
      <div className='grid lg:grid-cols-3 md:grid-cols-1  mt-[65px] mb-15'>
        <div className=''>
          <Image
            src={'/images/Logo.png'}
            width={260}
            height={36}
            alt='company logo'
          />
          <div className="flex mt-[47px]">
            {Object.values(Images).map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  width={35.11}
                  height={35.11}
                  alt="social media logo"
                  className="me-3 cursor-pointer rounded-4xl"
                />
              </a>
            ))}
          </div>
        </div>

        <div className='lg:justify-self-center font-medium lg:mt-0 mt-10'>
          <p className='font-bold'>Explore</p>
          <p className="mt-5 text-[#B8B8B8] hover:underline cursor-pointer">
            <a href="/">Home</a>
          </p>
          <p className="mt-[12px] text-[#B8B8B8] hover:underline cursor-pointer">
            <a href="#features">Features</a>
          </p>
          <p className="mt-[12px] text-[#B8B8B8] hover:underline cursor-pointer">
            <a href="#about">About Us</a>
          </p>

        </div>

        {/* <div className='lg:justify-self-center font-medium lg:mt-0 mt-10'>
          <p className='font-bold'>Get in Touch</p>
          <p className='mt-5 text-[#B8B8B8] flex items-center '>
            <span className='pe-2'>
              <Mail />
            </span>
            <span>
            contact@neuroverse.build
            </span>
          </p>
          <p className='mt-5 text-[#B8B8B8] flex items-center '>
            <span className='pe-2'>
              <Phone />
            </span>
            <span>
              +1 123-456-7890
            </span>
          </p>
          <p className='mt-5 text-[#B8B8B8] flex items-center '>
            <span className='pe-2'>
              <Location />
            </span>
            <span>
              123 Innovation Drive
            </span>
          </p>
        </div> */}
        <div className="lg:justify-self-center font-medium lg:mt-0 mt-10">
          <p className="font-bold">Get in Touch</p>

          <p className="mt-5 text-[#B8B8B8] flex items-center">
            <span className="pe-2">
              <Mail />
            </span>
            <a href="mailto:contact@neuroverse.build" className="hover:underline">
              contact@neuroverse.build
            </a>
          </p>

          <p className="mt-5 text-[#B8B8B8] flex items-center">
            <span className="pe-2">
              <Phone />
            </span>
            <a href="tel:+11234567890" className="hover:underline">
              +1 123-456-7890
            </a>
          </p>

          <p className="mt-5 text-[#B8B8B8] flex items-center">
            <span className="pe-2">
              <Location />
            </span>
            <a
              href="https://www.google.com/maps/search/?q=123+Innovation+Drive"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              123 Innovation Drive
            </a>
          </p>
        </div>

      </div>

      <div className='h-[1px] bg-white' />

      <div className='mt-8'>
        Terms  |  Privacy  |  Copyright @2025 Neuroverse
      </div>
    </footer>
  )
}

export default Footer
