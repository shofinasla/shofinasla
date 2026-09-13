import React from 'react';
import { 
  User, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Briefcase, 
  HeartHandshake, 
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { ProfileData } from '../types';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="developer-bio" className="py-20 bg-[#060913] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Bio & Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>TENTANG SAYA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ahmad Shofi Nasla — Mitra Teknologi untuk Pertumbuhan Bisnis Anda.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Saya memandang website bukan sekadar kumpulan kode HTML dan CSS, melainkan <strong className="text-white">alat bantu penjualan dan pengungkit kredibilitas</strong>. Banyak bisnis hebat gagal berkembang di ranah digital karena websitenya lambat, membingungkan pengunjung, atau tidak mencerminkan kualitas layanan aslinya.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dengan pengalaman membangun platform untuk industri pariwisata (CV. Fusena Jaya), industri kreatif pakaian (Paradise Sablon), hingga standar ekspor perikanan (SHRIMORA), saya siap membantu merancang solusi website yang fungsional, berkecepatan tinggi, dan mudah dikelola.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0a0f1e]/80 border border-sky-950/80 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Domisili & Jangkauan</span>
                  <span className="text-[11px] text-slate-400">Indonesia • Siap melayani klien seluruh Nusantara</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0f1e]/80 border border-sky-950/80 flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Spesialisasi Teknologi</span>
                  <span className="text-[11px] text-slate-400">React, TypeScript, Tailwind, Cloudflare Edge</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#0a0f1e] hover:bg-sky-950/80 text-slate-300 hover:text-white border border-sky-900/40 transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#0a0f1e] hover:bg-sky-950/80 text-slate-300 hover:text-white border border-sky-900/40 transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-xl bg-[#0a0f1e] hover:bg-sky-950/80 text-slate-300 hover:text-white border border-sky-900/40 transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Values & Key Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 p-6 sm:p-7 space-y-4 shadow-xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Prinsip Kerja Saya:
              </h3>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Transparan Tanpa Rahasia Teknis</span>
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                    Saya menjelaskan hal teknis dengan bahasa yang mudah dipahami oleh pemilik bisnis.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Tepat Waktu & Komitmen Jadwal</span>
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                    Tenggat waktu yang disepakati adalah prioritas agar rencana promosi bisnis Anda tidak tertunda.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Pendampingan Pasca Selesai</span>
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                    Bukan tipe developer yang hilang setelah menerima pelunasan. Saya siap mendampingi kebutuhan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
