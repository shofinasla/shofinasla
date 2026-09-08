import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A chronological timeline of engineering roles, open-source projects, and academic background.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
          {experience.map((item, idx) => (
            <div key={item.id} id={`exp-timeline-item-${item.id}`} className="relative pl-8 md:pl-10 text-left group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
              </div>

              {/* Card Container */}
              <div className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 space-y-4 shadow-lg shadow-black/10">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                      {item.company}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Key achievements */}
                {item.achievements && (
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono font-semibold uppercase text-slate-300">
                      Impact & Achievements:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
