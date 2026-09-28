import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare,
  Sparkles,
  Layers,
  Quote,
  Code2,
  ExternalLink,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { ClientCaseStudy, ProfileData } from '../types';
import { realClientCaseStudies, initialProjects } from '../data/defaultProfile';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface ProjectsHubPageProps {
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const ProjectsHubPage: React.FC<ProjectsHubPageProps> = ({
  profile,
  onNavigatePage
}) => {
  const canonicalUrl = 'https://ahmad.shofinasla.workers.dev/projects';

  // State for "Studi Kasus Klien Nyata" Slide
  const [activeClientIdx, setActiveClientIdx] = useState<number>(0);
  const clientTouchStartX = useRef<number | null>(null);
  const clientTouchEndX = useRef<number | null>(null);

  // State for "Rekayasa Perangkat Lunak & Sistem Desain" Slide
  const engineeringProjects = initialProjects.filter(p => p.category !== 'Client Project');
  const [activeEngIdx, setActiveEngIdx] = useState<number>(0);
  const engTouchStartX = useRef<number | null>(null);
  const engTouchEndX = useRef<number | null>(null);

  // Client Slide Navigation Handlers
  const totalClients = realClientCaseStudies.length;
  const nextClient = () => {
    setActiveClientIdx((prev) => (prev + 1) % totalClients);
  };
  const prevClient = () => {
    setActiveClientIdx((prev) => (prev - 1 + totalClients) % totalClients);
  };

  const handleClientTouchStart = (e: React.TouchEvent) => {
    clientTouchStartX.current = e.targetTouches[0].clientX;
  };
  const handleClientTouchMove = (e: React.TouchEvent) => {
    clientTouchEndX.current = e.targetTouches[0].clientX;
  };
  const handleClientTouchEnd = () => {
    if (!clientTouchStartX.current || !clientTouchEndX.current) return;
    const distance = clientTouchStartX.current - clientTouchEndX.current;
    if (distance > 45) {
      nextClient(); // Swiped left -> next
    } else if (distance < -45) {
      prevClient(); // Swiped right -> prev
    }
    clientTouchStartX.current = null;
    clientTouchEndX.current = null;
  };

  // Engineering Slide Navigation Handlers
  const totalEng = engineeringProjects.length;
  const nextEng = () => {
    setActiveEngIdx((prev) => (prev + 1) % totalEng);
  };
  const prevEng = () => {
    setActiveEngIdx((prev) => (prev - 1 + totalEng) % totalEng);
  };

  const handleEngTouchStart = (e: React.TouchEvent) => {
    engTouchStartX.current = e.targetTouches[0].clientX;
  };
  const handleEngTouchMove = (e: React.TouchEvent) => {
    engTouchEndX.current = e.targetTouches[0].clientX;
  };
  const handleEngTouchEnd = () => {
    if (!engTouchStartX.current || !engTouchEndX.current) return;
    const distance = engTouchStartX.current - engTouchEndX.current;
    if (distance > 45) {
      nextEng(); // Swiped left -> next
    } else if (distance < -45) {
      prevEng(); // Swiped right -> prev
    }
    engTouchStartX.current = null;
    engTouchEndX.current = null;
  };

  const currentClient = realClientCaseStudies[activeClientIdx];
  const currentEng = engineeringProjects[activeEngIdx];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portofolio & Studi Kasus Website — Ahmad Shofi Nasla',
    url: canonicalUrl,
    description: 'Dokumentasi interaktif proyek website dan studi kasus klien riil yang dikembangkan oleh Ahmad Shofi Nasla (Shofi Nasla), Web Developer.',
    author: {
      '@type': 'Person',
      name: 'Ahmad Shofi Nasla',
      alternateName: 'Shofi Nasla',
      jobTitle: 'Web Developer & Digital Solutions',
      telephone: '+62-889-8086-3848',
      url: 'https://ahmad.shofinasla.workers.dev/about'
    }
  };

  return (
    <div className="pt-6 sm:pt-8 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      <SEOHead
        title="Portofolio & Studi Kasus Website | Ahmad Shofi Nasla"
        description="Jelajahi portofolio dan studi kasus pengerjaan website untuk klien nyata oleh Ahmad Shofi Nasla: CV. Fusena Jaya Tour & Event, Paradise Sablon, dan SHRIMORA."
        canonicalUrl={canonicalUrl}
        ogType="website"
        schema={schema}
      />

      {/* Top Navigation & Hero Header Block */}
      <div className="space-y-4 sm:space-y-5">
        <Breadcrumb
          items={[{ label: 'Portofolio & Studi Kasus' }]}
          onNavigate={(path) => onNavigatePage(path)}
        />

        {/* Hero Header */}
        <header className="text-center max-w-3xl mx-auto space-y-3 pt-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>Rekam Jejak &amp; Klien Nyata</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Portofolio &amp; Studi Kasus Pengerjaan Website
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Setiap website dibangun dengan tujuan bisnis spesifik: memenangkan tender korporat, mempercepat alur transaksi WhatsApp, atau memposisikan brand di kancah internasional.
          </p>
        </header>
      </div>

      {/* SECTION 1: SLIDE STUDI KASUS KLIEN NYATA */}
      <section className="space-y-6">
        {/* Header & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-sky-950/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Studi Kasus Klien Nyata
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Slide interaktif hasil pengerjaan sistem dan website bisnis riil.
            </p>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-mono text-slate-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-900/50">
              Klien <span className="text-sky-300 font-semibold">{activeClientIdx + 1}</span> dari {totalClients}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevClient}
                aria-label="Slide sebelumnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextClient}
                aria-label="Slide berikutnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Client Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {realClientCaseStudies.map((client, idx) => {
            const isActive = idx === activeClientIdx;
            return (
              <button
                key={client.id}
                onClick={() => setActiveClientIdx(idx)}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all whitespace-nowrap border flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-sky-500/15 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(14,165,233,0.15)] font-semibold' 
                    : 'bg-[#090e1a] border-sky-950/70 text-slate-400 hover:text-slate-200 hover:border-sky-900'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-sky-400 animate-pulse' : 'bg-slate-600'}`} />
                <span>{client.clientName}</span>
              </button>
            );
          })}
        </div>

        {/* The Slide Display Card */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-[#0b1120] border border-sky-900/40 p-6 sm:p-8 transition-all duration-300 shadow-xl"
          onTouchStart={handleClientTouchStart}
          onTouchMove={handleClientTouchMove}
          onTouchEnd={handleClientTouchEnd}
        >
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <article className="relative space-y-6">
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-950/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase font-semibold px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 border border-sky-800/40">
                  {currentClient.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                  {currentClient.industry}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {currentClient.liveStatus}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentClient.clientName}
              </h3>
              <p className="text-sky-300/90 text-sm font-medium">
                {currentClient.tagline}
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentClient.summary}
            </p>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070b16] border border-sky-950/80 space-y-2">
                <span className="text-[11px] font-mono uppercase font-semibold text-amber-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Tantangan Bisnis:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentClient.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b16] border border-sky-950/80 space-y-2">
                <span className="text-[11px] font-mono uppercase font-semibold text-sky-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Solusi yang Diterapkan:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentClient.solution}
                </p>
              </div>
            </div>

            {/* Verified Results Highlights */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                Hasil Terverifikasi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {currentClient.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#090f20]/60 p-2.5 rounded-xl border border-sky-950/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote Snippet (if available) */}
            {currentClient.testimonial && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/30 to-[#070b16] border border-sky-900/40 relative">
                <Quote className="w-5 h-5 text-sky-500/40 absolute top-3 right-4" />
                <p className="text-xs text-slate-300 italic leading-relaxed pr-8">
                  &ldquo;{currentClient.testimonial.quote}&rdquo;
                </p>
                <div className="mt-2 text-[11px] font-mono text-sky-300">
                  — {currentClient.testimonial.person} <span className="text-slate-400">({currentClient.testimonial.title})</span>
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 mr-1">Tech Stack:</span>
              {currentClient.techStack.map((tech, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#070b16] text-slate-300 border border-sky-950">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-sky-950/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="button"
                onClick={() => onNavigatePage(`/projects/${currentClient.id}`)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
              >
                <span>Baca Studi Kasus Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${profile.whatsappUrl}&text=Halo%20Mas%20Ahmad%2C%20saya%20tertarik%20dengan%20studi%20kasus%20${encodeURIComponent(currentClient.clientName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#070b16] hover:bg-[#10172b] text-slate-200 border border-sky-900/60 text-xs font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Konsultasikan Kebutuhan Serupa</span>
              </a>
            </div>
          </article>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {realClientCaseStudies.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Buka slide klien ${idx + 1}`}
                onClick={() => setActiveClientIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeClientIdx 
                    ? 'w-8 bg-sky-400' 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SLIDE REKAYASA PERANGKAT LUNAK & SISTEM DESAIN */}
      <section className="space-y-6">
        {/* Header & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-sky-950/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Rekayasa Perangkat Lunak &amp; Sistem Desain
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Eksplorasi arsitektur frontend modular, UI design system, dan komputasi edge serverless.
            </p>
          </div>

          {/* Engineering Slide Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-mono text-slate-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-900/50">
              Proyek <span className="text-sky-300 font-semibold">{activeEngIdx + 1}</span> dari {totalEng}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevEng}
                aria-label="Slide sistem sebelumnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextEng}
                aria-label="Slide sistem berikutnya"
                className="w-9 h-9 rounded-xl bg-[#0b1120] border border-sky-950 hover:border-sky-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Engineering Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {engineeringProjects.map((proj, idx) => {
            const isActive = idx === activeEngIdx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveEngIdx(idx)}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all whitespace-nowrap border flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-sky-500/15 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(14,165,233,0.15)] font-semibold' 
                    : 'bg-[#090e1a] border-sky-950/70 text-slate-400 hover:text-slate-200 hover:border-sky-900'
                }`}
              >
                <Code2 className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                <span>{proj.title.split('-')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Engineering Slide Display Card */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-[#0b1120] border border-sky-900/40 p-6 sm:p-8 transition-all duration-300 shadow-xl"
          onTouchStart={handleEngTouchStart}
          onTouchMove={handleEngTouchMove}
          onTouchEnd={handleEngTouchEnd}
        >
          {/* Subtle Ambient Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <article className="relative space-y-6">
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-950/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase font-semibold px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 border border-sky-800/40">
                  {currentEng.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Tahun {currentEng.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {currentEng.githubUrl && (
                  <a
                    href={currentEng.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors bg-[#070b16] px-2.5 py-1 rounded-md border border-sky-950"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Title & High-level Description */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentEng.title}
              </h3>
              <p className="text-sky-300/90 text-sm font-medium">
                {currentEng.description}
              </p>
            </div>

            {/* Full Architectural Concept */}
            {currentEng.fullDescription && (
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentEng.fullDescription}
              </p>
            )}

            {/* Highlights List */}
            {currentEng.highlights && (
              <div className="p-4 rounded-2xl bg-[#070b16] border border-sky-950/80 space-y-2">
                <span className="text-[11px] font-mono uppercase font-semibold text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  Fitur Arsitektur Utama:
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {currentEng.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 mr-1">Teknologi:</span>
              {currentEng.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#070b16] text-slate-300 border border-sky-950">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {engineeringProjects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Buka slide rekayasa ${idx + 1}`}
                onClick={() => setActiveEngIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeEngIdx 
                    ? 'w-8 bg-sky-400' 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <footer className="text-center py-10 px-6 sm:px-10 rounded-3xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border border-sky-900/40 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Ingin Membangun Website untuk Bisnis Anda?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Mari diskusikan tantangan bisnis Anda dan bagaimana arsitektur website yang tepat dapat membantu memecahkannya.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Diskusikan Proyek Anda (+62 889-8086-3848)</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigatePage('/services')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#090e1d] hover:bg-[#121c38] text-slate-200 border border-sky-900/50 text-xs sm:text-sm font-semibold transition-all active:scale-95"
          >
            <span>Lihat Paket Layanan</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
