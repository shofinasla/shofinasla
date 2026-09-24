import React, { useState, useEffect } from 'react';
import { initialProfile, realClientCaseStudies, detailedServices, frequentlyAskedQuestions, clientTestimonials } from './data/defaultProfile';
import { dedicatedServicesList } from './data/servicesData';
import { insightArticles } from './data/insightsData';

// Core Navigation and Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SEOHead } from './components/SEOHead';

// New Instagram Bio Landing Page
import { BioLandingPage } from './components/BioLandingPage';

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

  // Universal Navigation Handler
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

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route Resolver
  const renderCurrentRoute = () => {
    // 1. Root / Homepage: Instagram Bio Landing Page
    if (currentPath === '/' || currentPath === '') {
      return (
        <>
          <SEOHead
            title="Ahmad Shofi Nasla — Web Developer &amp; Digital Solutions"
            description="Membangun website dan solusi digital untuk membantu bisnis tampil profesional dan berkembang di dunia online. Konsultasi project &amp; portfolio."
            canonicalUrl="https://ahmad.shofinasla.workers.dev/"
            ogType="profile"
          />
          <BioLandingPage
            profile={profile}
            onNavigatePage={navigateToPage}
          />
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

    // Fallback 404
    return (
      <div className="pt-32 pb-24 max-w-md mx-auto px-4 text-center space-y-6">
        <span className="px-3 py-1 rounded-full bg-sky-950 text-sky-400 font-mono text-xs border border-sky-900/40">
          404 &middot; Halaman Tidak Ditemukan
        </span>
        <h1 className="text-2xl font-bold text-white">
          Halaman yang Anda Cari Tidak Tersedia
        </h1>
        <p className="text-slate-400 text-xs leading-relaxed">
          Alamat URL mungkin telah dipindahkan atau diperbarui.
        </p>
        <button
          onClick={() => navigateToPage('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          Kembali ke Bio Link
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950 relative">
      
      {/* Universal Navbar Header for Subpages */}
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

      {/* Universal Footer for Subpages */}
      <Footer
        profile={profile}
        currentPath={currentPath}
        onNavigateSection={scrollToSection}
        onNavigatePage={navigateToPage}
      />

      {/* Floating WhatsApp Quick-Connect Button on sub-pages */}
      {currentPath !== '/' && (
        <FloatingWhatsApp
          whatsappUrl={profile.whatsappUrl}
        />
      )}

    </div>
  );
}

export default App;
