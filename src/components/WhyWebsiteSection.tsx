import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Globe2, 
  ShieldAlert, 
  TrendingDown, 
  TrendingUp, 
  Smartphone, 
  Search, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface WhyWebsiteSectionProps {
  onNavigate: (sectionId: string) => void;
  whatsappUrl: string;
}

export const WhyWebsiteSection: React.FC<WhyWebsiteSectionProps> = ({
  onNavigate,
  whatsappUrl
}) => {
  const painPoints = [
    {
      problem: 'Kehilangan Klien B2B & Prospek Bernilai Tinggi',
      problemDesc: 'Calon klien korporat, instansi, atau pembeli besar selalu mencari bukti legalitas dan profil resmi di Google sebelum bertransaksi.',
      solution: 'Website company profile resmi memberikan kredibilitas instan dan meyakinkan calon klien bahwa bisnis Anda bonafide.'
    },
    {
      problem: 'Media Sosial Bukan Aset Digital Milik Anda',
      problemDesc: 'Jangkauan organik Instagram/TikTok sering anjlok akibat perubahan algoritma, dan akun bisa diblokir atau di-hack kapan saja.',
      solution: 'Website dengan domain Anda sendiri adalah Digital Real Estate permanen yang tidak bisa diganggu gugat oleh pihak ketiga.'
    },
    {
      problem: 'Admin WhatsApp Lelah Menjawab Pertanyaan Berulang',
      problemDesc: 'Setiap hari admin Anda menghabiskan jam demi jam hanya untuk mengirim foto katalog, list harga, atau menjelaskan cara pesan.',
      solution: 'Website memajang portofolio, spesifikasi, dan FAQ secara interaktif sehingga calon pembeli masuk ke WhatsApp dalam keadaan siap bayar.'
    },
    {
      problem: 'Kalah Bersaing dengan Kompetitor yang Terindeks Google',
      problemDesc: 'Saat calon pelanggan mencari "jasa tour", "konveksi kaos", atau "supplier seafood" di Google, yang muncul adalah kompetitor Anda.',
      solution: 'Website teroptimasi SEO lokal memastikan nama dan layanan bisnis Anda ditemukan pertama kali oleh orang yang memang berniat membeli.'
    }
  ];

  return (
    <section id="why-website" className="py-20 bg-[#060913] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <AlertTriangle className="w-3.5 h-3.5 text-sky-400" />
            <span>REALITAS BISNIS MODERN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Website Bukan Sekadar Biaya Pajangan, Tapi Investasi Pertumbuhan Bisnis.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Banyak pemilik bisnis merasa "cukup dengan Instagram atau WhatsApp saja". Namun tanpa disadari, mereka kehilangan puluhan transaksi bernilai tinggi setiap bulannya karena alasan ini:
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-sky-950/80 bg-[#0a0f1e]/80 p-6 space-y-5 text-left hover:border-sky-800/60 transition-colors shadow-lg"
            >
              {/* Problem side */}
              <div className="space-y-2 border-l-2 border-red-500/60 pl-3">
                <span className="text-[11px] font-mono text-red-400 uppercase font-bold flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Tanpa Website:</span>
                </span>
                <h3 className="text-base font-bold text-slate-100">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Solution side */}
              <div className="space-y-2 border-l-2 border-[#00A3FF] pl-3 pt-2">
                <span className="text-[11px] font-mono text-sky-400 uppercase font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Dengan Solusi Website ASN:</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#090e1c] border border-sky-900/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-lg">
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Jangan Biarkan Kompetitor Merebut Calon Pelanggan Anda.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Mulai bangun aset digital bisnis Anda sekarang dengan panduan langsung dari web developer profesional.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-sky-500/25"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Konsultasi Kebutuhan Bisnis</span>
          </a>
        </div>

      </div>
    </section>
  );
};
