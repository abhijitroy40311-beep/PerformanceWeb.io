import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import DashboardVisual from './DashboardVisual.jsx';

export default function Hero({ onOpenAudit }) {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Subtle background ambient lights (clean, non-distracting) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Google Ads • PPC • Conversion Tracking • Analytics</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              More Qualified Leads.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Real Business Growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I'm <span className="font-semibold text-white">Abhijit Roy</span> — a Google Ads & Performance Marketing Specialist. I help businesses get high-intent leads, calls, and enquiries through data-driven Google Ads campaigns, conversion tracking, and landing page optimization.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleScroll('#case-studies')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700/80 font-semibold text-sm sm:text-base transition-colors"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Get a Free Audit</span>
              </button>
            </div>

            {/* Direct Connect Row (WhatsApp & Phone) */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Talk:</span>
              <a
                href="https://wa.me/918777202487?text=Hi%20Abhijit,%20I%20visited%20your%20PerformanceWeb.io%20portfolio%20and%20would%20like%20to%20discuss%20Google%20Ads%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+91 8777202487)</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a
                href="tel:+918777202487"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call +91 8777202487</span>
              </a>
            </div>

            {/* Value Proposition Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-medium text-slate-200">
                  More Calls & Enquiries
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-medium text-slate-200">
                  Better Conversion Rate
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-medium text-slate-200">
                  Transparent Reporting
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Ads Performance Dashboard Visual */}
          <div className="lg:col-span-5">
            <DashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
