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
    id: 'kostum-mayoret-merahputih',
    title: 'Kostum Mayoret Merah-Putih & Shako Gold Bunga',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'FOTO RIIL WORKSHOP',
    tagSecondary: 'Full Set Topi + Boots',
    desc: 'Atasan jas putih aksen merah berpayet emas militer, rok bertingkat lipit rapi, shako hat biru berornamen emas & bunga kuning, serta sepasang boots mayoret glitter.',
    price: 275000,
    priceUnit: 'set',
    image: '/costumes/kostum-mayoret-merahputih.jpg',
    details: {
      specs: [
        'Bahan: Velvet bridal & drill kombi brokat emas militer mewah',
        'Warna: Merah & Putih Nasional dengan aksen Royal Blue & Gold',
        'Ukuran: Tersedia ukuran TK, SD, SMP, SMA (Bisa fitting langsung)',
        'Aksesoris: Topi Shako bulu/bunga emas, sarung tangan satin putih',
        'Sepatu: Boots Mayoret glitter merah atau biru-silver bulu',
        'Kondisi: 100% higienis, dicuci antibakteri & disetrika uap wangi'
      ],
      packageIncludes: [
        '1 Jas Atasan Mayoret Merah Putih Kancing Emas',
        '1 Rok Bertingkat Lipit Kombinasi Merah Putih',
        '1 Topi Shako Mewah Royal Blue & Bunga Emas',
        '1 Pasang Sepatu Boots Mayoret (Glitter Merah / Biru-Silver)',
        '1 Pasang Sarung Tangan Putih Bersih',
        '1 Tongkat Baton Mayoret (Opsional Tambahan)'
      ],
      suitableFor: 'Mayoret utama, Gitapati, pimpinan barisan defile upacara kemerdekaan, karnaval HUT RI, dan lomba tingkat daerah/nasional.'
    }
  },
  {
    id: 'kostum-maskot-karakter',
    title: 'Kostum Maskot Parade (Harimau Putih & Burung Elang)',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'FOTO RIIL WORKSHOP',
    tagSecondary: 'Karakter Ikonik',
    desc: 'Kostum karakter maskot parade eksklusif: Kepala Harimau Putih loreng & jubah rumbai merah marun dengan jumpsuit oranye, atau Maskot Burung Elang Garuda dengan jubah sayap merah bertingkat & jumpsuit militer.',
    price: 350000,
    priceUnit: 'set',
    image: '/costumes/kostum-maskot-karakter.jpg',
    details: {
      specs: [
        'Pilihan Karakter: Harimau Putih (White Tiger) / Burung Elang Garuda',
        'Jubah: Ruffled cape bertingkat beludru merah marun bervolume tinggi',
        'Jumpsuit: Drill tebal nyaman (Oranye menyala / Hijau militer pilot)',
        'Headpiece: Topeng kepala fiberglass dilapisi bulu halus sintetis berbusa empuk',
        'Stik: Termasuk sepasang stick bass drum berumbai pom-pom'
      ],
      packageIncludes: [
        '1 Unit Topeng Maskot Karakter (Harimau Putih / Burung Elang)',
        '1 Jubah Rumbai Beludru Mewah Bertingkat',
        '1 Jumpsuit Overall Parade Full Body',
        '1 Pasang Sarung Tangan Kulit Parade',
        '2 Stik Pemukul Berumbai Khusus Maskot'
      ],
      suitableFor: 'Pemain bass drum atraktif, maskot kejuaraan marching band, pembuka defile karnaval budaya, festival pawai kota.'
    }
  },
  {
    id: 'seragam-pasukan-drumband',
    title: 'Setelan Seragam Pasukan Drumband Defile',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'FOTO RIIL WORKSHOP',
    tagSecondary: 'Ready 80+ Set',
    desc: 'Seragam pasukan marching band ready-stock aneka varian: Hijau-Kuning Scotlite, Kuning-Marun Payet Perak Petir, dan Jas Kuning-Hitam Kancing Metal. Bahan American Drill adem berfuring rapi.',
    price: 85000,
    priceUnit: 'set',
    image: '/costumes/seragam-pasukan-drumband.jpg',
    details: {
      specs: [
        'Pilihan Model: Hijau Scotlite / Kuning-Marun Payet / Jas Kuning-Hitam',
        'Bahan: American Drill High Quality, berfuring halus, tidak panas',
        'Ukuran: Lengkap dari S, M, L, XL, XXL (Ready stok hingga 80+ set seragam sama)',
        'Aksen: Garis reflektor scotlite, payet sequin silver berkilau panggung',
        'Bawahan: Pilihan celana panjang garis samping atau rok lipit'
      ],
      packageIncludes: [
        '1 Jas / Baju Lengan Panjang Pasukan Parade',
        '1 Celana Panjang / Rok Lipit Senada',
        '1 Selempang Dada (Sash) Parade',
        'Pilihan Topi Pet / Shako Seragam'
      ],
      suitableFor: 'Seluruh anggota pasukan pemain snare, tenor, bass drum, bellyra, dan simbal barisan sekolah.'
    }
  },
  {
    id: 'koleksi-topi-shako',
    title: 'Koleksi Topi Shako & Pet Kehormatan Pasukan',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'FOTO RIIL WORKSHOP',
    tagSecondary: 'Multi-Warna Pilihan',
    desc: 'Topi Shako militer marching band eksklusif dengan segitiga metalik cermin (Silver, Gold, Blue, Red, Black) dan Topi Pet beludru bordir chevron kencana.',
    price: 45000,
    priceUnit: 'pcs/hari',
    image: '/costumes/topi-shako-pasukan.jpg',
    details: {
      specs: [
        'Pilihan Warna: Royal Blue, Black Silver, Ruby Red, Black Gold, Pet Chevron',
        'Bahan: Rangka fiber ringan kokoh, lapisan satin/beludru tahan cuaca',
        'Emblem: Plat segitiga kromium cermin tahan karat & rumbai kepang emas',
        'Kenyamanan: Lingkar kepala berbusa empuk dengan tali dagu elastis adjustable',
        'Ketersediaan: Ready stock ratusan unit untuk 1 kontingen penuh'
      ],
      packageIncludes: [
        '1 Unit Topi Shako / Pet Pilihan Model',
        '1 Tali Dagu Pengikat (Adjustable Chin Strap)',
        'Cover Pelindung Anti-Debu'
      ],
      suitableFor: 'Pasukan drumband, gitapati, mayoret cadangan, pengibaran bendera pataka.'
    }
  },
  {
    id: 'koleksi-sepatu-boots',
    title: 'Sepatu Boots Mayoret & Pasukan Defile (All Size)',
    category: 'kostum',
    categoryLabel: 'Kostum & Seragam',
    tagPrimary: 'FOTO RIIL WORKSHOP',
    tagSecondary: 'Ukuran 30 - 44',
    desc: 'Koleksi lengkap alas kaki marching band: Boots mayoret glitter bulu mewah, boots kulit sintetis putih/hitam berresleting samping, sepatu balet satin pita, dan pantofel parade sol karet anti slip.',
    price: 50000,
    priceUnit: 'pasang/hari',
    image: '/costumes/sepatu-boots-mayoret.jpg',
    details: {
      specs: [
        'Model Tersedia: Boots Tinggi Glitter Bulu, Boots Resleting, Sepatu Balet Satin, Pantofel Bertali',
        'Ukuran: Size 30 - 44 (Lengkap untuk anak-anak TK, SD, SMP, SMA, hingga Guru/Pembina)',
        'Bahan: Kulit sintetis elastis / glitter payet dengan bulu marabou lembut',
        'Sol: Karet empuk anti-slip, nyaman dipakai jalan parade berkilo-kilo meter',
        'Higienitas: Disemprot desinfektan sepatu wangi setiap kali kembali sewa'
      ],
      packageIncludes: [
        '1 Pasang Sepatu / Boots Pilihan Model & Ukuran',
        '1 Pasang Kaos Kaki Putih Bersih (Opsional)'
      ],
      suitableFor: 'Mayoret utama, penari color guard, pembawa bendera, dan seluruh barisan defile.'
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
    name: 'Ibu Sri Wahyuni, S.Pd.AUD',
    role: 'Kepala Sekolah & Pembina TK ABA Karanganyar',
    school: 'TK ABA Karanganyar',
    avatarText: 'SW',
    avatarBg: 'bg-[#193963]',
    rating: 5,
    tag: 'Pawai & Karnaval Anak',
    image: '/testimonials/testi-aba-karanganyar.jpg',
    imageCaption: 'Kontingen Cilik TK ABA Karanganyar mengenakan kostum mayoret & seragam drumband Marching Pose',
    quote: 'Kostum mayoret dan seragam pasukan sangat pas untuk anak-anak, warnanya cerah dan mencolok di jalanan pawai. Alat drumband ringan dan nyaman dipakai anak TK saat parade keliling. Terimakasih Ibu Nur Herwiyanti!',
    verified: true,
    eventDate: 'Agustus 2024'
  },
  {
    id: 2,
    name: 'Drs. Prasetyo Wibowo, M.Pd',
    role: 'Penanggung Jawab Kontingen Marching Band',
    school: 'Kejuaraan Drumband Tingkat Pelajar DIY',
    avatarText: 'PW',
    avatarBg: 'bg-[#0f2744]',
    rating: 5,
    tag: 'Kejuaraan Drumband Arena',
    image: '/testimonials/testi-kejuaraan-arena.jpg',
    imageCaption: 'Penampilan formasi divisi drumband & pit instrumen di arena kejuaraan indoor',
    quote: 'Kualitas suara snare drum, bass, dan bell lyra sangat jernih dan harmonis di arena GOR kejuaraan. SPK resmi, kuitansi BOS, dan pengiriman armada tepat waktu tanpa kendala. Sangat terpercaya dan profesional!',
    verified: true,
    eventDate: 'September 2024'
  },
  {
    id: 3,
    name: 'Bunda Dian & Ananda Kirana',
    role: 'Konsumen Langsung & Mayoret Cilik',
    school: 'Pelanggan Setia Workshop Marching Pose Jogja',
    avatarText: 'BD',
    avatarBg: 'bg-[#996515]',
    rating: 5,
    tag: 'Workshop Marching Pose (Sejak 2005)',
    image: '/testimonials/testi-marchingpose-konsumen.jpg',
    imageCaption: 'Dokumentasi konsumen di depan plang Marching Pose Yogyakarta membawa tongkat mayoret siap berlomba',
    quote: 'Pelayanan di workshop ramah sekali! Fitting tongkat baton mayoret dan kostum dibantu langsung sampai pas dan nyaman. Anak saya jadi makin percaya diri saat tampil lomba. Sukses terus untuk Marching Pose Jogja!',
    verified: true,
    eventDate: 'Oktober 2024'
  },
];

export const WORKSHOP_INFO = {
  name: 'Marching Pose - Drumband & Kostum Yogyakarta',
  address: 'Jl. Ringroad Selatan No. 88, Panggungharjo, Sewon, Bantul, Daerah Istimewa Yogyakarta 55188',
  hours: 'Senin - Minggu: 08.00 - 20.00 WIB (Buka Setiap Hari)',
  phone: '+62 812-5131-6106',
  whatsappNumber: '6281251316106',
  email: 'info@marchingpose.com',
  mapsEmbedUrl: 'https://maps.google.com/?q=-7.839832,110.364741',
  lat: -7.839832,
  lng: 110.364741,
  landmarks: 'Selatan Kampus ISI Yogyakarta, 10 menit dari Malioboro / Pojok Beteng Kulon'
};

