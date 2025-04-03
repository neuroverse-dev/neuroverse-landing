// src/components/UseCasesSection.js
import { ChatBubbleLeftRightIcon, MegaphoneIcon, BookOpenIcon, PencilIcon, HeartIcon,HomeIcon,MicrophoneIcon,ChartBarIcon,UserGroupIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    name: 'Customer Support',
    description: 'Deploy AI agents to offer round‑the‑clock customer support through text and voice channels. ',
    icon: ChatBubbleLeftRightIcon,
    rating: 5,
    impact: "Maximizes customer satisfaction with instant, consistent responses while reducing the workload on human agents."
  },
  {
    name: 'Lead Generation',
    description: 'Engage prospective customers with dynamic, personalized conversations that nurture interest and drive conversions.',
    icon: MegaphoneIcon,
    rating: 4.5,
    impact: "Enhances the sales funnel by capturing leads early and guiding them through tailored interactions."
  },
  {
    name: 'Training & Tutorials',
    description: 'Use AI-powered tutors and interactive learning modules to provide personalized training and educational content.  ',
    icon: BookOpenIcon,
     rating: 4,
    impact: "Improves learning outcomes and offers scalable, on‑demand training for both educational institutions and corporate environments."
  },
  {
    name: 'Content Creation',
    description: 'Generate professional-grade voiceovers for videos, podcasts, and audiobooks without the need for extensive recording sessions.',
    icon: PencilIcon,
     rating: 4,
    impact: "Streamlines multimedia production and supports creative marketing efforts by reducing time and cost."
  },
  {
    name: "Restaurants and Hotels",
    description: "Create AI-driven virtual concierges that handle 24/7 booking assistance, personalized trip planning, and concierge services tailored for the hospitality industry.",
    rating: 4,
    icon: HomeIcon  ,
    impact: "Elevates guest experiences by providing instant support and personalized service, helping to drive repeat business."
  },
  {
    name: "Telemedicine & Patient Engagement",
    description: "Automate patient triage, appointment scheduling, and follow-ups to support telemedicine services and continuous care.",
    rating: 4,
    icon: HeartIcon,
    impact: "Enhances patient accessibility and engagement while reducing administrative burdens in healthcare."
  },
  {
    name: "HR & Recruitment Assistance",
    description : "Implement AI agents to handle candidate screening, answer frequently asked HR questions, and streamline the onboarding process for new hires.",
    rating: 4,
    icon: UserGroupIcon,
    impact: "Speeds up recruitment, reduces manual processing, and enhances the candidate experience by providing immediate, relevant responses."
  },
  {
    name: "Sales & Conversion Optimization",
    description: "Beyond initial lead engagement, AI agents can assist with upselling, cross‑selling, and providing tailored product recommendations during the customer journey.",
    rating: 4.5,
    icon: ChartBarIcon,
    impact: "Maximizes revenue opportunities by ensuring that each interaction is customized to meet customer needs and preferences."
  },
  {
    name: "Event Management & Interactive Experiences",
    description: "Enhance events by using AI agents for registration, live Q&A sessions, and attendee engagement during webinars, conferences, or trade shows.",
    rating: 4,
    icon: MicrophoneIcon,
    impact: "Improves overall event management efficiency and creates a more interactive, engaging experience for participants."
  }

];

export default function UseCasesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Top Use Cases</h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            AI Solutions for Every Business Need
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered solutions can transform how your business operates across various functions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            // <div
            //   key={useCase.name}
            //   className="relative flex items-start space-x-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            // >
            //   <div className="flex-shrink-0">
            //     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
            //       <useCase.icon className="h-6 w-6" aria-hidden="true" />
            //     </div>
            //   </div>
            //   <div>
            //     <h3 className="text-lg font-medium text-gray-900">{useCase.name}</h3>
            //     <p className="mt-2 text-base text-gray-500">{useCase.description}</p>
            //   </div>
            // </div>

            <div
            key={useCase.name}
            className="relative flex flex-col items-center text-center space-y-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
              <useCase.icon className="h-7 w-7" aria-hidden="true" />
            </div>
          
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">{useCase.name}</h3>
          
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-lg">
                {"★".repeat(useCase.rating)}
                {"☆".repeat(5 - useCase.rating)}
              </span>
              <span className="text-gray-600 text-sm font-medium">({useCase.rating}/5)</span>
            </div>
          
            {/* Description */}
            <p className="text-base text-gray-500 px-4">
              {useCase.description}
            </p>
          
            {/* Impact Section */}
            <div className="mt-auto w-full w-full p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg text-left">
              <p className="text-sm font-semibold text-indigo-700">Impact:</p>
              <p className="text-sm text-gray-600">{useCase.impact}</p>
            </div>
          
            
          </div>
          

          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <button className="rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Discover All Use Cases
          </button>
        </div> */}
      </div>
    </div>
  );
}
