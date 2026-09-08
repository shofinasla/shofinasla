import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Server, 
  Cloud, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  Award
} from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A breakdown of technologies, frameworks, and workflows honed through building modern web applications, scalable APIs, and developer tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              id={`skills-tab-${idx}`}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {idx === 0 && <Code2 className="w-4 h-4" />}
              {idx === 1 && <Server className="w-4 h-4" />}
              {idx === 2 && <Cloud className="w-4 h-4" />}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories[activeCategory].skills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/30 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-slate-200 text-sm">{skill.name}</span>
                  {skill.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Primary
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {skill.experience}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges / Tech Highlights Bar */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6">
          <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-4 text-left">
            Developer Ecosystem & Paradigms:
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              'TypeScript', 'React 19', 'Next.js App Router', 'Tailwind CSS v4',
              'Node.js ESM', 'REST & GraphQL', 'PostgreSQL', 'Prisma ORM',
              'Docker', 'Vite', 'Git Workflows', 'CI/CD Automation',
              'Semantic HTML & WAI-ARIA', 'Responsive Design', 'Jest / Vitest'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
