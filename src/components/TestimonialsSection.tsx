import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-[#070b16] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
            <span>TESTIMONI & KEPUASAN KLIEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Klien yang Pernah Bekerja Sama?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Kepuasan bisnis klien adalah tolok ukur utama keberhasilan setiap proyek website yang saya selesaikan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 p-6 flex flex-col justify-between space-y-6 hover:border-sky-800/60 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-sky-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-sky-500/40" />

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-sky-950">
                <span className="text-sm font-bold text-white block">
                  {item.company}
                </span>
                <span className="text-xs text-sky-400 block mt-0.5 font-medium">
                  {item.clientName} • {item.role}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-1">
                  Proyek: {item.projectType}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
