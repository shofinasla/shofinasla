import React, { useState, useEffect } from 'react';
import { Terminal, FileCode2, Github, Mail, Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReadmeEditor: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onNavigate,
  onOpenReadmeEditor,
  onToggleTerminal,
  isTerminalOpen,
  theme,
  onToggleTheme
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
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <button
          id="nav-brand-logo"
          onClick={() => onNavigate('about')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-indigo-400 text-sm tracking-tighter">
              &lt;SN/&gt;
            </div>
          </div>
          <div className="text-left">
            <span className="font-bold text-slate-100 text-base tracking-tight block group-hover:text-indigo-300 transition-colors">
              @{profile.username}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:block">
              Full-Stack Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 px-3 py-1.5 rounded-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* README Builder Button */}
          <button
            id="btn-readme-builder"
            onClick={onOpenReadmeEditor}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 text-xs font-medium transition-all duration-200 group"
            title="Open GitHub Profile README.md Generator"
          >
            <FileCode2 className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-6 transition-transform" />
            <span className="hidden sm:inline">README Generator</span>
            <span className="sm:hidden">README</span>
          </button>

          {/* Interactive Terminal Toggle */}
          <button
            id="btn-terminal-toggle"
            onClick={onToggleTerminal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 font-mono ${
              isTerminalOpen
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-500/20'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700/60'
            }`}
            title="Toggle Developer Terminal CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* GitHub Link */}
          <a
            id="btn-github-link"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 py-4 mt-3 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">@{profile.username}</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-indigo-400 hover:underline flex items-center gap-1 font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              {profile.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
