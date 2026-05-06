import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import GetInTouchMenu from './GetInTouchMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Programmes',
    href: '/learnerships',
    dropdown: [
      { name: 'Learnerships', href: '/learnerships' },
      { name: 'Short Programmes', href: '/short-programmes' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Masterclasses', href: '/masterclasses' },
    ],
  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

interface DropdownLinkProps {
    name: string;
    links: { name: string, href: string }[];
    isMobile: boolean;
    onClose: () => void;
    // Optional href for the main link (used only for desktop non-navigating link)
    mainHref: string; 
}

// Helper component for the Programmes Dropdown/Accordion
const DropdownLink: React.FC<DropdownLinkProps> = ({ name, links, isMobile, onClose, mainHref }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e: React.MouseEvent) => {
        // Prevent navigation on desktop when toggling the dropdown
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
        onClose(); // Close the main mobile menu
    };

    // --- Desktop Dropdown ---
    if (!isMobile) {
        let hideTimeout: ReturnType<typeof setTimeout>;

        const handleMouseLeave = () => {
            hideTimeout = setTimeout(() => {
                setIsDropdownOpen(false);
            }, 150);
        };

        const handleMouseEnter = () => {
            clearTimeout(hideTimeout);
            setIsDropdownOpen(true);
        };

        return (
            <div 
                className="relative h-full flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link
                  to={mainHref}
                  className="flex items-center text-text-dark hover:text-primary transition-colors px-3 py-2 rounded-md font-semibold"
                >
                    {name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-150 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>
                {isDropdownOpen && (
                    <div className="absolute top-full mt-0.5 w-52 bg-white border border-gray-100 rounded-lg shadow-xl z-50 overflow-hidden animate-fade-in-up origin-top">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`block px-4 py-3 text-sm font-medium transition-colors ${link.name === 'Masterclasses' ? 'text-[#3349df] font-bold' : 'text-text-dark hover:text-primary'} hover:bg-gray-50`}
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // --- Mobile Accordion ---
    return (
        <div className="w-full">
            <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full px-3 py-2 text-text-dark hover:text-primary font-medium"
            >
                <span>{name}</span>
                {isDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {isDropdownOpen && (
                <div className="ml-4 border-l border-gray-200 pl-3 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`block px-3 py-1 text-base font-normal transition-colors ${link.name === 'Masterclasses' ? 'text-[#3349df] font-semibold hover:text-[#3349df]' : 'text-gray-600 hover:text-primary'}`}
                            onClick={handleLinkClick} // Closes the mobile menu
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl = "https://d64gsuwffb70l.cloudfront.net/689f069373db79e875d8de8a_1760338302628_a7cf9aea.png";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height */}
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              className="h-10 w-auto" 
              src={logoUrl} 
              alt="Empodera Training Academy Logo"
            />
          </Link>
          <div className="hidden sm:flex sm:items-center sm:ml-3">
            <span className="text-sm italic text-gray-600">Accelerating your ETA to excellence</span>
          </div>

          {/* Desktop Navigation and CTA */}
          <div className="hidden lg:flex items-center space-x-2">
            
            {navLinks.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownLink 
                    key={item.name} 
                    name={item.name} 
                    links={item.dropdown} 
                    isMobile={false} 
                    onClose={() => {}} 
                    mainHref={item.href}
                  />
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 rounded-lg font-semibold text-text-dark hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
            
            <GetInTouchMenu />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white shadow-xl z-40 transition-all duration-300 border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2 text-text-dark">
            
            {navLinks.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownLink
                    key={item.name}
                    name={item.name}
                    links={item.dropdown}
                    isMobile={true}
                    onClose={toggleMenu}
                    mainHref={item.href}
                  />
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-3 py-3">
              <GetInTouchMenu fullWidth />
            </div>
          </div>
        </div>
      )}
      {/* EasyQuote modal removed from Navbar; Contact page handles inquiries */}
    </nav>
  );
};

export default Navbar;
