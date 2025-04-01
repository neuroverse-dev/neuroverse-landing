'use client'
import { Images } from '@/constants/data'
import { Location, Mail, Phone } from '@/constants/svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Footer = () => {

  const router = useRouter();

  return (
    <footer className='md:px-20 bg-gray-900 py-10' >
      <div>
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
                <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.src}
                    width={35.11}
                    height={35.11}
                    alt="social media logo"
                    className="me-3 cursor-pointer rounded-4xl"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className='lg:justify-self-center font-medium lg:mt-0 mt-10'>
            <p className='font-bold text-[#B8B8B8]'>Explore</p>
            <p className="mt-5 text-[#B8B8B8] hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </p>
            <p className="mt-[12px] text-[#B8B8B8] hover:underline cursor-pointer">
              <Link href="#features">Features</Link>
            </p>
            <p className="mt-[12px] text-[#B8B8B8] hover:underline cursor-pointer">
              <Link href="#about">About Us</Link>
            </p>

          </div>

          <div className="lg:justify-self-center font-medium lg:mt-0 mt-10">
            <p className="font-bold text-[#B8B8B8]">Get in Touch</p>

            <p className="mt-5 text-[#B8B8B8] flex items-center">
              <span className="pe-2">
                <Mail />
              </span>
              <a href="mailto:contact@neuroverse.build" className="hover:underline">
                contact@neuroverse.build
              </a>
            </p>

            {/* <p className="mt-5 text-[#B8B8B8] flex items-center">
              <span className="pe-2">
                <Phone />
              </span>
              <a href="tel:+11234567890" className="hover:underline">
                +1 123-456-7890
              </a>
            </p> */}

            <p className="mt-5 text-[#B8B8B8] flex items-center">
              <span className="pe-2">
                <Location />
              </span>
              <a
                href="https://www.google.com/maps/search/?q=Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ahmedabad, Gujarat, India.
              </a>
            </p>
          </div>

        </div>

        <div className='h-[1px] bg-white' />

      </div>
      <div className="pt-8 bg-gray-900 w-full text-white flex justify-center space-x-4">
        <button
          className="hover:underline"
          type="button"
          onClick={() => router.push('/terms-condition')}
        >
          Terms
        </button>
        <span>|</span>
        <button
          className="hover:underline"
          type="button"
          onClick={() => router.push('/privacy-policy')}
        >
          Privacy
        </button>
        <span>|</span>
        <button
          className="hover:underline"
          type="button"
        // onClick={() => router.push('/copyright')}
        >
          Copyright @2025 Neuroverse
        </button>
      </div>

    </footer>
  )
}

export default Footer
