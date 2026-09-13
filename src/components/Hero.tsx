import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck,
  Building2,
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
      className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-900"
      aria-label="Jasa Pembuatan Website Profesional"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[300px] h-[250px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Jasa Pembuatan Website Profesional & Modern</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
            Website Profesional yang Mengubah Pengunjung Menjadi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
              Pelanggan Nyata.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Halo, saya <span className="font-semibold text-white">{profile.name}</span>. Saya membantu pemilik bisnis, UMKM, dan perusahaan membangun website berkelas yang berkecepatan tinggi, mobile-friendly, terindeks Google, dan dirancang khusus untuk meningkatkan kredibilitas serta penjualan.
          </p>

          {/* Value points grid */}
          <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">Loading &lt; 1.5 Detik</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">100% Mobile Ready</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <Search className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">SEO Ramah Google</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">Garansi 30 Hari</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              id="hero-whatsapp-primary"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Website Sekarang (Gratis)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="hero-see-portfolio"
              onClick={() => onNavigate('clients')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 transition-all"
            >
              <span>Lihat Portofolio Klien Nyata</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <p className="text-[12px] text-slate-400 pt-1">
            ⚡ Konsultasi santai & transparan. Tanpa komitmen apapun sebelum Anda yakin.
          </p>
        </div>

        {/* Real Client Trust Strip */}
        <div className="mt-14 pt-8 border-t border-slate-900/90 max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Dipercaya Oleh Bisnis & Klien Nyata:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-indigo-400 block font-semibold">TRAVEL & EVENT</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  CV. Fusena Jaya
                </span>
                <span className="text-[11px] text-slate-400 block">Company Profile & Booking</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 block font-semibold">CUSTOM APPAREL</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  Paradise Sablon
                </span>
                <span className="text-[11px] text-slate-400 block">Katalog & Portofolio Sablon</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('clients')}
              className="group p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-left flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-cyan-400 block font-semibold">B2B SEAFOOD EXPORT</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  SHRIMORA
                </span>
                <span className="text-[11px] text-slate-400 block">Corporate Web & Cold Chain</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
