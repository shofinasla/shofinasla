import React from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  Layout, 
  Code2, 
  Rocket, 
  ArrowRight,
  Sparkles,
  Clock
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (sectionId: string) => void;
  whatsappUrl: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onNavigate,
  whatsappUrl
}) => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi & Pemetaan Kebutuhan',
      timing: 'Hari 1',
      desc: 'Kita berdiskusi santai seputar tujuan bisnis Anda, target pelanggan, referensi desain yang disukai, serta materi (logo, foto, teks) yang sudah siap.',
      deliverables: ['Ringkasan sasaran website', 'Rekomendasi struktur menu & fitur', 'Kesepakatan jadwal pengerjaan']
    },
    {
      step: '02',
      title: 'Perancangan UI/UX & Struktur Konten',
      timing: 'Hari 2–4',
      desc: 'Saya merancang tata letak visual yang modern, penataan copywriting yang meyakinkan, serta alur psikologi konversi dari sudut pandang pembeli.',
      deliverables: ['Preview desain antarmuka', 'Penataan struktur navigasi', 'Sesi masukan & penyesuaian desain']
    },
    {
      step: '03',
      title: 'Koding, Mobile Optimization & SEO',
      timing: 'Hari 5–10',
      desc: 'Penerjemahan desain menjadi kode web berkinerja tinggi. Memastikan loading cepat di bawah 1.5 detik, ramah sentuhan di smartphone, dan terhubung ke WhatsApp.',
      deliverables: ['Kode bersih (React, Tailwind)', 'Integrasi tombol kontak & form', 'Setup sitemap.xml & Google Search Console']
    },
    {
      step: '04',
      title: 'Pengujian, Revisi & Peluncuran Resmi',
      timing: 'Hari 11–14',
      desc: 'Website diuji di berbagai ukuran layar dan perangkat. Setelah Anda setuju dengan hasil akhirnya, website diluncurkan ke domain resmi dan siap memikat pelanggan.',
      deliverables: ['Domain & SSL aktif', 'Website live 100%', 'Garansi pendampingan 30 hari']
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#060913] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>ALUR PENGERJAAN TRANSPARAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dari Ide Awal Sampai Website Siap Digunakan Menghasilkan Transaksi.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tidak ada istilah "ditinggal tanpa kabar". Setiap tahapan berjalan dengan komunikasi yang jelas, progres yang dapat Anda pantau, dan tenggat waktu yang ditepati.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 p-6 flex flex-col justify-between text-left relative hover:border-sky-800/60 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-sky-400">
                    {s.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#060913] border border-sky-900/40 text-[10px] font-mono text-sky-300/80">
                    {s.timing}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>

                <div className="pt-2 border-t border-sky-950 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-sky-400 block font-semibold">
                    Output:
                  </span>
                  {s.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-200">
                      <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/25"
          >
            <Rocket className="w-4 h-4 text-slate-950" />
            <span>Mulai Langkah Pertama: Konsultasi Gratis Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};
