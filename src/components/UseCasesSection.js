// src/components/UseCasesSection.js
import { ChatBubbleLeftRightIcon, MegaphoneIcon, BookOpenIcon, PencilIcon, CogIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    name: 'Customer Support',
    description: '24/7 availability to handle inquiries and resolve issues quickly.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Lead Generation',
    description: 'Engage prospects through text or voice, boosting conversion rates.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Training & Tutorials',
    description: 'Interactive learning modules powered by AI agents.',
    icon: BookOpenIcon,
  },
  {
    name: 'Content Creation',
    description: 'Generate voiceovers for videos, podcasts, and audiobooks.',
    icon: PencilIcon,
  },
  {
    name: 'Internal Automation',
    description: 'Streamline repetitive tasks like data entry or reminders.',
    icon: CogIcon,
  },
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
            <div
              key={useCase.name}
              className="relative flex items-start space-x-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <useCase.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{useCase.name}</h3>
                <p className="mt-2 text-base text-gray-500">{useCase.description}</p>
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
