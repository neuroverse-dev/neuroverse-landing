// FeaturesSection.js
import { ChatBubbleLeftEllipsisIcon, MicrophoneIcon, ComputerDesktopIcon, LinkIcon } from '@heroicons/react/24/outline';

const features = [
    {
      name: 'Custom Text Agents',
      description:
        'Design chat agents tailored to your needs, perfect for a wide range of use cases.',
      icon: ChatBubbleLeftEllipsisIcon, // Chat bubble icon is more fitting for text agents
    },
    {
      name: 'Voice Capabilities',
      description:
        'Create lifelike audio agents with diverse voice options for a more immersive experience.',
      icon: MicrophoneIcon, // Microphone icon is suitable for voice capabilities
    },
    {
      name: 'No Coding Needed',
      description:
        'Build and deploy agents easily with our user-friendly, drag-and-drop interface.',
      icon: ComputerDesktopIcon, // Phone device icon to represent ease of use and accessibility
    },
    {
      name: 'Cross-Platform Integration',
      description:
        'Deploy your agents across apps, websites, and devices with seamless integration.',
      icon: LinkIcon, // Link icon is great for representing cross-platform connectivity
    },
  ];
  
const FeatureSection = ({ title, subtitle, featuresText }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Headline and description */}
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            {title || 'What Can You Do with Neuroverse?'}
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {subtitle || 'Discover the Power of AI Agents'}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">{featuresText || 'Create advanced AI agents effortlessly.'}</p>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
