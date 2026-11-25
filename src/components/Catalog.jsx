import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import {
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Crown,
  Shirt,
  Music2,
  Tag,
  Eye,
  Info,
} from 'lucide-react';

export default function Catalog({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('kostum'); // Default to 'kostum' so the newly uploaded costume collection is immediately showcased!
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesTab = activeTab === 'all' ? true : item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagSecondary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Quick costume spotlight list
  const costumeShowcases = PRODUCTS.filter((p) => p.category === 'kostum');

  return (
    <section id="katalog" className="py-20 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28 bg-[#f8fafd] border-t border-slate-200/70">
      
      {/* ================= SECTION HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2.5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Katalog Resmi Marching Pose Jogja</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Koleksi Kostum Karnaval, Mayoret &amp; Alat Drumband
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Foto riil dokumentasi stok workshop Marching Pose Yogyakarta. Seluruh busana dicuci higienis, disetrika uap wangi, dan dapat difitting langsung di workshop kami di Sewon, Bantul.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60 shadow-2xs self-start md:self-auto">
          <button
            onClick={() => setActiveTab('kostum')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kostum'
                ? 'bg-[#0f2744] text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Kostum &amp; Busana ({costumeShowcases.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('alat')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'alat'
                ? 'bg-[#0f2744] text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Music2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Alat Musik</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#0f2744] text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            Semua ({PRODUCTS.length})
          </button>
        </div>
      </div>

      {/* ================= SPOTLIGHT: QUICK COSTUME SHOWCASE BAR ================= */}
      <div className="mb-12 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">
              Galeri Cepat Busana &amp; Perlengkapan Marching Pose
            </h3>
            <span className="hidden sm:inline-block text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200">
              100% Foto Riil Workshop
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Klik foto untuk spesifikasi &amp; tarif
          </span>
        </div>

        {/* 5 Costume Mini Visual Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {costumeShowcases.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item.id)}
              className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl p-2.5 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-[10px] text-white font-bold flex items-center gap-1">
                    <Eye className="w-3 h-3 text-amber-300" /> Lihat Detail
                  </span>
                </div>
                <div className="absolute top-1.5 left-1.5">
                  <span className="text-[9px] font-extrabold uppercase bg-amber-500/95 text-slate-950 px-1.5 py-0.5 rounded shadow-xs">
                    {item.tagSecondary}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xs font-extrabold text-[#0f2744]">
                    {formatRupiah(item.price)}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    /{item.priceUnit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PRODUCT CARDS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProducts.map((product) => {
          const isKostum = product.category === 'kostum';

          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col group justify-between"
            >
              <div>
                {/* Product Image Box */}
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Badges on top of card */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    {/* Left Tag */}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs ${
                        isKostum
                          ? 'bg-amber-600/95 text-white border border-amber-400/40'
                          : 'bg-[#071527]/95 text-white border border-white/20'
                      }`}
                    >
                      {product.tagPrimary}
                    </span>

                    {/* Right Tag */}
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/95 text-slate-900 shadow-xs backdrop-blur-md border border-slate-200">
                      {product.tagSecondary}
                    </span>
                  </div>

                  {/* Bottom Image Callout */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px]">
                    <span className="inline-flex items-center gap-1.5 font-semibold drop-shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {isKostum ? 'Higienis & Setrika Uap' : 'Akurasi Stem Siap Pakai'}
                    </span>
                    <span className="text-[10px] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-amber-300 font-bold border border-white/10">
                      Fitting Ready
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product.id)}
                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug cursor-pointer"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>

              {/* Price and Action Button */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Tarif Sewa:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      {formatRupiah(product.price)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      /{product.priceUnit}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProduct(product.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#0f2744] hover:bg-[#071527] text-white transition-all duration-200 shadow-sm hover:shadow-md group/btn"
                >
                  <span>Detail &amp; Fitting</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">Tidak ada produk yang cocok dengan pencarian Anda.</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-bold text-amber-600 hover:underline"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* ================= FITTING & KONSULTASI CALLOUT ================= */}
      <div className="mt-14 bg-gradient-to-r from-[#0f2744] to-[#1a3a60] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
            LAYANAN FITTING KHUSUS SEKOLAH &amp; INSTANSI
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            Ingin Coba Ukuran &amp; Fitting Langsung di Workshop?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Bawa sampel ukuran personil tim Anda atau datang bersama anak-anak ke workshop Marching Pose di Sewon, Bantul untuk mencocokkan kostum mayoret, boots, dan shako sebelum hari H!
          </p>
        </div>

        <a
          href="https://wa.me/6281251316106?text=Halo%20Ibu%20Nur%20Herwiyanti%2C%20saya%20ingin%20jadwal%20fitting%20kostum%20drumband%20di%20workshop%20Marching%20Pose"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#996515] hover:bg-[#805310] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 flex-shrink-0"
        >
          <span>Jadwalkan Fitting via WA</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
}
