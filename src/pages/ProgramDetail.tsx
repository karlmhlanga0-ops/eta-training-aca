// /src/pages/ProgramDetail.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Target, Award, CheckCircle, Mail, Phone } from 'lucide-react';
import { LEARNERSHIP_DATA, Programme, getProgrammeBySlug } from '@/data/programmes';

const ProgramDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const programme: Programme | undefined = getProgrammeBySlug(slug || '');

    if (!programme) {
      return (
        <main className="bg-[#f9fafc] min-h-screen flex items-center justify-center">
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold mb-4">Programme not found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the requested programme. Please return to the <Link to="/learnerships" className="text-[#3349df] underline">learnerships</Link> listing.</p>
          </div>
        </main>
      );
    }

    return (
        <main className="bg-[#f9fafc] min-h-screen">
            <div className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-sm font-semibold uppercase text-[#3349df] tracking-widest bg-[#eef1ff] py-1 px-4 rounded-full mb-4 inline-block">Learnership Qualification</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">{programme.name}</h1>
                    <p className="text-lg text-gray-600">SAQA ID {programme.saqa_id} | NQF Level {programme.nqf_level}</p>
                    <div className="flex justify-center space-x-8 text-lg font-medium text-gray-700 mt-4">
                        <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#3349df]" /> <span>Duration: {programme.duration}</span></div>
                        <div className="flex items-center"><Target className="w-5 h-5 mr-2 text-[#3349df]" /> <span>Format: {programme.format}</span></div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Qualification Overview</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{programme.long_description}</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Duration</h3>
                        <p className="text-gray-700">This learnership runs for {programme.duration} and includes both classroom and workplace components (placeholder content).</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Delivery Method</h3>
                        <p className="text-gray-700">Blended delivery: online modules, classroom sessions and workplace coaching. (Placeholder)</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Who Should Attend</h3>
                        <p className="text-gray-700">Placeholder: target audience description goes here.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Prerequisites</h3>
                        <p className="text-gray-700">Placeholder: entry requirements and eligibility criteria.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Qualification</h3>
                        <p className="text-gray-700">Placeholder: details about the qualification and certification awarded.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Modules</h3>
                        <p className="text-gray-700">Placeholder: module list and brief descriptions.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Course Objectives</h3>
                        <p className="text-gray-700">Placeholder: learning objectives and outcomes.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">The Secret To Success</h3>
                        <p className="text-gray-700">Placeholder: recommended approach for successful completion.</p>
                    </section>
                </div>

                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-6 bg-[#eef1ff] rounded-xl border border-[#3349df]">
                            <h4 className="text-lg font-bold text-[#3349df] mb-3">Key Facts</h4>
                            <ul className="text-sm text-gray-800 space-y-2">
                                <li><strong>SAQA ID:</strong> {programme.saqa_id}</li>
                                <li><strong>NQF Level:</strong> {programme.nqf_level}</li>
                                <li><strong>CREDITS:</strong> {programme.credits}</li>
                                <li><strong>SETA:</strong> {programme.seta}</li>
                                <li><strong>Duration:</strong> {programme.duration}</li>
                                <li><strong>B-BBEE Impact:</strong> {programme.bbbee_impact || 'TBC'}</li>
                            </ul>
                        </div>

                        <Link to="/quote" className="block w-full text-center py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-xl font-bold">Inquire / Enrol Now</Link>

                        <div className="p-6 bg-white rounded-xl border border-gray-100">
                            <h5 className="font-semibold mb-2">Contact Us</h5>
                            <p className="text-sm text-gray-700"><Mail className="inline-block mr-2" /> info@empodera.co.za</p>
                            <p className="text-sm text-gray-700"><Phone className="inline-block mr-2" /> +27 76 181 5155</p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default ProgramDetail;