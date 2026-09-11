import React from 'react';
import { ArrowRight, Check, Code2, Gauge, LayoutDashboard, MessageSquare, Rocket } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (sectionId: string) => void;
}

const services = [
  {
    icon: LayoutDashboard,
    title: 'Website Profesional',
    description: 'Website company profile, personal brand, portfolio, atau landing page yang terlihat kredibel dan siap mendukung tujuan bisnis Anda.',
    points: ['Desain modern dan responsive', 'Struktur halaman yang jelas', 'Siap diakses di semua perangkat']
  },
  {
    icon: Code2,
    title: 'Web App & Dashboard',
    description: 'Aplikasi web yang membantu operasional bisnis menjadi lebih cepat, rapi, dan mudah dikembangkan seiring pertumbuhan Anda.',
    points: ['Frontend React & TypeScript', 'Dashboard dan sistem internal', 'Integrasi API sesuai kebutuhan']
  },
  {
    icon: Gauge,
    title: 'Optimasi & Redesign',
    description: 'Perbaikan website lama agar lebih cepat, mudah digunakan, lebih meyakinkan, dan memiliki pengalaman pengguna yang lebih baik.',
    points: ['Audit performa dan UX', 'Optimasi mobile dan aksesibilitas', 'Perbaikan alur konversi']
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="relative border-y border-slate-900 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
              <Rocket className="h-3.5 w-3.5" />
              <span>JASA PEMBUATAN WEBSITE</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Punya ide? Mari ubah menjadi website yang menghasilkan.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Saya membantu bisnis, profesional, dan organisasi membangun website yang profesional, cepat, dan mudah dipercaya oleh pelanggan.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
            >
              <MessageSquare className="h-4 w-4" />
              Konsultasi Gratis
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-left transition-colors hover:border-indigo-500/40">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{service.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-800 pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-10">
          <div className="mb-6 space-y-2 text-left">
            <p className="text-xs font-mono uppercase text-indigo-400">CARA KERJA</p>
            <h3 className="text-2xl font-bold text-slate-100">Dari ide sampai website siap digunakan.</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Konsultasi', 'Kita membahas tujuan, target pengguna, fitur, dan kebutuhan bisnis Anda.'],
              ['02', 'Rancang & Bangun', 'Saya menyusun struktur, tampilan, dan sistem website sesuai prioritas.'],
              ['03', 'Review & Launch', 'Website diuji, disempurnakan, lalu dipublikasikan agar siap digunakan.']
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4 border-l border-slate-700 pl-4 text-left">
                <span className="font-mono text-sm font-bold text-emerald-400">{number}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
