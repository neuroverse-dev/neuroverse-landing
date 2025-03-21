// src/components/HowItWorksSection.js
import { BeakerIcon, RocketLaunchIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Design Your Agent',
    description: 'Give it a personality, set its voice and tone, and plug in your knowledge base.',
    icon: BeakerIcon,
  },
  {
    title: 'Deploy Anywhere',
    description: 'Integrate with platforms like WhatsApp, Slack, or your website in a few clicks.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Refine Overtime',
    description: 'Monitor performance and teach your agent new skills as you grow.',
    icon: AdjustmentsHorizontalIcon,
  },
];

export default function HowItWorksSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">How It Works</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Start Building in 3 Simple Steps Section</p>
          <p className="mt-6 text-lg text-gray-600">
            Build your AI-powered agents in just three easy steps. Whether you need text-based or voice-enabled agents, we've got you covered.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {steps?.map((step) => (
            <div key={step.title} className="relative pl-16">
              <dt className="text-base font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {step.title}
              </dt>
              <dd className="mt-2 text-base text-gray-600">{step.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
