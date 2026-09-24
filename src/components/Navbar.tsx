import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowLeft, Menu, X, Globe, Briefcase, User } from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  profile: ProfileData;
  activeSection: string;
  currentPath: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  currentPath,
  onNavigateSection,
  onNavigatePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on Bio Landing Page root, we don't need a heavy sticky bar overhead
  if (currentPath === '/' || currentPath === '') {
    return null;
  }

  const navItems = [
    { label: 'Portfolio', path: '/projects' },
    { label: 'Jasa Website', path: '/services' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Left: Back to Bio Link & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigatePage('/')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bio Link</span>
          </button>

          <button
            onClick={() => onNavigatePage('/')}
            className="font-bold text-sm text-white hover:text-sky-400 transition-colors truncate"
          >
            Ahmad Shofi Nasla
          </button>
        </div>

        {/* Center/Right: Clean Nav links */}
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigatePage(item.path)}
              className={`transition-colors ${
                currentPath.startsWith(item.path)
                  ? 'text-sky-400 font-semibold'
                  : 'hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action: Konsultasi Project */}
        <div className="flex items-center gap-2">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950 stroke-[1.5]" />
            <span>Konsultasi</span>
          </a>
        </div>

      </div>
    </header>
  );
};
