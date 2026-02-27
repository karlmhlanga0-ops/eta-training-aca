// Place this file in your ./pages directory
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    // State for a simple form (would be managed by a library like Formik/React Hook Form in production)
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
        <div className="font-[Plus_Jakarta_Sans]">
            {/* Contact Hero/Header Section */}
            <section className="bg-gray-50 pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-text-dark">
                        Get In Touch
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600">
                        Whether you need a custom training solution or have a question about B-BBEE compliance, our team is ready to assist.
                    </p>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Column 1: Contact Details */}
                    <div className="lg:col-span-1 space-y-10">
                        <h2 className="text-3xl font-bold text-primary mb-6">Reach Our Team</h2>
                        
                        {/* Contact Blocks */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg text-text-dark">Email Support</p>
                                    <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact page</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg text-text-dark">Head Office</p>
                                    <p className="text-gray-600">36 Wierda Road West, Wierda Valley, Sandton, 2196</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                    {/* Column 2 & 3: Contact Form */}
                    <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                        {status && (
                        <div className={`mb-4 p-4 rounded ${status.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                          {status.msg}
                        </div>
                    )}
                        <h3 className="text-2xl font-bold text-text-dark mb-6">Send Us A Message Or Two</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                                    placeholder="Jane Smith"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                                    placeholder="jane.smith@company.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                                    placeholder="Tell us about your organization's training needs..."
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-secondary transition-colors duration-300 transform hover:scale-[1.01] disabled:opacity-50"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Inquiry</span>
                            </button>
                        </form>
                    </div>

                </div>
            </section>
            
            {/* Location Map */}
            <section className="h-96 w-full">
                <iframe
                    title="Empodera Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5187333402105!2d28.0542929!3d-26.1146244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cd2050136f7%3A0xa86bd2e29314cd42!2s36%20Wierda%20Rd%20W%2C%20Wierda%20Valley%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1761111733154!5m2!1sen!2sza"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
};

export default ContactPage;
