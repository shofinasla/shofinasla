import { ProfileData, Project, SkillCategory, ExperienceItem, ClientCaseStudy, ServiceItem, FAQItem, TestimonialItem } from '../types';

export const initialProfile: ProfileData = {
  username: 'shofinasla',
  name: 'Ahmad Shofi Nasla',
  title: 'Professional Web Developer & Digital Solutions Partner',
  headline: 'Membantu Bisnis & UMKM Memiliki Website Modern yang Kredibel, Cepat, dan Menghasilkan Pelanggan.',
  bio: 'Saya adalah Web Developer asal Indonesia yang berspesialisasi dalam merancang dan mengembangkan website bisnis, landing page konversi tinggi, dan aplikasi web kustom. Saya tidak hanya membuat website yang menarik secara visual, tetapi juga memastikan arsitektur teknis yang cepat, mobile-friendly, terindeks Google, dan siap mendatangkan closing penjualan.',
  email: 'Shofinasla@gmail.com',
  whatsappNumber: '+62 851-7424-1604',
  whatsappUrl: 'https://wa.me/6285174241604?text=Halo%20Mas%20Ahmad%20Shofi%20Nasla,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20untuk%20bisnis%20saya.',
  location: 'Indonesia (Melayani Klien Seluruh Indonesia & Remote Global)',
  status: 'Siap Menerima Proyek Website Baru',
  avatarUrl: '/profil.png',
  instagramUrl: 'https://www.instagram.com/shofi_nasla',
  youtubeUrl: '#',
  tiktokUrl: 'https://www.tiktok.com/@shofi_nasla',
  githubUrl: 'https://github.com/shofinasla',
  linkedinUrl: 'https://linkedin.com/in/shofinasla',
  websiteUrl: 'https://ahmad.shofinasla.workers.dev/',
  interests: [
    'Jasa Pembuatan Website Bisnis & UMKM',
    'Landing Page Berorientasi Konversi Tinggi',
    'Modern React & TypeScript Architecture',
    'Technical SEO & Google Search Console',
    'UI/UX Design Systems & Mobile Optimization'
  ],
  learning: [
    'Next.js 15 Server Components & Dynamic Edge Cache',
    'Advanced Web Vitals & Sub-Second Latency Optimization',
    'Automated WhatsApp API & CRM Integration'
  ],
  collaboratingOn: [
    'Website Company Profile Perusahaan & Lembaga',
    'Katalog Digital & Sistem Pemesanan Bisnis Lokal',
    'Aplikasi Web & Dashboard Operasional Bisnis'
  ],
  reachOutFor: [
    'Konsultasi Pembuatan Website Baru',
    'Redesign & Optimasi Kecepatan Website Lama',
    'Pengembangan Landing Page Iklan (Google / Meta Ads)'
  ]
};

export const realClientCaseStudies: ClientCaseStudy[] = [
  {
    id: 'fusena-jaya',
    clientName: 'CV. Fusena Jaya Tour & Event',
    category: 'Travel & Event Organizer',
    industry: 'Pariwisata, Corporate Gathering & Outbound',
    tagline: 'Company Profile & Sistem Booking Wisata Terpadu',
    summary: 'Pengembangan identitas digital dan platform company profile resmi untuk CV. Fusena Jaya Tour & Event guna memenangkan kepercayaan tender gathering korporat dan mempermudah wisatawan memesan paket tur.',
    challenge: 'Sebelumnya, promosi paket tur hanya mengandalkan brosur PDF dan media sosial yang sering tenggelam. Calon klien korporat (B2B) memerlukan bukti legalitas resmi perusahaan, katalog armada & paket lengkap, serta akses cepat reservasi yang terhubung langsung ke tim marketing.',
    solution: 'Membangun website company profile berkecepatan tinggi dengan navigasi paket tur berbasis destinasi, portofolio dokumentasi event gathering berskala besar, sertifikasi legalitas usaha, dan tombol fast-checkout langsung terhubung ke admin WhatsApp dengan pesan otomatis sesuai paket yang dipilih.',
    results: [
      'Peningkatan kredibilitas saat presentasi proposal tender corporate gathering instansi & swasta',
      'Alur pemesanan tur via WhatsApp meningkat dengan format data reservasi yang langsung rapi',
      'Waktu muat website < 1.2 detik memudahkan calon wisatawan membuka via jaringan seluler di mana pun'
    ],
    features: [
      'Katalog Paket Wisata Dinamis (Family, Corporate, Outbound, Custom Tour)',
      'Dokumentasi Galeri & Testimoni Klien Korporat',
      'One-Click WhatsApp Booking Generator dengan parameter paket otomatis',
      'Halaman Legalitas & Profil Perusahaan untuk Kebutuhan Pengadaan/Tender'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business Link Protocol', 'Cloudflare Edge CDN'],
    liveStatus: 'Project Selesai & Beroperasi',
    testimonial: {
      quote: 'Website yang dibuat Mas Ahmad Shofi Nasla sangat membantu kredibilitas CV. Fusena Jaya saat kami mengajukan proposal ke instansi korporat. Tampilannya elegan, sangat cepat dibuka di HP, dan tamu kami mudah sekali booking paket tur.',
      person: 'Manajemen Operasional',
      title: 'CV. Fusena Jaya Tour & Event'
    }
  },
  {
    id: 'paradise-sablon',
    clientName: 'Paradise Sablon',
    category: 'Custom Apparel & Konveksi',
    industry: 'Industri Kreatif, Sablon Kaos & Merchandise',
    tagline: 'Showcase Portofolio Sablon & Katalog Bahan Interaktif',
    summary: 'Platform katalog digital dan panduan edukasi sablon profesional untuk Paradise Sablon agar calon pelanggan dapat memilih bahan, teknik sablon, dan mengestimasi pesanan seragam atau kaos komunitas.',
    challenge: 'Calon pelanggan sering kebingungan membedakan jenis bahan kaos (Cotton Combed 24s/30s) dan teknik sablon (Plastisol, DTF, Discharge). Admin WhatsApp sering kelelahan membalas pertanyaan dasar yang berulang mengenai harga per lusin dan contoh sampel kain.',
    solution: 'Mendesain website visual-rich dengan galeri hasil cetak resolusi tinggi, panduan interaktif karakteristik bahan kaos, komparasi kelebihan tiap metode cetak sablon, serta formulir pra-pemesanan yang menghitung estimasi jumlah dan mengirimkan data spesifik ke admin.',
    results: [
      'Mengurangi beban tanya-jawab repetitif admin hingga 60% karena materi edukasi sudah lengkap di website',
      'Klien komunitas dan clothing line merasa jauh lebih percaya melihat katalog riil hasil produksi',
      'Meningkatkan pesanan partai besar (volume order) dari luar kota'
    ],
    features: [
      'Katalog Foto Portofolio Hasil Cetak Resolusi Tinggi (Zoom & Detail Tekstur)',
      'Panduan Interaktif Jenis Kain (Combed 24s, 30s, Fleece, Lacoste)',
      'Komparasi Teknik Sablon (DTF, Plastisol, Rubber, Polyflex)',
      'Formulir Konsultasi Desain & Request Penawaran Harga Custom'
    ],
    techStack: ['React', 'Tailwind CSS', 'Interactive Media Lightbox', 'Mobile-First Layout', 'SEO Local Business'],
    liveStatus: 'Project Selesai & Beroperasi',
    testimonial: {
      quote: 'Dulu repot kirim foto sampel satu per satu lewat WhatsApp. Sekarang tinggal kasih link website kami, klien langsung percaya dengan kualitas sablon Paradise Sablon dan order seragam mereka langsung deal.',
      person: 'Owner & Head of Production',
      title: 'Paradise Sablon'
    }
  },
  {
    id: 'shrimora',
    clientName: 'SHRIMORA',
    category: 'Seafood Export & Aquaculture',
    industry: 'Pengolahan Udang, Cold Chain & Ekspor Hasil Laut',
    tagline: 'B2B Corporate Export Platform & Quality Standard Showcase',
    summary: 'Website representatif bertaraf internasional untuk SHRIMORA yang menampilkan kapasitas pabrik pengolahan udang, standar higienitas ekspor, rantai pasok dingin (cold chain), dan gateway inquiry bagi buyer global.',
    challenge: 'Industri ekspor perikanan menuntut standar kepercayaan internasional yang ketat. Buyer asing (Jepang, AS, Eropa) dan distributor lokal perlu memverifikasi sertifikasi keamanan pangan (HACCP, GMP), spesifikasi varietas udang (Vannamei/Black Tiger), serta komitmen keberlanjutan sebelum mengirimkan RFQ (Request for Quotation).',
    solution: 'Membangun platform korporat B2B yang clean, berkelas, dan informatif. Menyajikan alur proses dari tambak ke pembekuan (IQF / Block Frozen), dokumen kepatuhan mutu internasional, video penanganan mutu pabrik, serta formulir RFQ terstruktur untuk importir komersial.',
    results: [
      'Memposisikan SHRIMORA sebagai produsen olahan udang premium yang siap bersaing di pasar ekspor global',
      'Mempermudah buyer korporat mengunduh spesifikasi produk dan lembar data teknis mutu pangan',
      'Menampilkan transparansi sistem cold chain yang menjadi syarat utama buyer perikanan dunia'
    ],
    features: [
      'Spesifikasi Produk Ekspor (Head-On, Headless, PND, Block Frozen, IQF)',
      'Dokumentasi Sertifikasi Internasional & Sistem Manajemen Mutu',
      'Alur Pelayanan Rantai Pasok Dingin (Farm to Storage)',
      'B2B Request for Quotation (RFQ) Formal Inquiry Portal'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'High-Performance CDN', 'Structured B2B Architecture'],
    liveStatus: 'Project Selesai & Beroperasi',
    testimonial: {
      quote: 'Sebagai perusahaan yang menyasar pasar ekspor perikanan, citra profesional dan kejelasan standar mutu di website sangat krusial. Ahmad Shofi Nasla berhasil menerjemahkan skala industri SHRIMORA menjadi website yang sangat berkelas.',
      person: 'Corporate Business Development',
      title: 'SHRIMORA Indonesia'
    }
  }
];

export const detailedServices: ServiceItem[] = [
  {
    id: 'company-profile',
    title: 'Website Company Profile',
    shortDesc: 'Bangun kredibilitas instan untuk perusahaan, CV, PT, lembaga, atau bisnis jasa profesional Anda.',
    description: 'Bukan sekadar informasi kontak, melainkan etalase digital yang meyakinkan klien bahwa perusahaan Anda bonafide, berbadan hukum jelas, memiliki portofolio teruji, dan layak menjadi rekanan bisnis.',
    deliverables: [
      'Desain modern, eksklusif, dan disesuaikan dengan warna identitas brand',
      'Halaman Tentang Kami, Layanan, Tim/Legalitas, Portofolio, & Kontak',
      'Integrasi Google Maps lokasi kantor & tombol WhatsApp langsung',
      'Kecepatan muat sub-2 detik & 100% responsif di smartphone, tablet, laptop',
      'Setup Google Search Console agar nama perusahaan langsung muncul di Google'
    ],
    idealFor: 'CV, PT, Kontraktor, Konsultan, Tour & Travel, Klinik, dan Lembaga',
    iconName: 'Building2',
    featured: true
  },
  {
    id: 'landing-page',
    title: 'Landing Page Konversi Tinggi',
    shortDesc: 'Halaman promosi spesifik yang dirancang khusus untuk mengubah lalu lintas iklan menjadi pembeli.',
    description: 'Dirancang dengan prinsip copywriting persuasif (AIDA) dan struktur alur psikologi pembeli. Sangat cocok untuk Anda yang menjalankan iklan berbayar (Meta Ads, Google Ads, TikTok Ads) dan menginginkan ROAS maksimal.',
    deliverables: [
      'Struktur Single-Page dengan alur storytelling penjualan yang memikat',
      'Copywriting penawaran, penegasan manfaat, bukti sosial, & FAQ pemecah keraguan',
      'Tombol Call to Action (CTA) strategis yang menuntun pengunjung ke WhatsApp',
      'Integrasi tracking Meta Pixel / Google Tag Manager / Analytics',
      'Super ringan dan cepat dibuka tanpa buffering saat diklik dari iklan'
    ],
    idealFor: 'Pebisnis Online, Launching Produk Baru, Jasa Khusus, & Promo Event',
    iconName: 'Target',
    featured: true
  },
  {
    id: 'digital-catalog',
    title: 'Katalog Produk & Portofolio Interaktif',
    shortDesc: 'Pamerkan puluhan hingga ratusan produk atau karya Anda tanpa potongan komisi marketplace.',
    description: 'Solusi bagi bisnis konveksi, furnitur, manufaktur, kuliner, atau fashion yang ingin memajang varian produk secara elegan dan mempermudah pelanggan memilih spesifikasi sebelum memesan via WhatsApp.',
    deliverables: [
      'Katalog dengan fitur pencarian cepat dan filter kategori',
      'Tampilan foto produk resolusi tinggi dengan deskripsi bahan & spesifikasi',
      'Tombol "Pesan Produk Ini via WhatsApp" yang otomatis membawa nama & kode produk',
      'Navigasi mulus tanpa reload halaman yang berat',
      'Panduan mudah untuk update produk secara mandiri'
    ],
    idealFor: 'Konveksi/Sablon, Pengrajin, Produsen Makanan, Galeri Seni, & Supplier',
    iconName: 'ShoppingBag'
  },
  {
    id: 'web-app',
    title: 'Aplikasi Web & Sistem Kustom',
    shortDesc: 'Sistem operasional digital terotomatisasi yang mempermudah alur kerja bisnis Anda.',
    description: 'Solusi perangkat lunak berbasis web untuk kebutuhan bisnis yang tidak dapat diselesaikan oleh website brosur biasa, seperti kalkulator estimasi biaya, formulir reservasi terpusat, atau dashboard internal.',
    deliverables: [
      'Frontend modern menggunakan React & TypeScript',
      'Formulir interaktif multi-step dengan validasi data real-time',
      'Dashboard manajemen data, reporting, atau monitoring operasional',
      'Integrasi API pihak ketiga (payment gateway, webhook, CRM, email)',
      'Arsitektur skalabel, aman, dan siap dikembangkan jangka panjang'
    ],
    idealFor: 'Startup, Bisnis dengan Alur Booking Khusus, & Sistem Manajemen Internal',
    iconName: 'Cpu'
  },
  {
    id: 'redesign-optimization',
    title: 'Redesign & Optimasi Kecepatan',
    shortDesc: 'Revitalisasi website lama Anda agar kembali relevan, cepat, dan mendatangkan pelanggan.',
    description: 'Apakah website Anda lambat saat dibuka di HP, tampilannya terlihat seperti era 2010, atau sering error? Kami lakukan perombakan total dari sisi tampilan, kecepatan muat, hingga alur konversi.',
    deliverables: [
      'Audit mendalam Core Web Vitals dan kecepatan loading',
      'Modernisasi UI/UX dengan tata letak kontemporer dan bersih',
      'Optimasi kompresi gambar, penghapusan skrip usang yang membebani',
      'Perbaikan responsivitas pada layar smartphone modern',
      'Migrasi ke teknologi modern yang hemat biaya hosting'
    ],
    idealFor: 'Pemilik website lama WordPress/Blogger yang lambat atau usang',
    iconName: 'Zap'
  }
];

export const frequentlyAskedQuestions: FAQItem[] = [
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk membuat website?',
    answer: 'Untuk Landing Page biasanya selesai dalam 3–7 hari kerja. Website Company Profile standar memakan waktu 7–14 hari kerja, sedangkan aplikasi web atau sistem kustom membutuhkan 2–4 minggu tergantung kompleksitas fitur yang disepakati. Saya selalu menetapkan tenggat waktu yang realistis dan memberikan progres secara berkala.'
  },
  {
    question: 'Apakah saya perlu menyediakan domain dan hosting sendiri?',
    answer: 'Bisa keduanya! Jika Anda sudah memiliki domain (.com, .id, .co.id) dan hosting sendiri, saya siap mengintegrasikannya. Jika Anda belum punya dan tidak ingin repot, saya dapat membantu proses registrasi domain pilihan Anda dan merekomendasikan infrastruktur cloud modern (seperti Cloudflare Edge CDN) yang aman, cepat, dan hemat biaya.'
  },
  {
    question: 'Apakah website buatan Mas Ahmad bisa dibuka dengan sempurna di smartphone?',
    answer: 'Pasti! Lebih dari 80% pengunjung web di Indonesia mengakses lewat smartphone. Karena itu, saya menerapkan pendekatan Mobile-First. Setiap elemen, tombol, teks, dan gambar diuji secara ketat agar tampil rapi, mudah disentuh, dan sangat cepat di berbagai resolusi layar HP.'
  },
  {
    question: 'Apakah website sudah terpasang SEO agar muncul di Google?',
    answer: 'Ya! Seluruh website dibangun dengan kaidah Technical SEO: struktur tag HTML semantik (H1, H2, H3), meta description, OpenGraph untuk preview media sosial, sitemap.xml otomatis, robots.txt, dan panduan verifikasi ke Google Search Console agar halaman Anda segera terindeks mesin pencari.'
  },
  {
    question: 'Bagaimana alur pembayaran jasanya?',
    answer: 'Pembayaran dilakukan secara aman dan bertahap: DP (Down Payment) sebesar 50% di awal sebagai komitmen dimulainya pengerjaan, dan pelunasan 50% sisanya setelah website selesai diuji, Anda puas dengan hasilnya, dan website siap diluncurkan secara resmi ke publik.'
  },
  {
    question: 'Apakah ada garansi atau panduan setelah website selesai diluncurkan?',
    answer: 'Tentu ada. Saya memberikan masa garansi perbaikan bug/kendala teknis gratis selama 30 hari pasca peluncuran. Selain itu, saya juga menyediakan panduan singkat cara mengelola konten serta siap dihubungi kapan saja jika Anda membutuhkan pengembangan fitur di masa depan.'
  }
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Manajemen Operasional',
    company: 'CV. Fusena Jaya Tour & Event',
    role: 'Penyedia Layanan Wisata & Event',
    text: 'Website dari Mas Shofi membuat bisnis kami terlihat jauh lebih meyakinkan di mata instansi dan korporasi. Informasi paket wisata tertata rapi, dan calon wisatawan langsung terhubung ke WhatsApp kami tanpa bingung.',
    rating: 5,
    projectType: 'Company Profile & Tour Booking'
  },
  {
    id: 't-2',
    clientName: 'Owner & Produksi',
    company: 'Paradise Sablon',
    role: 'Konveksi & Sablon Custom',
    text: 'Admin WhatsApp kami sangat terbantu! Calon klien sekarang bisa melihat langsung katalog contoh sablon dan spesifikasi kain di website sebelum memesan. Closing pesanan kaos partai besar jadi jauh lebih cepat.',
    rating: 5,
    projectType: 'Katalog Portofolio & Sistem Order'
  },
  {
    id: 't-3',
    clientName: 'Corporate Representative',
    company: 'SHRIMORA',
    role: 'Seafood Processing & Export Quality',
    text: 'Untuk industri ekspor hasil laut, reputasi internasional adalah segalanya. Website SHRIMORA berhasil merepresentasikan standar mutu ekspor dan fasilitas pabrik kami dengan sangat elegan dan profesional.',
    rating: 5,
    projectType: 'B2B International Corporate Web'
  }
];

export const initialProjects: Project[] = [
  {
    id: 'client-fusena',
    title: 'CV. Fusena Jaya Tour & Event - Platform Wisata & Event',
    description: 'Website resmi company profile dan katalog paket wisata terintegrasi WhatsApp booking langsung untuk agensi perjalanan dan corporate event.',
    fullDescription: 'Membangun kehadiran digital komprehensif bagi CV. Fusena Jaya. Memuat katalog paket tour nusantara, outbound, gathering perusahaan, legalitas resmi usaha, galeri dokumentasi, dan integrasi WhatsApp fast-order.',
    category: 'Client Project',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business', 'SEO'],
    stars: 36,
    forks: 12,
    featured: true,
    demoUrl: 'https://ahmad.shofinasla.workers.dev/',
    highlights: [
      'Alur reservasi WhatsApp satu klik dengan pre-filled paket',
      'Kecepatan loading optimal di jaringan seluler < 1.2s',
      'Struktur presentasi profil korporat untuk proposal tender'
    ],
    date: '2025'
  },
  {
    id: 'client-paradise',
    title: 'Paradise Sablon - Katalog & Edukasi Custom Apparel',
    description: 'Showcase portofolio hasil sablon kaos, panduan bahan kain, dan sistem konsultasi pesanan konveksi merchandise.',
    fullDescription: 'Menyediakan etalase digital visual-rich bagi calon pemesan seragam kantor, kaos komunitas, dan clothing line untuk melihat mutu cetak sablon, karakteristik kain combed, dan mengestimasi pesanan.',
    category: 'Client Project',
    tags: ['Tailwind CSS', 'React', 'Mobile UX', 'Catalog Filter', 'Conversion'],
    stars: 28,
    forks: 9,
    featured: true,
    demoUrl: 'https://ahmad.shofinasla.workers.dev/',
    highlights: [
      'Katalog foto resolusi tinggi dengan detail tekstur sablon',
      'Panduan edukasi komparasi bahan untuk memotong waktu tanya-jawab',
      'Formulir konsultasi desain langsung terhubung ke admin produksi'
    ],
    date: '2025'
  },
  {
    id: 'client-shrimora',
    title: 'SHRIMORA - B2B Seafood Processing & Export Quality',
    description: 'Platform representatif B2B ekspor olahan udang bertaraf internasional dengan standar mutu higienitas dan cold chain.',
    fullDescription: 'Pengembangan platform korporat B2B yang menyajikan kapasitas fasilitas cold storage, standar pangan dunia (HACCP/GMP), varietas produk udang beku ekspor, dan saluran RFQ buyer internasional.',
    category: 'Client Project',
    tags: ['B2B Web', 'React', 'TypeScript', 'Global Standards', 'Enterprise'],
    stars: 45,
    forks: 14,
    featured: true,
    demoUrl: 'https://ahmad.shofinasla.workers.dev/',
    highlights: [
      'Citra eksklusif standar ekspor bagi buyer global',
      'Showcase sistem penanganan rantai dingin (cold chain) & higienitas',
      'Portal permintaan penawaran (RFQ) B2B internasional'
    ],
    date: '2026'
  },
  {
    id: 'proj-pulse',
    title: 'PulseStack - Real-Time Agile Workspace',
    description: 'Aplikasi web manajemen proyek dan kolaborasi tim modern dengan Kanban board, Markdown docs, dan analytics.',
    fullDescription: 'Platform kolaborasi tim perangkat lunak dengan sinkronisasi state real-time, drag-and-drop workflow, markdown documentation hubs, dan performa tinggi.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    stars: 42,
    forks: 14,
    featured: false,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      'Sub-50ms real-time board state updates',
      'End-to-end type safety across client and server'
    ],
    date: '2025'
  },
  {
    id: 'proj-novaui',
    title: 'NovaUI Design System',
    description: 'Kumpulan komponen UI React yang aksesibel, modular, dan ringan untuk mempercepat pengembangan website bisnis.',
    fullDescription: 'Design system yang dirancang dengan kepatuhan WAI-ARIA, mendukung mode gelap/terang, dan integrasi Tailwind CSS untuk website responsif.',
    category: 'Frontend',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Vite'],
    stars: 89,
    forks: 23,
    featured: false,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      '100% WCAG AA compliant contrast and testing',
      'Ukuran bundle minified sangat ringan di bawah 15kb'
    ],
    date: '2025'
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    name: 'Frontend & UI/UX Development',
    icon: 'Layout',
    skills: [
      { name: 'React & Next.js', level: 95, experience: '4+ thn', featured: true },
      { name: 'TypeScript & JavaScript', level: 94, experience: '4+ thn', featured: true },
      { name: 'Tailwind CSS & Modern CSS', level: 96, experience: '4+ thn', featured: true },
      { name: 'Mobile-First Responsive Design', level: 98, experience: '5+ thn', featured: true },
      { name: 'Technical SEO & Core Web Vitals', level: 92, experience: '3+ thn', featured: true },
      { name: 'UI/UX Wireframing & Prototyping', level: 88, experience: '3+ thn' }
    ]
  },
  {
    name: 'Backend & Integrasi Bisnis',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express API', level: 90, experience: '3+ thn', featured: true },
      { name: 'Integrasi WhatsApp Business API', level: 95, experience: '3+ thn', featured: true },
      { name: 'RESTful API & Webhook', level: 92, experience: '4+ thn', featured: true },
      { name: 'Database (PostgreSQL, MySQL, Supabase)', level: 86, experience: '3+ thn' },
      { name: 'Formulir Otomasi & Email Notifications', level: 90, experience: '3+ thn' }
    ]
  },
  {
    name: 'Infrastruktur, Cloud & Deployment',
    icon: 'Cloud',
    skills: [
      { name: 'Cloudflare Workers & Edge CDN', level: 94, experience: '3+ thn', featured: true },
      { name: 'Google Search Console & Analytics', level: 92, experience: '3+ thn', featured: true },
      { name: 'Git, GitHub & CI/CD Pipelines', level: 92, experience: '4+ thn', featured: true },
      { name: 'Domain Management & DNS Config', level: 95, experience: '4+ thn' },
      { name: 'Optimasi Kecepatan Muat (Lighthouse 95+)', level: 95, experience: '4+ thn', featured: true }
    ]
  }
];

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Independent Web Developer & Digital Consultant',
    company: 'Ahmad Shofi Nasla Web Solutions',
    period: '2023 - Sekarang',
    location: 'Indonesia (Remote & On-Demand)',
    type: 'Work',
    description: 'Menyediakan jasa pembuatan website profesional, landing page konversi, dan aplikasi web untuk klien bisnis lokal dan UMKM.',
    achievements: [
      'Membangun platform digital sukses untuk CV. Fusena Jaya Tour & Event, Paradise Sablon, dan SHRIMORA',
      'Membantu klien meningkatkan efisiensi alur pemesanan dan kredibilitas di hadapan buyer korporat',
      'Menjaga skor Google Lighthouse di atas 95 pada metrik performa, aksesibilitas, dan SEO'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'WhatsApp API', 'Technical SEO']
  },
  {
    id: 'exp-2',
    role: 'Frontend Software Engineer',
    company: 'Digital Solutions Lab',
    period: '2021 - 2023',
    location: 'Indonesia',
    type: 'Work',
    description: 'Mengembangkan antarmuka aplikasi web modern, dashboard analitik, dan sistem desain yang berorientasi performa tinggi.',
    achievements: [
      'Merancang modul-modul komponen yang dapat digunakan berulang di berbagai lini produk',
      'Mengoptimalkan kecepatan muat halaman hingga 50% lebih cepat melalui code splitting'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Vite']
  },
  {
    id: 'exp-3',
    role: 'Pendidikan Teknik Informatika / Ilmu Komputer',
    company: 'Universitas',
    period: '2019 - 2023',
    location: 'Indonesia',
    type: 'Education',
    description: 'Mendalami Rekayasa Perangkat Lunak, Arsitektur Sistem Web, Basis Data, dan Interaksi Manusia & Komputer (HCI).',
    achievements: [
      'Fokus riset akhir pada optimalisasi sistem aplikasi web dan arsitektur responsif',
      'Aktif membagikan edukasi pemrograman web dan mentoring teknologi'
    ],
    technologies: ['Algoritma', 'Struktur Data', 'Rekayasa Perangkat Lunak', 'Basis Data']
  }
];
