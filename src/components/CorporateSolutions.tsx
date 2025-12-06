import React from 'react';

interface CorporateSolutionsProps {
  onQuoteClick: () => void;
}

const CorporateSolutions: React.FC<CorporateSolutionsProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3349df]">
              Corporate Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From learnerships to leadership, Empodera partners with South Africa's top corporates to deliver measurable skills development impact — from SETA-accredited programmes to digital transformation masterclasses.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our tailored programmes align with your business objectives, ensuring compliance while driving real performance improvements across your workforce.
            </p>
            <button 
              onClick={onQuoteClick}
              className="px-8 py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Generate a Corporate Quote
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338390441_c2dab91f.webp" 
              alt="Corporate Team Collaboration" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#3349df] to-[#2640c8] text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Companies Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSolutions;
