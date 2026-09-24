import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeroPortraitProps {
  profile: ProfileData;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ profile }) => {
  const [imageError, setImageError] = useState(false);

  // Preferred image path from public folder
  const photoSrc = profile.avatarUrl || '/profil.png';

  return (
    <section className="w-full pt-2 sm:pt-4">
      
      {/* =========================================================================
          DESKTOP LAYOUT (Hidden on mobile < sm, visible on sm+)
          2-column balanced split: Left Info + CTA, Right Portrait
         ========================================================================= */}
      <div className="hidden sm:flex items-center justify-between gap-6 text-left p-6 rounded-3xl bg-[#0d1322] border border-slate-800/80 shadow-xl relative overflow-hidden group">
        
        {/* Subtle decorative ambient radial glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* LEFT COLUMN: Identity, Tagline, & CTA */}
        <div className="flex-1 space-y-3 z-10">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-emerald-400 font-semibold uppercase">
                Available for Projects
              </span>
            </div>

            <h1 className="text-2xl lg:text-[26px] font-bold tracking-tight text-white font-sans">
              {profile.name}
            </h1>
            
            <p className="text-xs font-semibold text-sky-400 uppercase font-mono tracking-wide mt-1">
              Web Developer &amp; Digital Solutions
            </p>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed max-w-[290px]">
            Membangun website dan solusi digital untuk membantu bisnis tampil profesional dan berkembang di dunia online.
          </p>

          <div className="pt-2">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 active:scale-95 transition-all duration-200 border border-sky-300/30"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 stroke-[1.5]" />
              <span>Konsultasi Project</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Portrait */}
        <div className="relative shrink-0 w-36 h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-500/20 to-slate-900 border border-sky-500/30 shadow-md flex items-center justify-center">
          {!imageError ? (
            <img
              src={photoSrc}
              alt={profile.name}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#0a0f1d]">
              <BrandLogo size="md" showText={false} />
              <span className="text-[10px] font-mono text-sky-400 font-bold mt-2">
                {profile.name}
              </span>
              <span className="text-[8px] text-slate-400">Web Developer</span>
            </div>
          )}

          {/* Subtle verified badge indicator */}
          <div className="absolute bottom-2 right-2 bg-[#090d16]/90 backdrop-blur-sm p-1 rounded-full border border-sky-500/40 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </div>

      </div>

      {/* =========================================================================
          MOBILE LAYOUT (Visible on mobile < sm, hidden on sm+)
          Vertical sequence: Photo -> Name -> Role -> Tagline -> Primary CTA
         ========================================================================= */}
      <div className="sm:hidden flex flex-col items-center text-center space-y-4">
        
        {/* Photo Container */}
        <div className="relative group">
          {/* Ambient Aura Ring */}
          <div className="absolute -inset-1 bg-gradient-to-b from-sky-500/30 to-blue-600/10 rounded-full blur-md opacity-75" />
          
          <div className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-b from-sky-400 via-blue-500 to-slate-800 shadow-xl overflow-hidden flex items-center justify-center bg-[#0d1322]">
            {!imageError ? (
              <img
                src={photoSrc}
                alt={profile.name}
                className="w-full h-full object-cover object-top rounded-full"
                onError={() => setImageError(true)}
                loading="eager"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-[#0a0f1d] flex flex-col items-center justify-center p-2">
                <BrandLogo size="md" showText={false} />
                <span className="text-[10px] font-mono tracking-widest text-sky-400 font-semibold mt-1">
                  ASN
                </span>
              </div>
            )}
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-0 right-0 translate-x-1 translate-y-0.5 bg-[#090d16] p-0.5 rounded-full">
            <div className="bg-sky-500 text-slate-950 p-1 rounded-full shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Identity & Profession */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-sans">
            {profile.name}
          </h1>

          <p className="text-xs font-semibold tracking-wide text-sky-400 uppercase mt-1 font-mono">
            Web Developer &amp; Digital Solutions
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xs text-slate-300 leading-relaxed max-w-[340px] font-normal px-2">
          Membangun website dan solusi digital untuk membantu bisnis tampil profesional dan berkembang di dunia online.
        </p>

        {/* Primary CTA Button: Konsultasi Project */}
        <div className="w-full pt-2">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/20 active:scale-[0.98] transition-all duration-200 border border-sky-300/30"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 stroke-[1.5]" />
            <span>Konsultasi Project</span>
          </a>
        </div>

      </div>

    </section>
  );
};
