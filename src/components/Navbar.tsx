import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  profile: ProfileData;
  activeSection: string;
  currentPage: 'home' | 'about';
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (path: string, hash?: string) => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  currentPage,
  onNavigateSection,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', isPage: true, path: '/' },
    { id: 'services', label: 'Services', isPage: false, sectionId: 'services' },
    { id: 'clients', label: 'Projects', isPage: false, sectionId: 'clients' },
    { id: 'about', label: 'About', isPage: true, path: '/about' },
    { id: 'contact', label: 'Contact', isPage: false, sectionId: 'contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);

    if (item.isPage) {
      if (item.id === 'about') {
        if (currentPage === 'about') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          onNavigatePage('/about');
        }
      } else if (item.id === 'home') {
        if (currentPage === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          onNavigatePage('/');
        }
      }
    } else {
      if (currentPage === 'home') {
        onNavigateSection(item.sectionId!);
      } else {
        // From /about, go to home with hash
        onNavigatePage('/', item.sectionId!);
      }
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (currentPage === 'about') {
      return item.id === 'about';
    }
    // currentPage === 'home'
    if (item.id === 'about') return false;
    if (item.id === 'home') {
      return activeSection === 'about' || activeSection === 'hero' || activeSection === '';
    }
    return activeSection === item.sectionId;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060913]/92 backdrop-blur-md border-b border-sky-950/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo & Profile Emblem */}
        <button
          id="nav-brand-logo"
          onClick={() => {
            if (currentPage === 'home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              onNavigatePage('/');
            }
          }}
          className="group focus:outline-none text-left"
        >
          <BrandLogo size="md" showText={true} />
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-[#0a0f1d]/85 backdrop-blur-md border border-sky-900/40 px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  active
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-sky-500/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            id="nav-whatsapp-cta"
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-sky-500/25 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Mulai Project</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0b1020] border border-sky-900/50 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#070b16]/98 backdrop-blur-xl border-b border-sky-900/60 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1.5 py-2">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    active
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/25"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Mulai Project via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
