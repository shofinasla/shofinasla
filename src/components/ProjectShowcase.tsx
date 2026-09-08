import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Search, 
  Filter, 
  Sparkles,
  Layers,
  ArrowUpRight,
  X
} from 'lucide-react';
import { Project } from '../types';

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI & Tools', 'Open Source'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO & WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              A curated selection of web apps, developer tools, libraries, and open-source software engineered for real-world impact.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or project..."
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/60">
            <p className="text-slate-400 text-sm">No projects matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-indigo-400 hover:underline font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
              >
                <div className="space-y-4 text-left">
                  {/* Category & Stats */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800/90 text-indigo-300 border border-slate-700/60">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                        <Star className="w-3.5 h-3.5" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights preview */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/50 space-y-1">
                      <p className="text-[11px] text-slate-300 font-mono line-clamp-2">
                        ✨ {project.highlights[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Tags & Links */}
                <div className="pt-6 space-y-4 border-t border-slate-800/60 mt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs text-slate-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      More details →
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                          title="Live Demo / View"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal close */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Released {activeModalProject.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Content */}
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed text-left">
              <p>{activeModalProject.fullDescription || activeModalProject.description}</p>

              {activeModalProject.highlights && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold text-slate-200 uppercase font-mono tracking-wider">
                    Key Architectural Highlights:
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-400">
                    {activeModalProject.highlights.map((h, i) => (
                      <li key={i} className="leading-normal">{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-slate-200 uppercase font-mono tracking-wider">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {activeModalProject.demoUrl && (
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-md shadow-indigo-600/30"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
