import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  Info
} from 'lucide-react';

interface CostEstimatorSectionProps {
  whatsappNumber: string;
}

interface WebTypeOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: string;
  description: string;
}

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const CostEstimatorSection: React.FC<CostEstimatorSectionProps> = ({
  whatsappNumber
}) => {
  const webTypes: WebTypeOption[] = [
    {
      id: 'landing-page',
      name: 'Landing Page Konversi',
      basePrice: 1250000,
      baseDays: '3–5 hari kerja',
      description: 'Halaman tunggal terfokus untuk kampanye iklan atau promosi produk/jasa tertentu.'
    },
    {
      id: 'company-profile',
      name: 'Company Profile Bisnis',
      basePrice: 2450000,
      baseDays: '7–10 hari kerja',
      description: 'Website resmi 4–6 halaman (Beranda, Tentang, Layanan, Portofolio, Kontak).'
    },
    {
      id: 'katalog-produk',
      name: 'Katalog Produk Interaktif',
      basePrice: 3450000,
      baseDays: '10–14 hari kerja',
      description: 'Showcase puluhan produk/jasa dengan filter kategori & order langsung via WhatsApp.'
    },
    {
      id: 'web-app',
      name: 'Aplikasi Web / Sistem Kustom',
      basePrice: 5000000,
      baseDays: '14–25 hari kerja',
      description: 'Sistem operasional kustom, formulir reservasi terpadu, atau dashboard internal.'
    }
  ];

  const addOns: AddOnOption[] = [
    {
      id: 'gsc-seo',
      name: 'Setup Google Search Console & Sitemap',
      price: 250000,
      description: 'Pendaftaran domain ke Google agar nama bisnis langsung terindeks di mesin pencari.'
    },
    {
      id: 'copywriting',
      name: 'Penyusunan Copywriting & Penawaran Bisnis',
      price: 400000,
      description: 'Penulisan narasi penawaran, headline pemikat, dan struktur teks yang menjual.'
    },
    {
      id: 'multilingual',
      name: 'Dukungan Multi-Bahasa (ID / EN)',
      price: 600000,
      description: 'Menyajikan konten dalam Bahasa Indonesia & Bahasa Inggris untuk pasar global.'
    },
    {
      id: 'speed-boost',
      name: 'Ekstra Optimasi Kecepatan Sub-1 Detik',
      price: 350000,
      description: 'Audit & tuning khusus Core Web Vitals untuk skor performa 95+ di Google PageSpeed.'
    }
  ];

  const [selectedType, setSelectedType] = useState<string>('company-profile');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['gsc-seo']);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType = useMemo(() => {
    return webTypes.find((t) => t.id === selectedType) || webTypes[1];
  }, [selectedType]);

  const totalPrice = useMemo(() => {
    let total = currentType.basePrice;
    selectedAddOns.forEach((addOnId) => {
      const match = addOns.find((a) => a.id === addOnId);
      if (match) total += match.price;
    });
    return total;
  }, [currentType, selectedAddOns]);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const generateWhatsAppLink = () => {
    const selectedAddOnNames = selectedAddOns
      .map((id) => addOns.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Halo Mas Ahmad Shofi Nasla, saya telah mencoba kalkulator estimasi di website Anda:

- *Tipe Website:* ${currentType.name}
- *Estimasi Waktu:* ${currentType.baseDays}
- *Fitur Tambahan:* ${selectedAddOnNames || 'Tidak ada'}
- *Perkiraan Investasi:* ${formatIDR(totalPrice)}

Saya ingin konsultasi lebih lanjut mengenai kebutuhan website bisnis saya.`;

    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="py-20 bg-[#060913] relative border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARANSI BIAYA & ESTIMASI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Estimasi Biaya & Waktu Pengerjaan.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pilih jenis website dan fitur yang Anda butuhkan untuk mendapatkan perkiraan investasi awal secara terbuka dan transparan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Options Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Type */}
            <div className="bg-[#0a0f1e]/80 border border-sky-950/80 rounded-2xl p-6 space-y-4 shadow-lg">
              <span className="text-xs font-mono uppercase text-sky-400 font-semibold block">
                Langkah 1: Pilih Tipe Website
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {webTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border text-left transition-all relative ${
                        isSelected
                          ? 'bg-[#0e1938] border-[#00A3FF] shadow-md ring-1 ring-sky-500/40'
                          : 'bg-[#060913]/60 border-sky-950/80 hover:border-sky-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">
                          {type.name}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[#00A3FF] flex items-center justify-center text-slate-950">
                            <Check className="w-3 h-3 font-bold" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {type.description}
                      </p>
                      <span className="mt-2 text-xs font-mono text-sky-400 block font-semibold">
                        Mulai {formatIDR(type.basePrice)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Add-ons */}
            <div className="bg-[#0a0f1e]/80 border border-sky-950/80 rounded-2xl p-6 space-y-4 shadow-lg">
              <span className="text-xs font-mono uppercase text-sky-400 font-semibold block">
                Langkah 2: Fitur Tambahan (Opsional)
              </span>

              <div className="space-y-2.5">
                {addOns.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-start justify-between p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-[#0e1938]/90 border-sky-500/50'
                          : 'bg-[#060913]/60 border-sky-950/80 hover:bg-[#0c1429]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#00A3FF] border-[#00A3FF] text-slate-950'
                              : 'border-sky-800 bg-[#060913]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 font-bold" />}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-200 block">
                            {addon.name}
                          </span>
                          <span className="text-[11px] text-slate-400 block mt-0.5">
                            {addon.description}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-sky-400 font-semibold shrink-0 ml-3">
                        +{formatIDR(addon.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Estimate Summary Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#0a0f1e] border border-sky-500/40 rounded-2xl p-6 sm:p-7 space-y-6 shadow-2xl shadow-sky-950/50">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block">
                  Ringkasan Estimasi Investasi
                </span>
                <h3 className="text-2xl font-black text-white font-mono">
                  {formatIDR(totalPrice)}
                </h3>
                <p className="text-[11px] text-slate-400">
                  *Perkiraan awal transparan. Dapat disesuaikan dengan skala spesifik bisnis Anda.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913]/80 border border-sky-950 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Waktu Pengerjaan:</span>
                  </span>
                  <span className="font-semibold text-slate-200">
                    {currentType.baseDays}
                  </span>
                </div>

                <div className="border-t border-sky-950 pt-2 text-xs space-y-1">
                  <span className="text-slate-400 block">Paket Terpilih:</span>
                  <span className="font-semibold text-sky-300 block">
                    {currentType.name}
                  </span>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="border-t border-sky-950 pt-2 text-[11px] space-y-1">
                    <span className="text-slate-400 block">Fitur Tambahan ({selectedAddOns.length}):</span>
                    <ul className="space-y-0.5 text-slate-300">
                      {selectedAddOns.map((id) => (
                        <li key={id} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-sky-400" />
                          <span>{addOns.find((a) => a.id === id)?.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Inclusions */}
              <div className="space-y-2 text-xs text-slate-300">
                <span className="text-[11px] font-mono uppercase text-sky-400 block font-semibold">
                  Semua Paket Sudah Termasuk:
                </span>
                <div className="space-y-1 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-sky-400" />
                    <span>100% Responsif di Smartphone & Tablet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-sky-400" />
                    <span>Integrasi Tombol WhatsApp Fast-Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-sky-400" />
                    <span>Garansi Perbaikan Teknis 30 Hari</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Kirim Rincian Estimasi Ini ke WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>

              <div className="flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed bg-[#060913]/60 p-2.5 rounded-lg border border-sky-950">
                <Info className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Sistem pembayaran aman: DP 50% di awal, sisa 50% dilunasi setelah website selesai dan siap live.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
