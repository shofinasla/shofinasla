import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>TESTIMONI & KEPUASAN KLIEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
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
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-slate-600 opacity-60" />

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-sm font-bold text-slate-100 block">
                  {item.company}
                </span>
                <span className="text-xs text-indigo-400 block mt-0.5">
                  {item.clientName} • {item.role}
                </span>
                <span className="text-[10px] text-slate-500 font-mono block mt-1">
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
