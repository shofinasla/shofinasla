import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { InsightArticle, ProfileData } from '../types';
import { insightArticles } from '../data/insightsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface InsightsHubPageProps {
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const InsightsHubPage: React.FC<InsightsHubPageProps> = ({
  profile,
  onNavigatePage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Website', 'SEO', 'Digital Marketing'];

  const filteredArticles = selectedCategory === 'All'
    ? insightArticles
    : insightArticles.filter(a => a.category === selectedCategory);

  const canonicalUrl = 'https://ahmad.shofinasla.workers.dev/insights';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wawasan & Panduan Website Bisnis — Ahmad Shofi Nasla',
    url: canonicalUrl,
    description: 'Kumpulan panduan praktis dan wawasan mendalam mengenai strategi website bisnis, technical SEO, digital marketing, dan e-commerce oleh Ahmad Shofi Nasla.',
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
        title="Wawasan &amp; Panduan Website Bisnis | Ahmad Shofi Nasla"
        description="Pelajari strategi website bisnis, panduan technical SEO agar terindeks Google, dan digital presence untuk UMKM dari Ahmad Shofi Nasla, Web Developer."
        canonicalUrl={canonicalUrl}
        ogType="website"
        schema={schema}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Wawasan & Panduan' }]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Hero Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Topical Authority &middot; Wawasan Teruji</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Wawasan, Edukasi &amp; Panduan Website Bisnis
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Artikel terarah tanpa istilah berbelit-belit untuk membantu para pengusaha, UMKM, dan pemilik brand memahami cara kerja website, SEO, dan konversi digital nyata.
        </p>

        {/* Category Filters */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                  : 'bg-[#0b1120] text-slate-300 hover:text-white border border-sky-950 hover:border-sky-800'
              }`}
            >
              {cat === 'All' ? 'Semua Topik' : cat}
            </button>
          ))}
        </div>
      </header>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-[#0b1120] border border-sky-950/70 hover:border-sky-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,163,255,0.08)] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800/40 font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Key Takeaways Preview */}
              <div className="pt-2 border-t border-sky-950/70 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                  Poin Kunci:
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-sky-950/60 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage(`/insights/${article.slug}`)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
              >
                <span>Baca Artikel Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {article.relatedServiceName && (
                <button
                  onClick={() => onNavigatePage(article.relatedServiceUrl || '/services')}
                  className="text-[11px] font-mono text-slate-400 hover:text-sky-300 transition-colors truncate max-w-[160px]"
                >
                  Layanan: {article.relatedServiceName.replace('Jasa ', '')}
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Connect to Services & Contact */}
      <footer className="text-center py-10 px-6 rounded-2xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border border-sky-900/40 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Butuh Solusi Website Langsung untuk Usaha Anda?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Mulai langkah Anda sekarang. Hubungi Ahmad Shofi Nasla untuk berdiskusi santai mengenai arsitektur website yang tepat untuk bisnis Anda.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigatePage('/services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#090e1d] hover:bg-[#121c38] text-slate-200 border border-sky-900/50 text-xs font-semibold transition-all"
          >
            <span>Eksplorasi Layanan Website</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
