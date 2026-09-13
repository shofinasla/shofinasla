import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  Layers
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portofolio & Studi Kasus Website — Ahmad Shofi Nasla',
    url: canonicalUrl,
    description: 'Dokumentasi proyek website dan studi kasus klien riil yang dikembangkan oleh Ahmad Shofi Nasla (Shofi Nasla), Web Developer.',
    author: {
      '@type': 'Person',
      name: 'Ahmad Shofi Nasla',
      alternateName: 'Shofi Nasla',
      jobTitle: 'Web Developer',
      url: 'https://ahmad.shofinasla.workers.dev/about'
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEOHead
        title="Portofolio &amp; Studi Kasus Website | Ahmad Shofi Nasla"
        description="Lihat portofolio dan studi kasus pengerjaan website untuk klien nyata oleh Ahmad Shofi Nasla: CV. Fusena Jaya Tour & Event, Paradise Sablon, dan SHRIMORA."
        canonicalUrl={canonicalUrl}
        ogType="website"
        schema={schema}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Portofolio & Studi Kasus' }]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Hero Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
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

      {/* Real Client Case Studies Grid (3 Pillars) */}
      <section className="space-y-8">
        <div className="border-b border-sky-950/80 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Studi Kasus Klien Nyata
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">3 Klien Terverifikasi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {realClientCaseStudies.map((client) => (
            <article
              key={client.id}
              className="bg-[#0b1120] border border-sky-950/70 hover:border-sky-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,163,255,0.08)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-semibold px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 border border-sky-800/40">
                    {client.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {client.liveStatus}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {client.clientName}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {client.industry}
                  </p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {client.summary}
                </p>

                <div className="pt-2 border-t border-sky-950/70 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    Poin Solusi:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {client.results.slice(0, 2).map((res, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-1">
                  {client.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070b16] text-slate-400 border border-sky-950">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-sky-950/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigatePage(`/projects/${client.id}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Baca Studi Kasus Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Engineering & Architecture Showcase */}
      <section className="space-y-6">
        <div className="border-b border-sky-950/80 pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            <h2 className="text-xl font-bold text-white">
              Rekayasa Perangkat Lunak &amp; Sistem Desain
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Eksplorasi arsitektur frontend modular, UI design system, dan aplikasi web modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialProjects.filter(p => p.category !== 'Client Project').map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-[#090e1d] border border-sky-950/60 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/70 text-sky-300 border border-sky-900/40">
                  {proj.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{proj.date}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{proj.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060913] text-slate-400 border border-sky-950">
                    {tag}
                  </span>
                ))}
              </div>

              {proj.highlights && (
                <ul className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-sky-950/60">
                  {proj.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <footer className="text-center py-10 px-6 rounded-2xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border border-sky-900/40 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Ingin Membangun Website untuk Bisnis Anda?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Mari diskusikan tantangan bisnis Anda dan bagaimana arsitektur website yang tepat dapat membantu memecahkannya.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Diskusikan Proyek Anda</span>
          </a>
          <button
            onClick={() => onNavigatePage('/services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#090e1d] hover:bg-[#121c38] text-slate-200 border border-sky-900/50 text-xs font-semibold transition-all"
          >
            <span>Lihat Paket Layanan</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
