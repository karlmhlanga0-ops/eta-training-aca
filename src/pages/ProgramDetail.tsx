// /src/pages/ProgramDetail.tsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Target, Award, CheckCircle, Mail, Phone, Download } from 'lucide-react';
import { LEARNERSHIP_DATA, Programme, getProgrammeBySlug } from '@/data/programmes';
import EasyQuoteModal from '@/components/EasyQuoteModal';

const ProgramDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [modalOpen, setModalOpen] = useState(false);
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
                                        <p className="text-lg text-gray-600">
                                            {programme.category !== 'Short Programme' && (programme.saqa_id || programme.nqf_level) ? (
                                                <>SAQA ID {programme.saqa_id} | NQF Level {programme.nqf_level}</>
                                            ) : (
                                                <>&nbsp;</>
                                            )}
                                        </p>
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
                        <p className="text-gray-700">This learnership runs for {programme.duration} and includes both classroom and workplace components.</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Delivery Method</h3>
                        <p className="text-gray-700">{programme.format}</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Who Should Attend</h3>
                        <p className="text-gray-700">{programme.who_should_attend}</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Prerequisites / Entry Requirements</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {(programme.entry_requirements || []).map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Certification</h3>
                        <p className="text-gray-700">{programme.certification || 'Certification details available on request.'}</p>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Modules</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {programme.key_modules.map((m) => <li key={m}>{m}</li>)}
                        </ul>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Learning Outcomes</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {(programme.learning_outcomes || []).map((l) => <li key={l}>{l}</li>)}
                        </ul>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">A Qualified Learner Will Be Able To</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {(programme.qualified_will_be_able_to || []).map((q) => <li key={q}>{q}</li>)}
                        </ul>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">International Comparability</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {(programme.international_comparability || []).map((c) => <li key={c}>{c}</li>)}
                        </ul>
                    </section>

                    <section className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {(programme.career_opportunities || []).map((c) => <li key={c}>{c}</li>)}
                        </ul>
                        <p className="text-gray-600 mt-4"><strong>Learning Options:</strong> {programme.learning_options}</p>
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

                        <button onClick={() => setModalOpen(true)} className="block w-full text-center py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-xl font-bold">Inquire / Enrol Now</button>

                        {programme.brochure_url && (
                            <a href={programme.brochure_url} download className="flex items-center justify-center w-full py-3 mt-4 bg-white/5 text-[#3349df] rounded-xl font-bold border border-[#3349df] hover:bg-[#eef1ff] transition-colors">
                                <Download className="w-5 h-5 mr-2" />
                                Download Brochure
                            </a>
                        )}

                        <EasyQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialProgramId={programme.id} />
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default ProgramDetail;