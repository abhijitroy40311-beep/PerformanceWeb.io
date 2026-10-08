import React from 'react';
import { ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenAudit }) {
  const whatsappUrl =
    'https://wa.me/918777202487?text=' +
    encodeURIComponent(
      'Hi Abhijit, I visited your PerformanceWeb.io portfolio and would like to discuss Google Ads for my business.'
    );

  return (
    <section className="py-16 md:py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl shadow-blue-900/30 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/20 blur-2xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GROWTH PARTNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Get More Leads & Sales?
          </h2>

          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your business, your current marketing, and whether Google Ads can generate a profitable acquisition channel.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Free Audit</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Me</span>
            </a>
          </div>

          {/* Direct Call row */}
          <div className="pt-4 flex items-center justify-center gap-2 text-sm text-blue-100">
            <Phone className="w-4 h-4 text-white" />
            <span>Or call directly:</span>
            <a
              href="tel:+918777202487"
              className="font-bold text-white hover:underline decoration-white underline-offset-4"
            >
              +91 8777202487
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
