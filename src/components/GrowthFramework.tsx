import React, { useState } from 'react';

const GrowthFramework: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    { letter: 'G', title: 'Grounding', desc: 'Building foundational skills and knowledge' },
    { letter: 'R', title: 'Readiness', desc: 'Preparing learners for real-world challenges' },
    { letter: 'O', title: 'Opportunities', desc: 'Creating pathways for career advancement' },
    { letter: 'W', title: 'Work-Integrated Learning', desc: 'Hands-on experience in real environments' },
    { letter: 'T', title: 'Transformation', desc: 'Driving personal and professional growth' },
    { letter: 'H', title: 'Holistic Development', desc: 'Nurturing complete skill ecosystems' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          The GROWTH Framework
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Our holistic approach to workforce development
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#3349df] to-[#2640c8] rounded-2xl p-6 h-40 flex flex-col items-center justify-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <span className="text-5xl font-bold mb-2">{item.letter}</span>
                <span className="text-sm font-semibold text-center">{item.title}</span>
              </div>
              {activeIndex === index && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 z-10 w-64 border border-[#e8ebf5]">
                  <p className="text-sm text-gray-700 text-center">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthFramework;
