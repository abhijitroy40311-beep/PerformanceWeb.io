import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = '918777202487';
  const message = encodeURIComponent(
    'Hi Abhijit, I visited your PerformanceWeb.io portfolio and would like to discuss Google Ads for my business.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2 select-none">
      {/* Interactive Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex items-center gap-2.5 bg-slate-900/95 border border-slate-700/80 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-black/40 backdrop-blur-md max-w-xs"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-slate-100 block leading-tight">Quick Consultation</span>
              <span className="text-[11px] text-slate-400">Chat with Abhijit on WhatsApp</span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="ml-1 p-0.5 text-slate-400 hover:text-white rounded transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Abhijit Roy: +91 8777202487"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/35 border-2 border-emerald-300/40 transition-colors cursor-pointer"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 shrink-0 drop-shadow-sm transition-transform group-hover:scale-105" />

        {/* Online Status Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </span>
      </motion.a>
    </div>
  );
}
