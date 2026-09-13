import React, { useState, useEffect } from 'react';
import { initialProfile, realClientCaseStudies, detailedServices, frequentlyAskedQuestions, clientTestimonials } from './data/defaultProfile';
import { dedicatedServicesList } from './data/servicesData';
import { insightArticles } from './data/insightsData';

// Core Navigation and Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Homepage Sections
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

// Dedicated Architectural Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsHubPage } from './pages/ProjectsHubPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { InsightsHubPage } from './pages/InsightsHubPage';
import { InsightDetailPage } from './pages/InsightDetailPage';

export function App() {
  const [profile] = useState(initialProfile);
  const [activeSection, setActiveSection] = useState('about');

  // SPA Route State based on window.location.pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // IntersectionObserver for homepage scrollspy
  useEffect(() => {
    if (currentPath !== '/') return;

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
  }, [currentPath]);

  // Navigate to hash section on home page
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Universal Navigation Handler across the target architecture
  const navigateToPage = (path: string, hash?: string) => {
    const fullUrl = path + (hash ? `#${hash}` : '');
    window.history.pushState({}, '', fullUrl);
    setCurrentPath(path);

    if (path === '/') {
      if (hash) {
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Resolver
  const renderCurrentRoute = () => {
    // 1. Root / Homepage
    if (currentPath === '/' || currentPath === '') {
      return (
        <>
          <Hero profile={profile} onNavigate={scrollToSection} />
          <RealClientsSection clients={realClientCaseStudies} whatsappNumber={profile.whatsappNumber} />
          <WhyWebsiteSection onNavigate={scrollToSection} whatsappUrl={profile.whatsappUrl} />
          <ServicesSection services={detailedServices} onNavigate={scrollToSection} whatsappUrl={profile.whatsappUrl} />
          <ProcessSection onNavigate={scrollToSection} whatsappUrl={profile.whatsappUrl} />
          <WhyChooseMeSection />
          <CostEstimatorSection whatsappNumber={profile.whatsappNumber} />
          <TestimonialsSection testimonials={clientTestimonials} />
          <FAQSection faqs={frequentlyAskedQuestions} whatsappUrl={profile.whatsappUrl} />
          <AboutSection profile={profile} />
          <ContactSection profile={profile} />
        </>
      );
    }

    // 2. /about - Personal Entity & Professional Profile
    if (currentPath === '/about') {
      return (
        <AboutPage
          profile={profile}
          onNavigateHome={() => navigateToPage('/')}
          onNavigateToSection={(sectionId) => navigateToPage('/', sectionId)}
        />
      );
    }

    // 3. /services - Services Hub
    if (currentPath === '/services') {
      return (
        <ServicesHubPage
          profile={profile}
          onNavigatePage={navigateToPage}
        />
      );
    }

    // 4. /services/:slug - Dedicated Service Detail
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const matchedService = dedicatedServicesList.find((s) => s.slug === slug);
      if (matchedService) {
        return (
          <ServiceDetailPage
            service={matchedService}
            profile={profile}
            onNavigatePage={navigateToPage}
          />
        );
      }
    }

    // 5. /projects - Projects & Case Studies Hub
    if (currentPath === '/projects') {
      return (
        <ProjectsHubPage
          profile={profile}
          onNavigatePage={navigateToPage}
        />
      );
    }

    // 6. /projects/:id - Case Study Detail
    if (currentPath.startsWith('/projects/')) {
      const id = currentPath.replace('/projects/', '');
      const matchedCaseStudy = realClientCaseStudies.find((c) => c.id === id);
      if (matchedCaseStudy) {
        return (
          <CaseStudyDetailPage
            caseStudy={matchedCaseStudy}
            profile={profile}
            onNavigatePage={navigateToPage}
          />
        );
      }
    }

    // 7. /insights - Insights Hub
    if (currentPath === '/insights') {
      return (
        <InsightsHubPage
          profile={profile}
          onNavigatePage={navigateToPage}
        />
      );
    }

    // 8. /insights/:slug - Insight Article Detail
    if (currentPath.startsWith('/insights/')) {
      const slug = currentPath.replace('/insights/', '');
      const matchedArticle = insightArticles.find((a) => a.slug === slug);
      if (matchedArticle) {
        return (
          <InsightDetailPage
            article={matchedArticle}
            profile={profile}
            onNavigatePage={navigateToPage}
          />
        );
      }
    }

    // Fallback: Elegant 404 with return home button
    return (
      <div className="pt-32 pb-24 max-w-2xl mx-auto px-4 text-center space-y-6">
        <span className="px-3 py-1 rounded-full bg-sky-950 text-sky-400 font-mono text-xs border border-sky-900/40">
          404 &middot; Halaman Tidak Ditemukan
        </span>
        <h1 className="text-3xl font-extrabold text-white">
          Halaman yang Anda Cari Tidak Tersedia
        </h1>
        <p className="text-slate-300 text-sm">
          Alamat URL mungkin telah diperbarui atau dipindahkan ke struktur arsitektur baru.
        </p>
        <button
          onClick={() => navigateToPage('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          Kembali ke Beranda Utama
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950 relative">
      
      {/* Universal Navbar Header */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        currentPath={currentPath}
        onNavigateSection={scrollToSection}
        onNavigatePage={navigateToPage}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentRoute()}
      </main>

      {/* Universal Footer with Full Architectural Sitemap Links */}
      <Footer
        profile={profile}
        currentPath={currentPath}
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
