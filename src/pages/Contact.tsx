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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic (e.g., API call)
        console.log('Form submitted:', formData);
        
        // Use a custom modal or message box instead of alert()
        const messageBox = document.getElementById('submission-message');
        if (messageBox) {
            messageBox.innerHTML = '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Success!</strong><span class="block sm:inline ml-2">Thank you for your inquiry! We will be in touch shortly.</span></div>';
            setTimeout(() => {
                messageBox.innerHTML = '';
            }, 5000);
        }

        setFormData({ name: '', email: '', message: '' }); // Clear form
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
                                    <a href="mailto:info@empodera.co.za" className="text-gray-600 hover:text-primary transition-colors">info@empodera.co.za</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg text-text-dark">Call Us</p>
                                    <a href="tel:+27115551234" className="text-gray-600 hover:text-primary transition-colors">+27 11 555 1234</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg text-text-dark">Head Office</p>
                                    <p className="text-gray-600">123 Training House, Sandton Drive,<br/> Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links Placeholder */}
                         <div className="pt-4">
                            <h4 className="text-xl font-bold text-text-dark mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8a6 6 0 0 0-6 6v7H7v-7a9 9 0 0 1 9-9h.5V8zM4 11h3v10H4V11zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.015 2H9.985C7.78 2 6 3.78 6 5.985v3.297H4v4.717h2v7.016h5v-7.016h3.015l.5-4.717H11.015V6.75c0-.853.305-1.428 1.455-1.428h2.008V2.417c-.346-.052-1.523-.207-2.946-.207-2.92 0-4.912 1.776-4.912 5.044v2.96H4V13h2v7.016h5v-7.016h3.015l.5-4.717H11.015V6.75c0-.853.305-1.428 1.455-1.428h2.008V2.417z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>


                    </div>
                    
                    {/* Column 2 & 3: Contact Form */}
                    <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                        <div id="submission-message" className="mb-4"></div>
                        <h3 className="text-2xl font-bold text-text-dark mb-6">Send Us A Message</h3>
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
                                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-secondary transition-colors duration-300 transform hover:scale-[1.01]"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Inquiry</span>
                            </button>
                        </form>
                    </div>

                </div>
            </section>
            
            {/* Location Map Placeholder */}
            <section className="h-96 w-full">
                <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-500 font-medium text-xl">
                    [Placeholder for Interactive Location Map]
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
