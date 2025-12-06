import React, { useState } from 'react';
import { Quote, CheckCircle, TrendingUp, Award, Users, Zap, Compass } from 'lucide-react';

// NOTE: This component assumes you have added the necessary
// global CSS keyframes for the logo carousel (animate-scroll)
// as provided in the previous response.

const ClientProof: React.FC = () => {
  // --- Data ---
  const clientLogos = [
    'standard-bank-mono.svg', 'absa-mono.svg', 'nedbank-mono.svg', 'firstrand-mono.svg',
    'discovery-mono.svg', 'sanlam-mono.svg', 'hollard-mono.svg', 'mtn-mono.svg',
    'shoprite-mono.svg', 'transnet-mono.svg', 'sasol-mono.svg', 'vodacom-mono.svg',
    'woolworths-mono.svg', 'anglo-american-mono.svg', 'pick-n-pay-mono.svg'
  ];

  const testimonials = [
    {
      text: "Empodera's digital programmes helped us certify 120 employees remotely — effortless compliance.",
      author: "L&D Manager",
      company: "RetailCo"
    },
    {
      text: "The EasyQuote tool made planning our training budget simple and transparent.",
      author: "HR Partner",
      company: "Logistics Group"
    },
    {
      text: "Outstanding support and industry-relevant content. Our team's productivity increased by 35%.",
      author: "Operations Director",
      company: "Manufacturing Solutions"
    }
  ];

  // Updated 'Why Partner' points with more dynamic icons
  const whyPartnerCards = [
    { icon: Zap, title: 'Agile & Innovative', text: 'We are transformation-driven, adopting agile methods to meet rapid corporate demands.' },
    { icon: Compass, title: 'SETAs Accredited', text: 'Access multiple SETA-accredited programmes to ensure compliance and high-quality learning.' },
    { icon: TrendingUp, title: 'Proven Framework', text: 'Utilise our GROWTH framework for guaranteed learner success and measurable ROI.' },
    { icon: Users, title: 'SA Workforce Focus', text: 'Deeply committed to developing South Africa’s future workforce with relevant skills.' },
    { icon: Award, title: 'Corporate Alignment', text: 'Strong understanding of corporate skills needs for tailored, high-impact solutions.' },
  ];
  
  // State for card tilt effect
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Utility Component for Logo Duplication
  const logoList = [...clientLogos, ...clientLogos]; 

  return (
    <section className="bg-[#f9fafc] overflow-hidden">
      
      {/* --- Client Logo Carousel (Full Width) --- */}
      <div className="py-8 border-t border-b border-gray-200 bg-white">
        {/* The container holds the duplicated list in one row */}
        <div className="flex w-[200%] animate-scroll"> 
          {logoList.map((logo, index) => (
            <div 
              key={index} 
              // Set logo width to ensure full-width span before looping
              className="flex-shrink-0 w-[6.6666%] h-20 flex items-center justify-center p-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Replace the placeholder with an actual <img> tag pointing to your logo path */}
              <div className="text-sm text-gray-400 font-semibold text-center w-full">{logo.replace('-mono.svg', '').toUpperCase()}</div>
              {/* <img src={logo} alt={`Client Logo ${index}`} className="max-h-12 w-auto filter grayscale" /> */}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* --- Impact Story / Case Study (Slide 11) --- */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-6 text-[#3349df] uppercase tracking-wider">
            Client Impact Story
          </h2>
          <div className="bg-[#3349df] text-white p-10 rounded-2xl shadow-2xl relative">
            <Quote className="w-12 h-12 absolute -top-4 -left-4 text-white/50" />
            <p className="text-3xl font-light italic text-center leading-snug">
              "Through our learnerships, **SPAR** achieved a **90% completion rate**, absorbed **65% of learners** into permanent roles, and improved B-BBEE Skills Development points significantly."
            </p>
          </div>
        </div>

        {/* --- Testimonials (Original Content) --- */}
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="w-8 h-8 text-[#3349df] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic text-base">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* --- DYNAMIC 'WHY PARTNER' CARDS (Slide 14) --- */}
        {/* ----------------------------------------------------------------- */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          The Empodera Advantage
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Five reasons why leading South African companies choose us for measurable skills development.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {whyPartnerCards.map((card, index) => {
            const Icon = card.icon;
            // Calculate tilt transform effect based on mouse position (simplified hover for now)
            const transform = hoverIndex === index 
                ? 'scale(1.03) rotateX(1deg) rotateY(1deg)' 
                : 'scale(1)';

            return (
              <div
                key={index}
                className="relative h-60 md:h-72 group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`absolute inset-0 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all duration-500 ease-out cursor-default`}
                  style={{ 
                      // Apply the custom blue gradient background
                      background: 'linear-gradient(135deg, #3349df 0%, #2640c8 100%)',
                      transform: transform,
                      transformStyle: 'preserve-3d', // Enables 3D transforms
                  }}
                >
                  {/* Top Content (Icon) */}
                  <div className="flex justify-between items-center">
                    <div className="p-2 rounded-full bg-white/10">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Bottom Content (Text) */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                    <p className={`text-sm text-white/90 transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                        {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ClientProof;