import React from 'react';
import { 
  Building2, 
  Target, 
  ShoppingBag, 
  Store, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { ProfileData } from '../types';
import { dedicatedServicesList } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface ServicesHubPageProps {
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  profile,
  onNavigatePage
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Layanan Jasa Pembuatan Website Profesional — Ahmad Shofi Nasla',
    url: 'https://ahmad.shofinasla.workers.dev/services',
    description: 'Pusat layanan jasa pembuatan website bisnis, website UMKM, company profile, landing page konversi, dan e-commerce oleh Ahmad Shofi Nasla.',
    provider: {
      '@type': 'Person',
      name: 'Ahmad Shofi Nasla',
      alternateName: 'Shofi Nasla',
      jobTitle: 'Web Developer',
      url: 'https://ahmad.shofinasla.workers.dev/about'
    }
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'website-umkm':
        return <Store className="w-6 h-6 text-emerald-400" />;
      case 'company-profile':
        return <Building2 className="w-6 h-6 text-sky-400" />;
      case 'landing-page':
        return <Target className="w-6 h-6 text-amber-400" />;
      case 'ecommerce':
        return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      default:
        return <Zap className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEOHead
        title="Jasa Pembuatan Website Profesional untuk Bisnis | Shofi Nasla"
        description="Jasa pembuatan website profesional untuk bisnis dan UMKM oleh Ahmad Shofi Nasla. Melayani pembuatan website UMKM, company profile, landing page iklan, dan toko online."
        canonicalUrl="https://ahmad.shofinasla.workers.dev/services"
        ogType="website"
        schema={schema}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Layanan Jasa Website' }]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Hero Section */}
      <header className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Layanan Resmi Web Developer &middot; Ahmad Shofi Nasla</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Jasa Pembuatan Website Profesional untuk Bisnis &amp; UMKM
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Saya membantu para pemilik bisnis, pelaku UMKM, dan profesional memiliki aset digital berkelas yang tidak hanya menarik secara visual, tetapi juga berkecepatan tinggi, nyaman diakses di smartphone, terindeks Google, dan siap mendatangkan closing penjualan.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Smartphone className="w-4 h-4 text-sky-400" /> Mobile-First Responsive
          </span>
          <span className="text-slate-600">&bull;</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Zap className="w-4 h-4 text-amber-400" /> Waktu Muat Sub-2 Detik
          </span>
          <span className="text-slate-600">&bull;</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Technical SEO &amp; Google Index
          </span>
        </div>
      </header>

      {/* 4 Dedicated Service Pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Pilihan Solusi Website Sesuai Kebutuhan Bisnis Anda
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Pilih kategori layanan yang paling relevan dengan target pertumbuhan usaha Anda saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dedicatedServicesList.map((service) => (
            <article
              key={service.id}
              className="bg-[#0b1120] border border-sky-950/70 hover:border-sky-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,163,255,0.08)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#0e172e] border border-sky-900/50">
                    {getServiceIcon(service.slug)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-sky-950/80 text-sky-300 border border-sky-800/40">
                    {service.cluster}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {service.subheadline}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-sky-950/70">
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block font-semibold">
                    Fitur Unggulan:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-sky-950/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigatePage(`/services/${service.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/6285174241604?text=${encodeURIComponent(`Halo Mas Ahmad Shofi Nasla, saya tertarik konsultasi ${service.title} untuk bisnis saya.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0e172e] hover:bg-sky-950 text-slate-300 hover:text-white border border-sky-900/40 transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  <span>Tanya WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Real Proof: Case Studies Link */}
      <section className="bg-[#090d1a] border border-sky-950/70 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Kredibilitas &amp; Rekam Jejak
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Studi Kasus Klien Nyata yang Telah Beroperasi
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Lihat bagaimana website yang saya rancang membantu operasional bisnis nyata.
            </p>
          </div>

          <button
            onClick={() => onNavigatePage('/projects')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md shrink-0"
          >
            <span>Semua Portofolio &amp; Klien</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div 
            onClick={() => onNavigatePage('/projects/fusena-jaya')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2"
          >
            <span className="text-[10px] font-mono text-sky-400 block font-semibold">Travel &amp; Corporate EO</span>
            <h4 className="text-sm font-bold text-white">CV. Fusena Jaya Tour &amp; Event</h4>
            <p className="text-xs text-slate-400">Company profile dan sistem booking paket wisata korporat.</p>
          </div>

          <div 
            onClick={() => onNavigatePage('/projects/paradise-sablon')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2"
          >
            <span className="text-[10px] font-mono text-amber-400 block font-semibold">Custom Apparel &amp; Konveksi</span>
            <h4 className="text-sm font-bold text-white">Paradise Sablon</h4>
            <p className="text-xs text-slate-400">Katalog visual portofolio sablon DTF dan panduan bahan kaos.</p>
          </div>

          <div 
            onClick={() => onNavigatePage('/projects/shrimora')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2"
          >
            <span className="text-[10px] font-mono text-cyan-400 block font-semibold">Seafood Processing &amp; Export</span>
            <h4 className="text-sm font-bold text-white">SHRIMORA</h4>
            <p className="text-xs text-slate-400">Platform korporat B2B ekspor olahan udang bertaraf internasional.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-10 px-6 rounded-2xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border border-sky-900/40 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Siap Membangun Website untuk Bisnis Anda?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Konsultasikan kebutuhan bisnis Anda secara langsung dengan Ahmad Shofi Nasla tanpa perantara agen. Saya siap memberikan rekomendasi struktur website yang paling efektif.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi WhatsApp Sekarang</span>
          </a>
          <button
            onClick={() => onNavigatePage('/about')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#090e1d] hover:bg-[#121c38] text-slate-200 border border-sky-900/50 text-xs font-semibold transition-all"
          >
            <span>Tentang Ahmad Shofi Nasla</span>
          </button>
        </div>
      </section>
    </div>
  );
};
