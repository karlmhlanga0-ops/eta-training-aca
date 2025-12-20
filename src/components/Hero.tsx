import React from 'react';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

interface HeroProps {
  onExploreClick: () => void;
  onQuoteClick: () => void;
}

// Refactor: Define configuration once for reuse (e.g., in the footer)
const particlesOptions = {
    // 1. CRITICAL FIX: CONTAIN PARTICLES TO THE HERO SECTION
    fullScreen: {
        enable: false, // <-- CHANGED from true to false: Particles are now contained.
    },
    background: {
        color: {
            value: "transparent", 
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1
                }
            }
        },
    },
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        // Using the user's preferred colors: opaque white
        color: {
            value: ["#ffffff15",],
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // White connection lines
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    detectRetina: true,
};


const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuoteClick }) => {
    const [particlesInit, setParticlesInit] = React.useState(false);

    React.useEffect(() => {
        if (particlesInit) return;
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesInit(true);
        });
    }, [particlesInit]);


  return (
    // Parent remains 'relative' and 'flex items-center justify-center' for initial layout setup
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
      {/* Background Image (Updated to use a SA-look placeholder) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        // Placeholder for a Black Faces/SA-look image. PLEASE REPLACE!
        style={{ backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp')` }}
      />
      
      {/* 2. BLUE OVERLAY: precise RGB/opacities */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(111, 127, 234, 0.5) 0%, rgba(44,74,232,0.5) 50%, rgba(38,64,200,0.5) 100%)'
        }}
      />
      
      {/* ⚠️ PARTICLE EFFECT LAYER - Contained within the Hero section */}
      {particlesInit && (
          <Particles
              id="tsparticles-hero" // Changed ID to be unique
              options={particlesOptions as any} 
              style={{
                  position: "absolute", // Pin to the parent
                  width: "100%",
                  height: "100%",
                  zIndex: 5, // Below the text, above the overlay
                  top: 0, 
                  left: 0,
              }}
          />
      )}
      
      {/* 3. TEXT CONTENT: CRITICAL FIX: Making this 'absolute inset-0' ensures it 
             covers the whole section, allowing the internal 'mx-auto' to work perfectly
             and solving the right-shift issue. We also make it a flex container to center its contents. */}
      <div className="absolute inset-0 z-10 max-w-6xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Empower Your Workforce.<br />Transform Your Future.
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto opacity-95">
          Empodera Training Academy combines accredited learning with digital tools to help organisations unlock talent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/learnerships" className="px-8 py-4 bg-white text-[#3349df] rounded-full font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">Explore Programmes</Link>
          <button 
            onClick={onQuoteClick}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#3349df] transition-all duration-300"
          >
            Generate a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
