'use client'
import { useState } from 'react'
import { toastText } from '@/util/util'
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)

  const [dailyCalls, setDailyCalls] = useState("");
  const [noOfEmployee, setNoOfEmployee] = useState("");
  const [minutesPerCall, setMinutesPerCall] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [payPerHours, setPayPerHours] = useState("");
  const [totalCost, setTotalCost] = useState(0.00);
  const [savings, setSavings] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateCost = () => {
    const calls = parseInt(dailyCalls, 10) || 0;
    const minutes = parseFloat(minutesPerCall) || 0;
    const payToEmployeePerHour = parseFloat(payPerHours, 10) || 0;
    const employees = parseInt(noOfEmployee, 10) || 0;
    const hours = parseFloat(workingHours) || 0;

    let cost = 0;
    if (calls > 0) {
      cost = 200; // Base cost for first 1200 calls
      if (calls > 1200) {
        cost += Math.ceil((calls - 1200) / 1200) * 200;
      }
    }


    let savingPercentage = 0;
    if (payToEmployeePerHour > 0) {
      const monthlyEmployeeCost = employees * hours * payToEmployeePerHour;
      const perHoursEmployeeCost = (monthlyEmployeeCost / hours)
      savingPercentage = (perHoursEmployeeCost / cost) * 100
      savingPercentage = 100 - savingPercentage
      setSavings(savingPercentage)
    }

    const perMinuteCost = calls * minutes * 30 * 0.15;
    const totalCost = (cost + perMinuteCost) / (workingHours * noOfEmployee * 30);
    setTotalCost(isNaN(totalCost) ? 0.00 : totalCost);

    if (!isNaN(totalCost)) {
      setIsModalOpen(true);
    }
    setDailyCalls("")
    setMinutesPerCall("")
    setNoOfEmployee("")
    setWorkingHours("")
    setPayPerHours("")
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);


    const formData = new FormData(e.target);


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
            <div className="grid grid-cols-1  gap-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900">
                  Full name
                </label>
                <div className="mt-2.5">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

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
              <div className="sm:col-span-2">
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-900">
                  Industry
                </label>
                <div className="mt-2.5">
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-indigo-600"
                  >
                    <option value="">Choose an industry...</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="media-entertainment">Media & Entertainment</option>
                    <option value="restaurant-hotels">Restaurant & Hotels</option>
                    <option value="technology-saas">Technology & SaaS</option>

                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

         
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

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  What your agent should do?
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
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${!isLoading ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                {isLoading ? "Loading..." : "Get my AI-Agent"}
              </button>
            </div>
          </form>
        </div>
      
        <div className="order-1 lg:order-none">
          <div className="max-w-lg mx-auto  bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Cost Calculator</h2>
            <div className="space-y-4">
              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-12 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={noOfEmployee}
                  onChange={(e) => setNoOfEmployee(e.target.value)}
                  style={{
                    appearance: "textfield",
                  }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Number of employees
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  style={{
                    appearance: "textfield",
                  }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Hours/Day of employee
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={payPerHours}
                  onChange={(e) => setPayPerHours(e.target.value)}
                  style={{
                    appearance: "textfield",
                  }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Pay/hr of employee
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
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


              </div>

              <button
                onClick={calculateCost}
                className="w-full text-white py-2 font-semibold rounded bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="flex flex-col h-full">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch with Neuroverse Sales
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Discover how Neuroverse&apos;s AI-powered agents can enhance your business operations. Let&apos;s chat about your needs!
            </p>
          </div>

          <form action="#" method="POST" onSubmit={handleSubmit} className=" mt-12 max-w-xl flex-grow flex flex-col justify-between">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900">
                  Full name
                </label>
                <div className="mt-2.5">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

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

              <div className="sm:col-span-2">
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-900">
                  Industry
                </label>
                <div className="mt-2.5">
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-indigo-600"
                  >
                    <option value="">Choose an industry...</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="media-entertainment">Media & Entertainment</option>
                    <option value="restaurant-hotels">Restaurant & Hotels</option>
                    <option value="technology-saas">Technology & SaaS</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

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

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  What your agent should do?
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
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${!isLoading ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                {isLoading ? "Loading..." : "Get my AI-Agent"}
              </button>
            </div>
          </form>
        </div>

        <div className="order-1 lg:order-none flex flex-col h-full">
          <div className="max-w-lg bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full justify-between">
            <h2 className="text-2xl font-bold text-center mb-4">Cost Calculator</h2>
            <div className="space-y-14">
              <span className=" right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Number of employees
                </span>
              <div className=" w-full">
                
                <input
                  type="number"
                  className="w-full p-2 pr-12 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={noOfEmployee}
                  onChange={(e) => setNoOfEmployee(e.target.value)}
                  style={{ appearance: "textfield" }}
                />
                
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  style={{ appearance: "textfield" }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Hours/Day of employee
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={payPerHours}
                  onChange={(e) => setPayPerHours(e.target.value)}
                  style={{ appearance: "textfield" }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Pay/hr of employee
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-12 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={dailyCalls}
                  onChange={(e) => setDailyCalls(e.target.value)}
                  style={{ appearance: "textfield" }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Average daily calls
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full p-2 pr-20 border rounded bg-white appearance-none focus:outline focus:outline-2 focus:outline-indigo-600"
                  value={minutesPerCall}
                  onChange={(e) => setMinutesPerCall(e.target.value)}
                  style={{ appearance: "textfield" }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  Minutes/call
                </span>
              </div>

              <button
                onClick={calculateCost}
                className="w-full text-white py-2 font-semibold rounded bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50"
          >
            <div className="bg-indigo-50 p-8 md:p-12 rounded-2xl shadow-2xl text-center w-[90%] max-w-lg">

              {/* Animated Emoji */}
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl"
              >
                🎉
              </motion.div>

              <p className="text-2xl font-bold text-indigo-600 mt-2">Congratulations!</p>
              <p className="mt-2 text-gray-600">Your savings is  <span className='font-bold'> {savings.toFixed(2)}%</span></p>
              <p className="mt-2 text-gray-600">The cost per hour is <span className='font-bold'> {totalCost.toFixed(2)}</span></p>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-8 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              >
                Close
              </button>
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </div>

  )
}
