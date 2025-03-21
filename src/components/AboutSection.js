import { SparklesIcon, SquaresPlusIcon , GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-white to-blue-50 py-24 sm:py-32">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-blue-50 opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-black">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-blue-800 leading-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-light text-gray-700 max-w-3xl mx-auto">
            Neuroverse is your partner in AI-driven communication, empowering businesses and creators to bring their ideas to life with intelligent text and voice agents.
          </p>
        </div>

        {/* Mission Statements with Card-style Layout */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-10 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <SparklesIcon className="h-16 w-16 text-blue-600 mx-auto mb-6 transform transition duration-300 hover:text-blue-700" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-blue-700">Innovation</h3>
            <p className="mt-4 text-base text-gray-800">
              Pioneering cutting-edge AI technologies to enhance communication experiences.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <SquaresPlusIcon  className="h-16 w-16 text-blue-600 mx-auto mb-6 transform transition duration-300 hover:text-blue-700" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-blue-700">Ease of Use</h3>
            <p className="mt-4 text-base text-gray-800">
              Making advanced AI accessible and easy to use for businesses of all sizes.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <GlobeAltIcon className="h-16 w-16 text-blue-600 mx-auto mb-6 transform transition duration-300 hover:text-blue-700" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-blue-700">Accessibility</h3>
            <p className="mt-4 text-base text-gray-800">
              Ensuring that AI solutions are available to everyone, regardless of technical expertise.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  );
}
