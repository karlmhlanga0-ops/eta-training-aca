// /src/pages/SLPPage.tsx - FINALIZED CONTENT & LAYOUT

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, TrendingUp, Users, Trello, Target, Award } from 'lucide-react'; 

interface ShortProgramme {
    title: string;
    slug: string;
    duration: string;
};

const sortAlphabetically = (a: ShortProgramme, b: ShortProgramme): number => {
    return a.title.localeCompare(b.title);
};

const SLPCard: React.FC<{ title: string; slug: string; duration: string }> = ({ title, slug, duration }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider bg-gray-100 py-1 px-3 rounded-full mb-3 inline-block">
            Focused Intervention
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{title}</h3>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-6 flex-grow">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#3349df]" /> {duration}</span>
            <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-[#3349df]" /> Immediate Impact</span>
        </div>

        <Link 
            to={`/slps/${slug}`} 
            className="block w-full text-center py-2 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
            View Programme Details
        </Link>
    </div>
);

const SLPPage: React.FC = () => {
    
   const rawSLPs: ShortProgramme[] = [
        { title: 'Digital Transformation & Future of Work', slug: 'digital-transform', duration: '3 Days' },
        { title: 'Artificial Intelligence & Data Analytics for Business', slug: 'ai-data-analytics', duration: '5 Days' },
        { title: 'Cybersecurity Fundamentals', slug: 'cybersecurity-fundamentals', duration: '2 Days' },
        { title: 'ESG (Environmental, Social, Governance) Strategy', slug: 'esg-strategy', duration: '4 Days' },
        { title: 'Diversity, Equity & Inclusion (DEI) in the Workplace', slug: 'dei-workplace', duration: '2 Days' },
        { title: 'Emotional Intelligence & Resilience', slug: 'emotional-intelligence', duration: '3 Days' },
        { title: 'Leadership in the 4IR Era', slug: 'leadership-4ir', duration: '5 Days' },
        { title: 'Project Management Fundamentals', slug: 'project-management', duration: '4 Weeks' },
        { title: 'Advanced Excel & Data Visualisation', slug: 'advanced-excel', duration: '1 Week' },
        { title: 'Change Management for Organisations', slug: 'change-management', duration: '3 Days' },
        { title: 'Financial Acumen for Non-Financial Managers', slug: 'financial-acumen', duration: '4 Days' },
        { title: 'Customer Experience & Service Excellence', slug: 'customer-experience', duration: '2 Weeks' },
        { title: 'Negotiation & Conflict Management', slug: 'negotiation-conflict', duration: '3 Days' },
        { title: 'Risk Management & Compliance', slug: 'risk-management', duration: '5 Days' },
        { title: 'Sales Mastery & Relationship Management', slug: 'sales-mastery', duration: '4 Days' },
    ];
    
    const featuredSLPs = [...rawSLPs].sort(sortAlphabetically);


    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- 1. Split Hero Section --- */}
            <div className="py-24 md:py-32 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Block */}
                    <div>
                        <span className="text-lg font-bold uppercase text-[#2c4ae8] tracking-widest mb-3 inline-block">
                            RAPID SKILLS ACCELERATION
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Short Learning Programmes (SLPs)
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Focused, targeted courses (2 days to 12 weeks) designed to rapidly upskill your team in critical, in-demand areas without the commitment of a full qualification. Immediate application. Measurable results.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/quote" 
                                className="px-8 py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Inquire Now
                            </Link>
                            <a 
                                href="/brochure-slps.pdf" 
                                className="px-8 py-3 bg-white border border-[#3349df] text-[#3349df] rounded-full font-semibold text-lg hover:bg-[#eef1ff] transition-colors"
                                download
                            >
                                View Catalogue
                            </a>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338386340_6e4064a9.webp" 
                            alt="Short Learning Programmes" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>
            </div>

            {/* --- 2. Program Delivery Method (How We Deliver - Slide 10 Content) --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Guarantee High Completion and Impact</h2>
                
                <div className="grid md:grid-cols-5 gap-8">
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Zap className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Blended Learning</p>
                        <p className="text-xs text-gray-600">Classroom, digital & workplace</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Trello className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Accredited Experts</p>
                        <p className="text-xs text-gray-600">Industry-leading facilitators</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Embedded Mentorship</p>
                        <p className="text-xs text-gray-600">Coaching in all programmes</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Clock className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Custom Reporting</p>
                        <p className="text-xs text-gray-600">For compliance & ROI tracking</p>
                    </div>
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Target className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Dedicated Support</p>
                        <p className="text-xs text-gray-600">Higher completion rates assured</p>
                    </div>
                </div>
            </section>

            {/* --- 3. Programmes Grid --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-t-3xl shadow-inner">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Our Full Portfolio of Short Learning Programmes</h2>
                
                {/* ⚠️ Adjusted grid to maintain clean blocks of 3 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredSLPs.map((program) => (
                        <SLPCard key={program.slug} {...program} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-600 mb-4">Need specific upskilling? We can develop custom SLPs tailored to your operational gaps.</p>
                    <Link 
                        to="/contact" 
                        className="inline-block px-8 py-3 border border-[#3349df] text-[#3349df] rounded-full font-semibold hover:bg-[#3349df] hover:text-white transition-colors"
                    >
                        Design My Custom Programme
                    </Link>
                </div>

            </section>

        </main>
    );
};

export default SLPPage;
