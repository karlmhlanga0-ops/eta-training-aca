import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import GrowthFramework from './GrowthFramework';
import ProgrammesGrid from './ProgrammesGrid';
import CorporateSolutions from './CorporateSolutions';
import EasyQuoteModal from './EasyQuoteModal';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const scrollToProgrammes = () => {
    const element = document.getElementById('programmes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <Hero 
        onExploreClick={scrollToProgrammes}
        onQuoteClick={() => setIsQuoteModalOpen(true)}
      />
      <About />
      <GrowthFramework />
      <ProgrammesGrid />
      <CorporateSolutions onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <Testimonials />
      <ContactSection />
      
      <EasyQuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};

export default AppLayout;
