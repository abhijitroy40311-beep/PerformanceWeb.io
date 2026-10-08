import React from 'react';
import { X, CheckCircle2, Target, ArrowRight, ShieldCheck, Activity, Layers, PhoneCall, ExternalLink } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onConsultClick }) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 rounded-md">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-md">
              {caseStudy.badge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {caseStudy.title}
          </h3>
        </div>

        {/* Short Summary */}
        <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
          {caseStudy.description}
        </p>

        {/* Metrics Grid (Carefully labeled as Demo / Illustrative) */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Portfolio Demo Performance Indicators</span>
            <span className="text-blue-600 font-normal lowercase">{caseStudy.badge}</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                <span className="text-[11px] text-slate-500 block truncate">{m.label}</span>
                <span className="text-base sm:text-lg font-extrabold text-blue-600 block mt-0.5">{m.val}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Breakdown */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Strategy & Execution Details:
          </h4>

          <div className="space-y-2.5">
            {caseStudy.details.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking & CRO Focus */}
        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5 mb-6">
          <div className="font-bold text-blue-900 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>Tracking & Quality Assurance</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {caseStudy.trackingNote}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onConsultClick(caseStudy.title)}
            className="flex-1 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-colors text-center inline-flex items-center justify-center gap-2"
          >
            <span>Discuss Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
