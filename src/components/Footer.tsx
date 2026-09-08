import React from 'react';
import { ArrowUp, Github, Heart, Sparkles, Terminal } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400 text-xs tracking-tight">
            ASN
          </div>
          <div>
            <p className="font-bold text-slate-200">
              {profile.name} <span className="text-indigo-400 font-mono text-[11px]">(@{profile.username})</span>
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Full-Stack Software Engineer • Indonesia / Remote
            </p>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            github.com/{profile.username}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-indigo-400 transition-colors"
          >
            {profile.email}
          </a>
          <button
            onClick={onOpenTerminal}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <Terminal className="w-3 h-3" />
            <span>CLI mode</span>
          </button>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
          title="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
