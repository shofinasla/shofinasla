import React from 'react';
import { 
  Building2, 
  Target, 
  ShoppingBag, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onNavigate: (sectionId: string) => void;
  whatsappUrl: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onNavigate,
  whatsappUrl
}) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-300" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-sky-300" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#070b16] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUSI & LAYANAN TERBAIK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Pembuatan Website yang Disesuaikan dengan Tujuan Bisnis Anda.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tidak ada solusi "satu ukuran untuk semua". Saya merancang setiap baris kode dan elemen visual agar selaras dengan target pasar dan tujuan spesifik usaha Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const icon = getServiceIcon(svc.iconName);

            return (
              <article
                key={svc.id}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 text-left relative shadow-lg ${
                  svc.featured
                    ? 'bg-[#0b1226] border-sky-500/50 shadow-xl shadow-sky-950/40 ring-1 ring-sky-500/30'
                    : 'bg-[#0a0f1e]/80 border-sky-950/80 hover:border-sky-800/60'
                }`}
              >
                {svc.featured && (
                  <span className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[10px] font-bold tracking-wide uppercase text-slate-950 shadow-md">
                    Paling Banyak Diminati
                  </span>
                )}

                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-[#060913] border border-sky-900/40 flex items-center justify-center">
                    {icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-sky-950">
                    <span className="text-[11px] font-mono text-sky-400 uppercase block font-semibold">
                      Yang Anda Dapatkan:
                    </span>
                    <ul className="space-y-1.5">
                      {svc.deliverables.slice(0, 4).map((d, idx) => (
                        <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-[#060913]/90 border border-sky-950 text-[11px] text-slate-300">
                    <strong className="text-sky-300 block">Cocok untuk:</strong>
                    <span>{svc.idealFor}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-sky-950">
                  <a
                    href={`https://wa.me/6285174241604?text=Halo%20Mas%20Ahmad%20Shofi,%20saya%20ingin%20konsultasi%20layanan%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d1424] hover:bg-[#131c33] text-slate-200 hover:text-white font-medium text-xs border border-sky-900/40 hover:border-sky-500/40 transition-colors"
                  >
                    <span>Konsultasikan Layanan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Request Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Punya kebutuhan spesifik yang belum tercantum di atas?{' '}
            <button
              onClick={() => onNavigate('contact')}
              className="text-sky-400 hover:underline font-semibold"
            >
              Hubungi saya untuk diskusi teknis khusus &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
