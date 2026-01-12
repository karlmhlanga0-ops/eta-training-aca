import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { LEARNERSHIP_DATA, getProgrammeBySlug, PRICE_12_MONTHS, PRICE_18_MONTHS, PRICE_24_MONTHS } from '@/data/programmes';
import type { Programme } from '@/data/programmes';

interface EasyQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  initialTopic?: string | undefined;
}

const EasyQuoteModal: React.FC<EasyQuoteModalProps> = ({ isOpen, onClose, initialProgramId, initialTopic }) => {
  const [formData, setFormData] = useState({
    company: '',
    fullName: '',
    position: '',
    email: '',
    contactNumber: '',
    programSlug: initialProgramId || LEARNERSHIP_DATA[0]?.id || '',
    topic: initialTopic || '',
    learners: 10,
    mode: 'Online'
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const selectedProgramme: Programme | undefined = useMemo(
    () => getProgrammeBySlug(formData.programSlug),
    [formData.programSlug]
  );

  React.useEffect(() => {
    if (initialTopic) {
      setFormData((s) => ({ ...s, topic: initialTopic }));
    }
  }, [initialTopic]);

  const priceMap: Record<string, number> = {
    PRICE_12_MONTHS,
    PRICE_18_MONTHS,
    PRICE_24_MONTHS
  };

  const perLearner = selectedProgramme ? priceMap[selectedProgramme.price_key] ?? 0 : 0;
  const total = perLearner * formData.learners;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage(null);

    const payload = {
      company: formData.company,
      fullName: formData.fullName,
      position: formData.position,
      email: formData.email,
      contactNumber: formData.contactNumber,
      programId: formData.programSlug,
      programName: selectedProgramme?.name || null,
      learners: formData.learners,
      perLearner,
      total
    };

    try {
      // Call the Vercel serverless API endpoint
      const res = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`API responded with status ${res.status}`);
      }

      const data = await res.json();
      setSuccessMessage(data.message || 'Thanks — your quote request was received. Our team will contact you within 24-48 hours.');
    } catch (err) {
      console.error('Failed to submit quote:', err);
      setSuccessMessage('Quote submission failed. Please try again or contact us directly at info@empoderata.net');
    } finally {
      setSubmitting(false);
      // keep modal open so user can see success message; auto-close after a short delay
      setTimeout(() => {
        setSuccessMessage(null);
        onClose();
      }, 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-[#3349df] to-[#2c4ae8] p-6 rounded-t-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-white">EasyQuote Calculator</h2>
          <p className="text-white/90 mt-2">Get an instant training cost estimate</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {successMessage && (
            <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-800">{successMessage}</div>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
            <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>
          {formData.topic && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Selected Topic</label>
              <input type="text" readOnly value={formData.topic} className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50" />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
            <input type="text" required value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
            <input type="tel" required value={formData.contactNumber} onChange={(e) => setFormData({...formData, contactNumber: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Program</label>
            <select value={formData.programSlug} onChange={(e) => setFormData({...formData, programSlug: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df]">
              {LEARNERSHIP_DATA.map(p => (
                <option value={p.id} key={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Learners: {formData.learners}</label>
            <input type="range" min="1" max="500" value={formData.learners} onChange={(e) => setFormData({...formData, learners: parseInt(e.target.value)})} className="w-full" />
            <input type="number" min={1} max={500} value={formData.learners} onChange={(e) => setFormData({...formData, learners: parseInt(e.target.value || '1')})} className="mt-2 w-28 px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Mode</label>
            <div className="flex gap-4">
              {['Online', 'Onsite', 'Blended'].map(mode => (
                <label key={mode} className="flex items-center">
                  <input type="radio" name="mode" value={mode} checked={formData.mode === mode} onChange={(e) => setFormData({...formData, mode: e.target.value})} className="mr-2" />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#f9fafc] p-6 rounded-xl border-2 border-[#3349df]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Estimated Total:</span>
              <span className="text-2xl font-bold text-[#3349df]">R{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Cost per Learner:</span>
              <span className="text-lg font-semibold text-gray-800">R{perLearner.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">This is an indicative quote; a formal proposal will follow within 24-48 hours.</p>
          </div>

          <button type="submit" disabled={submitting} className="w-full py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-bold text-lg hover:shadow-xl transition-all disabled:opacity-60">
            {submitting ? 'Submitting...' : 'Generate Quote'}
          </button>

          <p className="text-xs text-center text-gray-500">
            Powered by <a href="https://easyquote.octothorp.online" target="_blank" rel="noopener noreferrer" className="text-[#3349df] hover:underline">EasyQuote — Build your own at easyquote.octothorp.online</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EasyQuoteModal;
