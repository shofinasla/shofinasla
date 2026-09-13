import React from 'react';
import { ArrowUp, Heart, Sparkles, MessageSquare, Mail, Github, Linkedin, ShieldCheck } from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  profile: ProfileData;
  currentPage: 'home' | 'about';
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (path: string, hash?: string) => void;
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  profile, 
  currentPage,
  onNavigateSection,
  onNavigatePage 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    if (currentPage === 'home') {
      onNavigateSection(sectionId);
    } else {
      onNavigatePage('/', sectionId);
    }
  };

  const handleAboutClick = () => {
    if (currentPage === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigatePage('/about');
    }
  };

  return (
    <footer className="border-t border-sky-950/60 bg-[#050811] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  if (currentPage === 'home') {
                    scrollToTop();
                  } else {
                    onNavigatePage('/');
                  }
                }}
                className="focus:outline-none text-left"
              >
                <BrandLogo size="md" />
              </button>
              <div>
                <span className="text-base font-bold text-white block">
                  {profile.name}
                </span>
                <span className="text-[11px] text-sky-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>Jasa Pembuatan Website Profesional</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Membantu bisnis, UMKM, dan profesional memiliki aset digital berkelas yang cepat, responsif di HP, terindeks Google, dan siap mendatangkan closing penjualan.
            </p>

            {/* Quick Link to /about */}
            <div className="pt-1">
              <button
                id="footer-btn-about-shofi-profile"
                onClick={handleAboutClick}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentPage === 'about'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 cursor-default'
                    : 'bg-[#0a0f1e] hover:bg-[#10182f] text-slate-200 hover:text-white border border-sky-900/40 hover:border-sky-500/40 shadow-sm'
                }`}
              >
                <span>About Shofi Nasla</span>
                {currentPage === 'about' ? (
                  <span className="text-[10px] text-sky-400 font-mono font-normal">(Halaman Aktif)</span>
                ) : (
                  <span className="text-sky-400">→</span>
                )}
              </button>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Kami</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-[#0a0f1e] hover:bg-[#10182f] text-slate-300 border border-sky-900/40 text-xs flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Klien & Portofolio (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Klien &amp; Studi Kasus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleSectionClick('clients')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  CV. Fusena Jaya Tour &amp; Event
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('clients')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  Paradise Sablon (Custom Apparel)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('clients')}
                  className="hover:text-sky-300 transition-colors text-left"
                >
                  SHRIMORA (B2B Seafood Export)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Kami (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Layanan Website
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleSectionClick('services')} className="hover:text-white transition-colors">
                  Website Company Profile Bisnis
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionClick('services')} className="hover:text-white transition-colors">
                  Landing Page Iklan Berbayar
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionClick('services')} className="hover:text-white transition-colors">
                  Katalog Produk &amp; Portofolio Digital
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionClick('services')} className="hover:text-white transition-colors">
                  Aplikasi Web &amp; Sistem Kustom
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionClick('services')} className="hover:text-white transition-colors">
                  Redesign &amp; Optimasi Kecepatan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Profil & Legalitas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Profil &amp; Legalitas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  id="footer-link-about-shofi"
                  onClick={handleAboutClick}
                  className={`transition-colors text-left flex items-center gap-1.5 ${
                    currentPage === 'about'
                      ? 'text-sky-400 font-bold cursor-default'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>About Shofi Nasla</span>
                  {currentPage === 'about' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  )}
                </button>
              </li>
            </ul>

            <div className="space-y-2 pt-2 text-[11px] text-slate-300 border-t border-sky-950/70">
              <div className="flex items-center gap-1.5 text-sky-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Google Verified</span>
              </div>
              <p className="text-slate-400">Domain resmi:</p>
              <a
                href="https://ahmad.shofinasla.workers.dev/"
                className="font-mono text-sky-400 hover:underline block break-all text-[10px]"
              >
                ahmad.shofinasla.workers.dev
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-sky-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} <strong className="text-white">{profile.name}</strong>. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0f1e] hover:bg-[#10182f] text-slate-300 hover:text-white border border-sky-900/40 text-xs transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
