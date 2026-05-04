// /src/pages/MasterclassesPage.tsx - FINALIZED CONTENT & LAYOUT

import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Calendar, Shield, Cpu, Zap, Trello, Users, Clock, Target, TrendingUp, Briefcase } from 'lucide-react';
import { LEADERSHIP_PROGRAMMES } from '@/data/programmes';

// ⚠️ We will create a simple button component that can call the quote function
// NOTE: Since the quote pop-up logic is external, this component uses a simple 'onClick' for demonstration.
// You must wire this up to your external EasyQuote modal trigger.
const QuoteTopicBlock: React.FC<{ title: string; icon: React.ReactNode; onQuoteClick: () => void; isLeadership?: boolean }> = ({ title, icon, onQuoteClick, isLeadership = false }) => (
    <button 
        onClick={onQuoteClick}
        className="block w-full text-left p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-[#3349df] hover:-translate-y-1 focus:outline-none"
    >
        <div className="flex items-center mb-4">
            {/* Dark Blue Icon for premium feel */}
            {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10 text-[#2c4ae8] flex-shrink-0" })}
            {isLeadership && (
                <span className="ml-auto text-xs font-bold uppercase text-[#3349df] bg-blue-50 px-3 py-1 rounded-full">Leadership</span>
            )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">Click to instantly generate a custom quote for this specific programme or topic.</p>
    </button>
);

const MasterclassesPage: React.FC = () => {
    
    // ⚠️ Existing strategic masterclass topics
    const strategicTopics = [
        { title: 'Applied Artificial Intelligence (AI) Strategy', icon: <Cpu />, slug: 'ai-strategy' },
        { title: 'ESG Strategy and Reporting', icon: <Shield />, slug: 'esg-strategy' },
        { title: 'Digital Transformation & Future Readiness', icon: <Zap />, slug: 'digital-transformation' },
        { title: 'Cyber Resilience & Governance', icon: <Trello />, slug: 'cyber-governance' },
        { title: 'Advanced Negotiation for Executives', icon: <Users />, slug: 'negotiation-exec' },
    ];

    // Leadership programme topics from data (with icons)
    const leadershipTopicsWithIcons = LEADERSHIP_PROGRAMMES.map((prog) => ({
        title: prog.name,
        icon: prog.nqf_level === 0 && prog.id === 'emerging-leaders' ? <TrendingUp /> : 
              prog.nqf_level === 0 && prog.id === 'middle-management' ? <Briefcase /> : 
              <Gem />,
        slug: prog.id,
        isLeadership: true
    }));

    // Combine both arrays
    const allMasterclassTopics = [...leadershipTopicsWithIcons, ...strategicTopics];

    // Placeholder for your EasyQuote Modal function
    const handleQuoteClick = (topicSlug: string) => {
        // Trigger global quote modal and prefill topic
        window.dispatchEvent(new CustomEvent('openQuote', { detail: { topic: topicSlug } }));
    };


    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- 1. Split Hero Section (Premium Dark Theme) --- */}
            <div className="py-24 md:py-32 bg-[#1e293b] text-white border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Block */}
                    <div>
                        <span className="text-lg font-bold uppercase text-[#93c5fd] tracking-widest mb-3 inline-block">
                            FIRST-CLASS SOLUTIONS
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Bespoke Masterclasses for Executives.
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            High-level, custom interventions designed for senior management. Select a strategic topic or leadership programme to instantly generate a tailored quote for your team's immediate upskilling needs.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => handleQuoteClick('general-inquiry')} // General Quote Inquiry
                                className="px-8 py-3 bg-white text-[#1e293b] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                General Quote Inquiry
                            </button>
                            <a 
                                href="/brochure-masterclasses.pdf" 
                                className="px-8 py-3 bg-transparent border-2 border-[#93c5fd] text-[#93c5fd] rounded-full font-semibold text-lg hover:bg-[#3349df] hover:text-white transition-colors"
                                download
                            >
                                View Detailed Brochure
                            </a>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387090_65fc64d1.webp" 
                            alt="Executive Masterclass" 
                            className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>
            </div>
            
            {/* --- 2. Program Delivery Method (Corporate Solutions Inspired) --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Masterclass Delivery Model</h2>
                
                {/* Replicating the 'How We Deliver' section for consistency */}
                <div className="grid md:grid-cols-5 gap-8">
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Zap className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Custom Design</p>
                        <p className="text-xs text-gray-600">Bespoke to your strategic needs</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Trello className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Top Tier Experts</p>
                        <p className="text-xs text-gray-600">Specialist facilitators only</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Executive Focus</p>
                        <p className="text-xs text-gray-600">Boardroom and C-Suite relevant</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Clock className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Flexible Scheduling</p>
                        <p className="text-xs text-gray-600">Full or half-day modular sessions</p>
                    </div>
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Target className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Immediate Action</p>
                        <p className="text-xs text-gray-600">Focus on actionable strategy</p>
                    </div>
                </div>
            </section>


            {/* --- 3. Leadership Programmes Section --- */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Leadership Development Pathways</h2>
                    <p className="text-xl text-gray-600 mb-6 text-center">Structured leadership programmes aligned to your organizational needs, from emerging talent to senior executives.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadershipTopicsWithIcons.map((topic) => (
                            <Link 
                                key={topic.slug}
                                to="/leadership"
                                className="block w-full text-left p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-[#3349df] hover:-translate-y-1 focus:outline-none"
                            >
                                <div className="flex items-center mb-4">
                                    {React.cloneElement(topic.icon as React.ReactElement, { className: "w-10 h-10 text-[#2c4ae8] flex-shrink-0" })}
                                    <span className="ml-auto text-xs font-bold uppercase text-[#3349df] bg-blue-50 px-3 py-1 rounded-full">Leadership</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                                <p className="text-gray-600 text-sm mb-6">Explore the full leadership pathway and begin your executive development journey.</p>
                                <span className="inline-flex items-center justify-center px-5 py-3 bg-[#3349df] text-white rounded-full text-sm font-semibold hover:bg-[#243bff] transition-colors">
                                    Learn More
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. Strategic Masterclass Topics --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-t-3xl shadow-inner">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Strategic Focus Areas</h2>
                <p className="text-xl text-gray-600 mb-10 text-center">Select a strategic topic below to instantly generate a tailored quote for your executive team's upskilling needs.</p>
                
                {/* Strategic Topics Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {strategicTopics.map((topic) => (
                        <QuoteTopicBlock 
                            key={topic.slug} 
                            title={topic.title} 
                            icon={topic.icon} 
                            onQuoteClick={() => handleQuoteClick(topic.slug)} 
                        />
                    ))}
                </div>
                
                {/* Secondary CTA for custom requests */}
                <div className="text-center">
                    <p className="text-xl text-gray-600 mb-4">Have an ultra-specific need? Our custom masterclasses address unique organizational challenges.</p>
                    <button 
                        onClick={() => handleQuoteClick('custom-masterclass')}
                        className="inline-block px-8 py-3 border border-[#3349df] text-[#3349df] rounded-full font-semibold hover:bg-[#3349df] hover:text-white transition-colors"
                    >
                        Design My Bespoke Masterclass
                    </button>
                </div>

            </section>

        </main>
    );
};

export default MasterclassesPage;