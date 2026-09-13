import React, { useEffect, useState, useMemo } from 'react';
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
import { AboutPage } from './pages/AboutPage';

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
  
  // URL routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/+$/, '') || '/';
      return p;
    }
    return '/';
  });

  const currentPage = useMemo<'home' | 'about'>(() => {
    return currentPath === '/about' ? 'about' : 'home';
  }, [currentPath]);

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(p);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO metadata & title dynamically based on current page
  useEffect(() => {
    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let elem = document.querySelector(selector);
      if (!elem) {
        elem = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) elem.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) elem.setAttribute('name', name);
        } else if (selector.includes('rel=')) {
          const rel = selector.match(/rel="([^"]+)"/)?.[1];
          if (rel) elem.setAttribute('rel', rel);
        }
        document.head.appendChild(elem);
      }
      elem.setAttribute(attr, value);
    };

    if (currentPage === 'about') {
      document.title = "About Ahmad Shofi Nasla — Web Developer";
      updateMetaTag('meta[name="description"]', 'content', 'Kenali Ahmad Shofi Nasla, Web Developer yang membantu bisnis dan UMKM membangun website profesional, cepat, responsive, dan berorientasi tujuan bisnis nyata.');
      updateMetaTag('link[rel="canonical"]', 'href', 'https://ahmad.shofinasla.workers.dev/about');
      updateMetaTag('meta[property="og:title"]', 'content', 'About Ahmad Shofi Nasla — Web Developer');
      updateMetaTag('meta[property="og:description"]', 'content', 'Kenali Ahmad Shofi Nasla, Web Developer yang membantu bisnis membangun kehadiran digital profesional, berkecepatan tinggi, dan berorientasi konversi.');
      updateMetaTag('meta[property="og:url"]', 'content', 'https://ahmad.shofinasla.workers.dev/about');
      updateMetaTag('meta[property="og:type"]', 'content', 'profile');
    } else {
      document.title = "Jasa Pembuatan Website Profesional | Ahmad Shofi Nasla";
      updateMetaTag('meta[name="description"]', 'content', 'Jasa pembuatan website profesional, company profile, landing page konversi tinggi, dan aplikasi web untuk UMKM dan bisnis modern oleh Ahmad Shofi Nasla.');
      updateMetaTag('link[rel="canonical"]', 'href', 'https://ahmad.shofinasla.workers.dev/');
      updateMetaTag('meta[property="og:title"]', 'content', 'Jasa Pembuatan Website Profesional | Ahmad Shofi Nasla');
      updateMetaTag('meta[property="og:description"]', 'content', 'Bantu bisnis Anda naik kelas dengan website profesional berkecepatan tinggi, mobile-friendly, terindeks Google, dan dirancang khusus untuk menghasilkan omzet.');
      updateMetaTag('meta[property="og:url"]', 'content', 'https://ahmad.shofinasla.workers.dev/');
      updateMetaTag('meta[property="og:type"]', 'content', 'website');
    }
  }, [currentPage]);

  // IntersectionObserver for homepage scrollspy
  useEffect(() => {
    if (currentPage !== 'home') return;

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
  }, [currentPage]);

  // Navigate to hash section on home page
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate between pages (/ and /about)
  const navigateToPage = (path: string, hash?: string) => {
    const fullUrl = path + (hash ? `#${hash}` : '');
    window.history.pushState({}, '', fullUrl);
    setCurrentPath(path);

    if (path === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (hash) {
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950 relative">
      
      {/* Universal Navbar Header */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigateSection={scrollToSection}
        onNavigatePage={navigateToPage}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'about' ? (
          /* Dedicated Professional Personal Profile Page */
          <AboutPage
            profile={profile}
            onNavigateHome={() => navigateToPage('/')}
            onNavigateToSection={(sectionId) => navigateToPage('/', sectionId)}
          />
        ) : (
          /* Homepage: Business / Service Landing Page */
          <>
            {/* 1. Hero Section */}
            <Hero
              profile={profile}
              onNavigate={scrollToSection}
            />

            {/* 2. Real Client Case Studies */}
            <RealClientsSection
              clients={realClientCaseStudies}
              whatsappNumber={profile.whatsappNumber}
            />

            {/* 3. Why Business Needs a Website */}
            <WhyWebsiteSection
              onNavigate={scrollToSection}
              whatsappUrl={profile.whatsappUrl}
            />

            {/* 4. Services Section */}
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

            {/* 6. Why Choose Ahmad Shofi Nasla */}
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

            {/* 10. About Developer Section on Homepage */}
            <AboutSection
              profile={profile}
            />

            {/* 11. Final High-Conversion Contact Section */}
            <ContactSection
              profile={profile}
            />
          </>
        )}
      </main>

      {/* Universal Footer with Link to About */}
      <Footer
        profile={profile}
        currentPage={currentPage}
        onNavigateSection={scrollToSection}
        onNavigatePage={navigateToPage}
      />

      {/* Floating WhatsApp Quick-Connect Button */}
      <FloatingWhatsApp
        whatsappUrl={profile.whatsappUrl}
      />

    </div>
  );
}

export default App;
