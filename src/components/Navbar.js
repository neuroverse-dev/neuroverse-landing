'use client'
import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Logo } from '@/constants/svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();

  return (
    <section className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {['Product', 'Features', 'Marketplace', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-sm font-semibold text-gray-900">
                {item}
              </a>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:gap-x-12">
            {[
              { label: 'Home', path: '/' },
              { label: 'Features', path: '/#features' },
              { label: 'Marketplace', path: '/#marketplace' },
              { label: 'Company', path: '/#about' }
            ].map((item) => (
              <button
                key={item.label}
                className="hover:underline text-black"
                type="button"
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>


        </nav>
        {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt="Logo"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  height={200}
                  width={200}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-black">
                <div className="space-y-2 py-6 flex flex-col items-center text-black">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'Features', path: '/#features' },
                    { label: 'Marketplace', path: '/#marketplace' },
                    { label: 'Company', path: '/#about' }
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="hover:underline"
                      type="button"
                      onClick={() => router.push(item.path)}
                    >
                      {item.label}
                    </button>
                  ))}

                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}
      </header>
    </section>
  )
}

export default Navbar
