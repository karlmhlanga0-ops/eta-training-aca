import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// Import your logos
import tetaLogo from '@/assets/teta-logo.png';
import insetaLogo from '@/assets/inseta-logo.png';
import servicesLogo from '@/assets/services-logo.png';
import qctoLogo from '@/assets/qtco-logo.jpg'; // Fixed typo from your list (qtco vs qcto)
import saqaLogo from '@/assets/saqa-logo.png';

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5714!2d28.0563!3d-26.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573397!2s36%20Wierda%20Rd%20W!5e0!3m2!1sen!2sza!4v1700000000000";

interface ContactSectionProps {
  onOpenQuote: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);

  const accreditations = [
    { name: 'TETA', src: tetaLogo },
    { name: 'INSETA', src: insetaLogo },
    { name: 'Services SETA', src: servicesLogo },
    { name: 'QCTO', src: qctoLogo },
    { name: 'SAQA', src: saqaLogo },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    
    try {
      const res = await fetch('/api/submit-quote', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          message: formData.message,
          programId: 'GENERAL_INQUIRY',
          programName: 'General Website Inquiry'
        })
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: 'success', msg: data.message || "✓ Thanks for reaching out! We've got your message and will be in touch within 24 hours." });
        setFormData({ name: '', email: '', message: '' });
        // Auto-close success message after 4 seconds
        setTimeout(() => setStatus(null), 4000);
      } else {
        const msg = data.error || "Failed to send. Please email info@empoderata.net directly.";
        setStatus({ type: 'error', msg });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: "Failed to send. Please email info@empoderata.net directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#f9fafc]" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3349df]">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Column 1: Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">General Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {status.msg}
                </div>
              )}
              <input type="text" required placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] outline-none" />
              <input type="email" required placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] outline-none" />
              <textarea required rows={4} placeholder="How can we help?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] outline-none" />
              <button type="submit" disabled={submitting} className="w-full py-4 bg-[#3349df] text-white rounded-full font-bold hover:bg-[#2c4ae8] transition-all disabled:opacity-50">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Column 2: Accreditations (Replaced Quote CTA) */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#3349df] to-[#2640c8] p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Accreditations & Alignment</h3>
              
              {/* Responsive Logo Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 items-center">
                {accreditations.map((logo) => (
                  <div key={logo.name} className="bg-white p-2 rounded-lg flex items-center justify-center aspect-video overflow-hidden border border-white/10 shadow-sm">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="max-h-full max-w-full object-contain filter brightness-100 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm opacity-80 italic">Fully compliant with South African regulatory standards.</p>
            </div>

            <div className="flex items-center space-x-4 p-2">
              <Mail className="w-6 h-6 text-[#3349df]" />
              <a href="mailto:info@empoderata.net" className="text-lg font-medium text-gray-700">info@empoderata.net</a>
            </div>

            <div className="border-t pt-6">
              <button onClick={() => setIsMapOpen(!isMapOpen)} className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#3349df]" />
                  <span className="text-left text-gray-700 font-medium">36 Wierda Road West, Sandton</span>
                </div>
                {isMapOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isMapOpen && (
                <div className="mt-4 rounded-xl overflow-hidden shadow-inner h-64 bg-gray-200">
                  <iframe src={MAP_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;