import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do you ensure leads are qualified and not just low-intent clicks?',
      answer:
        'We filter out junk traffic at the search term level. Instead of broad, generic keywords that drain budget, we build tightly structured campaigns focusing strictly on high commercial intent (e.g., "[packaging machinery supplier in Pune]" instead of "what is packaging"). We implement aggressive negative keyword lists (200+ terms filtering out student queries, jobs, and DIY tutorials) and configure conversion tracking for qualified actions only.',
      category: 'Strategy',
    },
    {
      question: 'How long does it typically take to see results from Google Ads?',
      answer:
        'Google Ads is an instant-visibility channel. Once campaigns and conversion tracking are deployed (typically 3–5 business days for full architecture setup), search traffic begins flowing immediately. The first 14–21 days represent the algorithmic learning and search-term pruning phase where we eliminate non-converting queries. Consistent, predictable cost-per-lead optimization typically matures within 30 to 45 days.',
      category: 'Timelines',
    },
    {
      question: 'How are your management fees structured and what ad spend do I need?',
      answer:
        'We believe in absolute transparency: you pay your advertising spend directly to Google Ads via your own credit card or billing profile (we never take a margin or markup on your media spend). Management is handled via a straightforward monthly retainer based on campaign scope and volume. For lead generation, we typically recommend a minimum monthly ad budget of $500 to $1,500 (approx. ₹40,000–₹1,20,000) to collect sufficient data for smart bidding.',
      category: 'Pricing',
    },
    {
      question: 'Do you set up GA4 and Google Tag Manager conversion tracking?',
      answer:
        'Yes, accurate tracking is mandatory for every campaign we manage. We set up Google Tag Manager (GTM) and Google Analytics 4 (GA4) with custom conversion events for phone call clicks, quotation form submissions, and WhatsApp chat initiations. Clean conversion signals are what train Google’s Smart Bidding algorithm to bid aggressively on high-converting prospects.',
      category: 'Tracking',
    },
    {
      question: 'Do I need a new landing page, or can we use my current website?',
      answer:
        'During our initial audit, we evaluate your current website’s load speed, mobile layout, headline message match, and form friction. If your existing pages are conversion-ready, we drive traffic there. If they create drop-offs, we recommend either landing page CRO adjustments or build a fast, dedicated conversion-focused landing page aligned with your ad copy.',
      category: 'Landing Pages',
    },
    {
      question: 'Are there any long-term lock-in contracts?',
      answer:
        'No lock-in contracts. We operate on month-to-month engagements because performance marketing should earn your trust every 30 days. We provide transparent weekly updates and monthly reporting on search terms, conversion counts, and actual cost per enquiry.',
      category: 'Collaboration',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl =
    'https://wa.me/918777202487?text=' +
    encodeURIComponent('Hi Abhijit, I have a specific question about Google Ads for my business.');

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-xs font-bold text-sky-400 tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers. No Jargon.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Google Ads strategy, campaign setup timelines, and pricing expectations.
          </p>
        </div>

        {/* Clean Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950/90 border-blue-500/70 shadow-lg shadow-blue-950/40'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/80'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-slate-800 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Have a specific campaign question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Discuss your market, target geography, or previous advertising challenges directly.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
