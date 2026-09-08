import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  X, 
  Download, 
  ExternalLink, 
  Printer, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { ProfileData, Project, SkillCategory, ExperienceItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  skills,
  experience
}) => {
  const [activeTab, setActiveTab] = useState<'cv' | 'readme'>('cv');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdown = () => {
    return `# 👋 Hi, I'm ${profile.name} (@${profile.username})

### 🚀 ${profile.title}

> ⚡ **Status:** ${profile.status}
- 📍 **Location:** ${profile.location}
- 👀 **Interests:** ${profile.interests.join(', ')}
- 🌱 **Currently Learning:** ${profile.learning.join(', ')}
- 💞️ **Looking to Collaborate on:** ${profile.collaboratingOn.join(', ')}
- 📫 **How to Reach Me:** [${profile.email}](mailto:${profile.email})

### 🛠️ Tech Stack & Capabilities
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Modern HTML/CSS
- **Backend:** Node.js, Express, REST & GraphQL APIs, PostgreSQL, MongoDB
- **DevOps & Cloud:** Git, Docker, CI/CD, Vite, Cloud Run

### 📊 GitHub Activity
- Profile: [github.com/${profile.username}](https://github.com/${profile.username})
`;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdown();
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdown();
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5 text-left">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                {profile.name} - Curriculum Vitae & Profile
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                @{profile.username} • {profile.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs & Actions */}
        <div className="px-6 py-2.5 bg-slate-950/50 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('cv')}
              className={`flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'cv' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
            <button
              onClick={() => setActiveTab('readme')}
              className={`flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'readme' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GitHub README</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 text-left">
          {activeTab === 'cv' ? (
            <div className="space-y-6 max-w-3xl mx-auto bg-slate-950/70 p-6 sm:p-8 rounded-xl border border-slate-800/80">
              {/* Header profile info */}
              <div className="border-b border-slate-800 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-100">{profile.name}</h1>
                    <p className="text-sm font-semibold text-indigo-400">{profile.title}</p>
                  </div>
                  <div className="text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                      <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {profile.bio}
                </p>
              </div>

              {/* Skills section */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Core Technologies & Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skills.map((cat) => (
                    <div key={cat.name} className="p-3 bg-slate-900/80 rounded-lg border border-slate-800/60 space-y-1">
                      <span className="font-semibold text-slate-200 block text-[11px] uppercase font-mono">{cat.name}</span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {cat.skills.map(s => s.name).join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience list */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Work Experience & Background
                </h3>
                <div className="space-y-4">
                  {experience.map((item) => (
                    <div key={item.id} className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/60 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="font-bold text-slate-100 text-sm">{item.role}</span>
                          <span className="text-xs text-indigo-300 font-mono block sm:inline sm:ml-2">@ {item.company}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{item.period}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                      {item.achievements && item.achievements.length > 0 && (
                        <ul className="space-y-1 pt-1">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects highlight */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Featured Software Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {projects.slice(0, 4).map((p) => (
                    <div key={p.id} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-200">{p.title}</span>
                        <span className="text-[10px] font-mono text-indigo-300 px-1.5 py-0.5 rounded bg-slate-800">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] line-clamp-2">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Readme tab */
            <div className="space-y-4 max-w-3xl mx-auto bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">shofinasla/shofinasla/README.md</span>
                <button
                  onClick={handleDownloadMarkdown}
                  className="flex items-center gap-1 text-xs text-indigo-400 hover:underline font-mono"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download README.md</span>
                </button>
              </div>
              <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {generateMarkdown()}
              </pre>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">
            {profile.name} • @{profile.username}
          </span>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
          >
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
