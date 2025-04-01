'use client'
import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import { toastText } from '@/util/util'

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [dailyCalls, setDailyCalls] = useState("");
  const [minutesPerCall, setMinutesPerCall] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [totalCost, setTotalCost] = useState(0.00);

  const calculateCost = () => {
    const calls = parseInt(dailyCalls, 10) || 0;
    const minutes = parseFloat(minutesPerCall) || 0;

    let cost = 0;
    if (calls > 0) {
      cost = 200; // Base cost for first 1200 calls
      if (calls > 1200) {
        cost += Math.ceil((calls - 1200) / 1200) * 200;
      }
    }

    const perMinuteCost = calls * minutes * 30 * 0.15;
    const totalCost = (cost + perMinuteCost) / (workingHours * 30);
    setTotalCost(isNaN(totalCost) ? 0.00 : totalCost);

  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);

    // Create a FormData object
    const formData = new FormData(e.target);

    // Convert formData to an object
    const formValues = Object.fromEntries(formData.entries());


    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      const result = await response.json();

      if (!response.ok) {
        toastText(
          'Something went wrong, Please try again.',
          'error'
        );
      }
      else {
        toastText(
          'Message sent! 🎉 We’ll be in touch soon. Thanks for contacting us!',
          'success'
        );
      }

    } catch (error) {
      toastText(
        'Something went wrong, Please try again.',
        'error'
      );

    } finally {
      setIsLoading(false);
      e.target.reset();
      // setAgreed(false)
    }
  };



  return (
    <div
      className="isolate px-6 py-24 sm:py-32 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom right, #1e3a8a 12%, #ffffff 10%)',
      }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch with Neuroverse Sales
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Discover how Neuroverse&apos;s AI-powered agents can enhance your business operations. Let&apos;s chat about your needs!
            </p>
          </div>

          <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                    defaultValue={''}
                  />
                </div>
              </div>

              {/* Privacy Agreement */}
              <div className="flex gap-x-4 sm:col-span-2 items-center">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                    />
                  </Switch>
                </div>
                <label className="text-sm text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={!agreed || isLoading}
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${agreed ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                {isLoading ? "Loading..." : "Enquire Now"}
              </button>
            </div>
          </form>
        </div>
        {/* Image Section (Appears first on small screens) */}
        <div className="order-1 lg:order-none">
          <div className="max-w-lg mx-auto  bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Cost Calculator</h2>
            <div className="bg-gray-200 p-4 rounded mb-4 text-sm">
              <ul className="list-disc list-inside">
                <li>Charges are based on tier system 0 to 1200: $200</li>
                <li>For every additional 1,200 calls, the charge increases by $200</li>
                <li>Per Minute rate: $0.15</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="relative w-full">
                <input
                  type="number"
                  // placeholder="Average daily calls"
                  className="w-full p-2 pr-12 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={dailyCalls}
                  onChange={(e) => setDailyCalls(e.target.value)}
                  style={{
                    appearance: "textfield",
                  }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Average daily calls
                </span>
              </div>

              <div className="space-y-4">
                <div className="relative w-full">
                  <input
                    type="number"
                    // placeholder="Average minutes per call"
                    className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                    value={minutesPerCall}
                    onChange={(e) => setMinutesPerCall(e.target.value)}
                    style={{
                      appearance: "textfield",
                    }}
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                    Minutes/call
                  </span>
                </div>

                <div className="relative w-full">
                  <input
                    type="number"
                    // placeholder="Working hours daily"
                    className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                    value={workingHours}
                    onChange={(e) => setWorkingHours(e.target.value)}
                    style={{
                      appearance: "textfield",
                    }}
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                    Hours/day
                  </span>
                </div>
              </div>

              <button
                onClick={calculateCost}
                className="w-full text-white py-2 rounded bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
            <div className="flex justify-between mt-5 items-center space-x-4">
              <span className="font-bold text-lg">Per Hour Costing </span>
              <div className="border border-gray-300 px-4 py-2 rounded-lg text-lg font-semibold">
                {totalCost.toFixed(2)} <span className="font-bold">$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
