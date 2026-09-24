import React from 'react';
import { 
  Briefcase, 
  Globe, 
  ShoppingBag, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';
import { ProfileData } from '../types';
import { HeroPortrait } from './HeroPortrait';

interface BioLandingPageProps {
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const BioLandingPage: React.FC<BioLandingPageProps> = ({ profile, onNavigatePage }) => {
  // Social & External URLs
  const instagramUrl = profile.instagramUrl || 'https://www.instagram.com/shofi_nasla';
  const tiktokUrl = profile.tiktokUrl || 'https://www.tiktok.com/@shofi_nasla';
  const youtubeUrl = profile.youtubeUrl || '#';
  const naslaDigitalUrl = 'https://instagram.com/nasladigital';

  return (
    <div className="w-full min-h-screen bg-[#090d16] text-slate-100 flex flex-col items-center px-4 py-6 sm:py-10 selection:bg-sky-500 selection:text-slate-950 font-sans">
      
      {/* Main Container: Mobile-first 320px-414px, max-w-[540px] on desktop */}
      <div className="w-full max-w-[520px] flex flex-col items-center space-y-7 sm:space-y-8">
        
        {/* =========================================================================
            SECTION 1 — PROFILE & HERO PORTRAIT
           ========================================================================= */}
        <HeroPortrait profile={profile} />

        {/* =========================================================================
            SECTION 2 — EXPLORE (Clean Minimalist Link Cards)
           ========================================================================= */}
        <section className="w-full flex flex-col gap-3 text-left">
          
          {/* Card 1: Portfolio */}
          <button
            onClick={() => onNavigatePage('/projects')}
            className="w-full group p-4 rounded-2xl bg-[#0e1424] hover:bg-[#131b30] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-200 flex items-center justify-between gap-3 text-left active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-200">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-sky-300 transition-colors block">
                  Portfolio
                </span>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  Lihat website dan project yang telah saya kerjakan.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          {/* Card 2: Jasa Website */}
          <button
            onClick={() => onNavigatePage('/services')}
            className="w-full group p-4 rounded-2xl bg-[#0e1424] hover:bg-[#131b30] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-200 flex items-center justify-between gap-3 text-left active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-200">
                <Globe className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-sky-300 transition-colors block">
                  Jasa Website
                </span>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  Company Profile &middot; Landing Page &middot; E-Commerce
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          {/* Card 3: Nasla Digital */}
          <a
            href={naslaDigitalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group p-4 rounded-2xl bg-[#0e1424] hover:bg-[#131b30] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-200 flex items-center justify-between gap-3 text-left active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-sky-300 transition-colors block">
                  Nasla Digital
                </span>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  Template &middot; Source Code &middot; Digital Products
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

          {/* Card 4: Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group p-4 rounded-2xl bg-[#0e1424] hover:bg-[#131b30] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-200 flex items-center justify-between gap-3 text-left active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-pink-300 transition-colors block">
                  Instagram
                </span>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  Ikuti proses, project dan insight seputar dunia digital.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

          {/* Card 5: YouTube */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group p-4 rounded-2xl bg-[#0e1424] hover:bg-[#131b30] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-200 flex items-center justify-between gap-3 text-left active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-red-300 transition-colors block">
                  YouTube
                </span>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  Tutorial dan pembahasan seputar web, teknologi dan digital.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

        </section>

        {/* =========================================================================
            SECTION 3 — SERVICES SUMMARY (Format Minimal, Apple-style Typography)
           ========================================================================= */}
        <section className="w-full pt-4 pb-2 border-t border-slate-800/60">
          <div className="space-y-4 text-center">
            
            {/* Service 1: Website */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Website
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Company Profile &middot; Landing Page &middot; E-Commerce
              </p>
            </div>

            {/* Service 2: Digital */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Digital
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                SEO &middot; Digital Marketing &middot; Automation
              </p>
            </div>

            {/* Service 3: Digital Product */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Digital Product
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Template &middot; Source Code &middot; Digital Assets
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4 — SOCIAL MEDIA (Clean Minimalist Icon Bar)
           ========================================================================= */}
        <section className="w-full pt-1">
          <div className="flex items-center justify-center gap-5 text-slate-400">
            
            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-800/80 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-800/80 hover:text-white transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.34 6.34 0 0 0 1.86-4.49V8.65a8.28 8.28 0 0 0 4.91 1.58V6.8a4.8 4.8 0 0 1-1-.11z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-800/80 hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-800/80 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-800/80 hover:text-emerald-400 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5 — FOOTER (Clean, Minimal, Small)
           ========================================================================= */}
        <footer className="w-full pt-4 pb-8 border-t border-slate-800/40 text-center space-y-1">
          <p className="text-xs font-bold text-white tracking-tight">
            Ahmad Shofi Nasla
          </p>
          <p className="text-[11px] text-slate-400 font-mono">
            Web Developer &amp; Digital Solutions
          </p>
          <p className="text-[10px] text-slate-500 pt-1">
            &copy; 2026 Ahmad Shofi Nasla
          </p>
        </footer>

      </div>

    </div>
  );
};
