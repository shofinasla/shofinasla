import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onNavigate
}) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-sky-950/60"
      aria-label="Jasa Pembuatan Website Profesional"
    >
      {/* Background Decorative Lighting - Matching Logo Radial Aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#0066ff]/20 via-[#00a3ff]/15 to-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[280px] h-[220px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Eyebrow badge with official brand slogan */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wider uppercase shadow-sm shadow-sky-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse" />
            <span>BUILDING IDEAS INTO REAL SOLUTIONS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Website Profesional yang Mengubah Pengunjung Menjadi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-[#00A3FF]">
              Pelanggan Nyata.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Halo, saya <span className="font-semibold text-white">{profile.name}</span> (Web Developer). Saya membantu pemilik bisnis, UMKM, dan perusahaan membangun website berkelas yang berkecepatan tinggi, mobile-friendly, terindeks Google, dan dirancang khusus untuk mendongkrak kredibilitas serta omzet.
          </p>

          {/* Value points grid */}
          <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0a0f1d]/80 border border-sky-900/40">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">Loading &lt; 1.5 Detik</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0a0f1d]/80 border border-sky-900/40">
              <Smartphone className="w-4 h-4 text-sky-300 shrink-0" />
              <span className="text-xs font-medium text-slate-200">100% Mobile Ready</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0a0f1d]/80 border border-sky-900/40">
              <Search className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">SEO Ramah Google</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0a0f1d]/80 border border-sky-900/40">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span className="text-xs font-medium text-slate-200">Garansi & Maintenance</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              id="hero-whatsapp-primary"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Konsultasi Website Sekarang (Gratis)</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <button
              id="hero-see-portfolio"
              onClick={() => onNavigate('clients')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1424] hover:bg-[#131c33] text-slate-200 hover:text-white font-medium text-sm border border-sky-900/50 hover:border-sky-500/50 transition-all"
            >
              <span>Lihat Portofolio Klien Nyata</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          <p className="text-[12px] text-slate-400 pt-1">
            ⚡ Konsultasi santai & transparan. Diskusi kebutuhan website Anda tanpa komitmen.
          </p>
        </div>

        {/* Real Client Trust Strip */}
        <div className="mt-14 pt-8 border-t border-sky-950/70 max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Dipercaya Oleh Bisnis & Klien Nyata:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-[#0a0f1d]/70 hover:bg-[#0f172a] border border-sky-900/40 hover:border-sky-500/60 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-sky-400 block font-semibold">TRAVEL & EVENT</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  CV. Fusena Jaya
                </span>
                <span className="text-[11px] text-slate-400 block">Company Profile & Booking</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-[#0a0f1d]/70 hover:bg-[#0f172a] border border-sky-900/40 hover:border-sky-500/60 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-cyan-400 block font-semibold">CUSTOM APPAREL</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  Paradise Sablon
                </span>
                <span className="text-[11px] text-slate-400 block">Katalog & Portofolio Sablon</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-[#0a0f1d]/70 hover:bg-[#0f172a] border border-sky-900/40 hover:border-sky-500/60 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-blue-400 block font-semibold">B2B SEAFOOD EXPORT</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  SHRIMORA
                </span>
                <span className="text-[11px] text-slate-400 block">Corporate Web & Cold Chain</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
