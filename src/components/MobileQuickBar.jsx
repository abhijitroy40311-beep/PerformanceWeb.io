import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function MobileQuickBar({ onOpenAudit }) {
  const whatsappUrl =
    'https://wa.me/918777202487?text=' +
    encodeURIComponent(
      'Hi Abhijit, I visited your PerformanceWeb.io portfolio and would like to discuss Google Ads for my business.'
    );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href="tel:+918777202487"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white hover:bg-slate-800 active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-xs font-bold text-white hover:bg-emerald-500 active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Free Audit */}
        <button
          type="button"
          onClick={onOpenAudit}
          className="flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 active:scale-95 transition-all text-center"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Free Audit</span>
        </button>
      </div>
    </div>
  );
}
