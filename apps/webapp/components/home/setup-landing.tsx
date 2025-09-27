import React from 'react';
import { Code2, Wallet, Rocket } from 'lucide-react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  showArrow?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description, icon, showArrow = false }) => {
  return (
    <div className="flex items-center">
      <div className="relative rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-200 flex-1 group bg-transparent">
        {/* Step Number Badge */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
          {stepNumber}
        </div>
        
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
          <div className="text-white" aria-label={`Step ${stepNumber}: ${title}`}>
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Arrow for desktop */}
      {showArrow && (
        <div className="hidden lg:flex items-center justify-center mx-4 text-gray-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

const SetupLanding: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Clone Template",
      description: "Get started with our pre-built Soroswap integration template",
      icon: <Code2 size={32} />
    },
    {
      stepNumber: 2,
      title: "Configure Wallet",
      description: "Set up Freighter wallet connection and Stellar network configuration",
      icon: <Wallet size={32} />
    },
    {
      stepNumber: 3,
      title: "Deploy & Launch",
      description: "Deploy your DeFi application with full Soroswap functionality",
      icon: <Rocket size={32} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Elements */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-6">
            <span className="text-base">🛠</span>
            <span>Quick Setup</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deploy your own Soroswap-integrated DeFi application in minutes, not weeks
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              icon={step.icon}
              showArrow={index < steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupLanding;