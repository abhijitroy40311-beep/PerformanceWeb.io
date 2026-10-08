import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight, ChevronRight, Sparkles, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo.jsx';

export default function Navbar({ onOpenAudit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll state for smooth header transition and active link tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Active section detection
          const sections = ['home', 'services', 'case-studies', 'process', 'about', 'contact'];
          const scrollPosition = window.scrollY + 120;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile/tablet menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Smooth scroll handler with header offset
  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Framer motion variants for drawer stagger
  const menuContainerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
        when: 'afterChildren',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -12, y: -4 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.22, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.header
        animate={{
          paddingTop: isScrolled ? '10px' : '18px',
          paddingBottom: isScrolled ? '10px' : '18px',
          backgroundColor: isScrolled ? 'rgba(5, 8, 17, 0.96)' : 'rgba(5, 8, 17, 0.65)',
          borderColor: isScrolled ? 'rgba(30, 41, 59, 0.85)' : 'rgba(15, 23, 42, 0.4)',
          boxShadow: isScrolled ? '0 16px 32px -4px rgba(0, 0, 0, 0.5)' : 'none',
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className="flex items-center group transition-transform active:scale-95 shrink-0"
              aria-label="PerformanceWeb.io Home"
            >
              <BrandLogo size="responsive" />
            </a>

            {/* Desktop Navigation (Visible on lg: 1024px and up) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`text-sm font-medium transition-colors py-1 px-1 relative group ${
                      isActive ? 'text-sky-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-sky-400"
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Desktop Direct Actions (lg: 1024px+) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918777202487?text=Hi%20Abhijit,%20I%20visited%20your%20PerformanceWeb.io%20portfolio%20and%20would%20like%20to%20discuss%20Google%20Ads%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/40 rounded-lg transition-all hover:scale-[1.02] active:scale-95"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href="tel:+918777202487"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-all hover:scale-[1.02] active:scale-95"
                title="Call Abhijit Roy: +91 8777202487"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+91 8777202487</span>
              </a>

              {/* Start Project CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs lg:text-sm font-semibold shadow-md shadow-blue-600/30 transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile & Tablet Controls (< 1024px: Phones + Tablets) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              {/* Quick 1-tap Call button */}
              <a
                href="tel:+918777202487"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-blue-400 hover:text-white transition-all shadow-sm active:scale-95"
                aria-label="Call Abhijit Roy"
                title="Call +91 8777202487"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Animated Hamburger Button with Framer Motion */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex flex-col items-center justify-center gap-1 text-slate-300 hover:text-white transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.span
                  className="w-4 h-0.5 bg-slate-200 rounded-full"
                  animate={mobileMenuOpen ? { rotate: 45, y: 6, backgroundColor: '#38bdf8' } : { rotate: 0, y: 0, backgroundColor: '#e2e8f0' }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="w-4 h-0.5 bg-slate-200 rounded-full"
                  animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                />
                <motion.span
                  className="w-4 h-0.5 bg-slate-200 rounded-full"
                  animate={mobileMenuOpen ? { rotate: -45, y: -6, backgroundColor: '#38bdf8' } : { rotate: 0, y: 0, backgroundColor: '#e2e8f0' }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Framer Motion Mobile & Tablet Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden border-t border-slate-800/80 bg-slate-950/98 backdrop-blur-2xl shadow-2xl mt-2.5"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
                {/* Responsive container: 1 col on mobile, 2 cols on tablet */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
                  {/* Left Column: Navigation Links with Stagger */}
                  <motion.nav className="md:col-span-7 flex flex-col space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 pb-1">
                      Menu Navigation
                    </span>
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.id;
                      return (
                        <motion.a
                          key={link.label}
                          variants={menuItemVariants}
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href, link.id)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-blue-950/70 text-sky-400 border border-blue-800/60 font-semibold shadow-xs'
                              : 'text-slate-200 hover:text-white hover:bg-slate-900/80'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isActive ? 'bg-sky-400' : 'bg-slate-700'
                              }`}
                            />
                            <span>{link.label}</span>
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isActive ? 'text-sky-400 translate-x-0.5' : 'text-slate-500'
                            }`}
                          />
                        </motion.a>
                      );
                    })}
                  </motion.nav>

                  {/* Right Column: Direct Contact & CTAs */}
                  <motion.div
                    variants={menuItemVariants}
                    className="md:col-span-5 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800/80 md:pl-8 flex flex-col gap-3"
                  >
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Direct Contact Channels
                    </span>

                    {/* Quick Call & WhatsApp Row */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:+918777202487"
                        className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">Call Now</span>
                      </a>

                      <a
                        href="https://wa.me/918777202487?text=Hi%20Abhijit,%20I%20visited%20your%20PerformanceWeb.io%20portfolio%20and%20would%20like%20to%20discuss%20Google%20Ads%20for%20my%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 rounded-xl transition-all active:scale-95"
                      >
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">WhatsApp</span>
                      </a>
                    </div>

                    {/* Email Option */}
                    <a
                      href="mailto:abhijitroy40311@gmail.com"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">abhijitroy40311@gmail.com</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </a>

                    {/* Action Buttons Row */}
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenAudit();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-700/80 font-semibold text-xs transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>Free Audit</span>
                      </button>

                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all active:scale-95"
                      >
                        <span>Start Project</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Framer Motion Animated Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
