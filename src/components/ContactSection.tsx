import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Building,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [websiteType, setWebsiteType] = useState('Company Profile');
  const [senderPhone, setSenderPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName) return;

    const formattedMessage = `Halo Mas Ahmad Shofi Nasla, saya ingin konsultasi pembuatan website:

- *Nama:* ${senderName}
- *Nama Usaha/Bisnis:* ${companyName || '-'}
- *Jenis Website:* ${websiteType}
- *Kontak Saya:* ${senderPhone || '-'}
- *Kebutuhan:* ${message || 'Mohon informasi alur pengerjaan dan penawarannya.'}

Terima kasih!`;

    const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Konsultasi Website dari ${senderName || 'Calon Klien'}`);
    const body = encodeURIComponent(
      `Nama: ${senderName}\nBisnis: ${companyName}\nJenis: ${websiteType}\nKontak: ${senderPhone}\n\nKebutuhan:\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#070b16] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>MULAI LANGKAH ANDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Wujudkan Website Profesional untuk Bisnis Anda.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ceritakan gambaran usaha Anda. Saya siap membantu menerjemahkan ide dan tujuan bisnis Anda menjadi website yang meyakinkan, cepat, dan siap menghasilkan transaksi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-sky-950/40 via-[#0a0f1e] to-[#060913] border border-sky-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jalur Komunikasi Tercepat</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Konsultasi Langsung via WhatsApp
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Paling direkomendasikan untuk respon tercepat. Anda bisa bertanya seputar estimasi biaya, ketersediaan jadwal, atau meminta saran struktur website.
              </p>

              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-sky-500/25 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Buka WhatsApp Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Respon ramah dalam 1–3 jam di hari kerja.</span>
              </div>
            </div>

            {/* Email Contact Box */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-4 shadow-lg">
              <span className="text-xs font-mono uppercase text-sky-400 font-semibold block">
                Alamat Email Resmi
              </span>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#060913] border border-sky-900/40">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs sm:text-sm font-mono font-semibold text-sky-400 hover:underline"
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#0e162b] hover:bg-sky-950 text-slate-300 transition-colors border border-sky-900/40"
                  title="Salin Email"
                >
                  {copied ? <Check className="w-4 h-4 text-sky-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="space-y-2 pt-2 border-t border-sky-950 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Kerahasiaan data bisnis & ide proyek Anda terjamin aman.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendWhatsApp}
              className="p-6 sm:p-8 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-5 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white">
                Formulir Diskusi Proyek Website
              </h3>
              <p className="text-xs text-slate-300">
                Isi rincian singkat di bawah ini. Formulir ini dapat langsung dikirim ke WhatsApp atau Email.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Budi Pratama"
                    className="w-full bg-[#060913] border border-sky-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200">
                    Nama Usaha / Perusahaan
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Contoh: CV. Berkah Logistik"
                    className="w-full bg-[#060913] border border-sky-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200">
                    Jenis Website yang Dibutuhkan
                  </label>
                  <select
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full bg-[#060913] border border-sky-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Company Profile">Website Company Profile</option>
                    <option value="Landing Page Iklan">Landing Page Konversi Iklan</option>
                    <option value="Katalog Produk">Katalog Produk & Toko Digital</option>
                    <option value="Aplikasi Web Kustom">Aplikasi Web / Sistem Kustom</option>
                    <option value="Redesign & Optimasi">Redesign / Perbaikan Website Lama</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-200">
                    Nomor WhatsApp Anda (Opsional)
                  </label>
                  <input
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-[#060913] border border-sky-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200">
                  Ceritakan Kebutuhan atau Masalah Website Anda
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contoh: Kami butuh website company profile untuk kantor kami agar terlihat profesional saat mengajukan proposal ke klien B2B..."
                  className="w-full bg-[#060913] border border-sky-900/40 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-sky-500/25"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#0d1424] hover:bg-[#131c33] text-slate-200 font-medium text-xs border border-sky-900/40 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Kirim via Email</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
