import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  Code,
  Quote
} from 'lucide-react';
import { ClientCaseStudy, ProfileData } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface CaseStudyDetailPageProps {
  caseStudy: ClientCaseStudy;
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  caseStudy,
  profile,
  onNavigatePage
}) => {
  const canonicalUrl = `https://ahmad.shofinasla.workers.dev/projects/${caseStudy.id}`;

  const schema = [
    {
      '@type': 'TechArticle',
      '@id': `${canonicalUrl}#article`,
      headline: `Studi Kasus: ${caseStudy.clientName} — Web Development`,
      url: canonicalUrl,
      description: caseStudy.summary,
      author: {
        '@type': 'Person',
        name: 'Ahmad Shofi Nasla',
        alternateName: 'Shofi Nasla',
        jobTitle: 'Web Developer',
        url: 'https://ahmad.shofinasla.workers.dev/about'
      },
      about: {
        '@type': 'Organization',
        name: caseStudy.clientName
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ahmad.shofinasla.workers.dev/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portofolio',
          item: 'https://ahmad.shofinasla.workers.dev/projects'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: caseStudy.clientName,
          item: canonicalUrl
        }
      ]
    }
  ];

  const waMessage = encodeURIComponent(
    `Halo Mas Ahmad Shofi Nasla, saya telah membaca studi kasus ${caseStudy.clientName} dan ingin konsultasi website untuk bisnis saya.`
  );
  const waUrl = `https://wa.me/6285174241604?text=${waMessage}`;

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEOHead
        title={`Studi Kasus: ${caseStudy.clientName} | Ahmad Shofi Nasla`}
        description={`Pelajari bagaimana Ahmad Shofi Nasla merancang dan mengembangkan website untuk ${caseStudy.clientName} (${caseStudy.industry}). Pendekatan arsitektur, tantangan, dan solusi bisnis.`}
        canonicalUrl={canonicalUrl}
        ogType="article"
        schema={schema}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Portofolio & Studi Kasus', url: '/projects' },
          { label: caseStudy.clientName }
        ]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Header / Meta */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono">
            {caseStudy.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Klien Terverifikasi &middot; {caseStudy.industry}
          </span>
        </div>

        {/* 1 Single H1 per page */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Studi Kasus: {caseStudy.clientName}
        </h1>

        <p className="text-lg sm:text-xl text-sky-200/90 font-medium">
          {caseStudy.tagline}
        </p>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {caseStudy.summary}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Teknologi:</span>
          {caseStudy.techStack.map((tech, idx) => (
            <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0e172e] text-sky-300 border border-sky-900/40">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Challenge & Solution Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-sky-950/70 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span>Tantangan Bisnis Klien</span>
          </div>
          <h2 className="text-xl font-bold text-white">Kebutuhan &amp; Hambatan</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1d] border border-sky-900/40 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Pendekatan &amp; Solusi Teknis</span>
          </div>
          <h2 className="text-xl font-bold text-white">Langkah Eksekusi</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>
      </section>

      {/* Key Results & Business Impact */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#070b16] border border-sky-950/60 space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sky-400" />
          <span>Dampak Nyata terhadap Operasional</span>
        </h2>
        <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
          {caseStudy.results.map((res, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{res}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Specific Website Features */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-400" />
          <span>Fitur-Fitur Kunci yang Dikembangkan</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {caseStudy.features.map((feat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0b1120] border border-sky-950/60 flex items-start gap-3">
              <Code className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial / Client Quote if available */}
      {caseStudy.testimonial && (
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d162e] to-[#080e1e] border border-sky-800/40 relative">
          <Quote className="w-8 h-8 text-sky-500/20 absolute top-4 right-4" />
          <div className="space-y-3 relative z-10">
            <p className="text-sm sm:text-base italic text-sky-100/90 leading-relaxed">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
            <div className="pt-2 border-t border-sky-900/40 flex items-center justify-between text-xs">
              <span className="font-bold text-white">{caseStudy.testimonial.person}</span>
              <span className="font-mono text-sky-400">{caseStudy.testimonial.title}</span>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <footer className="pt-8 border-t border-sky-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigatePage('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Semua Portofolio</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Diskusikan Proyek Serupa via WhatsApp</span>
        </a>
      </footer>
    </div>
  );
};
