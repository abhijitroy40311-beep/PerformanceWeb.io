import React from 'react';
import { Phone, MessageSquare, Mail, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block"
              aria-label="PerformanceWeb.io"
            >
              <BrandLogo size="md" showTagline={true} />
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Google Ads & Performance Marketing Specialist. Transforming high-intent searches into qualified leads, phone calls, and real business growth.
            </p>

            <div className="text-xs font-semibold text-sky-400">
              More Qualified Leads. Better Business.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:+918777202487"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>+91 8777202487</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/918777202487?text=Hi%20Abhijit,%20I%20visited%20your%20PerformanceWeb.io%20portfolio%20and%20would%20like%20to%20discuss%20Google%20Ads%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp (+91 8777202487)</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:abhijitroy40311@gmail.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">abhijitroy40311@gmail.com</span>
                </a>
              </li>
            </ul>

            <p className="text-xs text-slate-500 pt-2">
              Performance marketing portfolio by Abhijit Roy. Available for select search marketing engagements.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 PerformanceWeb.io. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
