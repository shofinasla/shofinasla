import React from 'react';
import { MessageSquare, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  profile: ProfileData;
  currentPath: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  profile, 
  currentPath,
  onNavigateSection,
  onNavigatePage 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string) => {
    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigatePage(path);
    }
  };

  // If on the root Bio page, the BioLandingPage already includes the minimalist footer
  if (currentPath === '/' || currentPath === '') {
    return null;
  }

  return (
    <footer className="border-t border-slate-800/60 bg-[#070b14] py-10 text-slate-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">
        
        {/* Brand Lockup */}
        <button 
          onClick={() => handleNav('/')}
          className="focus:outline-none group flex flex-col items-center space-y-2"
        >
          <BrandLogo size="md" showText={true} />
        </button>

        {/* Minimal Nav Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-300 font-medium">
          <button 
            onClick={() => handleNav('/')}
            className="hover:text-white transition-colors"
          >
            Bio Link
          </button>
          <span className="text-slate-700">&middot;</span>
          <button 
            onClick={() => handleNav('/projects')}
            className="hover:text-white transition-colors"
          >
            Portfolio
          </button>
          <span className="text-slate-700">&middot;</span>
          <button 
            onClick={() => handleNav('/services')}
            className="hover:text-white transition-colors"
          >
            Jasa Website
          </button>
          <span className="text-slate-700">&middot;</span>
          <button 
            onClick={() => handleNav('/about')}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <span className="text-slate-700">&middot;</span>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            Konsultasi Project &rarr;
          </a>
        </nav>

        {/* Copyright */}
        <div className="pt-2 border-t border-slate-800/40 w-full max-w-sm text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 Ahmad Shofi Nasla</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
