import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  X, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  Shirt, 
  Anchor, 
  MessageSquare,
  Quote
} from 'lucide-react';
import { ClientCaseStudy } from '../types';

interface RealClientsSectionProps {
  clients: ClientCaseStudy[];
  whatsappNumber: string;
}

export const RealClientsSection: React.FC<RealClientsSectionProps> = ({
  clients,
  whatsappNumber
}) => {
  const [activeClientModal, setActiveClientModal] = useState<ClientCaseStudy | null>(null);

  const getClientIcon = (id: string) => {
    switch (id) {
      case 'fusena-jaya':
        return <Compass className="w-6 h-6 text-sky-400" />;
      case 'paradise-sablon':
        return <Shirt className="w-6 h-6 text-cyan-300" />;
      case 'shrimora':
        return <Anchor className="w-6 h-6 text-blue-400" />;
      default:
        return <Building2 className="w-6 h-6 text-sky-400" />;
    }
  };

  const getClientGradient = (id: string) => {
    switch (id) {
      case 'fusena-jaya':
        return 'from-sky-500/15 via-[#0b1122] to-[#060913] border-sky-500/30 hover:border-sky-400/60 shadow-sky-500/5';
      case 'paradise-sablon':
        return 'from-cyan-500/15 via-[#0b1122] to-[#060913] border-cyan-500/30 hover:border-cyan-400/60 shadow-cyan-500/5';
      case 'shrimora':
        return 'from-blue-600/15 via-[#0b1122] to-[#060913] border-blue-500/30 hover:border-blue-400/60 shadow-blue-500/5';
      default:
        return 'from-sky-500/10 via-[#0b1122] to-[#060913] border-sky-900/40 hover:border-sky-700';
    }
  };

  return (
    <section id="clients" className="py-20 bg-[#070b16] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BUKTI BISNIS NYATA & PORTOFOLIO KLIEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bukan Sekadar Mockup. Ini Hasil Karya untuk Klien Nyata.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Setiap bisnis memiliki tantangan dan target audiens berbeda. Berikut adalah bagaimana solusi website yang saya bangun membantu menyelesaikan masalah operasional dan meningkatkan kredibilitas klien nyata.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clients.map((client) => {
            const clientIcon = getClientIcon(client.id);
            const cardBg = getClientGradient(client.id);

            return (
              <article
                key={client.id}
                className={`rounded-2xl border bg-gradient-to-b ${cardBg} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group`}
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-[#090e1c] border border-sky-900/50 shadow-inner">
                      {clientIcon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0a1020] text-[11px] font-mono text-sky-200 border border-sky-900/60">
                      {client.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                      {client.clientName}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {client.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {client.summary}
                  </p>

                  {/* Highlight Results */}
                  <div className="p-4 rounded-xl bg-[#050813]/90 border border-sky-950/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Dampak & Hasil Nyata:</span>
                    </div>
                    <ul className="space-y-1.5 text-left">
                      {client.results.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {client.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#0b1020] border border-sky-900/40 text-[10px] font-mono text-sky-300/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 mt-6 border-t border-sky-950/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveClientModal(client)}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>Baca Studi Kasus Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Halo%20Mas%20Ahmad%20Shofi,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(client.clientName)}.%20Saya%20ingin%20konsultasi%20website%20serupa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Konsultasi Model Serupa"
                    className="p-2 rounded-lg bg-[#0b1020] hover:bg-sky-500/20 text-slate-400 hover:text-sky-300 border border-sky-900/50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d172e]/80 via-[#0a1022] to-[#070b16] border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-lg">
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ingin Bisnis Anda Memiliki Website Sepadan dengan Standar Mereka?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Baik Anda mengelola biro jasa, konveksi custom, supplier industri, atau UMKM lokal, saya siap merancang arsitektur website yang tepat sasaran.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Halo%20Mas%20Ahmad%20Shofi,%20saya%20ingin%20diskusi%20kebutuhan%20website%20untuk%20bisnis%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/25 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Diskusikan Proyek Anda</span>
          </a>
        </div>

      </div>

      {/* Detail Case Study Modal */}
      {activeClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#090e1c] border border-sky-900/70 max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-sky-950 pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block">
                  {activeClientModal.industry}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeClientModal.clientName}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {activeClientModal.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveClientModal(null)}
                className="p-2 rounded-xl bg-[#0b1020] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-sky-900/40"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tantangan / Challenge */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-red-400 font-semibold flex items-center gap-2">
                <span>01. TANTANGAN BISNIS AWAL</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#050813] p-4 rounded-xl border border-sky-950">
                {activeClientModal.challenge}
              </p>
            </div>

            {/* Solusi Teknis & Desain */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-sky-400 font-semibold flex items-center gap-2">
                <span>02. SOLUSI STRATEGIS & TEKNOLOGI</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#050813] p-4 rounded-xl border border-sky-950">
                {activeClientModal.solution}
              </p>
            </div>

            {/* Fitur Utama */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold">
                03. FITUR UTAMA YANG DIIMPLEMENTASIKAN
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeClientModal.features.map((feat, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-[#050813] border border-sky-950 text-[11px] text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dampak & Hasil Nyata */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-sky-300 font-semibold">
                04. HASIL & DAMPAK OPERASIONAL
              </h4>
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-2">
                {activeClientModal.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote if available */}
            {activeClientModal.testimonial && (
              <div className="p-4 rounded-xl bg-[#0a1329] border border-sky-500/30 space-y-2">
                <Quote className="w-5 h-5 text-sky-400 opacity-70" />
                <p className="text-xs italic text-slate-200 leading-relaxed">
                  "{activeClientModal.testimonial.quote}"
                </p>
                <p className="text-[11px] font-semibold text-sky-300 pt-1">
                  — {activeClientModal.testimonial.person}, {activeClientModal.testimonial.title}
                </p>
              </div>
            )}

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-sky-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Status: <strong className="text-sky-400">{activeClientModal.liveStatus}</strong>
              </span>

              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Halo%20Mas%20Ahmad%20Shofi,%20saya%20tertarik%20konsultasi%20website%20seperti%20studi%20kasus%20${encodeURIComponent(activeClientModal.clientName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Konsultasi Website Serupa</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
