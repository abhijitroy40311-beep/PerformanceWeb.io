import React, { useState } from 'react';
import { Target, Activity, LayoutTemplate, LineChart, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const services = [
    {
      id: 'google-ads',
      title: 'Google Ads Management',
      icon: Target,
      tag: 'Search & PPC',
      description: 'High-intent search campaigns designed to generate qualified leads, calls, and enquiries.',
      features: [
        'Search Campaign Strategy',
        'Keyword & Search Term Management',
        'Smart Bidding',
        'Ad Asset Optimization',
        'Negative Keywords',
      ],
      detailParagraph:
        'Target prospective customers at the precise moment they are actively searching for your solutions. By building tightly themed ad groups, aggressive negative keyword lists, and leveraging Smart Bidding strategies (Target CPA & Maximize Conversions), we filter out wasted clicks and drive real phone calls and enquiries.',
    },
    {
      id: 'conversion-tracking',
      title: 'Conversion Tracking',
      icon: Activity,
      tag: 'GA4 & GTM',
      description: 'Track the actions that actually matter to your business.',
      features: [
        'Google Ads Conversion Tracking',
        'GA4',
        'Google Tag Manager',
        'Form Tracking',
        'Call Tracking',
        'Event Tracking',
      ],
      detailParagraph:
        'Stop flying blind. Accurate tracking ensures that every telephone click, submitted quotation form, and WhatsApp initiation is recorded correctly into Google Ads and Google Analytics 4. Clean data is what fuels the bidding algorithm to find more of your best customers.',
    },
    {
      id: 'landing-page-cro',
      title: 'Landing Page Optimization',
      icon: LayoutTemplate,
      tag: 'Lead Gen UX',
      description: 'Landing pages designed to turn more advertising traffic into enquiries.',
      features: [
        'Conversion-focused UI',
        'Mobile Optimization',
        'Clear CTAs',
        'Message Match',
        'User Experience Improvements',
      ],
      detailParagraph:
        'Great ads are only half the battle. If visitors land on a slow, cluttered page with weak messaging, ad dollars get wasted. We align search intent with landing page copy, simplify enquiry forms, optimize load speeds, and position high-contrast call-to-actions that convert visitors into leads.',
    },
    {
      id: 'cro-analytics',
      title: 'CRO & Analytics',
      icon: LineChart,
      tag: 'Continuous Growth',
      description: 'Use real performance data to identify conversion problems and improve results.',
      features: [
        'Performance Analysis',
        'User Behaviour',
        'Conversion Rate Optimization',
        'Reporting',
        'Testing',
      ],
      detailParagraph:
        'Ongoing analysis separates winning campaigns from plateaued ones. We audit search queries, evaluate drop-off points, test ad copy variants, and provide transparent reporting so you always know where your marketing budget is going and what return it produces.',
    },
  ];

  const handleLearnMore = (service) => {
    setActiveModalService(service);
  };

  const handleContactForService = (serviceTitle) => {
    setActiveModalService(null);
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 tracking-wider uppercase mb-3">
            <span>WHAT I OFFER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to turn high-intent searches into qualified enquiries.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-blue-500/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleLearnMore(service)}
                  className="w-full inline-flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-semibold text-blue-600 hover:text-blue-700 group/btn transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {React.createElement(activeModalService.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {activeModalService.tag}
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  {activeModalService.title}
                </h4>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-700 mb-3">
              {activeModalService.description}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {activeModalService.detailParagraph}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                Key Components Included:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleContactForService(activeModalService.title)}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-colors text-center"
              >
                Discuss This Service
              </button>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
