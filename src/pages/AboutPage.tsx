import React from 'react';
import { Briefcase, Building2, UserPlus, Zap, TrendingUp, Handshake } from 'lucide-react';

// Data for Core Values and Mission
const missionAndVision = [
    {
        title: 'Our Vision',
        icon: Zap,
        desc: 'To be the most innovative and transformative skills development partner in Africa, unlocking exponential human and organizational potential.',
        color: 'text-primary bg-primary/10',
    },
    {
        title: 'Our Mission',
        icon: TrendingUp,
        desc: 'To deliver accredited, cutting-edge training solutions that drive B-BBEE transformation, close critical skills gaps, and ensure tangible returns on investment.',
        color: 'text-secondary bg-secondary/10',
    },
    {
        title: 'Our Commitment',
        icon: Handshake,
        desc: 'We commit to personalized partnerships, measurable impact, and absolute compliance, ensuring your investment achieves maximum strategic value.',
        color: 'text-green-600 bg-green-100',
    },
];

// Data for Workforce Services
const serviceTiles = [
    { 
      title: 'Absorption Services', 
      desc: 'Assisting companies to absorb learners into permanent or fixed-term employment roles, improving B-BBEE points and retention.', 
      icon: Briefcase,
      image: 'https://files.sitebuilder.webafrica.co.za/23/6e/236ea0f7-b516-4b7b-bdd2-d3b0f4480f54.jpg'
    },
    { 
      title: 'Hosting Services', 
      desc: 'Acting as a host employer for learners where companies cannot place them directly, ensuring compliance and meaningful workplace experience.', 
      icon: Building2,
            image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp'
    },
    { 
      title: 'Recruitment Services', 
      desc: 'Connecting companies with trained, work-ready graduates and learners to fill critical skills gaps quickly and effectively.', 
      icon: UserPlus,
            image: 'https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338387090_65fc64d1.webp'
    }
];

// Data for Board of Directors
const founder = {
    name: 'Selu Msweli',
    role: 'Founder and CEO',
    desc: 'A visionary leader with a strong commitment to strategic workforce development, Selu brings corporate experience and entrepreneurial rigor to every programme.',
    image: 'https://res.cloudinary.com/didgosar5/image/upload/v1777902624/selu-msweli_fimo9j.jpg'
};

const boardMembers = [
    {
        name: 'Bongani Phakathi',
        role: 'Chairperson of the Board',
        desc: 'A respected leader in organisational transformation, also serving on the board of Michaelhouse, contributing strong governance and strategic insight.',
        image: 'https://res.cloudinary.com/didgosar5/image/upload/v1777897923/bongani-phakathi-chair_johipg.png'
    },
    {
        name: 'Dr Bongani Mageba',
        role: 'Chief Executive Officer',
        desc: 'Chief Executive Officer of Telesure Investment Holdings, bringing deep expertise in financial services, strategic leadership, and large-scale organisational growth.',
        image: 'https://res.cloudinary.com/didgosar5/image/upload/v1777897922/Bongani-Mageba_ggazg7.png'
    },
    {
        name: 'Dr. Steven Zwane',
        role: 'Managing Executive, Absa',
        desc: 'Managing Executive at Absa Group Limited, with extensive experience in banking, leadership, and driving business performance at scale.',
        image: 'https://res.cloudinary.com/didgosar5/image/upload/v1777897938/steven-zwane_lbnrai.png'
    },
    {
        name: 'Professor Phakeng',
        role: 'Former Vice-Chancellor, UCT',
        desc: 'Globally recognised academic, renowned for her leadership in higher education, transformation, and innovation.',
        image: 'https://res.cloudinary.com/didgosar5/image/upload/v1777897922/mamokgethi-phakeng_kkq06t.png'
    }
];

const AboutPage: React.FC = () => {
    return (
        <div className="font-[Plus_Jakarta_Sans]">
            {/* Hero Section: About Us Banner */}
            <section className="bg-primary pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
                        Unlock Potential. Drive Transformation.
                    </h1>
                    <p className="text-xl max-w-4xl mx-auto font-light opacity-90">
                        Empodera Training Academy is the strategic partner your organization needs to navigate the complex landscape of skills development, B-BBEE compliance, and future workforce readiness in South Africa.
                    </p>
                </div>
            </section>
            
            {/* Mission & Values Block */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-text-dark">
                        Our Guiding Principles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missionAndVision.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                    <div className={`p-3 w-max rounded-full mb-4 ${item.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-text-dark">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-text-dark">
                        End-to-End Workforce Solutions
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        We don't just train; we provide a full spectrum of services designed to seamlessly integrate learners into your business and maximize your compliance benefits.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceTiles.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative cursor-pointer h-96 rounded-xl overflow-hidden shadow-xl group"
                                >
                                    {/* Image and Overlay */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content - Always Visible */}
                                    <div className="absolute top-0 bottom-0 p-6 w-full flex flex-col justify-end text-white transition-all duration-500">
                                        <Icon className="w-8 h-8 mb-2 text-secondary" />
                                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-200 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-4">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Board of Directors Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-text-dark">
                        Our Founder and CEO
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Leading Empodera from the front with a strong focus on premium leadership development and practical business impact.
                    </p>

                    <div className="relative bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(15,23,42,0.12)] overflow-hidden border border-gray-200">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center px-8 py-10">
                            <div className="space-y-6">
                                <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.32em] text-[#3349df] font-semibold">
                                    Founder Leadership
                                </p>
                                <h2 className="text-5xl font-extrabold text-text-dark leading-tight">Selu Msweli</h2>
                                <p className="text-lg text-gray-600 max-w-2xl">
                                    Founder and CEO with deep experience in executive talent development and building leadership capability at scale.
                                </p>
                                <p className="text-base text-gray-700 max-w-2xl">
                                    Selu combines strategic clarity with a premium delivery mindset, ensuring every programme is designed for business transformation and long-term impact.
                                </p>
                            </div>
                            <div className="rounded-[1.75rem] overflow-hidden bg-slate-950 shadow-2xl border border-[#e2e8f0]">
                                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover min-h-[340px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-text-dark">
                        Our Board of Directors
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Guided by visionary leaders committed to organizational transformation and governance.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boardMembers.map((member, index) => (
                            <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                {/* Image Container */}
                                <div className="aspect-[4/5] bg-white w-full flex items-center justify-center p-4">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                                </div>
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/95 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm font-semibold text-secondary mb-4">{member.role}</p>
                                    <p className="text-sm text-gray-200 leading-relaxed">{member.desc}</p>
                                </div>
                                
                                {/* Default Bottom Bar (Hidden on hover) */}
                                <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-2 text-center transition-opacity duration-300 group-hover:opacity-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
                                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-xs text-primary font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Block */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workforce?</h2>
                    <p className="mb-8 text-lg opacity-90">
                        Speak to an Empodera consultant today to design a customized training strategy that meets your strategic business goals.
                    </p>
                    <div className="inline-block">
                        <a 
                            href="/contact" 
                            className="px-8 py-3 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-secondary transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;