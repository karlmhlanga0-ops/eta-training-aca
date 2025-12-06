import React from 'react';
import { BookOpen, Zap, Gem } from 'lucide-react';

// Path constants for your CTAs
const LEARNERSHIPS_PATH = '/learnerships';
const SLPS_PATH = '/short-programmes';
const MASTERCLASSES_PATH = '/masterclasses';

const ServiceOverview: React.FC = () => {
  const serviceBlocks = [
    {
      title: 'Learnerships',
      subtitle: 'Accredited NQF Level 2–7 programmes',
      description: 'Comprehensive, long-term programmes that combine structured learning with practical workplace experience, driving B-BBEE and talent development.',
      icon: BookOpen,
      iconColor: 'text-[#3349df]',
      bgColor: 'bg-white',
      shadow: 'shadow-lg hover:shadow-2xl',
      ctaText: 'View Learnerships',
      ctaPath: LEARNERSHIPS_PATH,
      // Placeholder image URL
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338385583_9a4575dd.webp' 
    },
    {
      title: 'Short Learning Programmes (SLPs)',
      subtitle: 'Focused 2-day to 12-week interventions',
      description: 'Targeted short courses designed to rapidly upskill teams in specific, critical areas without requiring a long-term commitment.',
      icon: Zap,
      iconColor: 'text-[#2c4ae8]',
      bgColor: 'bg-white',
      shadow: 'shadow-lg hover:shadow-2xl',
      ctaText: 'Explore SLPs',
      ctaPath: SLPS_PATH,
      // Placeholder image URL
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338386340_6e4064a9.webp'
    },
    {
      title: 'Masterclasses & Open Programmes',
      subtitle: 'Leadership, AI, ESG, and Digital Transformation',
      description: 'Exclusive, high-level sessions and open enrolment courses on future-ready topics, perfect for executive and continuous professional development.',
      icon: Gem,
      // Darker tone for exclusivity/luxury
      iconColor: 'text-white',
      bgColor: 'bg-[#1e293b]', // Slate-800 for a darker, premium feel
      shadow: 'shadow-2xl shadow-[#1e293b]/50 hover:shadow-3xl',
      ctaText: 'Access Masterclasses',
      ctaPath: MASTERCLASSES_PATH,
      // Placeholder image URL
      image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387090_65fc64d1.webp'
    }
  ];

  // Note: Customised Corporate Solutions (item 3 in the slide) is excluded here 
  // because it has its own dedicated section below this one, as per your instruction.

  return (
    <section id="service-overview" className="py-20 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          Our Comprehensive Service Overview
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          We offer four key training pillars to support every level of your workforce, ensuring measurable development and compliance goals are met.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceBlocks.map((block, index) => (
            <div
              key={index}
              // Combined styling for tile aesthetic and hover effect
              className={`rounded-2xl overflow-hidden ${block.bgColor} ${block.shadow} hover:-translate-y-2 transition-all duration-300 flex flex-col`}
            >
              {/* Image Section */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={block.image} 
                  alt={block.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <block.icon className={`w-8 h-8 mb-4 ${block.iconColor}`} />
                <h3 className={`text-xl font-bold mb-1 ${block.bgColor === 'bg-[#1e293b]' ? 'text-white' : 'text-gray-900'}`}>{block.title}</h3>
                <p className={`text-sm font-semibold mb-4 ${block.bgColor === 'bg-[#1e293b]' ? 'text-gray-300' : 'text-[#3349df]'}`}>{block.subtitle}</p>
                <p className={`text-base flex-grow mb-6 ${block.bgColor === 'bg-[#1e293b]' ? 'text-gray-400' : 'text-gray-700'}`}>{block.description}</p>
                
                {/* CTA Button */}
                <a 
                  href={block.ctaPath}
                  className="mt-auto block w-full text-center py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {block.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;