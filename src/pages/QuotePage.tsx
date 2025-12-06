import React, { useState } from 'react';
import EasyQuoteModal from '@/components/EasyQuoteModal';

const QuotePage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f9fafc] p-6">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Quick Quote</h2>
        <p className="text-gray-600 mb-6">Get an indicative quote for your chosen learnership.</p>
        <button onClick={() => setOpen(true)} className="px-6 py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full">Open Quote Form</button>
      </div>

      <EasyQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
};

export default QuotePage;
