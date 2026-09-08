import React, { useState } from 'react';
import { 
  FileCode2, 
  Copy, 
  Check, 
  X, 
  Download, 
  Sparkles, 
  Sliders, 
  Eye, 
  Code,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { ProfileData } from '../types';

interface ReadmeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
}

export const ReadmeEditorModal: React.FC<ReadmeEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  // Form states
  const [username, setUsername] = useState(profile.username);
  const [fullName, setFullName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [email, setEmail] = useState(profile.email);
  const [status, setStatus] = useState(profile.status);
  const [interests, setInterests] = useState(profile.interests.join(', '));
  const [learning, setLearning] = useState(profile.learning.join(', '));
  const [collaborating, setCollaborating] = useState(profile.collaboratingOn.join(', '));
  const [reachOut, setReachOut] = useState(profile.reachOutFor.join(', '));

  // Toggles for badges & stats widgets
  const [showStats, setShowStats] = useState(true);
  const [showTopLangs, setShowTopLangs] = useState(true);
  const [showBadges, setShowBadges] = useState(true);
  const [themeName, setThemeName] = useState('tokyonight');

  if (!isOpen) return null;

  // Generate markdown content
  const generateMarkdown = () => {
    return `# 👋 Hi, I'm ${fullName} (@${username})

### 🚀 ${title}

${status ? `> ⚡ **Status:** ${status}\n` : ''}
- 👀 **Interests:** ${interests}
- 🌱 **Currently Learning:** ${learning}
- 💞️ **Looking to Collaborate on:** ${collaborating}
- 📫 **How to Reach Me:** [${email}](mailto:${email})

${showBadges ? `### 🛠️ Tech Stack & Badges
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
` : ''}
${showStats ? `### 📊 GitHub Statistics
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themeName}&hide_border=true" alt="${username}'s GitHub stats" />
</div>
` : ''}
${showTopLangs ? `<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${themeName}&hide_border=true" alt="Top Languages" />
</div>
` : ''}
---
*Special profile \`README.md\` rendered for [${username}/${username}](https://github.com/${username}/${username})*
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

  const handleSaveToProfile = () => {
    const updated: ProfileData = {
      ...profile,
      username,
      name: fullName,
      title,
      email,
      status,
      interests: interests.split(',').map(s => s.trim()).filter(Boolean),
      learning: learning.split(',').map(s => s.trim()).filter(Boolean),
      collaboratingOn: collaborating.split(',').map(s => s.trim()).filter(Boolean),
      reachOutFor: reachOut.split(',').map(s => s.trim()).filter(Boolean)
    };
    onSaveProfile(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-bold text-slate-100">
                GitHub Profile README Generator
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Repository: {username}/{username}/README.md
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subheader Toolbar & Tabs */}
        <div className="px-6 py-2.5 bg-slate-950/50 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'editor' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Customize Info</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'code' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Raw Markdown</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied MD!' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-slate-700"
              title="Download as README.md"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 text-left">
          {activeTab === 'editor' && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">GitHub Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Full Name / Display</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Role / Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Contact Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Current Interests (comma-separated)</label>
                <input
                  type="text"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Currently Learning (comma-separated)</label>
                <input
                  type="text"
                  value={learning}
                  onChange={(e) => setLearning(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Looking to Collaborate On (comma-separated)</label>
                <input
                  type="text"
                  value={collaborating}
                  onChange={(e) => setCollaborating(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Widgets & Theme Options */}
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">Card Widgets & Theme</label>
                <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showBadges}
                      onChange={(e) => setShowBadges(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <span>Shields Badges</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showStats}
                      onChange={(e) => setShowStats(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <span>GitHub Stats Card</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showTopLangs}
                      onChange={(e) => setShowTopLangs(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <span>Top Languages Widget</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6 max-w-2xl mx-auto shadow-inner">
              <div className="space-y-2 border-b border-slate-800 pb-4">
                <h1 className="text-2xl font-bold text-slate-100">
                  👋 Hi, I'm {fullName} (@{username})
                </h1>
                <p className="text-sm font-semibold text-indigo-400">
                  🚀 {title}
                </p>
                {status && (
                  <p className="text-xs font-mono text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                    ⚡ <strong>Status:</strong> {status}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <p><span className="text-slate-500">- 👀</span> <strong>Interests:</strong> {interests}</p>
                <p><span className="text-slate-500">- 🌱</span> <strong>Currently Learning:</strong> {learning}</p>
                <p><span className="text-slate-500">- 💞️</span> <strong>Looking to Collaborate:</strong> {collaborating}</p>
                <p><span className="text-slate-500">- 📫</span> <strong>How to Reach Me:</strong> <a href={`mailto:${email}`} className="text-indigo-400 underline">{email}</a></p>
              </div>

              {showBadges && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase font-mono">🛠️ Tech Stack & Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Git'].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {showStats && (
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase font-mono">📊 GitHub Statistics Preview</h4>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center space-y-1">
                    <p className="text-xs font-bold text-slate-200">GitHub Stats: @{username}</p>
                    <p className="text-[11px] text-slate-400">Total Stars Earned: 250+ | Total Commits: 1,420+ | Contributed to: 18 repos</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {generateMarkdown()}
              </pre>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Synced with {profile.username}'s portfolio
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveToProfile}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-md shadow-indigo-600/30"
            >
              Apply to Portfolio
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
