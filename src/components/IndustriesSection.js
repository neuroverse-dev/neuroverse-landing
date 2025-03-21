import {
  ShoppingCartIcon,
  UserCircleIcon,
  AcademicCapIcon,
  BanknotesIcon,
  HomeIcon,
  VideoCameraIcon,
  MapPinIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';


const industries = [
  {
    name: 'E-commerce',
    description: 'AI agents for personalized shopping assistance and post-purchase support.',
    icon: ShoppingCartIcon,
    audio: '/audio/ecommerce.mp3',
  },
  {
    name: 'Healthcare',
    description: 'Voice assistants for appointment scheduling and patient education.',
    icon: UserCircleIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Education',
    description: 'Interactive tutors and content narrators for students.',
    icon: AcademicCapIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Finance',
    description: 'Virtual agents for loan inquiries, customer support, and financial advice.',
    icon: BanknotesIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Real Estate',
    description: 'AI assistants for property inquiries and virtual walkthroughs.',
    icon: HomeIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Media & Entertainment',
    description: 'Voiceovers, audiobooks, and interactive audience engagement.',
    icon: VideoCameraIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Travel & Hospitality',
    description: '24/7 agents for booking assistance and trip planning.',
    icon: MapPinIcon,
    audio: "/audio/ecommerce.mp3",
  },
  {
    name: 'Technology & SaaS',
    description: 'Proactive lead engagement and customer onboarding.',
    icon: CpuChipIcon,
    audio: "/audio/ecommerce.mp3",
  },
];

export default function IndustriesSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            Industries We Serve
          </h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Empowering Industries with Text and Voice AI Agents
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Transform the way your business operates with our cutting-edge AI solutions tailored for various industries.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="relative flex flex-col items-start rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-600 text-white">
                <industry.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow mb-3">
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{industry.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{industry.description}</p>
              </div>

              {/* Audio Player - Fixed Position */}
              <audio
                controls
                className="mt-auto w-full custom-audio"
                controlsList="nodownload noplaybackrate"
              >
                <source src={industry.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}

        </div>
      </div>
    </div >
  );
}