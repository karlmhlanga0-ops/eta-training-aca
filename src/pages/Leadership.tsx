import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, Shield, TrendingUp } from 'lucide-react';

const programmes = [
  {
    title: 'Emerging Leaders Programme',
    overview:
      'Designed to build foundational leadership capability in high-potential employees and first-time managers. Focuses on developing self-awareness, communication, and core leadership skills to enable participants to transition effectively into leadership roles and contribute meaningfully to team performance.',
    focusAreas: [
      'Leading self and personal mastery',
      'Emotional intelligence and self-awareness',
      'Communication and influencing skills',
      'Team leadership fundamentals',
      'Problem-solving and decision-making',
    ],
    idealFor: 'First-time managers, supervisors, and high-potential employees preparing for leadership roles.',
    icon: <Sparkles className="w-10 h-10 text-[#4f46e5]" />,
  },
  {
    title: 'Middle Management Programme',
    overview:
      'Designed to strengthen the capability of middle managers to lead teams, execute strategy, and drive operational performance. Focuses on bridging the gap between strategy and execution, equipping managers with the tools to manage performance, lead people effectively, and deliver results in complex environments.',
    focusAreas: [
      'Leading teams and driving accountability',
      'Performance management and delivery',
      'Strategic thinking and execution',
      'Stakeholder management',
      'Managing in complex and dynamic environments',
    ],
    idealFor: 'Middle managers, functional managers, and experienced supervisors responsible for team and operational performance.',
    icon: <Shield className="w-10 h-10 text-[#4f46e5]" />,
  },
  {
    title: 'Senior Leadership Programme',
    overview:
      'A high-impact development journey designed for executives and senior leaders responsible for organisational direction and transformation. Focuses on strategic leadership, decision-making in complexity, and leading organisations through change, equipping leaders to drive long-term value and sustainable growth.',
    focusAreas: [
      'Strategic leadership and organisational direction',
      'Leading in complexity and uncertainty (VUCA)',
      'Executive decision-making',
      'Innovation and transformation',
      'Stakeholder and ecosystem leadership',
    ],
    idealFor: 'Senior leaders, executives, and decision-makers responsible for organisational strategy and performance.',
    icon: <TrendingUp className="w-10 h-10 text-[#4f46e5]" />,
  },
];

const LeadershipPage: React.FC = () => (
  <main className="bg-white min-h-screen text-slate-900">
    <section className="relative overflow-hidden bg-[#1e293b] text-white pb-20 pt-24">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_25%)] pointer-events-none" />
      <div className="absolute right-[-120px] top-24 w-72 h-72 rounded-full bg-[#4f46e5]/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 mb-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-100">
            Executive Leadership Pathways
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Leadership programmes built for premium transformation.
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
            A refined suite of leadership pathways designed to accelerate manager capability, strengthen operational leadership, and prepare senior leaders to guide organisations through complex change.
          </p>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5">
          <img
            src="https://res.cloudinary.com/didgosar5/image/upload/v1777628876/office-collaboration_eubjqk.png"
            alt="Leadership collaboration"
            className="w-full h-[28rem] object-cover"
          />
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid gap-10 xl:grid-cols-3">
        {programmes.map((programme) => (
          <article
            key={programme.title}
            className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3349df]/30 hover:bg-slate-100"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-[#0f172a] p-4 shadow-inner shadow-slate-900/30">
                  {programme.icon}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">Leadership</p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">{programme.title}</h2>
                </div>
              </div>
              <CheckCircle2 className="w-10 h-10 text-[#3349df]" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Overview</h3>
                <p className="text-slate-700 leading-relaxed">{programme.overview}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Focus Areas</h3>
                <ul className="space-y-3 text-slate-700">
                  {programme.focusAreas.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-slate-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">Ideal For</h3>
                <p className="text-slate-300 leading-relaxed">{programme.idealFor}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[#3349df] font-semibold">Why Leadership Matters</p>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Premium leadership development for sustained business excellence.</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              These programmes are crafted for organisations that value executive maturity, strategic clarity, and leadership capacity that delivers measurable results across people, performance and transformation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-[#3349df] font-semibold mb-4">Tailored for business impact</p>
              <p className="text-slate-700 leading-relaxed">We align each pathway to your organisational strategy so learning translates into stronger execution and leadership confidence.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-[#3349df] font-semibold mb-4">Clear progression</p>
              <p className="text-slate-700 leading-relaxed">From emerging leaders through to senior executives, each tier builds upon the last to create a connected leadership pipeline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default LeadershipPage;
