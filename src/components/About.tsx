import React, { useState } from 'react';
import { Briefcase, Building2, UserPlus } from 'lucide-react';

// You'll need to define simple placeholder images for the tiles.
// For a real-world scenario, replace these with actual image imports or URLs.
const PlaceholderImage = 'https://via.placeholder.com/400';
const HostingImage = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80';
const RecruitmentImage = 'https://plus.unsplash.com/premium_photo-1661292050812-fd0fd4900f6d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const About: React.FC = () => {
  const serviceTiles = [
    { 
      title: 'Absorption Services', 
      desc: 'Assisting companies to absorb learners into permanent or fixed-term employment roles, improving B-BBEE points.', 
      icon: Briefcase,
      image: 'https://files.sitebuilder.webafrica.co.za/23/6e/236ea0f7-b516-4b7b-bdd2-d3b0f4480f54.jpg'
    },
    { 
      title: 'Hosting Services', 
      desc: 'Acting as a host employer for learners where companies cannot place them directly, ensuring compliance and meaningful workplace experience.', 
      icon: Building2,
      image: HostingImage
    },
    { 
      title: 'Recruitment Services', 
      desc: 'Connecting companies with trained, work-ready graduates and learners to fill critical skills gaps.', 
      icon: UserPlus,
      image: RecruitmentImage
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- New Concise Introduction Paragraph (Slide 1 & 2 Copy) --- */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#3349df]">
             Empowering Skills, Driving Growth
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
Empodera Training Academy is a <b>forward-thinking</b> skills development and training provider specializing in <b>accredited learnerships</b>, customised corporate solutions, and workforce development. We partner with leading South African organisations to deliver training that <b>drives transformation</b>, enhances workforce readiness, and ensures a <b>measurable ROI</b>.          </p>
        </div>

        {/* --- Slide 7: Absorption, Hosting, Recruitment Tiles --- */}
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            End-to-End Workforce Solutions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTiles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative cursor-pointer h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image Placeholder/Background */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Content - Always Visible */}
                <div className="absolute bottom-0 p-6 w-full text-white transition-all duration-500">
                    <Icon className="w-8 h-8 mb-2" />
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                </div>

                {/* Hover Text Overlay - Only Visible on Hover */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <p className="text-white text-center text-lg">{item.desc}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;