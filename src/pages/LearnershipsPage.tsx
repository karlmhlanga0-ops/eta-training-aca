// /src/pages/Learnerships.tsx - FINALIZED CONTENT & LAYOUT

import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, DollarSign, Users, Briefcase, Zap, Trello, Clock } from 'lucide-react'; 
import { LEARNERSHIP_DATA } from '@/data/programmes';

// Placeholder Learnership Card Component (Based on your home page design)
const LearnershipCard: React.FC<any> = ({ name, id, seta, saqa_id, nqf_level, duration }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider bg-gray-100 py-1 px-3 rounded-full mb-3 inline-block">
            {seta}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{name}</h3>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-6 flex-grow">
            {/* The NQF level and Duration are placeholders here as they vary by qualification */}
            <span className="flex items-center"><Target className="w-4 h-4 mr-2 text-[#3349df]" /> NQF Level {nqf_level}</span> 
            <span className="flex items-center"><Award className="w-4 h-4 mr-2 text-[#3349df]" /> SAQA ID: {saqa_id}</span>
        </div>
        <Link 
            to={`/learnerships/${id}`} 
            className="block w-full text-center py-2 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
            View Full Qualification
        </Link>
    </div>
);


/**
 * Sorting function to prioritize TETA learnerships first, 
 * then sort the remaining learnerships alphabetically by SETA name.
 * @param a - The first learnership object
 * @param b - The second learnership object
 * @returns - A number indicating sort order
 */
const sortLearnerships = (a: any, b: any): number => {
    // 1. Prioritize TETA
    const isATETA = a.seta.includes('TETA');
    const isBTETA = b.seta.includes('TETA');

    if (isATETA && !isBTETA) {
        return -1; // a comes before b (TETA first)
    }
    if (!isATETA && isBTETA) {
        return 1;  // b comes before a (TETA first)
    }

    // 2. Secondary sort: Alphabetical by SETA name
    const setaComparison = a.seta.localeCompare(b.seta);
    if (setaComparison !== 0) {
        return setaComparison;
    }

    // 3. Tertiary sort: Alphabetical by title (to stabilize the order within a SETA)
    return (a.name || '').localeCompare(b.name || '');
};


// --- MAIN PAGE COMPONENT ---

const LearnershipsPage: React.FC = () => {
    
    const rawLearnerships = LEARNERSHIP_DATA.map(p => ({
        name: p.name,
        id: p.id,
        seta: p.seta,
        saqa_id: p.saqa_id,
        nqf_level: p.nqf_level,
        duration: p.duration
    }));
    
    const featuredLearnerships = rawLearnerships.sort(sortLearnerships);

    const featuredCount = featuredLearnerships.length;

    // ... (rest of the component remains the same)

    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- 1. Split Hero Section (Homepage UI Style) --- */}
            <div className="py-24 md:py-32 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Block */}
                    <div>
                        <span className="text-lg font-bold uppercase text-[#2c4ae8] tracking-widest mb-3 inline-block">
                            STRATEGIC TALENT SOLUTIONS
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Build Your Future-Ready Workforce.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Our accredited learnerships are designed not just for compliance, but as a robust engine for **B-BBEE growth, tax efficiency, and sustainable skills development**. Turn mandates into competitive advantages.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/quote" 
                                className="px-8 py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get a Quote Today
                            </Link>
                            <a 
                                href="/brochure-learnerships.pdf" 
                                className="px-8 py-3 bg-white border border-[#3349df] text-[#3349df] rounded-full font-semibold text-lg hover:bg-[#eef1ff] transition-colors"
                                download
                            >
                                Download Catalogue
                            </a>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp" 
                            alt="Learnership team collaborating" 
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


            {/* --- 3. Featured Learnerships Grid --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 pt-0">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Our Full Portfolio of Learnerships </h2>
                
                {/* ⚠️ Adjusted grid to maintain clean blocks of 3 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* The list rendered here is now sorted */}
                    {featuredLearnerships.map((learnership) => (
                        <LearnershipCard key={learnership.id} {...learnership} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-600 mb-4">Don't see the specific qualification you need? We customize programs across various SETAs.</p>
                    <Link 
                        to="/contact" 
                        className="inline-block px-8 py-3 border border-[#3349df] text-[#3349df] rounded-full font-semibold hover:bg-[#3349df] hover:text-white transition-colors"
                    >
                        Inquire About Custom Solutions
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default LearnershipsPage;
