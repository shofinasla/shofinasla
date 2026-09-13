export interface DedicatedService {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  cluster: string;
  badge: string;
  headline: string;
  subheadline: string;
  overview: string;
  whyNeeded: {
    title: string;
    points: { title: string; desc: string }[];
  };
  featuresIncluded: { title: string; desc: string }[];
  deliverables: string[];
  targetAudience: string[];
  workflow: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedCaseStudySlug: string;
  relatedCaseStudyName: string;
}

export const dedicatedServicesList: DedicatedService[] = [
  {
    id: 'website-umkm',
    slug: 'website-umkm',
    title: 'Jasa Pembuatan Website UMKM Profesional',
    metaTitle: 'Jasa Website UMKM Profesional | Ahmad Shofi Nasla',
    metaDescription: 'Jasa pembuatan website UMKM profesional oleh Ahmad Shofi Nasla. Cepat, mobile-friendly, terindeks Google, dan dirancang khusus untuk meningkatkan omzet dan closing via WhatsApp.',
    cluster: 'UMKM & Bisnis Lokal',
    badge: 'Khusus Usaha Mikro, Kecil & Menengah',
    headline: 'Tingkatkan Kelas Bisnis UMKM Anda dengan Website Resmi yang Terpercaya',
    subheadline: 'Bukan sekadar website pajangan, melainkan mesin etalase digital yang memudahkan calon pembeli melihat produk dan langsung menghubungi WhatsApp Anda.',
    overview: 'Banyak pelaku UMKM kehilangan calon pembeli potensial karena hanya mengandalkan media sosial atau katalog manual yang lambat. Layanan pembuatan website UMKM dari Ahmad Shofi Nasla dirancang khusus dengan mengutamakan kemudahan navigasi di ponsel, kecepatan akses tinggi di jaringan seluler, dan integrasi WhatsApp instan agar proses closing penjualan berlangsung cepat tanpa kendala teknis.',
    whyNeeded: {
      title: 'Mengapa Bisnis UMKM Wajib Memiliki Website Sendiri?',
      points: [
        {
          title: 'Membangun Kredibilitas & Menghilangkan Keraguan Transfer',
          desc: 'Calon pelanggan sering ragu mentransfer uang ke rekening bisnis baru. Website resmi berdomain sendiri menjadi bukti legalitas dan keseriusan operasional usaha Anda.'
        },
        {
          title: 'Mengurangi Beban Tanya-Jawab Admin hingga 60%',
          desc: 'Daftar produk, foto detail bahan, komparasi harga, dan testimoni tertata rapi di website, sehingga pembeli yang menghubungi WhatsApp sudah dalam posisi siap membeli.'
        },
        {
          title: 'Bebas dari Potongan Biaya Komisi Marketplace',
          desc: 'Transaksi pelanggan langsung diarahkan ke rekening dan WhatsApp bisnis Anda tanpa potongan komisi platform per transaksi yang membebani margin keuntungan.'
        },
        {
          title: 'Mudah Ditemukan di Google Pencarian Lokal',
          desc: 'Website dioptimalkan secara teknis agar bisnis Anda lebih mudah ditemukan oleh orang-orang di kota Anda yang sedang mencari produk terkait di Google.'
        }
      ]
    },
    featuresIncluded: [
      {
        title: 'Desain Mobile-First 100% Responsif',
        desc: 'Lebih dari 85% pembeli UMKM membuka web via HP. Tata letak dirancang agar nyaman dioperasikan satu jempol.'
      },
      {
        title: 'Kecepatan Sub-2 Detik (Cloudflare Edge)',
        desc: 'Situs langsung terbuka tanpa buffering lambat, menjaga pembeli tidak beralih ke toko kompetitor.'
      },
      {
        title: 'Tombol Pesan WhatsApp Otomatis',
        desc: 'Ketika tombol diklik, format chat sudah terisi nama produk yang dipilih pelanggan secara otomatis.'
      },
      {
        title: 'Technical SEO & Registrasi Google Search Console',
        desc: 'Struktur kode semantik yang rapi agar nama bisnis Anda segera terindeks di mesin pencari Google.'
      }
    ],
    deliverables: [
      'Halaman Utama (Beranda) Profesional dengan Storytelling Usaha',
      'Katalog Produk / Menu / Jasa Lengkap dengan Foto & Spesifikasi',
      'Profil Usaha, Cerita Pemilik, & Bukti Kualitas (Social Proof)',
      'Integrasi Tombol WhatsApp Fast-Order & Google Maps Lokasi',
      'Panduan Mandiri Pengelolaan Konten Website Sederhana'
    ],
    targetAudience: [
      'Konveksi, Sablon Kaos, & Produsen Fashion Lokal',
      'Usaha Makanan, Minuman, Frozen Food, & Oleh-Oleh Khas',
      'Jasa Reparasi, Bengkel, Salon, & Layanan Rumahan',
      'Toko Retail, Distributor Bahan Baku, & Pengrajin Kreatif'
    ],
    workflow: [
      { step: '01', title: 'Diskusi Kebutuhan Produk', desc: 'Kami mempelajari varian produk, target pembeli, dan keunggulan kompetitif UMKM Anda.' },
      { step: '02', title: 'Penyusunan Struktur & Konten', desc: 'Menata foto produk, deskripsi yang memikat, dan tombol alur transaksi yang ringkas.' },
      { step: '03', title: 'Pengembangan & Pengujian di HP', desc: 'Membangun website dengan React & Tailwind, memastikan kecepatan maksimal di jaringan 4G.' },
      { step: '04', title: 'Peluncuran & Indeks Google', desc: 'Website diluncurkan dengan domain resmi dan didaftarkan ke Google Search Console.' }
    ],
    faq: [
      {
        q: 'Apakah saya yang belum paham teknologi bisa mengelolanya?',
        a: 'Sangat bisa. Website dirancang efisien dan saya memberikan panduan sederhana untuk memperbarui teks atau foto produk.'
      },
      {
        q: 'Berapa lama proses pengerjaannya?',
        a: 'Umumnya pembuatan website UMKM membutuhkan waktu 5–10 hari kerja setelah materi foto dan data produk diterima.'
      }
    ],
    relatedCaseStudySlug: 'paradise-sablon',
    relatedCaseStudyName: 'Paradise Sablon — Custom Apparel & Sablon DTF'
  },
  {
    id: 'company-profile',
    slug: 'company-profile',
    title: 'Jasa Pembuatan Website Company Profile Perusahaan',
    metaTitle: 'Jasa Website Company Profile | Ahmad Shofi Nasla',
    metaDescription: 'Jasa pembuatan website company profile perusahaan profesional oleh Ahmad Shofi Nasla. Memperkuat citra korporat, memenangkan tender, dan meyakinkan klien B2B.',
    cluster: 'Korporat & Instansi',
    badge: 'Kredibilitas B2B & Rekanan Bisnis',
    headline: 'Bangun Kredibilitas Korporat & Menangkan Kepercayaan Tender Klien B2B',
    subheadline: 'Representasi digital resmi untuk PT, CV, biro konsultan, dan lembaga yang memposisikan perusahaan Anda sebagai rekanan bonafide dan terpercaya.',
    overview: 'Dalam transaksi antar-bisnis (B2B) dan pengadaan tender korporat, calon klien tidak hanya menilai harga penawaran, melainkan reputasi, keabsahan legalitas, dan rekam jejak pelaksanaan proyek. Website company profile dari Ahmad Shofi Nasla dirancang dengan pendekatan korporat modern: bersih, elegan, terstruktur, dan memiliki performa sub-detik untuk memastikan proposal bisnis Anda selalu unggul di mata dewan penilai.',
    whyNeeded: {
      title: 'Mengapa Perusahaan Anda Memerlukan Company Profile Digital Berkelas?',
      points: [
        {
          title: 'Syarat Mutlak Verifikasi Rekanan & Pengadaan Tender',
          desc: 'Perusahaan swasta dan instansi pemerintah selalu melakukan uji tuntas (due diligence) digital sebelum menandatangani kontrak kerja sama.'
        },
        {
          title: 'Menggantikan Brosur Fisik / PDF yang Sering Terabaikan',
          desc: 'Tautan website resmi dapat diakses instan oleh pengambil keputusan dari meja rapat mana pun tanpa perlu mengunduh file dokumen besar.'
        },
        {
          title: 'Memamerkan Portofolio Skala Besar Secara Interaktif',
          desc: 'Dokumentasi proyek, galeri sertifikasi mutu, dan capaian kerja dapat ditampilkan dalam visual resolusi tinggi yang meyakinkan.'
        },
        {
          title: 'Pemisahan Jalur Komunikasi Resmi & Fast-Response',
          desc: 'Menyediakan saluran formulir penawaran (RFQ) resmi bagi divisi pengadaan dan jalur WhatsApp cepat untuk tim operasional.'
        }
      ]
    },
    featuresIncluded: [
      {
        title: 'Arsitektur Informasi Korporat Berstandar Tinggi',
        desc: 'Penyusunan hierarki Tentang Kami, Visi-Misi, Tim Manajemen, dan Struktur Badan Hukum yang jelas.'
      },
      {
        title: 'Halaman Showcase Portofolio & Studi Kasus Proyek',
        desc: 'Dokumentasi riil hasil pengerjaan proyek lengkap dengan tantangan dan solusi yang dicapai.'
      },
      {
        title: 'Etalase Sertifikasi & Kepatuhan Standar Industri',
        desc: 'Menampilkan sertifikat ISO, izin operasional, atau standar keamanan mutu yang dimiliki perusahaan.'
      },
      {
        title: 'Sistem Inquiry / Request for Quotation (RFQ)',
        desc: 'Formulir terstruktur untuk mempermudah calon mitra korporat meminta penawaran kerja sama resmi.'
      }
    ],
    deliverables: [
      'Website Korporat Multi-Halaman Responsif dengan Desain Eksklusif',
      'Halaman Profil Perusahaan, Visi, Misi, Legalitas Badan Usaha, & Tim',
      'Halaman Layanan / Solusi Bisnis dengan Spesifikasi Teknis',
      'Galeri Portofolio Klien & Dokumentasi Proyek Terverifikasi',
      'Integrasi Google Maps Kantor, Kontak Email Domain, & WhatsApp Resmi'
    ],
    targetAudience: [
      'Perusahaan Biro Perjalanan Wisata & Event Organizer (EO)',
      'Kontraktor, Arsitek, & Penyedia Jasa Rekayasa Teknik',
      'Perusahaan Manufaktur, Pengolahan, & Ekspor-Impor',
      'Konsultan Manajemen, Hukum, Akuntansi, & Agensi Profesional'
    ],
    workflow: [
      { step: '01', title: 'Audit Citra & Kebutuhan B2B', desc: 'Menganalisis target mitra bisnis, syarat industri, dan pesan reputasi yang ingin ditegaskan.' },
      { step: '02', title: 'Perancangan Tata Letak Eksekutif', desc: 'Menyusun wireframe berkelas dengan palet warna korporat yang mencerminkan ketegasan profesional.' },
      { step: '03', title: 'Penyusunan Portofolio & Legalitas', desc: 'Mengintegrasikan data legalitas, sertifikat, dan foto hasil proyek beresolusi tinggi.' },
      { step: '04', title: 'Testing & Setup Infrastruktur Cloud', desc: 'Memastikan situs beroperasi dengan uptime 99.9% dan keamanan protokol SSL/HTTPS.' }
    ],
    faq: [
      {
        q: 'Apakah bisa menggunakan email resmi perusahaan dengan domain sendiri?',
        a: 'Bisa. Saya dapat membantu konfigurasi email profesional seperti info@namaperusahaan.co.id.'
      },
      {
        q: 'Bagaimana jika perusahaan kami belum memiliki materi teks lengkap?',
        a: 'Saya akan memandu Anda menyusun kerangka teks profil dan poin-poin layanan yang persuasif sesuai model bisnis Anda.'
      }
    ],
    relatedCaseStudySlug: 'fusena-jaya',
    relatedCaseStudyName: 'CV. Fusena Jaya Tour & Event — Biro Wisata & Corporate EO'
  },
  {
    id: 'landing-page',
    slug: 'landing-page',
    title: 'Jasa Pembuatan Landing Page Konversi Tinggi',
    metaTitle: 'Jasa Landing Page untuk Bisnis | Ahmad Shofi Nasla',
    metaDescription: 'Jasa pembuatan landing page konversi tinggi oleh Ahmad Shofi Nasla. Dioptimalkan untuk iklan Google Ads, Meta Ads, TikTok Ads dengan kecepatan super cepat dan alur psikologi pembeli.',
    cluster: 'Marketing & Iklan Berbayar',
    badge: 'ROAS & Conversion Focused',
    headline: 'Maksimalkan Anggaran Iklan Anda dengan Landing Page yang Menjual',
    subheadline: 'Dirancang menggunakan formula AIDA untuk memikat perhatian, membangun hasrat belanja, dan menuntun pengunjung menjadi pembeli riil.',
    overview: 'Mengalirkan traffic iklan berbayar (Meta Ads, Google Ads, TikTok Ads) ke website yang lambat atau akun media sosial yang rumit sering kali menjadi penyebab utama anggaran iklan terbuang sia-sia. Landing page dari Ahmad Shofi Nasla dibangun khusus dengan satu fokus tunggal: konversi. Waktu muat sub-detik mencegah pengunjung keluar sebelum halaman selesai dimuat, sementara struktur narasi persuasif mematahkan keraguan calon pembeli secara sistematis.',
    whyNeeded: {
      title: 'Mengapa Landing Page Khusus Jauh Lebih Efektif Dibanding Website Biasa untuk Iklan?',
      points: [
        {
          title: 'Waktu Muat Instan Mencegah Pentalan (Bounce Rate)',
          desc: 'Setiap detik penundaan muat halaman iklan mengurangi tingkat konversi hingga 20%. Landing page kami dibuat tanpa beban plugin berat.'
        },
        {
          title: 'Fokus Satu Arah Tanpa Menu yang Membingungkan',
          desc: 'Menghilangkan link navigasi keluar yang mengalihkan perhatian, menuntun pandangan pengunjung langsung ke penawaran utama.'
        },
        {
          title: 'Penerapan Formula Storytelling Penjualan (AIDA)',
          desc: 'Menyentuh titik masalah (Pain Points), menghadirkan solusi produk, menunjukkan bukti sosial, dan memberi pemicu tindakan (Call-to-Action).'
        },
        {
          title: 'Kesiapan Tracking Pixel & Tag Manager Lengkap',
          desc: 'Memasang kode analitik Meta Pixel dan Google Analytics secara presisi agar algoritma iklan dapat menemukan pembeli ideal Anda.'
        }
      ]
    },
    featuresIncluded: [
      {
        title: 'Struktur Alur Persuasif AIDA Teruji',
        desc: 'Attention (Judul memikat), Interest (Edukasi manfaat), Desire (Bukti kepuasan), Action (Tombol beli jelas).'
      },
      {
        title: 'Kompatibilitas Penuh Tracking Konversi',
        desc: 'Pemasangan event klik tombol WhatsApp agar data konversi terbaca akurat di dashboard Ads Manager.'
      },
      {
        title: 'Kecepatan Muat Ekstrem pada Perangkat Mobile',
        desc: 'Ringan, tanpa library berlebih, langsung tampil seketika saat diklik dari feed media sosial.'
      },
      {
        title: 'Section FAQ Pemecah Keberatan Konsumen',
        desc: 'Menjawab keraguan mengenai garansi, pengiriman, dan cara order sebelum pembeli sempat ragu.'
      }
    ],
    deliverables: [
      'Satu Halaman Promosi Tunggal (Single-Page Sales Flow) Eksklusif',
      'Copywriting Header Penawaran, Manfaat Utama, & Komparasi',
      'Galeri Foto/Video Testimoni Pelanggan & Jaminan Keamanan',
      'Tombol Call-to-Action (CTA) Mengambang (Sticky) & Tombol Utama',
      'Integrasi Event Tracking Meta Pixel / Google Analytics'
    ],
    targetAudience: [
      'Pengiklan Meta Ads, TikTok Ads, & Google Ads',
      'Peluncuran Produk Baru / Promo Paket Bundling Terbatas',
      'Penyedia Jasa Spesifik (Kursus, Event, Konsultasi, Renovasi)',
      'Brand Owner yang Ingin Menguji Validasi Pasar Produk Baru'
    ],
    workflow: [
      { step: '01', title: 'Analisis Penawaran & Target Pembeli', desc: 'Mempelajari masalah utama pelanggan dan memetakan angle komunikasi iklan yang paling memikat.' },
      { step: '02', title: 'Penyusunan Wireframe & Copywriting', desc: 'Merangkai struktur narasi penjualan dari judul atas hingga tombol checkout WhatsApp.' },
      { step: '03', title: 'Desain Visual & Integrasi Pixel', desc: 'Mewujudkan landing page dengan performa tinggi dan memasang kode tracking periklanan.' },
      { step: '04', title: 'Pengujian Split & Go-Live', desc: 'Memastikan seluruh tombol berfungsi lancar di iOS dan Android sebelum kampanye iklan diluncurkan.' }
    ],
    faq: [
      {
        q: 'Apakah bisa dihubungkan ke domain website yang sudah saya miliki?',
        a: 'Bisa sekali, misalnya dipasang pada subdomain promo.namabisnis.com atau namabisnis.com/promo.'
      },
      {
        q: 'Apakah sudah termasuk biaya iklan?',
        a: 'Layanan ini adalah jasa pembuatan landing page teknis. Anggaran iklan langsung Anda kelola sendiri di akun ads Anda.'
      }
    ],
    relatedCaseStudySlug: 'paradise-sablon',
    relatedCaseStudyName: 'Paradise Sablon — Custom Apparel & Order System'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'Jasa Website Toko Online & Katalog E-Commerce',
    metaTitle: 'Jasa Website Toko Online & E-Commerce | Ahmad Shofi Nasla',
    metaDescription: 'Jasa pembuatan website toko online & katalog e-commerce oleh Ahmad Shofi Nasla. Etalase mandiri tanpa komisi marketplace, terintegrasi katalog produk dan WhatsApp checkout.',
    cluster: 'E-Commerce & Retail Mandiri',
    badge: 'Mandiri Tanpa Potongan Biaya Komisi',
    headline: 'Miliki Toko Online Mandiri Tanpa Ketergantungan Biaya Komisi Marketplace',
    subheadline: 'Etalase produk eksklusif dengan sistem katalog cepat, pencarian kategori cerdas, dan checkout WhatsApp yang mempermudah pelanggan setia Anda.',
    overview: 'Mengembangkan brand retail modern memerlukan kanal penjualan mandiri. Di marketplace, pelanggan Anda disuguhkan produk tiruan kompetitor tepat di bawah ulasan produk Anda, sementara potongan komisi per pesanan terus meningkat. Website toko online mandiri dari Ahmad Shofi Nasla memberikan ruang eksklusif bagi brand Anda untuk memamerkan seluruh lini produk, mengamankan margin penuh, dan membangun basis data pelanggan loyalitas.',
    whyNeeded: {
      title: 'Mengapa Brand Anda Membutuhkan Website Toko Online Mandiri?',
      points: [
        {
          title: 'Mempertahankan Margin Profit 100% Milik Anda',
          desc: 'Tanpa potongan komisi platform per transaksi, setiap rupiah keuntungan dari penjualan berulang menjadi hak penuh bisnis Anda.'
        },
        {
          title: 'Eksklusivitas Brand Tanpa Gangguan Produk Kompetitor',
          desc: 'Pengunjung hanya melihat koleksi resmi brand Anda, tanpa banner rekomendasi harga murah dari toko sebelah.'
        },
        {
          title: 'Kepemilikan Penuh Database Pelanggan',
          desc: 'Anda memegang nomor kontak dan riwayat preferensi pelanggan untuk program promosi dan retensi jangka panjang.'
        },
        {
          title: 'Pengalaman Belanja Ringan Tanpa Aplikasi Berat',
          desc: 'Pelanggan dapat menjelajahi katalog langsung di peramban tanpa dipaksa mengunduh aplikasi marketplace yang menghabiskan memori.'
        }
      ]
    },
    featuresIncluded: [
      {
        title: 'Katalog Produk dengan Filter Kategori & Pencarian',
        desc: 'Pengunjung dapat memfilter berdasarkan varian, warna, ukuran, atau rentang harga secara instan.'
      },
      {
        title: 'Showcase Galeri Foto Resolusi Tinggi & Detail Bahan',
        desc: 'Tampilan foto produk tajam yang memperlihatkan tekstur dan detail kualitas jahitan/kemasan.'
      },
      {
        title: 'Sistem Fast Checkout WhatsApp Otomatis',
        desc: 'Pesanan dirangkum secara rapi ke WhatsApp admin lengkap dengan daftar produk, jumlah, dan total estimasi.'
      },
      {
        title: 'Arsitektur Ringan & Cepat Diakses',
        desc: 'Menggunakan teknologi frontend modern yang tidak lambat seperti CMS toko online konvensional.'
      }
    ],
    deliverables: [
      'Website Toko Online Mandiri Lengkap dengan Desain Sesuai Identitas Brand',
      'Halaman Katalog Produk dengan Filter Kategori & Pencarian Dinamis',
      'Halaman Detail Produk dengan Foto Multi-Sudut & Deskripsi Spesifikasi',
      'Keranjang Belanja / Ringkasan Pesanan Menuju WhatsApp Admin',
      'Integrasi Media Sosial & Lokasi Pengambilan Toko Fisik'
    ],
    targetAudience: [
      'Clothing Line, Produsen Sepatu, & Aksesori Fashion',
      'Produsen Makanan Kering, Kopi Kemasan, & Suplemen Herbal',
      'Pengrajin Furnitur, Dekorasi Rumah, & Karya Seni Eksklusif',
      'Distributor Alat Teknik, Komponen, & Perlengkapan Bisnis'
    ],
    workflow: [
      { step: '01', title: 'Pemetaan Struktur Produk', desc: 'Menentukan kategori produk, atribut varian (ukuran/warna), dan alur pemesanan ideal.' },
      { step: '02', title: 'Desain Tata Letak Katalog', desc: 'Merancang antarmuka etalase yang bersih dan mempermudah pembeli menemukan produk idaman.' },
      { step: '03', title: 'Implementasi Keranjang & WhatsApp', desc: 'Membangun fungsionalitas pemilihan varian dan perangkum pesanan otomatis.' },
      { step: '04', title: 'Peluncuran & Pelatihan Pengelolaan', desc: 'Meluncurkan website dan memandu tim Anda mengelola data katalog produk.' }
    ],
    faq: [
      {
        q: 'Apakah pembeli harus membuat akun yang rumit untuk memesan?',
        a: 'Tidak perlu. Sistem dirancang seringkas mungkin agar pembeli dapat langsung memesan via WhatsApp tanpa repot mengingat password akun.'
      },
      {
        q: 'Bisakah diintegrasikan dengan payment gateway otomatis di kemudian hari?',
        a: 'Sangat bisa. Arsitektur kode kami modular sehingga siap ditingkatkan ke sistem pembayaran otomatis kapan pun bisnis Anda siap.'
      }
    ],
    relatedCaseStudySlug: 'shrimora',
    relatedCaseStudyName: 'SHRIMORA — B2B Seafood Processing & Export Quality'
  }
];
