import React from 'react';
import { Search, Sliders, TrendingUp, Rocket, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'Understand your business, offer, audience, competition, and goals.',
      deliverable: 'Audience & Search Intent Audit',
    },
    {
      num: '02',
      icon: Sliders,
      title: 'Campaign Setup',
      description: 'Build the campaign structure, targeting, keywords, ads, assets, and landing-page strategy.',
      deliverable: 'Structure, Assets & Tracking Setup',
    },
    {
      num: '03',
      icon: TrendingUp,
      title: 'Track & Optimize',
      description: 'Measure conversions, analyze search behaviour, reduce wasted spend, and improve performance.',
      deliverable: 'Negative Keywords & Bidding Tweaks',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Grow Together',
      description: 'Use performance data to scale what works and continuously improve lead quality.',
      deliverable: 'Scale Profitable Campaigns',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 tracking-wider uppercase mb-3">
            <span>MY PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple Process. Powerful Results.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent process focused on business goals, measurable actions, and continuous optimization.
          </p>
        </div>

        {/* 4 Process Steps (Horizontal Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-500/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-blue-600/40 group-hover:text-blue-600 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable badge */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
