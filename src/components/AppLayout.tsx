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
  const [quoteTopic, setQuoteTopic] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setQuoteTopic(detail.topic || detail.programmeId || undefined);
      setIsQuoteModalOpen(true);
    };
    window.addEventListener('openQuote', handler as EventListener);
    return () => window.removeEventListener('openQuote', handler as EventListener);
  }, []);

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
        onClose={() => { setIsQuoteModalOpen(false); setQuoteTopic(undefined); }}
        initialTopic={quoteTopic}
      />
    </div>
  );
};

export default AppLayout;
