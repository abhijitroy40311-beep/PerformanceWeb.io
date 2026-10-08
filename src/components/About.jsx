import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Code2, LineChart, Target } from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

export default function About() {
  const skills = [
    { name: 'Google Ads', category: 'PPC' },
    { name: 'GA4', category: 'Analytics' },
    { name: 'Google Tag Manager', category: 'Tracking' },
    { name: 'CRO', category: 'Optimization' },
    { name: 'HTML', category: 'Code' },
    { name: 'CSS', category: 'Code' },
    { name: 'JavaScript', category: 'Code' },
    { name: 'React', category: 'Code' },
    { name: 'Next.js', category: 'Code' },
    { name: 'Tailwind CSS', category: 'Code' },
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clean Professional Specialist Placeholder Card (No fake photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-center">
              {/* Badge visual */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-xl shadow-blue-500/20 mb-5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-sky-400">
                    AR
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">Abhijit Roy</h3>
              <p className="text-sm font-semibold text-sky-400 mt-1">
                Google Ads & Performance Marketing Specialist
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Founder, @PerformanceWeb.io
              </p>

              {/* Direct verification badge */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Data-Driven • Direct Execution</span>
              </div>

              {/* Core focus pills */}
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <span className="px-2.5 py-1 text-[11px] font-medium bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/60">
                  Search Intent
                </span>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/60">
                  Tag Management
                </span>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/60">
                  Landing Page UX
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Location: India</span>
                <span className="text-emerald-400 font-medium">● Available for Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Skills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-xs font-bold text-sky-400 tracking-wider uppercase">
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hi, I'm Abhijit Roy
            </h2>

            <p className="text-lg font-medium text-sky-400">
              Google Ads & Performance Marketing Specialist
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I help businesses generate more qualified enquiries through Google Ads, conversion tracking, landing page optimization, and data-driven performance marketing.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Unlike broad marketing generalists, my approach focuses squarely on the full conversion pipeline: ensuring search ads target high-intent purchase intent, conversion events are precisely measured via GTM and GA4, and landing pages eliminate friction to maximize phone calls and quotation requests.
            </p>

            {/* Technical Tooling & Skills */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Competencies & Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2 hover:border-blue-500/60 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
