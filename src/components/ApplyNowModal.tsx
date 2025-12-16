import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  programmeId?: string;
}

const ApplyNowModal: React.FC<ApplyNowModalProps> = ({ isOpen, onClose, programmeId }) => {
  const [form, setForm] = useState<any>({
    fullName: '',
    idNumber: '',
    dob: '',
    contactNumber: '',
    email: '',
    address: '',
    highestQualification: '',
    employerDetails: '',
    employed: 'No',
    disability: 'No',
    disabilityType: '',
    numApplying: 1,
    comments: '',
    programmeId: programmeId || ''
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [qualFile, setQualFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const readFileAsBase64 = (file: File) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // strip prefix
      const comma = result.indexOf(',');
      const content = comma >= 0 ? result.slice(comma + 1) : result;
      resolve(content);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const attachments: any[] = [];
      if (cvFile) attachments.push({ filename: cvFile.name, type: cvFile.type || 'application/octet-stream', data: await readFileAsBase64(cvFile) });
      if (idFile) attachments.push({ filename: idFile.name, type: idFile.type || 'application/octet-stream', data: await readFileAsBase64(idFile) });
      if (qualFile) attachments.push({ filename: qualFile.name, type: qualFile.type || 'application/octet-stream', data: await readFileAsBase64(qualFile) });

      const payload = { ...form, attachments };

      const res = await fetch('/api/submit-application', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setMessage('Application submitted — we will contact you shortly.');
      setTimeout(() => { setMessage(null); onClose(); }, 2500);
    } catch (err: any) {
      console.error(err);
      setMessage(err?.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="text-xl font-bold">Apply Now</h3>
          <button onClick={onClose} className="text-gray-600"><X /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {message && <div className="p-3 bg-green-50 border border-green-200 text-green-800">{message}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Full Name" value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input required placeholder="ID Number" value={form.idNumber} onChange={(e) => setForm({...form, idNumber: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input type="date" required value={form.dob} onChange={(e) => setForm({...form, dob: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input required placeholder="Contact Number" value={form.contactNumber} onChange={(e) => setForm({...form, contactNumber: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Residential Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Highest Qualification Achieved" value={form.highestQualification} onChange={(e) => setForm({...form, highestQualification: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <select value={form.employed} onChange={(e) => setForm({...form, employed: e.target.value})} className="w-full px-3 py-2 border rounded">
              <option>No</option>
              <option>Yes</option>
            </select>
            <input placeholder="Employer Details (if employed)" value={form.employerDetails} onChange={(e) => setForm({...form, employerDetails: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <select value={form.disability} onChange={(e) => setForm({...form, disability: e.target.value})} className="w-full px-3 py-2 border rounded">
              <option>No</option>
              <option>Yes</option>
            </select>
            <input placeholder="Disability Type (if applicable)" value={form.disabilityType} onChange={(e) => setForm({...form, disabilityType: e.target.value})} className="w-full px-3 py-2 border rounded" />
            <input type="number" min={1} placeholder="Number applying" value={form.numApplying} onChange={(e) => setForm({...form, numApplying: parseInt(e.target.value || '1')})} className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload CV</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files?.[0] || null)} />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Certified ID Copy</label>
            <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => setIdFile(e.target.files?.[0] || null)} />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Highest Qualification Certificate</label>
            <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => setQualFile(e.target.files?.[0] || null)} />
          </div>

          <div>
            <label className="block text-sm font-medium">Which Learnership are you applying for?</label>
            <input placeholder="Programme ID or Name" value={form.programmeId} onChange={(e) => setForm({...form, programmeId: e.target.value})} className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Additional comments</label>
            <textarea value={form.comments} onChange={(e) => setForm({...form, comments: e.target.value})} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="flex gap-3">
            <button type="submit" disabled={submitting} className="px-6 py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full">{submitting ? 'Submitting...' : 'Submit Application'}</button>
            <button type="button" onClick={onClose} className="px-6 py-3 border rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowModal;
