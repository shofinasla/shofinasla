import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;
    
    // Create mailto link fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName}`);
    const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Collaborate & Build
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you have an inquiry, open-source collaboration idea, project contract, or just want to say hi — feel free to drop a message!
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left info box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  Direct Contacts & Channels
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Available for full-stack engineering roles, freelance opportunities, and open source development.
                </p>
              </div>

              {/* Email badge */}
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Primary Email</span>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-indigo-400 hover:underline font-mono"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Profiles & Socials</span>
                <div className="space-y-2">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 hover:bg-slate-800 border border-slate-800/80 text-xs text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>GitHub: @{profile.username}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
                  </a>

                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 hover:bg-slate-800 border border-slate-800/80 text-xs text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Message Prepared!</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Your email client has been triggered. Alternatively, you can directly reach out at <span className="text-indigo-300 font-mono">{profile.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSenderName('');
                      setSenderEmail('');
                      setMessage('');
                    }}
                    className="text-xs text-indigo-400 hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    Send a Direct Note
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Ada Lovelace"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="ada@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Shofi, I saw your portfolio and would love to discuss a project / role..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-btn-submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md shadow-indigo-600/30 transition-all duration-200"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
