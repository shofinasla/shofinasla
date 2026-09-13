import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Layers, 
  Zap, 
  Globe, 
  Search, 
  TrendingUp, 
  Cpu, 
  ShoppingBag, 
  ShieldCheck, 
  Compass, 
  FileCode2, 
  Workflow, 
  Target, 
  ExternalLink,
  ChevronRight,
  User,
  HeartHandshake
} from 'lucide-react';
import { ProfileData } from '../types';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  profile: ProfileData;
  onNavigateHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  profile,
  onNavigateHome,
  onNavigateToSection
}) => {
  // Ensure page opens at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDiscussProject = () => {
    window.open(
      'https://wa.me/6285174241604?text=Halo%20Mas%20Shofi,%20saya%20telah%20membaca%20profil%20Anda%20di%20halaman%20About%20dan%20ingin%20berdiskusi%20tentang%20proyek%20website.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section 
        id="about-hero" 
        className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-sky-950/60 overflow-hidden"
        aria-label="Profil Profesional Ahmad Shofi Nasla"
      >
        {/* Subtle Radial Aura Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-[#0066ff]/20 via-[#00a3ff]/15 to-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-28 right-4 w-[320px] h-[240px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>PROFESSIONAL PERSONAL PROFILE</span>
              </div>

              {/* Main Headline (Strong, positioning-driven) */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
                Saya Tidak Hanya Membuat Website.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-[#00A3FF]">
                  Saya Membantu Bisnis Tampil Profesional.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Saya adalah <strong className="text-white font-semibold">{profile.name}</strong>, seorang Web Developer yang membantu pemilik bisnis, perusahaan, dan organisasi membangun website yang profesional, modern, responsive, dan relevan dengan kebutuhan bisnis mereka.
              </p>

              {/* Key Quick Facts Pill Grid */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#0a0f1e]/85 border border-sky-900/40 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold block">Fokus Utama</span>
                  <span className="text-xs font-bold text-white block">Web Development</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0a0f1e]/85 border border-sky-900/40 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold block">Pendekatan</span>
                  <span className="text-xs font-bold text-white block">Business-Driven Code</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0a0f1e]/85 border border-sky-900/40 space-y-0.5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold block">Status</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Terima Project Baru</span>
                  </span>
                </div>
              </div>

              {/* CTA Group */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  id="about-hero-cta-discuss"
                  onClick={handleDiscussProject}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>Diskusikan Project</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  id="about-hero-cta-projects"
                  onClick={() => {
                    const el = document.getElementById('about-projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1424] hover:bg-[#131c33] text-slate-200 hover:text-white font-medium text-sm border border-sky-900/50 hover:border-sky-500/50 transition-all"
                >
                  <span>Lihat Project</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>

              <p className="text-xs text-slate-400 pt-1">
                Berbicara langsung dengan pengembang website Anda — tanpa perantara atau birokrasi berbelit.
              </p>
            </div>

            {/* Right Visual: Identity Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md p-6 sm:p-8 rounded-2xl bg-[#0a0f1e]/90 border border-sky-900/50 shadow-2xl shadow-black/50 text-left space-y-6">
                
                {/* Header with Emblem */}
                <div className="flex items-center justify-between border-b border-sky-950/80 pb-5">
                  <BrandLogo size="lg" showText={false} />
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                      VERIFIED PROFILE
                    </span>
                    <span className="text-xs font-mono text-slate-400 block">
                      ID: SHOFINASLA
                    </span>
                  </div>
                </div>

                {/* Identity Summary */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-sky-400 font-semibold tracking-wider block">
                    IDENTITAS RESMI
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {profile.name}
                  </h2>
                  <p className="text-sm font-semibold text-sky-300 font-mono">
                    Web Developer & Digital Solutions Partner
                  </p>
                </div>

                {/* Narrative Excerpt */}
                <p className="text-xs text-slate-300 leading-relaxed border-l-2 border-sky-500 pl-3.5 py-0.5">
                  &ldquo;Membangun website berkelas bukan tentang menghabiskan budget berlebih, melainkan memastikan setiap elemen visual dan fungsional bekerja menghasilkan kepercayaan dan konversi.&rdquo;
                </p>

                {/* Highlights Table */}
                <div className="space-y-2 pt-2 border-t border-sky-950/80 text-xs">
                  <div className="flex justify-between py-1 border-b border-sky-950/50">
                    <span className="text-slate-400">Domisili</span>
                    <span className="text-white font-medium">Indonesia (Remote Nasional)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-950/50">
                    <span className="text-slate-400">Keahlian Inti</span>
                    <span className="text-white font-medium">Web Development</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-950/50">
                    <span className="text-slate-400">Arsitektur</span>
                    <span className="text-white font-medium">Modern React & TypeScript</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Infrastruktur</span>
                    <span className="text-white font-medium">Cloudflare Edge CDN</span>
                  </div>
                </div>

                {/* Bottom Verification Badge */}
                <div className="p-3 rounded-xl bg-[#060913] border border-sky-900/40 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Domain Resmi Terverifikasi</span>
                  </span>
                  <a
                    href="https://ahmad.shofinasla.workers.dev/about"
                    className="text-sky-400 font-mono hover:underline text-[10px]"
                  >
                    ahmad.shofinasla...
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. PERSONAL INTRODUCTION                                                  */}
      {/* ========================================================================= */}
      <section 
        id="about-intro" 
        className="py-20 bg-[#070b16] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>PERKENALAN PERSONAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Halo, Saya Shofi.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Saya membangun website bukan hanya sebagai tampilan digital, tetapi sebagai bagian penting dari bagaimana sebuah bisnis memperkenalkan dirinya kepada calon pelanggan, membangun kredibilitas, dan menutup transaksi.
              </p>

              <p>
                Dalam lanskap digital saat ini, saya bekerja dengan memadukan <strong className="text-white">Web Development</strong>, <strong className="text-white">Digital Marketing</strong>, <strong className="text-white">SEO</strong>, <strong className="text-white">AI</strong>, dan <strong className="text-white">E-Commerce</strong>. Namun di antara semua itu, <strong>Web Development adalah core positioning saya</strong>.
              </p>

              <p>
                Banyak pemilik bisnis merasa frustrasi ketika memesan website: alur komunikasi berbelit melalui perantara penjualan, pengerjaan yang tidak transparan, atau hasil akhir yang hanya terlihat bagus di mockup namun lambat saat dibuka di smartphone calon pelanggan.
              </p>

              <p>
                Di sinilah saya mengambil posisi yang berbeda. Saya adalah personal professional. Ketika Anda mempercayakan pembuatan website kepada saya, Anda berdiskusi langsung dengan orang yang merancang arsitektur kode, menata tata letak, dan memastikan performa website Anda berjalan optimal.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e] border-l-4 border-sky-500 border-y border-r border-sky-950 space-y-2 mt-8">
              <p className="text-sm sm:text-base italic text-slate-200">
                &ldquo;Bagi saya, website yang sukses bukanlah website yang paling banyak dijejali animasi berat, melainkan website yang paling cepat memberikan kejelasan kepada pengunjung mengenai siapa Anda, apa yang Anda tawarkan, dan mengapa mereka harus memilih Anda.&rdquo;
              </p>
              <span className="text-xs font-mono text-sky-400 block font-semibold">
                — Ahmad Shofi Nasla, Web Developer
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. MY APPROACH ("Cara Saya Melihat Sebuah Website")                       */}
      {/* ========================================================================= */}
      <section 
        id="about-approach" 
        className="py-20 bg-[#060913] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>FILOSOFI & CARA PANDANG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cara Saya Melihat Sebuah Website
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Sebuah website bisnis memiliki tanggung jawab strategis. Website harus jelas, berkecepatan tinggi, nyaman di smartphone, memiliki struktur informasi yang baik, membangun kepercayaan, dan memiliki tujuan bisnis yang terarah.
            </p>
          </div>

          {/* 6 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 01 — Clarity */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">01 — CLARITY</span>
              <h3 className="text-lg font-bold text-white">Kejelasan Pesan Utama</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pengunjung harus memahami penawaran bisnis Anda dalam 5 detik pertama. Saya menolak desain membingungkan yang menyembunyikan inti produk di balik gimmick visual.
              </p>
            </div>

            {/* 02 — Trust */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">02 — TRUST</span>
              <h3 className="text-lg font-bold text-white">Pengungkit Kredibilitas</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Website adalah cerminan profesionalisme usaha Anda. Desain yang rapi, tipografi bersih, dan bukti nyata menaikkan status bisnis Anda di mata mitra maupun klien korporat.
              </p>
            </div>

            {/* 03 — Performance */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">03 — PERFORMANCE</span>
              <h3 className="text-lg font-bold text-white">Kecepatan Tanpa Toleransi</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Website harus cepat dan nyaman digunakan. Setiap detik penundaan adalah hilangnya calon pembeli. Saya mengoptimalkan kode agar waktu muat berada di bawah 1,5 detik.
              </p>
            </div>

            {/* 04 — Experience */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">04 — EXPERIENCE</span>
              <h3 className="text-lg font-bold text-white">Pengalaman Pengguna (UX)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pengalaman pengguna harus diprioritaskan. Navigasi intuitif di smartphone memastikan pengunjung mudah mencari informasi dan tidak kebingungan saat ingin memesan.
              </p>
            </div>

            {/* 05 — Business */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">05 — BUSINESS</span>
              <h3 className="text-lg font-bold text-white">Tujuan Bisnis yang Jelas</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Setiap tombol dan alur diarahkan untuk menghasilkan hasil bisnis nyata: pertanyaan calon pembeli, booking tur, request penawaran harga, atau transaksi e-commerce.
              </p>
            </div>

            {/* 06 — Growth */}
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 hover:border-sky-500/40 transition-all space-y-3">
              <span className="text-xs font-mono text-sky-400 font-bold block">06 — GROWTH</span>
              <h3 className="text-lg font-bold text-white">Arsitektur Skalabel</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Website dibangun dengan kode bersih dan arsitektur modular yang dapat terus dikembangkan sesuai pertumbuhan skala dan kebutuhan bisnis Anda di masa depan.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. WHAT I DO                                                              */}
      {/* ========================================================================= */}
      <section 
        id="about-what-i-do" 
        className="py-20 bg-[#070b16] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>KEAHLIAN & SOLUSI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Apa yang Saya Kerjakan
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Saya menata keahlian secara berjenjang. Web Development merupakan fokus inti, didukung oleh keahlian pendukung untuk memastikan website Anda beroperasi maksimal di ranah komersial.
            </p>
          </div>

          {/* Primary Scope: Web Development */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0f1e]/90 border border-sky-500/30 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-950 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-sky-400 font-semibold tracking-wider block">
                  CORE FOCUS • PRIMARY EXPERTISE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Web Development
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono border border-sky-500/30 self-start sm:self-auto">
                Spesialisasi Utama
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">Company Profile</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Membangun kredibilitas resmi untuk CV, PT, biro wisata, klinik, dan korporat agar dipercaya calon klien B2B dan mitra kerja.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">Business Website</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pusat informasi komprehensif produk, legalitas, dan layanan operasional bisnis yang terstruktur rapi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">Landing Page Iklan</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Halaman satu arah berorientasi konversi tinggi untuk memaksimalkan hasil iklan Meta Ads, Google Ads, atau TikTok Ads.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">Product Catalog</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Showcase portofolio produk interaktif (seperti sablon/konveksi) tanpa potongan fee komisi marketplace.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">E-Commerce Experience</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Etalase belanja online yang ringkas, mudah ditelusuri calon pembeli, dan langsung terintegrasi WhatsApp checkout.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060913] border border-sky-900/40 space-y-1.5">
                <span className="text-sm font-bold text-white block">Custom Website & Redesign</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aplikasi web kustom sesuai alur bisnis atau perombakan total website lama agar kembali cepat dan modern.
                </p>
              </div>

            </div>
          </div>

          {/* Secondary Disciplines: Digital Marketing, SEO, AI, E-Commerce */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              KEAHLIAN PENDUKUNG (SECONDARY COMPLEMENTARY EXPERTISE)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Digital Marketing */}
              <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Digital Marketing</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Digital presence strategy</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Website conversion flow</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Marketing campaign support</span>
                  </li>
                </ul>
              </div>

              {/* SEO */}
              <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Search className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Search Engine (SEO)</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Technical SEO setup</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Search visibility index</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Semantic web hierarchy</span>
                  </li>
                </ul>
              </div>

              {/* AI */}
              <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">AI & Automation</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>AI-assisted workflow</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Process automation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Digital productivity speed</span>
                  </li>
                </ul>
              </div>

              {/* E-Commerce */}
              <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-sky-950/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">E-Commerce</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Online store architecture</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Product presentation UX</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Digital checkout experience</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. TOOLS & TECHNOLOGY                                                     */}
      {/* ========================================================================= */}
      <section 
        id="about-tech" 
        className="py-20 bg-[#060913] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>STACK TEKNOLOGI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools &amp; Technology
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Saya percaya teknologi adalah alat untuk mencapai tujuan bisnis Anda, bukan untuk dipamerkan secara berlebihan. Saya memilih perangkat lunak yang terbukti cepat, aman, dan dapat diandalkan.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">FRAMEWORK</span>
              <span className="text-base font-bold text-white block">React</span>
              <p className="text-[11px] text-slate-400">Komponen antarmuka modern yang modular & interaktif.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">BUILD TOOL</span>
              <span className="text-base font-bold text-white block">Vite</span>
              <p className="text-[11px] text-slate-400">Tool bundling super cepat dan efisien ukuran berkas.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">LANGUAGE</span>
              <span className="text-base font-bold text-white block">TypeScript</span>
              <p className="text-[11px] text-slate-400">Keandalan kode bebas bug melalui keamanan tipe ketat.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">STYLING</span>
              <span className="text-base font-bold text-white block">Tailwind CSS</span>
              <p className="text-[11px] text-slate-400">Desain responsif akurat untuk berbagai resolusi layar.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">INFRASTRUCTURE</span>
              <span className="text-base font-bold text-white block">Cloudflare</span>
              <p className="text-[11px] text-slate-400">Edge CDN global, proteksi keamanan SSL, & low latency.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0f1e]/90 border border-sky-950/80 hover:border-sky-500/40 transition-colors space-y-1.5">
              <span className="text-xs font-mono text-sky-400 font-bold block">VERSIONING</span>
              <span className="text-base font-bold text-white block">GitHub</span>
              <p className="text-[11px] text-slate-400">Manajemen source code profesional & backup data aman.</p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. PROJECT EXPERIENCE (Factual, Real Clients)                             */}
      {/* ========================================================================= */}
      <section 
        id="about-projects" 
        className="py-20 bg-[#070b16] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTOFOLIO & KLIEN NYATA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Project &amp; Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Berikut adalah klien nyata dari beragam sektor industri yang telah mempercayakan pembuatan dan pengembangan platform website mereka kepada saya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Client 1: CV. Fusena Jaya Tour & Event */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0f1e]/90 border border-sky-900/40 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 font-mono text-[11px] font-semibold border border-sky-500/20">
                    PARIWISATA & EVENT
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live Project</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    CV. Fusena Jaya Tour &amp; Event
                  </h3>
                  <span className="text-xs text-sky-300 font-medium block mt-0.5">
                    Biro Perjalanan Wisata &amp; Event Organizer
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pengembangan identitas digital dan platform company profile resmi untuk CV. Fusena Jaya Tour & Event guna memenangkan kepercayaan tender gathering korporat dan mempermudah wisatawan memesan paket tur nusantara secara langsung via WhatsApp.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-sky-950 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Katalog Paket Tour & Outbound Dinamis</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Profil Legalitas Usaha untuk Pengadaan B2B</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-950">
                <button
                  onClick={() => onNavigateToSection('clients')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#060913] hover:bg-sky-950/80 text-sky-300 hover:text-white border border-sky-900/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Lihat Studi Kasus Klien</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Client 2: Paradise Sablon */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0f1e]/90 border border-sky-900/40 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-[11px] font-semibold border border-cyan-500/20">
                    CUSTOM APPAREL
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live Project</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Paradise Sablon
                  </h3>
                  <span className="text-xs text-cyan-300 font-medium block mt-0.5">
                    Custom Apparel &amp; Sablon DTF
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Menyediakan Kaos Custom menggunakan sablon DTF original dengan desain simple dan berkualitas. Platform katalog interaktif ini membantu calon pembeli seragam kantor dan komunitas memilih jenis kain serta mengestimasi pesanan mereka.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-sky-950 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Showcase Portofolio Cetak Resolusi Tinggi</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Panduan Karakteristik Bahan Combed</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-950">
                <button
                  onClick={() => onNavigateToSection('clients')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#060913] hover:bg-sky-950/80 text-sky-300 hover:text-white border border-sky-900/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Lihat Studi Kasus Klien</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Client 3: SHRIMORA */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0f1e]/90 border border-sky-900/40 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-mono text-[11px] font-semibold border border-blue-500/20">
                    SEAFOOD EXPORT
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live Project</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    SHRIMORA
                  </h3>
                  <span className="text-xs text-blue-300 font-medium block mt-0.5">
                    Shrimp Processing &amp; Seafood Business
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;At SHRIMORA, we work closely with Indonesian shrimp farmers to ensure every shrimp is raised with care before entering our processing facility.&rdquo;
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Platform B2B korporat berstandar internasional yang menampilkan kapasitas cold chain, sertifikasi pangan ekspor, dan portal RFQ bagi buyer global.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-sky-950 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Spesifikasi Produk Standar Ekspor Global</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>B2B Request for Quotation (RFQ) Gateway</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-950">
                <button
                  onClick={() => onNavigateToSection('clients')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#060913] hover:bg-sky-950/80 text-sky-300 hover:text-white border border-sky-900/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Lihat Studi Kasus Klien</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. MY WORKING PROCESS ("Bagaimana Saya Bekerja")                          */}
      {/* ========================================================================= */}
      <section 
        id="about-process" 
        className="py-20 bg-[#060913] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Workflow className="w-3.5 h-3.5" />
              <span>METODOLOGI KERJA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bagaimana Saya Bekerja
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tiap tahap pengerjaan terencana dengan jelas dan transparan. Anda selalu mengetahui sampai di mana progres pembuatan website Anda.
            </p>
          </div>

          {/* 7-Step Horizontal / Vertical Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">01</span>
              <h3 className="text-sm font-bold text-white">Discovery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Memahami bisnis, target audience, kebutuhan, dan tujuan website.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">02</span>
              <h3 className="text-sm font-bold text-white">Planning</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Menentukan struktur halaman, konten, user flow, dan kebutuhan fungsional.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">03</span>
              <h3 className="text-sm font-bold text-white">Design</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Membangun visual hierarchy dan pengalaman pengguna yang nyaman.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">04</span>
              <h3 className="text-sm font-bold text-white">Development</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mengembangkan website dengan teknologi yang sesuai dan kode bersih.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">05</span>
              <h3 className="text-sm font-bold text-white">Testing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Memastikan website responsive, cepat, dan berfungsi dengan baik di semua gadget.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">06</span>
              <h3 className="text-sm font-bold text-white">Launch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Website siap dipublikasikan ke domain resmi Anda dengan sertifikat SSL aktif.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2 relative">
              <span className="text-xs font-mono text-sky-400 font-bold block">07</span>
              <h3 className="text-sm font-bold text-white">Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Website dapat terus dipantau dan dikembangkan sesuai pertumbuhan bisnis.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8. MY PRINCIPLES ("Saya percaya...")                                      */}
      {/* ========================================================================= */}
      <section 
        id="about-principles" 
        className="py-20 bg-[#070b16] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <Target className="w-3.5 h-3.5" />
              <span>PRINSIP PERSONAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Saya Percaya...
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Prinsip-prinsip mendasar yang menjadi pedoman saya dalam setiap baris kode dan keputusan desain yang saya ambil:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-3">
              <span className="text-xl font-mono text-sky-400 font-bold block">&ldquo;</span>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                Saya percaya website yang baik bukan yang paling ramai, tetapi yang paling jelas menyampaikan pesan.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Kejelasan selalu mengalahkan kehebohan visual yang tidak perlu. Pengunjung menghargai kemudahan menemukan informasi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-3">
              <span className="text-xl font-mono text-sky-400 font-bold block">&ldquo;</span>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                Saya percaya teknologi harus menyelesaikan masalah, bukan sekadar terlihat canggih.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Pilihan teknologi harus melayani efisiensi, kecepatan, dan kenyamanan pengguna—bukan sekadar tren sesaat yang membebani pemeliharaan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-3">
              <span className="text-xl font-mono text-sky-400 font-bold block">&ldquo;</span>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                Saya percaya website bisnis harus dibangun dengan memahami bisnisnya terlebih dahulu.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Coding tanpa memahami model bisnis dan siapa target pelanggannya hanya akan menghasilkan website pajangan yang sunyi pengunjung.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-3">
              <span className="text-xl font-mono text-sky-400 font-bold block">&ldquo;</span>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                Saya percaya komunikasi langsung dan transparansi adalah fondasi kesuksesan project.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ketika klien dan pengembang berbicara dalam frekuensi yang sama tanpa sekat perantara, hasil pengerjaan jauh lebih akurat dan tepat sasaran.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 9. WHY CLIENTS WORK WITH ME ("Kenapa Bekerja Dengan Saya?")               */}
      {/* ========================================================================= */}
      <section 
        id="about-why-me" 
        className="py-20 bg-[#060913] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>NILAI KERJA SAMA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kenapa Bekerja Dengan Saya?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fokus saya tertuju pada penciptaan nilai nyata bagi bisnis Anda, bukan sekadar menyelesaikan checklist teknis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Komunikasi Langsung</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Anda berdiskusi langsung dengan developer yang mengeksekusi proyek. Tidak ada salah paham dari rantai birokrasi sales.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Memahami Kebutuhan Bisnis</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Saya mendengarkan model bisnis dan tantangan penjualan Anda sebelum menyusun rekomendasi arsitektur website.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Pendekatan Custom</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bukan template asal tempel. Struktur halaman dan elemen visual disesuaikan dengan identitas brand serta target market Anda.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Perhatian Terhadap Detail</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Konsistensi jarak padding, pemilihan font berkelas, kontras warna yang nyaman di mata, dan interaksi yang halus.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Responsive & Mobile Ready</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Telah diuji dengan teliti di berbagai resolusi smartphone, tablet, dan laptop agar tampil proporsional tanpa cacat layout.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Kecepatan Sub-Detik</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aset gambar teroptimasi dan kode bersih memastikan pengunjung membuka halaman Anda secara instan tanpa loading lama.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">SEO Awareness</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Struktur heading semantik, OpenGraph preview, dan meta tag disiapkan agar website Anda siap terindeks mesin pencari Google.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Mudah Dikembangkan (Scalable)</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Arsitektur kode modular memudahkan Anda menambah fitur atau halaman baru seiring perkembangan bisnis di masa depan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 space-y-2">
              <span className="text-sm font-bold text-white block">Fokus Pada Hasil Bisnis</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Setiap bagian halaman dirancang untuk mempermudah calon pelanggan menghubungi Anda dan melakukan transaksi.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 10. PERSONAL BRAND / JOURNEY ("My Journey")                               */}
      {/* ========================================================================= */}
      <section 
        id="about-journey" 
        className="py-20 bg-[#070b16] relative border-b border-sky-950/60 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>EVOLUSI KEAHLIAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              My Journey
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Perkembangan fokus keahlian saya berevolusi secara terarah, dari penguasaan teknis dasar rekayasa web hingga memahami keseluruhan ekosistem kehadiran digital bisnis.
            </p>
          </div>

          {/* Journey Flow Cards */}
          <div className="space-y-4 max-w-4xl">
            
            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-bold shrink-0">
                TAHAP 01
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-white">
                  Web Development (Fondasi &amp; Rekayasa Teknis)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mendalami arsitektur frontend, interaksi JavaScript, semantic HTML, dan framework modern seperti React &amp; TypeScript untuk menghasilkan website yang kokoh dan berkinerja tinggi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-bold shrink-0">
                TAHAP 02
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-white">
                  Digital Marketing &amp; Conversion Flow
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Menyadari bahwa website hebat harus mendatangkan konversi, saya memperluas wawasan ke strategi pemasaran digital, alur psikologi pembeli, dan struktur penawaran yang persuasif.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-bold shrink-0">
                TAHAP 03
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-white">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mengintegrasikan kaidah Technical SEO, Core Web Vitals, dan metadata semantik agar website yang dibangun mudah ditemukan calon pelanggan secara organik di mesin pencari.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-950/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-bold shrink-0">
                TAHAP 04
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-white">
                  Artificial Intelligence (AI) &amp; Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Memanfaatkan AI untuk mengakselerasi alur kerja coding, otomasi repetitif, dan meningkatkan presisi waktu pengerjaan project bagi klien.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0f1e]/85 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-mono text-xs font-bold shrink-0">
                TAHAP 05
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-white">
                  E-Commerce &amp; Commercial Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Menyatukan seluruh pemahaman di atas untuk membangun pengalaman belanja digital yang mulus, katalog interaktif, dan kanal penjualan langsung bagi pelaku usaha.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION                                                     */}
      {/* ========================================================================= */}
      <section 
        id="about-final-cta" 
        className="py-20 bg-gradient-to-b from-[#060913] to-[#04060d] relative text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MULAI LANGKAH DIGITAL ANDA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sedang Mencari Partner untuk Membangun Website?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ceritakan kebutuhan bisnis Anda. Saya akan membantu menerjemahkannya menjadi website yang jelas, profesional, dan siap digunakan.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              id="about-cta-start-discussion"
              onClick={handleDiscussProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Mulai Diskusi</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              id="about-cta-view-projects"
              onClick={() => onNavigateToSection('clients')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0d1424] hover:bg-[#131c33] text-slate-200 hover:text-white font-medium text-sm border border-sky-900/50 hover:border-sky-500/50 transition-all"
            >
              <span>Lihat Project</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>✓ Respon Ramah &amp; Cepat</span>
            <span>•</span>
            <span>✓ Bebas Konsultasi Awal</span>
            <span>•</span>
            <span>✓ Transparansi Biaya</span>
          </div>

        </div>
      </section>

    </div>
  );
};
