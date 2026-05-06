import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import GetInTouchMenu from '@/components/GetInTouchMenu';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<{type:'success'|'error', msg:string} | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);
        try {
            const res = await fetch('https://formspree.io/f/mreadqkw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });
            const data = await res.json().catch(() => ({}));
            if (res.ok) {
                setStatus({ type: 'success', msg: data.message || "✓ Thanks for reaching out! We'll respond within 24 hours." });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 4000);
            } else {
                setStatus({ type: 'error', msg: data.error || "Failed to send. Please email info@empoderata.net directly." });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: "Failed to send. Please email info@empoderata.net directly." });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="font-[Plus_Jakarta_Sans] bg-slate-50 min-h-screen">
            <section className="bg-[#3349df] py-24">
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-200 mb-4">Contact & Support</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Get in touch with Empodera</h1>
                    <p className="text-xl max-w-3xl mx-auto text-slate-200/85">
                        Whether you need a tailored skills development solution or want to discuss a strategic leadership programme, our team is ready to help.
                    </p>
                </div>
            </section>

            <section className="-mt-16 px-6">
                <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_1.9fr]">
                    <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-slate-200">
                        <div className="flex items-center justify-between gap-4 mb-8">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-[#3349df] font-semibold">Quick Contact</p>
                                <h2 className="mt-3 text-3xl font-bold text-slate-900">Reach out instantly</h2>
                            </div>
                            <div className="rounded-3xl bg-slate-100 p-3">
                                <Mail className="h-6 w-6 text-[#3349df]" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                                <p className="text-sm font-medium text-slate-500">Office</p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">36 Wierda Road West</p>
                                <p className="text-sm text-slate-600">Wierda Valley, Sandton, 2196</p>
                            </div>

                            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                                <p className="text-sm font-medium text-slate-500">Email</p>
                                <a href="mailto:info@empoderata.net?subject=Contact%20Form%20Enquiry" className="mt-3 block text-lg font-semibold text-slate-900 hover:text-[#3349df] transition-colors">info@empoderata.net</a>
                                <p className="text-sm text-slate-600">Available during business hours</p>
                            </div>

                            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                                <p className="text-sm font-medium text-slate-500">Calls and Chat</p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">Use our safe contact tools</p>
                                <p className="text-sm text-slate-600">Tap below for a secure phone or WhatsApp connection without exposing the raw number as visible text.</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <GetInTouchMenu fullWidth />
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-slate-200">
                        {status && (
                            <div className={`mb-6 rounded-3xl p-4 ${status.type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'}`}>
                                {status.msg}
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Send us a message</h3>
                        <p className="text-slate-600 mb-8">Please share your training goals, timeline, or questions and we will respond quickly.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#3349df] focus:ring-2 focus:ring-[#3349df]/20 transition"
                                    placeholder="Jane Smith"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#3349df] focus:ring-2 focus:ring-[#3349df]/20 transition"
                                    placeholder="jane.smith@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#3349df] focus:ring-2 focus:ring-[#3349df]/20 transition"
                                    placeholder="Tell us about your organisation's training needs..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-[#3349df] px-6 py-3 text-white font-semibold shadow-lg shadow-[#3349df]/20 transition hover:bg-[#2c4ae8] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Send className="h-5 w-5" />
                                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                    <iframe
                        title="Empodera Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5187333402105!2d28.0542929!3d-26.1146244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cd2050136f7%3A0xa86bd2e29314cd42!2s36%20Wierda%20Rd%20W%2C%20Wierda%20Valley%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1761111733154!5m2!1sen!2sza"
                        className="h-[520px] w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
