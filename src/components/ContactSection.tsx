import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calculator, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const EASYQUOTE_PATH = '/easy-quote'; 
// The map iframe URL provided by the user
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5187333402105!2d28.0542929!3d-26.1146244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cd2050136f7%3A0xa86bd2e29314cd42!2s36%20Wierda%20Rd%20W%2C%20Wierda%20Valley%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1761111733154!5m2!1sen!2sza";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mailto for general inquiries
    window.location.href = `mailto:info@empodera.co.za?subject=General Inquiry from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleQuoteClick = () => {
    // Navigate to the EasyQuote page
    window.location.href = EASYQUOTE_PATH;
  };

  // Simplified contact data structure for cleaner display
  const contactDetails = [
    { icon: Mail, value: 'info@empodera.co.za', href: 'mailto:info@empodera.co.za' },
    { icon: Phone, value: '+27 11 123 4567', href: 'tel:+27111234567' },
  ];

  return (
    <section className="py-20 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Start your quote, or drop us a line for general inquiries.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* --- Column 1: Contact Form --- */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">General Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              {/* Form inputs (Name, Email, Message) remain the same for structure */}
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  id="name"
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  id="email"
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message"
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent transition-colors"
                  placeholder="How can we help your team?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* --- Column 2: EasyQuote CTA and Details/Map --- */}
          <div className="space-y-8">
            
            {/* 1. EasyQuote CTA Block (Tighter Copy) */}
            <div className="bg-gradient-to-br from-[#3349df] to-[#2640c8] p-8 rounded-2xl shadow-2xl flex flex-col justify-center">
                <Calculator className="w-12 h-12 text-white/90 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                    Need a Training Quote?
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                    Instantly estimate and tailor your training budget. Fast, transparent, and built for compliance.
                </p>
                <button 
                    onClick={handleQuoteClick}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-[#3349df] rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 w-auto self-start"
                >
                    <span>Generate My EasyQuote</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
            
            {/* 2. Contact Details & Accordion Map */}
            <div className="space-y-6">
                
                {/* Email and Phone (No Headings) */}
                {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-start space-x-4">
                            <Icon className="w-6 h-6 text-[#3349df] flex-shrink-0" />
                            <a 
                              href={item.href} 
                              className="text-lg font-medium text-gray-700 hover:text-[#3349df] transition-colors"
                            >
                              {item.value}
                            </a>
                        </div>
                    );
                })}

                {/* Location with Accordion */}
                <div className="border-t border-gray-200 pt-6">
                    <button 
                        onClick={() => setIsMapOpen(!isMapOpen)}
                        className="flex items-center justify-between w-full py-2 text-left"
                    >
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-6 h-6 text-[#3349df] flex-shrink-0" />
                            <span className="text-lg font-medium text-gray-700">
                                36 Wierda Road West, Wierda Valley, Sandton
                            </span>
                        </div>
                        {isMapOpen ? 
                            <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        }
                    </button>
                    
                    {/* Map Accordion Tray */}
                    {isMapOpen && (
                        <div className="mt-4 transition-all duration-300 overflow-hidden rounded-xl shadow-lg">
                            <iframe 
                                src={MAP_EMBED_URL} 
                                width="100%" 
                                height="350" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;