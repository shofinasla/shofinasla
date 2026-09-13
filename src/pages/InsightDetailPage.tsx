import React from 'react';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare, 
  Briefcase, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { InsightArticle, ProfileData } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface InsightDetailPageProps {
  article: InsightArticle;
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({
  article,
  profile,
  onNavigatePage
}) => {
  const canonicalUrl = `https://ahmad.shofinasla.workers.dev/insights/${article.slug}`;

  const schema = [
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: article.title,
      description: article.metaDescription,
      url: canonicalUrl,
      datePublished: article.publishDate,
      dateModified: article.publishDate,
      author: {
        '@type': 'Person',
        name: 'Ahmad Shofi Nasla',
        alternateName: 'Shofi Nasla',
        jobTitle: 'Web Developer',
        url: 'https://ahmad.shofinasla.workers.dev/about'
      },
      publisher: {
        '@type': 'Person',
        name: 'Ahmad Shofi Nasla',
        url: 'https://ahmad.shofinasla.workers.dev/'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
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
          name: 'Wawasan & Panduan',
          item: 'https://ahmad.shofinasla.workers.dev/insights'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: canonicalUrl
        }
      ]
    }
  ];

  const waMessage = encodeURIComponent(
    `Halo Mas Ahmad Shofi Nasla, saya telah membaca artikel "${article.title}" dan ingin konsultasi website untuk bisnis saya.`
  );
  const waUrl = `https://wa.me/6285174241604?text=${waMessage}`;

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalUrl={canonicalUrl}
        ogType="article"
        schema={schema}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Wawasan & Panduan', url: '/insights' },
          { label: article.title }
        ]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Article Header */}
      <header className="space-y-4 border-b border-sky-950/70 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800/40 font-semibold">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>{article.readTime}</span>
          </span>
          <span>&bull;</span>
          <span className="text-slate-300">
            Ditulis oleh <strong className="text-white">Ahmad Shofi Nasla</strong> (Web Developer)
          </span>
        </div>

        {/* 1 Single H1 per page */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {article.summary}
        </p>
      </header>

      {/* Key Takeaways Box */}
      <section className="p-6 rounded-2xl bg-[#090f21] border border-sky-900/50 space-y-3">
        <h2 className="text-sm font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Poin-Poin Kunci (Key Takeaways)</span>
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
          {article.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Body */}
      <article className="space-y-10 text-slate-200 text-sm sm:text-base leading-relaxed">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-300 leading-relaxed">
                {p}
              </p>
            ))}

            {section.bulletPoints && (
              <ul className="space-y-2 pl-2 pt-1 text-xs sm:text-sm text-slate-300">
                {section.bulletPoints.map((bp, bpIdx) => (
                  <li key={bpIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {/* Contextual Internal Links Section (Service + Case Study + Author) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-sky-950/80 space-y-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-400 font-semibold tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Langkah Selanjutnya &amp; Solusi Terkait</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {article.relatedServiceUrl && (
            <div 
              onClick={() => onNavigatePage(article.relatedServiceUrl!)}
              className="p-4 rounded-xl bg-[#070b16] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-1"
            >
              <span className="text-[10px] font-mono text-slate-400 block">Layanan Terkait:</span>
              <h4 className="text-sm font-bold text-white flex items-center justify-between">
                <span>{article.relatedServiceName}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </h4>
            </div>
          )}

          {article.relatedProjectUrl && (
            <div 
              onClick={() => onNavigatePage(article.relatedProjectUrl!)}
              className="p-4 rounded-xl bg-[#070b16] border border-sky-950/60 hover:border-sky-500/40 cursor-pointer transition-all space-y-1"
            >
              <span className="text-[10px] font-mono text-slate-400 block">Studi Kasus Terkait:</span>
              <h4 className="text-sm font-bold text-white flex items-center justify-between">
                <span>{article.relatedProjectName}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </h4>
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-sky-950/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span>Ditulis oleh <strong className="text-slate-200">Ahmad Shofi Nasla</strong></span>
          <button
            onClick={() => onNavigatePage('/about')}
            className="text-sky-400 hover:underline"
          >
            Kenali profil &amp; pendekatan kerja &rarr;
          </button>
        </div>
      </section>

      {/* Author & WhatsApp CTA */}
      <footer className="pt-6 border-t border-sky-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigatePage('/insights')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Wawasan &amp; Panduan</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Konsultasi Website Bisnis</span>
        </a>
      </footer>
    </div>
  );
};
