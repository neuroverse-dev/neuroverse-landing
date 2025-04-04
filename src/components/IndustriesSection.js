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
    description: 'AI agents enhance the shopping experience with tailored recommendations and seamless post-purchase support.',
    icon: ShoppingCartIcon,
    audio: '/audio/ecommerce.mp3',
  },
  {
    name: 'Healthcare',
    description: 'AI-powered voice assistants streamline appointment scheduling and provide personalized patient education for improved healthcare accessibility.',
    icon: UserCircleIcon,
    audio: "/audio/health-care.mp4",
  },
  {
    name: 'Education',
    description: 'AI-powered interactive tutors and content narrators enhance learning with personalized guidance and immersive storytelling.',
    icon: AcademicCapIcon,
    audio: "/audio/education.mp3",
  },
  {
    name: 'Finance',
    description: 'Virtual agents for loan inquiries, customer support, and personalized financial guidance.',
    icon: BanknotesIcon,
    audio: "/audio/finance.mp3",
  },
  {
    name: 'Real Estate',
    description: 'AI-powered virtual assistants streamline property inquiries, provide immersive virtual tours, and enhance real estate engagement.',
    icon: HomeIcon,
    audio: "/audio/real-estate.mp4",
  },
  {
    name: 'Media & Entertainment',
    description: 'AI-driven voice assistants enhance media and entertainment with dynamic voiceovers and interactive audience engagement.',
    icon: VideoCameraIcon,
    audio: "/audio/media-and-entertainment.mp3",
  },
  {
    name: 'Restaurant & Hotels',
    description: 'Smart virtual agents simplify travel with 24/7 booking assistance and personalized trip planning.',
    icon: MapPinIcon,
    audio: "/audio/restaurant-and-hotels.mp3",
  },
  {
    name: 'Technology & SaaS',
    description: 'AI-driven virtual agents enhance lead engagement and streamline customer onboarding for Technology & SaaS businesses.',
    icon: CpuChipIcon,
    audio: "/audio/tech-and-saas.mp3",
  },
];

export default function IndustriesSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600">
            Industries We Serve
          </h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Empowering Industries with Text and Voice AI Agents
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Transform the way your business operates with our cutting-edge AI solutions tailored for various industries.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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