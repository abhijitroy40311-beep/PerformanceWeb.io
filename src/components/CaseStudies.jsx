import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Activity, Target, Layout, BarChart3, CheckCircle, Info } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function CaseStudies({ onSelectCaseStudy }) {
  const [activeModalStudy, setActiveModalStudy] = useState(null);

  const caseStudies = [
    {
      id: 'industrial-equipment',
      category: 'B2B Manufacturing',
      badge: 'Portfolio Project',
      title: 'Industrial Equipment Lead Generation',
      previewDomain: 'industrial-equipment.com/procurement',
      visualType: 'industrial',
      description:
        'Google Ads campaign structure, keyword targeting, conversion tracking, and landing page optimization focused on generating qualified enquiries.',
      services: ['Google Ads', 'Tracking', 'Landing Page CRO'],
      metrics: [
        { label: 'Leads — Demo', val: '148', sub: 'Qualified B2B Quotes' },
        { label: 'CPL — Demo', val: '$28.40', sub: 'Cost Per Enquiry' },
        { label: 'Conv. Rate — Demo', val: '6.8%', sub: 'Page Form Submissions' },
      ],
      details: [
        'Single-keyword intent ad groups targeting B2B procurement terms (e.g., "[heavy packaging machine supplier]").',
        'Added over 250+ negative keywords eliminating consumer retail, DIY, and hobbyist traffic.',
        'High-converting quotation request landing page with streamlined 4-step B2B specification form.',
        'Configured Google Ads conversion tracking for phone number clicks and form thank-you events.',
      ],
      trackingNote:
        'GA4 & GTM deployed to verify lead quality by tracking form interactions, phone call clicks, and time-on-page before RFQ submission.',
    },
    {
      id: 'solar-installation',
      category: 'Clean Energy & Local',
      badge: 'Campaign Demo',
      title: 'Solar Installation Search Campaign',
      previewDomain: 'solar-installations.com/quote',
      visualType: 'solar',
      description:
        'Search campaign strategy with conversion tracking and landing page optimization designed to increase qualified calls and enquiries.',
      services: ['Google Ads', 'Tracking', 'Landing Page CRO'],
      metrics: [
        { label: 'Calls & Quotes — Demo', val: '215', sub: 'Inbound Consultations' },
        { label: 'CPL — Demo', val: '$19.50', sub: 'Calculated Cost Per Lead' },
        { label: 'Conv. Rate — Demo', val: '8.4%', sub: 'From Targeted Searches' },
      ],
      details: [
        'Geo-targeted Search campaigns focused strictly on homeowners and commercial facilities in active utility service areas.',
        'Call-only ad extensions and call asset bidding during local business hours for rapid phone response.',
        'Interactive rooftop solar savings estimate landing page with immediate WhatsApp click-to-chat option.',
        'Eliminated searches for solar jobs, free solar myths, and DIY tutorials via targeted negative match types.',
      ],
      trackingNote:
        'Tracked call duration (>60 seconds counted as qualified conversion) and WhatsApp link clicks directly via Google Tag Manager.',
    },
    {
      id: 'healthcare-consultation',
      category: 'Medical & Healthcare',
      badge: 'Portfolio Project',
      title: 'Healthcare Consultation Leads',
      previewDomain: 'specialist-clinic.com/appointments',
      visualType: 'medical',
      description:
        'Targeted Google Ads campaign with conversion tracking and landing page CRO focused on generating consultation enquiries.',
      services: ['Google Ads', 'Tracking', 'CRO'],
      metrics: [
        { label: 'Inquiries — Demo', val: '184', sub: 'Patient Appointments' },
        { label: 'Search CTR — Demo', val: '9.2%', sub: 'High Relevancy Score' },
        { label: 'Conv. Rate — Demo', val: '9.7%', sub: 'Doctor Booking Page' },
      ],
      details: [
        'Privacy-compliant search ads focusing on specialist treatment modalities and doctor credentials.',
        'Ad scheduling calibrated to clinic operational hours so appointment calls are answered instantly.',
        'Simplified mobile booking experience with one-tap telephone link and clear doctor credential badges.',
        'Negative keywords filtered out general medical definitions, Wikipedia searches, and student coursework queries.',
      ],
      trackingNote:
        'HIPAA / privacy-compliant conversion tracking registering booking form submissions without transmitting sensitive personal medical data.',
    },
    {
      id: 'saas-dashboard',
      category: 'Software & Analytics',
      badge: 'Illustrative Data',
      title: 'SaaS / Performance Dashboard',
      previewDomain: 'performanceweb.io/analytics',
      visualType: 'dashboard',
      description:
        'Performance-focused web application and analytics dashboard demonstrating campaign visibility, data presentation, and conversion-focused UX.',
      services: ['Analytics', 'Dashboard', 'Web Development'],
      metrics: [
        { label: 'Event Tracking — Demo', val: '100%', sub: 'Clean GA4 Events' },
        { label: 'Visibility — Demo', val: 'Real-Time', sub: 'KPI Data Sync' },
        { label: 'UX Retention — Demo', val: '+42%', sub: 'Dashboard Engagement' },
      ],
      details: [
        'Full tracking infrastructure connecting Google Ads API, Google Tag Manager, and custom analytics endpoints.',
        'Conversion-first UI engineered using React, modern JavaScript, and Tailwind CSS for instant load performance.',
        'Actionable attribution reports distinguishing primary lead conversions from secondary micro-interactions.',
        'Automated alert indicators for ad spend anomalies and negative keyword opportunities.',
      ],
      trackingNote:
        'End-to-end event data pipeline recording scroll depth, button clicks, time-on-page, and goal completion rates.',
    },
  ];

  const handleConsultClick = (title) => {
    setActiveModalStudy(null);
    if (onSelectCaseStudy) {
      onSelectCaseStudy(title);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 tracking-wider uppercase mb-3">
            <span>FEATURED CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Projects. Real Strategy.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore selected Google Ads, landing page, tracking, and performance marketing work.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
            <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Note: Illustrative metrics are clearly labeled as Portfolio Demo data for transparency.</span>
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Simulated Web Preview Mockup */}
                <div className="bg-slate-900 p-4 border-b border-slate-800 text-slate-200">
                  {/* Browser top bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-400 max-w-[200px] truncate">
                      {study.previewDomain}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                      {study.badge}
                    </span>
                  </div>

                  {/* Mockup visual illustration */}
                  <div className="h-32 sm:h-36 rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 flex flex-col justify-between overflow-hidden relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {study.category}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        Tracking: Active
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="w-3/4 h-3 bg-blue-600/70 rounded" />
                      <div className="w-1/2 h-2 bg-slate-700 rounded" />
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                      <div className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-[10px] font-medium">
                        Ad Group Structure
                      </div>
                      <div className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-medium">
                        CRO Landing Page
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Category & Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {study.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded bg-blue-50 text-blue-700 border border-blue-200/60"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Key Metrics Area (Explicit Demo / Illustrative Labels) */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-1">
                          <span className="text-[11px] font-medium text-slate-500 block truncate">
                            {m.label}
                          </span>
                          <span className="text-base font-extrabold text-blue-700 block mt-0.5">
                            {m.val}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {m.sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(study)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Deep-Dive Modal */}
      {activeModalStudy && (
        <CaseStudyModal
          caseStudy={activeModalStudy}
          onClose={() => setActiveModalStudy(null)}
          onConsultClick={handleConsultClick}
        />
      )}
    </section>
  );
}
