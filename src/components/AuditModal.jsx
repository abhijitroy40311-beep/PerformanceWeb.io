import React, { useState } from 'react';
import { X, Sparkles, MessageSquare } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    monthlyBudget: '$1,000 - $3,000 / mo',
    goals: '',
  });

  if (!isOpen) return null;

  const getAuditMessage = () => {
    return (
      `Hi Abhijit, I would like to request a Free Google Ads Audit:\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Website URL: ${formData.url || 'Not provided'}\n` +
      `• Monthly Ad Spend: ${formData.monthlyBudget}\n` +
      `• Primary Focus: ${formData.goals || 'Analyze search intent, negative keywords, and conversion tracking.'}`
    );
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(getAuditMessage());
    window.open(`https://wa.me/918777202487?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">
            No-Obligation Review
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          Request a Free Google Ads Audit
        </h3>

        <p className="text-sm text-slate-400 mb-6">
          I will examine your search structure, negative keyword coverage, and conversion tracking setup.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. David Miller"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Website / Landing Page URL
            </label>
            <input
              type="text"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="e.g. www.yoursite.com"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Monthly Ad Spend
            </label>
            <select
              value={formData.monthlyBudget}
              onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="Under $1,000 / mo">Under $1,000 / mo</option>
              <option value="$1,000 - $3,000 / mo">$1,000 - $3,000 / mo</option>
              <option value="$3,000 - $10,000 / mo">$3,000 - $10,000 / mo</option>
              <option value="$10,000+ / mo">$10,000+ / mo</option>
              <option value="Not currently running ads">Not currently running ads (New Setup)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Main Objective / Frustration
            </label>
            <input
              type="text"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="e.g. High CPL, low lead quality, or no conversion tracking"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Exclusive WhatsApp Submit Action */}
          <div className="pt-3">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/40 transition-all active:scale-[0.99] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request via WhatsApp Message</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 text-center">
            Or call directly: <a href="tel:+918777202487" className="text-blue-400 font-semibold hover:underline">+91 8777202487</a>
          </div>
        </form>
      </div>
    </div>
  );
}
