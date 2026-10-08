import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    service: prefilledService || 'Google Ads Management',
    budget: '$500 - $2,000 / mo',
    message: '',
  });

  const [submittedDirectly, setSubmittedDirectly] = useState(false);

  const phoneNumber = '+91 8777202487';
  const emailAddress = 'abhijitroy40311@gmail.com';

  const defaultWhatsappMsg = encodeURIComponent(
    'Hi Abhijit, I visited your PerformanceWeb.io portfolio and would like to discuss Google Ads for my business.'
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formatted message generator
  const getComposedMessage = () => {
    return (
      `Hi Abhijit, I reached out via PerformanceWeb.io:\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Website/Business: ${formData.website || 'Not provided'}\n` +
      `• Service of Interest: ${formData.service}\n` +
      `• Monthly Ad Budget: ${formData.budget}\n` +
      `• Goals / Notes: ${formData.message || 'I would like to discuss Google Ads and lead generation.'}`
    );
  };

  // Send via WhatsApp
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(getComposedMessage());
    window.open(`https://wa.me/918777202487?text=${text}`, '_blank');
    setSubmittedDirectly(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Value */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-xs font-bold text-sky-400 tracking-wider uppercase mb-3">
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Let's Talk About Your Growth
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Tell me about your business, your current challenges, and what you want Google Ads to achieve.
              </p>
            </div>

            {/* 3 Clickable Contact Cards */}
            <div className="space-y-3.5">
              {/* Call */}
              <a
                href="tel:+918777202487"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider block">
                    Direct Phone Call
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors block truncate">
                    {phoneNumber}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/918777202487?text=${defaultWhatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider block">
                    Chat on WhatsApp
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors block truncate">
                    {phoneNumber}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider block">
                    Email Enquiry
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors block truncate">
                    {emailAddress}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            </div>

            {/* Quick Guarantees & Privacy */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero obligation • 100% Confidential discussion</span>
              </div>
              <p>
                Every project begins with a transparent audit of your search keywords, competitors, and landing page readiness.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Project Enquiry / Free Audit</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in details below to send inquiry directly via WhatsApp message.
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-blue-950 text-blue-400 border border-blue-800">
                  Direct Response
                </span>
              </div>

              {submittedDirectly && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>
                    Your inquiry details have been formatted! If the application did not open automatically, you can also contact me directly via phone: +91 8777202487.
                  </span>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / Business
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Apex Solutions"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Website / Landing Page URL
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="e.g. yourbusiness.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Google Ads Management">Google Ads Management</option>
                      <option value="Conversion Tracking (GA4/GTM)">Conversion Tracking (GA4/GTM)</option>
                      <option value="Landing Page Optimization">Landing Page Optimization</option>
                      <option value="CRO & Performance Analytics">CRO & Performance Analytics</option>
                      <option value="Complete PPC & Lead Gen Strategy">Complete PPC & Lead Gen Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimated Monthly Ad Spend
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Under $500 / mo (Under ₹40k)">Under $500 / mo (Under ₹40k)</option>
                      <option value="$500 - $2,000 / mo (₹40k - ₹1.6L)">$500 - $2,000 / mo (₹40k - ₹1.6L)</option>
                      <option value="$2,000 - $5,000 / mo (₹1.6L - ₹4L)">$2,000 - $5,000 / mo (₹1.6L - ₹4L)</option>
                      <option value="$5,000+ / mo (₹4L+)">$5,000+ / mo (₹4L+)</option>
                      <option value="Not sure / Need audit">Not sure / Need audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Current Challenges or Goals
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your leads target, past ad results, or what you would like to improve..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Exclusive WhatsApp Submission Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/40 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp Message</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1">
                  Clicking will open WhatsApp directly with your pre-filled inquiry. No spam.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
