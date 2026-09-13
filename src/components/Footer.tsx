import React from 'react';
import { ArrowUp, Heart, Sparkles, MessageSquare, Mail, Github, Linkedin, ShieldCheck } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  onNavigate: (sectionId: string) => void;
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400 text-xs tracking-tight">
                ASN
              </div>
              <div>
                <span className="text-base font-bold text-slate-100 block">
                  {profile.name}
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Jasa Pembuatan Website Profesional</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Membantu bisnis, UMKM, dan profesional memiliki aset digital berkelas yang cepat, responsif di HP, terindeks Google, dan siap mendatangkan closing penjualan.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Kami</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Klien & Portofolio (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Klien & Studi Kasus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  CV. Fusena Jaya Tour & Event
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Paradise Sablon (Custom Apparel)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  SHRIMORA (B2B Seafood Export)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Kami (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Layanan Website
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-200 transition-colors">
                  Website Company Profile Bisnis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-200 transition-colors">
                  Landing Page Iklan Berbayar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-200 transition-colors">
                  Katalog Produk & Portofolio Digital
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-200 transition-colors">
                  Aplikasi Web & Sistem Kustom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-200 transition-colors">
                  Redesign & Optimasi Kecepatan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Keamanan & SEO (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Legalitas & SEO
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Google Verified</span>
              </div>
              <p>Domain resmi:</p>
              <a
                href="https://ahmad.shofinasla.workers.dev/"
                className="font-mono text-indigo-400 hover:underline block break-all text-[10px]"
              >
                ahmad.shofinasla.workers.dev
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">{profile.name}</strong>. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
