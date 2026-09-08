import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { ProfileData, Project, SkillCategory } from '../types';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  projects: Project[];
  skills: SkillCategory[];
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  skills
}) => {
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">✨ Welcome to @{profile.username}'s Interactive Terminal CLI v1.0.0</p>
          <p className="text-slate-400 text-xs">Type <span className="text-indigo-300 font-bold">help</span> to list all available commands.</p>
        </div>
      ),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-indigo-400 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-emerald-400 font-bold">whoami / bio</span> - About Shofi Nasla</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - List top featured projects</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - List key tech stacks</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Display email and links</div>
              <div><span className="text-emerald-400 font-bold">cat readme.md</span> - Print profile README</div>
              <div><span className="text-emerald-400 font-bold">socials</span> - GitHub & LinkedIn links</div>
              <div><span className="text-emerald-400 font-bold">date</span> - Print current date & time</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</div>
              <div><span className="text-emerald-400 font-bold">sudo</span> - Secret admin prompt</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-indigo-400 font-bold">Name:</span> {profile.name} (@{profile.username})</p>
            <p><span className="text-indigo-400 font-bold">Title:</span> {profile.title}</p>
            <p><span className="text-indigo-400 font-bold">Location:</span> {profile.location}</p>
            <p><span className="text-indigo-400 font-bold">Status:</span> {profile.status}</p>
            <p className="text-slate-400 pt-1">{profile.bio}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-indigo-400 font-bold">Featured Projects:</p>
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="p-2 bg-slate-950/60 rounded border border-slate-800">
                <p className="font-semibold text-emerald-400">{p.title} <span className="text-[10px] text-slate-400">({p.category})</span></p>
                <p className="text-slate-400 text-[11px]">{p.description}</p>
                <p className="text-[10px] text-indigo-300 font-mono mt-1">Stack: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-indigo-400 font-bold">Technical Skills:</p>
            {skills.map((c) => (
              <div key={c.name} className="space-y-0.5">
                <span className="text-cyan-400 font-semibold">{c.name}:</span>{' '}
                <span className="text-slate-300">{c.skills.map(s => s.name).join(' • ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-indigo-400 font-bold">Email:</span> {profile.email}</p>
            <p><span className="text-indigo-400 font-bold">GitHub:</span> {profile.githubUrl}</p>
            <p><span className="text-indigo-400 font-bold">LinkedIn:</span> {profile.linkedinUrl}</p>
          </div>
        );
        break;

      case 'socials':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>🔗 <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub (@{profile.username})</a></p>
            <p>🔗 <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">LinkedIn Profile</a></p>
            <p>📧 <a href={`mailto:${profile.email}`} className="text-emerald-400 hover:underline">Email Direct</a></p>
          </div>
        );
        break;

      case 'cat readme.md':
      case 'cat readme':
        output = (
          <div className="p-2.5 bg-slate-950/80 rounded border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
            <p className="text-indigo-300 font-bold"># {profile.name} (@{profile.username})</p>
            <p>- 👋 Hi, I'm @{profile.username}</p>
            <p>- 👀 I'm interested in {profile.interests.slice(0, 2).join(', ')}</p>
            <p>- 🌱 I'm currently learning {profile.learning.slice(0, 2).join(', ')}</p>
            <p>- 💞️ I'm looking to collaborate on {profile.collaboratingOn[0]}</p>
            <p>- 📫 How to reach me: {profile.email}</p>
          </div>
        );
        break;

      case 'date':
        output = <p className="text-xs text-amber-300 font-mono">{new Date().toString()}</p>;
        break;

      case 'sudo':
        output = <p className="text-xs text-rose-400 font-mono">User @{profile.username} is already root. Access granted with full superuser privileges!</p>;
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        output = null;
        break;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            zsh: command not found: <span className="font-bold">{cmd}</span>. Type <span className="text-indigo-300">help</span> for a list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output,
        time
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-8 md:bottom-8 z-50 animate-fadeIn">
      <div
        className={`bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isExpanded ? 'w-full md:w-[700px] h-[550px]' : 'w-full md:w-[500px] h-[360px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" title="Close" />
            <button onClick={() => setHistory([])} className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" title="Clear" />
            <button onClick={() => setIsExpanded(!isExpanded)} className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" title="Resize" />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>shofinasla@portfolio: ~</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Output stream */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-left">
          {history.map((h, idx) => (
            <div key={idx} className="space-y-1">
              {h.command && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-indigo-400">➜</span>
                  <span className="text-cyan-400 font-semibold">~</span>
                  <span className="text-slate-200">{h.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto">{h.time}</span>
                </div>
              )}
              {h.output && <div className="pl-4">{h.output}</div>}
            </div>
          ))}
        </div>

        {/* Input prompt */}
        <div className="p-3 bg-slate-900/50 border-t border-slate-800/80 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-400 font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            id="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for commands..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => {
              if (inputVal.trim()) {
                handleCommand(inputVal);
                setInputVal('');
              }
            }}
            className="p-1 rounded text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
