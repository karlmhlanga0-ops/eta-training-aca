import React from 'react';
import { Link } from 'react-router-dom';
// Re-import the necessary particle components
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// ⚠️ We need to re-define the particles options here since we cannot import them
// from the Hero component directly without changing file structure
const particlesOptions = {
  fullScreen: {
        enable: true, 
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
            value: 40, // Reduced number for footer
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ["#ffffff", "#93c5fd"], // Only white and light blue for darker footer
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2, // Smaller size for footer
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
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5, // Slower movement for footer
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    detectRetina: true,
};

const Footer: React.FC = () => {

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
    // ⚠️ Added relative positioning and z-index to contain the particles
    <footer className="relative bg-gradient-to-br from-[#1e293b] to-[#3349df] text-white py-12 overflow-hidden z-0">
        
        {/* ⚠️ PARTICLE EFFECT LAYER for Footer */}
        {particlesInit && (
            <Particles
                id="tsparticles-footer"
                options={particlesOptions as any}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 0, // Behind the content
                    top: 0,
                    left: 0,
                }}
            />
        )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Tagline */}
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/689f069373db79e875d8de8a_1760338302628_a7cf9aea.png" 
              alt="Empodera Logo" 
              className="h-12 mb-4"
            />
            <p className="text-white/80 text-sm">
              Building Africa's Future Workforce
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li><Link to="/learnerships" className="hover:text-white/80 transition-colors">Programmes</Link></li>
              <li><Link to="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-bold mb-4">Programmes</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/learnerships" className="hover:text-white transition-colors">Learnerships</Link></li>
              <li><Link to="/slps" className="hover:text-white transition-colors">Short Programmes</Link></li>
              <li><Link to="/masterclasses" className="hover:text-white transition-colors">Masterclasses</Link></li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            {/* ⚠️ UPDATED ADDRESS DETAILS */}
            <p className="text-sm text-white/80 mb-1">Block A</p>
            <p className="text-sm text-white/80 mb-3">Sandton</p>
            {/* END UPDATED ADDRESS DETAILS */}
            <p className="text-sm text-white/80 mb-2">info@empodera.co.za</p>
            <p className="text-sm text-white/80">+27 11 123 4567</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p className="mb-2">© 2025 Empodera Training Academy. All rights reserved.</p>
          <p className="text-white/60">
            Site powered by <a href="https://octothorp.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">EasyQuote (ODS)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
