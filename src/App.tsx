import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RealClientsSection } from './components/RealClientsSection';
import { WhyWebsiteSection } from './components/WhyWebsiteSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { CostEstimatorSection } from './components/CostEstimatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { 
  initialProfile, 
  realClientCaseStudies, 
  detailedServices, 
  frequentlyAskedQuestions, 
  clientTestimonials 
} from './data/defaultProfile';
import { ProfileData } from './types';

export function App() {
  const [profile] = useState<ProfileData>(initialProfile);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sectionIds = [
      'about',
      'clients',
      'why-website',
      'services',
      'process',
      'calculator',
      'faq',
      'developer-bio',
      'contact'
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      
      {/* Navbar Header */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section (5-10s clarity, who, what, value, CTA) */}
        <Hero
          profile={profile}
          onNavigate={scrollToSection}
        />

        {/* 2. Real Client Case Studies (CV. Fusena Jaya, Paradise Sablon, SHRIMORA) */}
        <RealClientsSection
          clients={realClientCaseStudies}
          whatsappNumber={profile.whatsappNumber}
        />

        {/* 3. Why Business Needs a Website (Pain points & Digital Real Estate) */}
        <WhyWebsiteSection
          onNavigate={scrollToSection}
          whatsappUrl={profile.whatsappUrl}
        />

        {/* 4. Services Section (Company Profile, Landing Page, Catalog, Web App, Redesign) */}
        <ServicesSection
          services={detailedServices}
          onNavigate={scrollToSection}
          whatsappUrl={profile.whatsappUrl}
        />

        {/* 5. Transparent 4-Step Process */}
        <ProcessSection
          onNavigate={scrollToSection}
          whatsappUrl={profile.whatsappUrl}
        />

        {/* 6. Why Choose Ahmad Shofi Nasla (Value Proposition) */}
        <WhyChooseMeSection />

        {/* 7. Interactive Cost & Timeline Estimator */}
        <CostEstimatorSection
          whatsappNumber={profile.whatsappNumber}
        />

        {/* 8. Real Client Testimonials */}
        <TestimonialsSection
          testimonials={clientTestimonials}
        />

        {/* 9. Frequently Asked Questions (FAQ) */}
        <FAQSection
          faqs={frequentlyAskedQuestions}
          whatsappUrl={profile.whatsappUrl}
        />

        {/* 10. About Developer & Professional Credibility */}
        <AboutSection
          profile={profile}
        />

        {/* 11. Final High-Conversion Contact Section */}
        <ContactSection
          profile={profile}
        />

      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onNavigate={scrollToSection}
      />

      {/* Floating WhatsApp Quick-Connect Button */}
      <FloatingWhatsApp
        whatsappUrl={profile.whatsappUrl}
      />

    </div>
  );
}

export default App;
