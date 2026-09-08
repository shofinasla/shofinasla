import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Check, 
  Copy, 
  ArrowRight, 
  Terminal, 
  Code2, 
  ExternalLink,
  Github,
  Linkedin,
  FileText,
  Cpu
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onNavigate,
  onOpenResume,
  onOpenTerminal
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status & Identity Chip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                <span>@{profile.username}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>{profile.title}</span>
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Quick Metadata list */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-indigo-300 transition-colors">
                  github.com/{profile.username}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-300 transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                id="hero-btn-explore-projects"
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-copy-email"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-mono text-xs transition-all duration-200"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied Email!' : profile.email}</span>
              </button>

              <button
                id="hero-btn-resume"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 font-medium text-xs transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>View Resume & Bio</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive GitHub Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
              
              {/* Profile Card Container */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-400 font-mono ml-2">shofinasla/README.md</span>
                  </div>
                  <button 
                    onClick={onOpenTerminal}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Launch CLI</span>
                  </button>
                </div>

                {/* Markdown snippet representation */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/60 space-y-2 text-slate-300">
                    <div className="text-indigo-300 font-semibold flex items-center gap-1.5">
                      <span>👋 Hi, I’m {profile.name} (@{profile.username})</span>
                    </div>
                    <div className="text-slate-400 text-[11px] leading-relaxed space-y-1">
                      <p><span className="text-emerald-400">🌱 Learning:</span> {profile.learning[0]}</p>
                      <p><span className="text-purple-400">💞️ Collaborating:</span> {profile.collaboratingOn[0]}</p>
                      <p><span className="text-cyan-400">📫 Reach out:</span> {profile.email}</p>
                      <p><span className="text-amber-400">📍 Based in:</span> {profile.location}</p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/40">
                      <span className="text-[10px] text-slate-500 block uppercase font-sans font-medium">Core Stack</span>
                      <span className="text-xs font-medium text-slate-200">React • TS • Node</span>
                    </div>
                    <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/40">
                      <span className="text-[10px] text-slate-500 block uppercase font-sans font-medium">Repository</span>
                      <span className="text-xs font-medium text-slate-200">{profile.username}/{profile.username}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer action */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400">GitHub Profile Active</span>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>github.com/{profile.username}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
