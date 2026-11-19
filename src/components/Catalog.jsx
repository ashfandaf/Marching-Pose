import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Sparkles, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';

export default function Catalog({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesTab = activeTab === 'all' ? true : item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
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

  return (
    <section id="katalog" className="py-20 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Koleksi Alat &amp; Busana
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Peralatan Musik &amp; Seragam Drumband
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl">
            Pilihan koleksi perlengkapan marching band dan seragam drumband terbaik di Yogyakarta dengan kualitas suara prima dan kain premium.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-navy-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setActiveTab('alat')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'alat'
                ? 'bg-white text-navy-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Alat Musik
          </button>
          <button
            onClick={() => setActiveTab('kostum')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'kostum'
                ? 'bg-white text-navy-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kostum &amp; Seragam
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => {
          const isKostum = product.category === 'kostum';

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges on top of card */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  {/* Left Tag */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md shadow-sm ${
                      isKostum
                        ? 'bg-amber-600/90 text-white'
                        : 'bg-[#071527]/90 text-white'
                    }`}
                  >
                    {product.tagPrimary}
                  </span>

                  {/* Right Tag */}
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-white/90 text-slate-800 shadow-sm backdrop-blur-md border border-slate-200/60">
                    {product.tagSecondary}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* Price and Action Button */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] text-slate-400 font-medium">Tarif Sewa:</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-slate-900">
                        {formatRupiah(product.price)}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        /{product.priceUnit}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-[#071527] text-slate-700 hover:text-white transition-all duration-200 shadow-sm group/btn"
                  >
                    <span>Detail</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
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
    </section>
  );
}

