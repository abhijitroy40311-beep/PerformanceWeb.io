import React from 'react';
import { Quote, Star, Building2, User } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      industry: 'B2B Manufacturing & Industrial',
      quote:
        'Abhijit revamped our Google Ads search campaigns and established clear conversion tracking. Within the first month, our sales team saw a significant increase in qualified quotation requests from serious commercial buyers.',
      author: 'Operations & Growth Lead',
      company: 'Industrial Equipment Manufacturer',
      resultTag: 'Lead Quality & RFQ Growth',
    },
    {
      id: 2,
      industry: 'Clean Energy & Solar Services',
      quote:
        'The direct alignment between our high-intent search ads and landing page lowered our cost per acquisition and filtered out non-serious queries. Transparent weekly reports made tracking ROI simple and predictable.',
      author: 'Managing Director',
      company: 'Solar Solutions Provider',
      resultTag: 'Cost Per Lead Optimized',
    },
    {
      id: 3,
      industry: 'Healthcare & Specialized Clinic',
      quote:
        'Our patient appointment requests became consistent and predictable. The tracking setup ensured zero wasted spend during off-clinic hours and high conversion rates on mobile searches.',
      author: 'Clinic Operations Director',
      company: 'Specialized Healthcare Practice',
      resultTag: 'High-Intent Inbound Calls',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 tracking-wider uppercase mb-3">
            <span>CLIENT REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client Testimonials
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            What business owners and marketing directors say about collaborating with PerformanceWeb.io.
          </p>
        </div>

        {/* 3 Clean Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Industry Tag */}
                <div className="text-xs font-semibold text-blue-700 mb-3 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.industry}</span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-800 truncate">{item.author}</div>
                    <div className="text-xs text-slate-500 truncate">{item.company}</div>
                  </div>
                </div>

                <div className="mt-3 inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-md">
                  ✓ {item.resultTag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
