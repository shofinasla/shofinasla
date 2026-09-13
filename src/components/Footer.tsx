import React from 'react';
import { ArrowUp, MessageSquare, Mail, ShieldCheck, Sparkles } from 'lucide-react';
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

  const handleNav = (path: string, hash?: string) => {
    if (hash) {
      if (currentPath === '/') {
        onNavigateSection(hash);
      } else {
        onNavigatePage('/', hash);
      }
    } else {
      if (currentPath === path) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigatePage(path);
      }
    }
  };

  return (
    <footer className="border-t border-sky-950/60 bg-[#050811] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Col 1: Brand & Personal Entity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleNav('/')}
                className="focus:outline-none text-left"
              >
                <BrandLogo size="md" />
              </button>
<<<<<<< Updated upstream
              <div>
                <span className="text-base font-bold text-white block">
                  {profile.name}
                </span>
                <span className="text-[11px] text-sky-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>Web Developer &middot; Shofi Nasla</span>
                </span>
              </div>
=======
>>>>>>> Stashed changes
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Membantu bisnis, UMKM, dan institusi membangun website profesional yang berkecepatan tinggi, mobile-friendly, terindeks Google, dan siap menghasilkan closing penjualan nyata.
            </p>

            {/* Prominent Personal Brand Link: About Shofi Nasla */}
            <div className="pt-1">
              <button
                id="footer-btn-about-shofi-profile"
                onClick={() => handleNav('/about')}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  currentPath === '/about'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 cursor-default'
                    : 'bg-[#0a0f1e] hover:bg-[#10182f] text-slate-200 hover:text-white border border-sky-900/40 hover:border-sky-500/40 shadow-sm'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>About Shofi Nasla</span>
                {currentPath === '/about' ? (
                  <span className="text-[10px] text-sky-400 font-mono font-normal">(Aktif)</span>
                ) : (
                  <span className="text-sky-400">&rarr;</span>
                )}
              </button>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Kami</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-[#0a0f1e] hover:bg-[#10182f] text-slate-300 border border-sky-900/40 text-xs flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Layanan Website (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Layanan Website
              </h4>
              <button 
                onClick={() => handleNav('/services')}
                className="text-[10px] font-mono text-slate-400 hover:text-sky-300"
              >
                Semua &rarr;
              </button>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('/services/website-umkm')} className="hover:text-white transition-colors text-left">
                  Jasa Website UMKM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/company-profile')} className="hover:text-white transition-colors text-left">
                  Website Company Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/landing-page')} className="hover:text-white transition-colors text-left">
                  Landing Page Konversi Iklan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/ecommerce')} className="hover:text-white transition-colors text-left">
                  Toko Online &amp; E-Commerce
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studi Kasus & Klien (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Studi Kasus Klien
              </h4>
              <button 
                onClick={() => handleNav('/projects')}
                className="text-[10px] font-mono text-slate-400 hover:text-sky-300"
              >
                Semua &rarr;
              </button>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/projects/fusena-jaya')}
                  className="hover:text-sky-300 transition-colors text-left block"
                >
                  CV. Fusena Jaya Tour &amp; Event
                </button>
                <span className="text-[10px] text-slate-400">Biro Wisata &amp; EO Gathering</span>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/projects/paradise-sablon')}
                  className="hover:text-sky-300 transition-colors text-left block"
                >
                  Paradise Sablon
                </button>
                <span className="text-[10px] text-slate-400">Custom Apparel &amp; Sablon DTF</span>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/projects/shrimora')}
                  className="hover:text-sky-300 transition-colors text-left block"
                >
                  SHRIMORA
                </button>
                <span className="text-[10px] text-slate-400">Shrimp Processing &amp; Export</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Insights & Legalitas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Wawasan &amp; SEO
              </h4>
              <button 
                onClick={() => handleNav('/insights')}
                className="text-[10px] font-mono text-slate-400 hover:text-sky-300"
              >
                Semua &rarr;
              </button>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('/insights/manfaat-website-untuk-umkm')}
                  className="hover:text-white transition-colors text-left"
                >
                  Website untuk UMKM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/insights/technical-seo-website-bisnis')}
                  className="hover:text-white transition-colors text-left"
                >
                  Technical SEO Bisnis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/insights/website-vs-social-media-marketplace')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web vs Sosmed &amp; MP
                </button>
              </li>
            </ul>

            <div className="space-y-1.5 pt-3 text-[11px] text-slate-300 border-t border-sky-950/70">
              <div className="flex items-center gap-1.5 text-sky-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Google Verified Entity</span>
              </div>
              <p className="text-slate-400 text-[10px]">Domain resmi:</p>
              <a
                href="https://ahmad.shofinasla.workers.dev/"
                className="font-mono text-sky-400 hover:underline block break-all text-[10px]"
              >
                ahmad.shofinasla.workers.dev
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-sky-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} <strong className="text-white">{profile.name}</strong> (Shofi Nasla). Seluruh hak cipta dilindungi undang-undang.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0f1e] hover:bg-[#10182f] text-slate-300 hover:text-white border border-sky-900/40 text-xs transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
