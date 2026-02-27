import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { LEARNERSHIP_DATA, getProgrammeBySlug, PRICE_12_MONTHS, PRICE_18_MONTHS, PRICE_24_MONTHS } from '@/data/programmes';
import type { Programme } from '@/data/programmes';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

  const generateAndDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Header background
    doc.setFillColor(51, 73, 223); // #3349df
    doc.rect(0, 0, pageWidth, 40, 'F');

    // Company Logo (left side)
    try {
      const logoUrl = '/PHOTO-2025-09-09-18-41-53-removebg-preview-CQrjhn-D.png';
      doc.addImage(logoUrl, 'PNG', 20, 8, 20, 24);
    } catch (e) {
      // Logo failed to load, continue without it
      console.warn('Logo failed to load in PDF');
    }

    // Logo/Branding (adjust x position to accommodate logo)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('EMPODERA', 45, 18);
    doc.setFontSize(10);
    doc.text('Training Academy', 45, 27);

    yPosition = 55;

    // Title
    doc.setTextColor(51, 73, 223);
    doc.setFontSize(18);
    doc.text('FORMAL QUOTE', 20, yPosition);
    yPosition += 10;

    // Date
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(11);
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.text(`Date: ${dateStr}`, 20, yPosition);
    yPosition += 8;

    // Client Details Section
    doc.setTextColor(51, 73, 223);
    doc.setFontSize(12);
    doc.text('CLIENT DETAILS', 20, yPosition);
    yPosition += 7;

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(10);
    doc.text(`Name: ${formData.fullName}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Company: ${formData.company}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Position: ${formData.position}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Email: ${formData.email}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Phone: ${formData.contactNumber}`, 25, yPosition);
    yPosition += 12;

    // Programme Details
    doc.setTextColor(51, 73, 223);
    doc.setFontSize(12);
    doc.text('PROGRAMME DETAILS', 20, yPosition);
    yPosition += 7;

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(10);
    doc.text(`Programme: ${selectedProgramme?.name || formData.programSlug}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Delivery Mode: ${formData.mode}`, 25, yPosition);
    yPosition += 5;
    doc.text(`Number of Learners: ${formData.learners}`, 25, yPosition);
    yPosition += 12;

    // Cost Table
    doc.setTextColor(51, 73, 223);
    doc.setFontSize(12);
    doc.text('COST BREAKDOWN', 20, yPosition);
    yPosition += 10;

    const tableData = [
      ['Description', 'Unit Price', 'Quantity', 'Total'],
      [
        selectedProgramme?.name || formData.programSlug,
        `R${perLearner.toLocaleString('en-ZA')}`,
        `${formData.learners}`,
        `R${total.toLocaleString('en-ZA')}`
      ]
    ];

    autoTable(doc, {
      startY: yPosition,
      head: [[...tableData[0]]],
      body: [[...tableData[1]]],
      headStyles: {
        fillColor: [51, 73, 223],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 10
      },
      bodyStyles: {
        textColor: [80, 80, 80],
        fontSize: 10
      },
      columnStyles: {
        1: { halign: 'right' },
        2: { halign: 'center' },
        3: { halign: 'right' }
      },
      margin: { left: 20, right: 20 }
    });

    yPosition = (doc as any).lastAutoTable.finalY + 15;

    // Total
    doc.setTextColor(51, 73, 223);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('TOTAL ESTIMATED COST:', 20, yPosition);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(16);
    doc.text(`R${total.toLocaleString('en-ZA')}`, pageWidth - 20, yPosition, { align: 'right' });

    yPosition += 20;

    // Payment Information Section
    doc.setTextColor(51, 73, 223);
    doc.setFontSize(12);
    doc.text('PAYMENT INFORMATION', 20, yPosition);
    yPosition += 10;

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(10);
    const labelX = 25;
    const valueX = 100;

    doc.setFont(undefined, 'bold');
    doc.text('Bank:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('Standard Bank', valueX, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'bold');
    doc.text('Account Holder:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('EMPODERA TRAINING ACADEMY (PTY) LTD', valueX, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'bold');
    doc.text('Account Number:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('10255154974', valueX, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'bold');
    doc.text('Account Type:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('MyMobiz Current Account', valueX, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'bold');
    doc.text('Branch:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('Johannesburg (Code: 051001)', valueX, yPosition);
    yPosition += 8;

    doc.setFont(undefined, 'bold');
    doc.text('SWIFT Address:', labelX, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text('SBZA ZA JJ', valueX, yPosition);
    yPosition += 10;

    // Payment reference note
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.text('Please use your Company Name as a reference.', labelX, yPosition);

    yPosition += 16;

    // Footer
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.text('This is an indicative quote for preliminary planning purposes only.', 20, yPosition);
    yPosition += 5;
    doc.text('A formal proposal with all terms and conditions will follow within 24-48 hours.', 20, yPosition);

    // Download the PDF
    const filename = `Empodera-Quote-${formData.fullName.replace(/\s+/g, '-')}-${dateStr.replace(/\s+/g, '-')}.pdf`;
    doc.save(filename);
  };

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
      total,
      deliveryMode: formData.mode
    };

    try {
      // Generate and download PDF immediately
      generateAndDownloadPDF();

      // Also send data to Formspree
      const formRes = await fetch('https://formspree.io/f/mreadqkw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          programName: selectedProgramme?.name || '',
          learners: formData.learners,
          total
        })
      });

      if (formRes.ok) {
        setSuccessMessage('✓ Your quote has been downloaded and sent. Our team will review it shortly.');
      } else {
        const errData = await formRes.json().catch(() => ({}));
        console.error('Formspree error', errData);
        setSuccessMessage('Quote downloaded. Submission failed, please contact info@empoderata.net');
      }
    } catch (err) {
      console.error('Failed to submit quote via Formspree:', err);
      setSuccessMessage('Quote downloaded. Submission error, please contact info@empoderata.net');
    } finally {
      setSubmitting(false);
      // Auto-close after a delay
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
