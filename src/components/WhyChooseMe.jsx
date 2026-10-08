import React from 'react';
import { Target, Activity, Split, Eye, CheckCircle2 } from 'lucide-react';

export default function WhyChooseMe() {
  const points = [
    {
      num: '01',
      icon: Target,
      title: 'Business-Focused Strategy',
      description: 'Focus on leads and enquiries rather than vanity metrics.',
      detail: 'Clicks and impressions do not pay your payroll. Every campaign is engineered around commercial intent to drive phone inquiries, RFQs, and real customers.',
    },
    {
      num: '02',
      icon: Activity,
      title: 'Conversion Tracking',
      description: 'Measure meaningful actions instead of guessing.',
      detail: 'Precise server and client-side event setup through Google Tag Manager and GA4. No blind ad spending — every enquiry is attributed to the exact keyword.',
    },
    {
      num: '03',
      icon: Split,
      title: 'Landing Page + Ads Alignment',
      description: 'Improve the connection between search intent, ad messaging, and landing page experience.',
      detail: 'Ad messaging directly echoes landing page headlines, boosting Google Quality Scores, lowering CPCs, and dramatically improving visitor-to-lead conversion rates.',
    },
    {
      num: '04',
      icon: Eye,
      title: 'Transparent Optimization',
      description: 'Explain what is being tested, changed, and improved.',
      detail: 'No confusing smoke-and-mirrors jargon. You receive clear explanations of search terms added, negative keywords applied, and bid strategy adjustments.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wider uppercase mb-3">
            <span>VALUE & TRUST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose PerformanceWeb.io
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Data-driven methodologies designed to turn search budgets into measurable customer inquiries.
          </p>
        </div>

        {/* 4 Clean Value Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.num}
                className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-blue-500/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-400">
                      POINT {pt.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pt.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-700 mb-3">
                    {pt.description}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real execution without vanity metrics</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
