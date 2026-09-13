import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  UserCheck, 
  Key, 
  HeartHandshake, 
  Code2, 
  Sparkles 
} from 'lucide-react';

export const WhyChooseMeSection: React.FC = () => {
  const advantages = [
    {
      icon: UserCheck,
      title: 'Komunikasi Langsung dengan Developer',
      desc: 'Anda berdiskusi langsung dengan orang yang mengeksekusi kode. Tidak ada perantara Account Executive atau sales yang sering salah paham menerjemahkan ide Anda.'
    },
    {
      icon: Zap,
      title: 'Hand-Coded & Loading Super Kilat',
      desc: 'Dibangun dengan teknologi modern (React, Tailwind), bukan template WordPress berat yang dipenuhi puluhan plugin lambat dan rentan terserang malware.'
    },
    {
      icon: Code2,
      title: 'Fokus Pada Hasil Bisnis & Konversi',
      desc: 'Desain bukan cuma urusan warna indah, melainkan tentang bagaimana pengunjung dalam 5 detik paham penawaran Anda dan tergerak menghubungi WhatsApp.'
    },
    {
      icon: Key,
      title: '100% Kepemilikan Aset Penuh',
      desc: 'Domain, akun cloud, dan source code menjadi milik Anda seutuhnya. Tidak ada biaya sewa langganan sepihak yang mengunci bisnis Anda.'
    },
    {
      icon: ShieldCheck,
      title: 'SEO-Ready Sejak Hari Pertama',
      desc: 'Struktur tag semantik, meta description, sitemap.xml, dan Google Search Console sudah disiapkan agar bisnis Anda cepat terindeks di mesin pencari.'
    },
    {
      icon: HeartHandshake,
      title: 'Garansi & Pendampingan 30 Hari',
      desc: 'Setelah website resmi diluncurkan, Anda mendapatkan masa garansi perbaikan bug dan sesi konsultasi pengelolaan website secara cuma-cuma.'
    }
  ];

  return (
    <section className="py-20 bg-[#070b16] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NILAI LEBIH & DEDIKASI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Bekerja Sama dengan Ahmad Shofi Nasla?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Memilih pembuat website adalah memilih mitra jangka panjang untuk aset digital bisnis Anda. Berikut komitmen profesional yang selalu saya pegang:
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 p-6 space-y-3 hover:border-sky-800/60 transition-colors shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[#060913] border border-sky-900/40 flex items-center justify-center text-sky-400 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
