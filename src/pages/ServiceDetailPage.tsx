import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { DedicatedService } from '../data/servicesData';
import { ProfileData } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEOHead } from '../components/SEOHead';

interface ServiceDetailPageProps {
  service: DedicatedService;
  profile: ProfileData;
  onNavigatePage: (path: string, hash?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  profile,
  onNavigatePage
}) => {
  const canonicalUrl = `https://ahmad.shofinasla.workers.dev/services/${service.slug}`;

  // Structured Data Schema for Service + BreadcrumbList
  const schema = [
    {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: service.title,
      url: canonicalUrl,
      description: service.metaDescription,
      provider: {
        '@type': 'Person',
        name: 'Ahmad Shofi Nasla',
        alternateName: 'Shofi Nasla',
        jobTitle: 'Web Developer',
        url: 'https://ahmad.shofinasla.workers.dev/about'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia'
      },
      serviceType: service.cluster
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
          name: 'Layanan',
          item: 'https://ahmad.shofinasla.workers.dev/services'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: canonicalUrl
        }
      ]
    }
  ];

  const waMessage = encodeURIComponent(
    `Halo Mas Ahmad Shofi Nasla, saya tertarik konsultasi ${service.title} untuk bisnis saya.`
  );
  const waUrl = `https://wa.me/6285174241604?text=${waMessage}`;

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={canonicalUrl}
        ogType="website"
        schema={schema}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Layanan Jasa Website', url: '/services' },
          { label: service.title }
        ]}
        onNavigate={(path) => onNavigatePage(path)}
      />

      {/* Header / Hero */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono">
          <span>{service.badge}</span>
        </div>

        {/* 1 Single H1 per page */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {service.title}
        </h1>

        <p className="text-lg sm:text-xl text-sky-200/90 font-medium">
          {service.headline}
        </p>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {service.overview}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi Proyek via WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigatePage(`/projects/${service.relatedCaseStudySlug}`)}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1120] hover:bg-[#111a33] text-slate-200 border border-sky-900/50 text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Lihat Studi Kasus Terkait</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </header>

      {/* Why Needed Section */}
      <section className="bg-[#0b1120] border border-sky-950/70 rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {service.whyNeeded.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {service.whyNeeded.points.map((point, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#070b16] border border-sky-950/50 space-y-2">
              <h3 className="text-sm font-bold text-sky-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{point.title}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            Fitur Utama yang Disertakan
          </h2>
          <div className="space-y-3">
            {service.featuresIncluded.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090e1d] border border-sky-950/60 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{feat.title}</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            Apa yang Anda Dapatkan (Deliverables)
          </h2>
          <div className="p-6 rounded-2xl bg-[#070b16] border border-sky-900/50 space-y-4">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-sky-950/70">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Cocok untuk Kategori Bisnis:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.targetAudience.map((aud, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-[#0e172e] text-slate-300 border border-sky-950">
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent 4-Step Process */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
            Alur Pengerjaan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Proses Transparan dari Diskusi hingga Peluncuran
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.workflow.map((item) => (
            <div key={item.step} className="p-5 rounded-xl bg-[#0b1120] border border-sky-950/60 space-y-2">
              <span className="text-2xl font-extrabold font-mono text-sky-500/40 block">
                {item.step}
              </span>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Integration Link */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a1226] to-[#080d1a] border border-sky-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
            Bukti Nyata Klien
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Lihat Penerapan Nyata: {service.relatedCaseStudyName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Pelajari bagaimana pendekatan teknis dan strategi yang saya gunakan membantu bisnis ini memecahkan tantangan operasional mereka.
          </p>
        </div>

        <button
          onClick={() => onNavigatePage(`/projects/${service.relatedCaseStudySlug}`)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md shrink-0"
        >
          <span>Buka Studi Kasus</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* FAQ for this Service */}
      {service.faq.length > 0 && (
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-400" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </h2>
          <div className="space-y-3">
            {service.faq.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#090d1a] border border-sky-950/60 space-y-2">
                <h3 className="text-sm font-bold text-white">{item.q}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Navigation & CTA */}
      <footer className="pt-8 border-t border-sky-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigatePage('/services')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Semua Layanan</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Konsultasikan Kebutuhan {service.cluster}</span>
        </a>
      </footer>
    </div>
  );
};
