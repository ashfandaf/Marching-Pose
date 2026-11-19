export const NAV_LINKS = [
  { name: 'Profil & Layanan', href: '#profil' },
  { name: 'Katalog Produk', href: '#katalog' },
  { name: 'Mengapa Kami', href: '#keunggulan' },
  { name: 'Testimoni & Kontak', href: '#testimoni' },
];

export const STATS = [
  { number: '500+', label: 'Event Terlayani' },
  { number: '120+', label: 'Sekolah & Instansi' },
  { number: '99%', label: 'Kepuasan Klien' },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: 'Music2',
    title: 'Musik Berstandar Nasional',
    desc: 'Tuning nada presisi, senar berkualitas, suara bulat dan jernih, serta siap langsung tampil untuk lomba karnaval, parade jalanan, hingga upacara resmi.',
    tag: 'Standar Lomba & Karnaval',
  },
  {
    id: 2,
    icon: 'Sparkles',
    title: 'Kostum Higienis & Setrika Uap',
    desc: 'Dicuci dengan detergen antibakterial dan disetrika uap rapi. Bebas bau apek, wangi, bersih, dan higienis saat dikenakan siswa atau anggota tim.',
    tag: '100% Bersih & Siap Pakai',
  },
  {
    id: 3,
    icon: 'MapPin',
    title: 'Workshop & Fitting di DIY',
    desc: 'Bisa langsung datang untuk mencoba fitting ukuran kostum dan cek suara alat langsung di workshop kami di Bantul / Sleman / Kota Yogyakarta.',
    tag: 'Bisa Datang Langsung',
  },
  {
    id: 4,
    icon: 'FileCheck',
    title: 'SPK Resmi & Kuitansi BOS',
    desc: 'Mendukung administrasi sekolah formal. Dilengkapi Surat Perjanjian Kerjasama, kuitansi bermaterai, dan faktur untuk pelaporan dana BOS/BOSDA.',
    tag: 'Aman untuk SPJ & Administrasi',
  },
];

export const PRODUCTS = [
  {
    id: 'snare-high-tension',
    title: 'Snare Drum High-Tension 14"',
    category: 'alat',
    categoryLabel: 'Alat Musik',
    tagPrimary: 'TERSEDIA DI WORKSHOP',
    tagSecondary: 'Populer 2024',
    desc: 'Tuning high-tension presisi, carrier aluminium anatomis, suara renyah dan garing khas drumline parade.',
    price: 120000,
    priceUnit: 'hari',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Ukuran: 14 x 12 Inch High Tension Shell',
        'Head: Remo / Evans marching snare drumhead',
        'Carrier: Aluminium ringan anatomis dilapisi busa empuk',
        'Sticks: Sepasang marching snare sticks maple included',
        'Kondisi: 100% tuned siap pakai'
      ],
      packageIncludes: [
        '1 Unit Snare Drum High-Tension',
        '1 Vest Carrier Aluminium Standar Lomba',
        '1 Pasang Stik Marching Drum',
        '1 Kunci Drum Tuning (Free pinjam)'
      ],
      suitableFor: 'Parade karnaval 17 Agustus, lomba marching band PDBI, upacara bendera hari besar.'
    }
  },
  {
    id: 'bass-drum-tonal',
    title: 'Bass Drum Tonal Parade (18"-24")',
    category: 'alat',
    categoryLabel: 'Alat Musik',
    tagPrimary: 'TERSEDIA DI WORKSHOP',
    tagSecondary: 'Paket 18"-24"',
    desc: 'Dua lapis head (double head) dengan mallet premium, respon bass dalam berbobot dan resonansi kuat untuk outdoor.',
    price: 150000,
    priceUnit: 'hari',
    image: 'https://images.unsplash.com/photo-1520523839898-507127021b3a?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Pilihan Ukuran: 18", 20", 22", atau 24" Inch',
        'Shell: 7-ply birchwood shell dengan rim kokoh',
        'Carrier: Ergonomic bass drum harness dengan foam padding',
        'Mallet: 1 pasang pemukul berbobot seimbang dengan grip mantap',
        'Karakter: Suara boom deep & punchy jelas terdengar hingga 1 km'
      ],
      packageIncludes: [
        '1 Unit Marching Bass Drum',
        '1 Harness / Carrier Pundak Ergonomis',
        '1 Pasang Mallet Bass Drum Berkualitas',
        'Cover pelindung anti debu saat pengiriman'
      ],
      suitableFor: 'Tempo jalan parade karnaval, iringan barisan jalan, festival drumband umum.'
    }
  },
  {
    id: 'marching-bellra',
    title: 'Marching Bellra / Bell Lyra Full Set',
    category: 'alat',
    categoryLabel: 'Alat Musik',
    tagPrimary: 'TERSEDIA DI WORKSHOP',
    tagSecondary: '30 Nada Standar',
    desc: 'Bilah aluminium padat dilapisi chrome akurat 30 nada, lengkap dengan strap busa empuk, mallets, dan tas pelindung.',
    price: 110000,
    priceUnit: 'hari',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Range: 30 Nada kromatis (standard C to F)',
        'Bilah: Paduan aluminium alloy solid, pitch akurat 440 Hz',
        'Strap: Selempang dada kulit sintetis berlapis busa peredam',
        'Mallet: 2 pasang stick pemukul (hard & soft tip)',
        'Finishing: Chrome mirror elegan memantulkan sinar panggung'
      ],
      packageIncludes: [
        '1 Unit Bell Lyra 30 Nada',
        '1 Tas jinjing busa pelindung',
        '1 Strap selempang leher & badan',
        '2 Pasang Stik Bell Lyra'
      ],
      suitableFor: 'Melodi utama lagu mars nasional, parade pawai budaya, lomba festival musik.'
    }
  },
  {
    id: 'kostum-mayoret-royal',
    title: 'Kostum Mayoret Royal Gold & Navy',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'KOSTUM TERBARU',
    tagSecondary: 'Lengkap Topi + Boots',
    desc: 'Desain eksklusif berpayet mewah, termasuk topi shako bulu, selempang ornamen mutiara, sarung tangan, dan sepatu boots serasi.',
    price: 250000,
    priceUnit: 'set',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Bahan: Kain velvet bridal premium dikombinasikan ornamen gold jacquard',
        'Warna: Royal Deep Navy & Sparkling Gold Payet',
        'Ukuran: Ready size S, M, L, XL (Bisa fitting langsung)',
        'Aksesoris: Shako hat berbulu ostrich, epolet bahu rumbai emas',
        'Kebersihan: Dry-cleaned, disetrika uap wangi siap kenakan'
      ],
      packageIncludes: [
        '1 Blazer Mayoret Royal Gold & Navy',
        '1 Rok A-Line bertingkat dengan furing',
        '1 Topi Shako Mayoret lengkap bulu mewah',
        '1 Pasang Sarung Tangan Putih Bersih',
        '1 Pasang Sepatu Boots Putih/Navy (pilihan ukuran)',
        '1 Tongkat Baton Mayoret (Opsional request)'
      ],
      suitableFor: 'Mayoret utama (Field Commander), lomba gitapati, defile karnaval kota.'
    }
  },
  {
    id: 'seragam-pasukan-drummer',
    title: 'Setelan Seragam Pasukan Drummer & Bell',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'PAKET LENGKAP',
    tagSecondary: 'Size S, M, L, XL, XXL',
    desc: 'Kain drill premium adem, jahitan kuat berfuring, celana/rok lipit, selempang bordir benang emas, dan topi beremblem marching band.',
    price: 85000,
    priceUnit: 'set',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Bahan: American Drill High Quality, menyerap keringat dan tidak panas',
        'Pilihan Bawahan: Celana panjang lurus bergaris samping atau Rok lipit rapi',
        'Kelengkapan: Selempang dada bordir kencana + Topi Pet Seragam',
        'Ketersediaan: Ready stock hingga 80+ set seragam seragam seragam kompak',
        'Ukuran: Lengkap dari SD, SMP, SMA hingga umum'
      ],
      packageIncludes: [
        '1 Jas / Baju Lengan Panjang Pasukan Parade',
        '1 Celana Panjang / Rok Lipit Sesuai Request',
        '1 Topi Pet Marching Band dengan Emblem Logam',
        '1 Selempang Dada (Sash) Emas'
      ],
      suitableFor: 'Seluruh anggota pasukan drumband pemain snare, tenor, bass, bellyra, dan cymbal.'
    }
  },
  {
    id: 'marching-hand-cymbal',
    title: 'Marching Hand Brass Cymbal 14"',
    category: 'alat',
    categoryLabel: 'Alat Musik',
    tagPrimary: 'TERSEDIA DI WORKSHOP',
    tagSecondary: 'Kuningan Tebal',
    desc: 'Sepasang simbal kuningan tebal dengan bantalan kulit empuk dan tali strap kulit asli, suara nyaring membahana untuk parade jalanan.',
    price: 80000,
    priceUnit: 'set',
    image: 'https://images.unsplash.com/photo-1543443436-159670087799?auto=format&fit=crop&w=800&q=80',
    details: {
      specs: [
        'Bahan: Brass B20 alloy solid bersuara tajam & sustaining renyah',
        'Diameter: 14 Inch (Tersedia juga opsi 16 Inch)',
        'Grip: Strap kulit sapi asli kuat tidak mudah putus',
        'Pad: Bantalan spon lembut melindungi buku-buku jari pemegang simbal',
        'Finishing: Polished glossy tahan goresan'
      ],
      packageIncludes: [
        '1 Pasang Simbal 14 Inch (2 pcs simbal kembar)',
        '2 Bantalan Tangan Kulit Lembut',
        '2 Tali Pegangan Kulit Terpasang Kokoh'
      ],
      suitableFor: 'Aksen nada parade barisan drumband, penanda ketukan aksentuasi lagu karnaval.'
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Drs. Prasetyo Wibowo, M.Pd',
    role: 'Kepala Sekolah SMAN 1 Sleman',
    avatarText: 'PW',
    avatarBg: 'bg-[#193963]',
    rating: 5,
    quote: 'Pelayanan selalu teratur dan tepat waktu saat karnaval tahunan 17 Agustus. Dilengkapi dengan kuitansi dan SPK resmi, suara alat sangat berkelas dan seragam bersih wangi. Sangat merekomendasikan Harmoni Drumband untuk instansi sekolah!',
  },
  {
    id: 2,
    name: 'Nina Kustiasari, S.Pd',
    role: 'Pembina Seni SMP Muhammadiyah 2 Yk',
    avatarText: 'NK',
    avatarBg: 'bg-[#a77c10]',
    rating: 5,
    quote: 'Kostum mayoret sangat mewah dan pas di badan siswa saat lomba festival marching band se-DIY. Pelayanan fitting langsung di workshop mempermudah penyesuaian ukuran tanpa ribet. Anak-anak sangat percaya diri tampil di panggung!',
  },
  {
    id: 3,
    name: 'Arief Firmansyah, S.Sn',
    role: 'Pelatih Marching Band Komunitas Pemuda Kota',
    avatarText: 'AF',
    avatarBg: 'bg-[#193963]',
    rating: 5,
    quote: 'Peralatan drumband 100% terawat, stem nada bersih, busa strap tebal sehingga pundak siswa tidak sakit saat parade 3 km. Pengiriman cepat dan tepat waktu, pelayanan responsif via WhatsApp kapanpun dibutuhkan.',
  },
];

export const WORKSHOP_INFO = {
  name: 'Harmoni Drumband & Kostum Yogyakarta',
  address: 'Jl. Ringroad Selatan No. 88, Panggungharjo, Sewon, Bantul, Daerah Istimewa Yogyakarta 55188',
  hours: 'Senin - Minggu: 08.00 - 20.00 WIB (Buka Setiap Hari)',
  phone: '+62 812-3456-7890',
  whatsappNumber: '6281234567890',
  email: 'info@harmonidrumband.com',
  mapsEmbedUrl: 'https://maps.google.com/?q=-7.839832,110.364741',
  lat: -7.839832,
  lng: 110.364741,
  landmarks: 'Selatan Kampus ISI Yogyakarta, 10 menit dari Malioboro / Pojok Beteng Kulon'
};

