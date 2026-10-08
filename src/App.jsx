import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import WhyChooseMe from './components/WhyChooseMe.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AuditModal from './components/AuditModal.jsx';
import MobileQuickBar from './components/MobileQuickBar.jsx';
import SkeletonLoader from './components/SkeletonLoader.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Google Ads Management');

  // Initial skeleton loading effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCaseStudy = (caseStudyTitle) => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      {/* Skeleton Loading Overlay on initial load */}
      <SkeletonLoader isLoading={isLoading} />

      {/* Fixed/Sticky Top Navigation with Smooth Transitions */}
      <Navbar onOpenAudit={handleOpenAudit} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Google Ads Performance Dashboard Visual */}
        <Hero onOpenAudit={handleOpenAudit} />

        {/* Services Section (Light Background) */}
        <Services onSelectService={handleSelectService} />

        {/* Case Studies Section (Subtle Light Background) */}
        <CaseStudies onSelectCaseStudy={handleSelectCaseStudy} />

        {/* Process Section (01-04 Horizontal Step Flow) */}
        <Process />

        {/* About Section (Dark Navy Specialist Profile) */}
        <About />

        {/* Why Choose Me / Trust Section */}
        <WhyChooseMe />

        {/* Testimonials (Transparent Placeholder Slots) */}
        <Testimonials />

        {/* FAQ Section (Accordion Style) */}
        <FAQ />

        {/* Final CTA Banner (Strong Blue) */}
        <FinalCTA onOpenAudit={handleOpenAudit} />

        {/* Contact Section (Working Direct Channels & Enquiry Form) */}
        <Contact prefilledService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Free Audit Dialog */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar (Call, WhatsApp, Audit) */}
      <MobileQuickBar onOpenAudit={handleOpenAudit} />
    </div>
  );
}
