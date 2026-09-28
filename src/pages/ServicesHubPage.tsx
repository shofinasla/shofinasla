import React, { useState, useRef } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Layers,
  Users
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
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  const serviceTouchStartX = useRef<number | null>(null);
  const serviceTouchEndX = useRef<number | null>(null);

  const totalServices = dedicatedServicesList.length;

  const nextService = () => {
    setActiveServiceIdx((prev) => (prev + 1) % totalServices);
  };

  const prevService = () => {
    setActiveServiceIdx((prev) => (prev - 1 + totalServices) % totalServices);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    serviceTouchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    serviceTouchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!serviceTouchStartX.current || !serviceTouchEndX.current) return;
    const distance = serviceTouchStartX.current - serviceTouchEndX.current;
    if (distance > 45) {
      nextService(); // Swiped left -> next
    } else if (distance < -45) {
      prevService(); // Swiped right -> prev
    }
    serviceTouchStartX.current = null;
    serviceTouchEndX.current = null;
  };

  const currentService = dedicatedServicesList[activeServiceIdx];

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
      jobTitle: 'Web Developer & Digital Solutions',
      telephone: '+62-889-8086-3848',
      url: 'https://ahmad.shofinasla.workers.dev/about'
    }
  };

  const getServiceVisuals = (slug: string) => {
    switch (slug) {
      case 'website-umkm':
        return {
          icon: <Store className="w-6 h-6 text-emerald-400" />,
          glowColor: 'bg-emerald-500/10',
          badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800/40',
          accentColor: 'text-emerald-400'
        };
      case 'company-profile':
        return {
          icon: <Building2 className="w-6 h-6 text-sky-400" />,
          glowColor: 'bg-sky-500/10',
          badgeColor: 'bg-sky-950 text-sky-300 border-sky-800/40',
          accentColor: 'text-sky-400'
        };
      case 'landing-page':
        return {
          icon: <Target className="w-6 h-6 text-amber-400" />,
          glowColor: 'bg-amber-500/10',
          badgeColor: 'bg-amber-950 text-amber-300 border-amber-800/40',
          accentColor: 'text-amber-400'
        };
      case 'ecommerce':
        return {
          icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
          glowColor: 'bg-purple-500/10',
          badgeColor: 'bg-purple-950 text-purple-300 border-purple-800/40',
          accentColor: 'text-purple-400'
        };
      default:
        return {
          icon: <Zap className="w-6 h-6 text-sky-400" />,
          glowColor: 'bg-sky-500/10',
          badgeColor: 'bg-sky-950 text-sky-300 border-sky-800/40',
          accentColor: 'text-sky-400'
        };
    }
  };

  const visuals = getServiceVisuals(currentService.slug);

  return (
    <div className="pt-6 sm:pt-8 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      <SEOHead
        title="Jasa Pembuatan Website Profesional untuk Bisnis | Shofi Nasla"
        description="Jasa pembuatan website profesional untuk bisnis dan UMKM oleh Ahmad Shofi Nasla. Melayani pembuatan website UMKM, company profile, landing page iklan, dan toko online."
        canonicalUrl="https://ahmad.shofinasla.workers.dev/services"
        ogType="website"
        schema={schema}
      />

      {/* Top Navigation & Hero Header Block */}
      <div className="space-y-4 sm:space-y-5">
        <Breadcrumb
          items={[{ label: 'Layanan Jasa Website' }]}
          onNavigate={(path) => onNavigatePage(path)}
        />

        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto space-y-4 pt-1">
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
      </div>

      {/* SECTION SLIDE: PILIHAN SOLUSI WEBSITE SESUAI KEBUTUHAN BISNIS ANDA */}
      <section className="space-y-6">
        {/* Header & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-sky-950/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Pilihan Solusi Website Sesuai Kebutuhan Bisnis Anda
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Pilih kategori layanan yang paling relevan dengan target pertumbuhan usaha Anda saat ini.
            </p>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-mono text-slate-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-900/50">
              Layanan <span className="text-sky-300 font-semibold">{activeServiceIdx + 1}</span> dari {totalServices}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevService}
                aria-label="Layanan sebelumnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextService}
                aria-label="Layanan berikutnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {dedicatedServicesList.map((service, idx) => {
            const isActive = idx === activeServiceIdx;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceIdx(idx)}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all whitespace-nowrap border flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-sky-500/15 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(14,165,233,0.15)] font-semibold' 
                    : 'bg-[#090e1a] border-sky-950/70 text-slate-400 hover:text-slate-200 hover:border-sky-900'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-sky-400 animate-pulse' : 'bg-slate-600'}`} />
                <span>{service.cluster}</span>
              </button>
            );
          })}
        </div>

        {/* The Slide Display Card */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-[#0b1120] border border-sky-900/40 p-6 sm:p-8 transition-all duration-300 shadow-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Ambient Background Highlight */}
          <div className={`absolute top-0 right-0 w-80 h-80 ${visuals.glowColor} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20`} />

          <article className="relative space-y-6">
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-950/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#070b16] border border-sky-900/60 shadow-sm">
                  {visuals.icon}
                </div>
                <div>
                  <span className={`text-[11px] font-mono uppercase font-semibold px-2.5 py-1 rounded-md border ${visuals.badgeColor}`}>
                    {currentService.cluster}
                  </span>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {currentService.badge}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 bg-[#070b16] px-3 py-1.5 rounded-xl border border-sky-950">
                100% Mobile Optimized
              </div>
            </div>

            {/* Title & Headline */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentService.title}
              </h3>
              <p className="text-sky-300/95 text-sm sm:text-base font-medium">
                {currentService.headline}
              </p>
            </div>

            {/* Subheadline & Overview */}
            <div className="space-y-2">
              <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
                {currentService.subheadline}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {currentService.overview}
              </p>
            </div>

            {/* Grid of Key Features & Target Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Deliverables / Features */}
              <div className="p-4 rounded-2xl bg-[#070b16] border border-sky-950/80 space-y-2.5">
                <span className="text-[11px] font-mono uppercase font-semibold text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Fitur Unggulan yang Didapatkan:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentService.deliverables.slice(0, 4).map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience / Cocok Untuk */}
              <div className="p-4 rounded-2xl bg-[#070b16] border border-sky-950/80 space-y-2.5">
                <span className="text-[11px] font-mono uppercase font-semibold text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Sangat Cocok untuk:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentService.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alur Kerja Singkat (4 Steps Workflow) */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                Alur Pengerjaan Cepat (Workflow):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {currentService.workflow.map((w, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#070b16]/70 border border-sky-950/70 space-y-1">
                    <span className="text-[10px] font-mono text-sky-400 font-bold block">{w.step}</span>
                    <h4 className="text-xs font-bold text-white leading-tight">{w.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Bar */}
            <div className="pt-4 border-t border-sky-950/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="button"
                onClick={() => onNavigatePage(`/services/${currentService.slug}`)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
              >
                <span>Pelajari Rincian &amp; Harga Paket</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6288980863848?text=${encodeURIComponent(`Halo Mas Ahmad Shofi Nasla, saya tertarik konsultasi ${currentService.title} untuk bisnis saya.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#070b16] hover:bg-[#10172b] text-slate-200 border border-sky-900/60 text-xs font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Konsultasikan via WhatsApp</span>
              </a>
            </div>
          </article>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {dedicatedServicesList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Buka slide layanan ${idx + 1}`}
                onClick={() => setActiveServiceIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeServiceIdx 
                    ? 'w-8 bg-sky-400' 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
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
            type="button"
            onClick={() => onNavigatePage('/projects')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md shrink-0 active:scale-95"
          >
            <span>Semua Portofolio &amp; Klien</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div 
            onClick={() => onNavigatePage('/projects/fusena-jaya')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <span className="text-[10px] font-mono text-sky-400 block font-semibold">Travel &amp; Corporate EO</span>
            <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">CV. Fusena Jaya Tour &amp; Event</h4>
            <p className="text-xs text-slate-400">Company profile dan sistem booking paket wisata korporat.</p>
          </div>

          <div 
            onClick={() => onNavigatePage('/projects/paradise-sablon')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <span className="text-[10px] font-mono text-amber-400 block font-semibold">Custom Apparel &amp; Konveksi</span>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Paradise Sablon</h4>
            <p className="text-xs text-slate-400">Katalog visual portofolio sablon DTF dan panduan bahan kaos.</p>
          </div>

          <div 
            onClick={() => onNavigatePage('/projects/shrimora')}
            className="p-4 rounded-xl bg-[#060913] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-2 group"
          >
            <span className="text-[10px] font-mono text-cyan-400 block font-semibold">Seafood Processing &amp; Export</span>
            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">SHRIMORA</h4>
            <p className="text-xs text-slate-400">Platform korporat B2B ekspor olahan udang bertaraf internasional.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-10 px-6 sm:px-10 rounded-3xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border border-sky-900/40 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Siap Membangun Website untuk Bisnis Anda?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan bisnis Anda secara langsung dengan Ahmad Shofi Nasla tanpa perantara agen. Saya siap memberikan rekomendasi struktur website yang paling efektif.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi WhatsApp Sekarang (+62 889-8086-3848)</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigatePage('/about')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#090e1d] hover:bg-[#121c38] text-slate-200 border border-sky-900/50 text-xs sm:text-sm font-semibold transition-all active:scale-95"
          >
            <span>Tentang Ahmad Shofi Nasla</span>
          </button>
        </div>
      </section>
    </div>
  );
};
