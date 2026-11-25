import React from 'react';
import { MessageCircle, BookOpen, Zap, Star, Sparkles } from 'lucide-react';
import { STATS, WORKSHOP_INFO } from '../data/mockData';

export default function Hero({ onOpenWhatsAppModal, onSelectProduct }) {
  const openWhatsApp = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Marching Pose Yogyakarta, saya ingin konsultasi sewa drumband dan seragam karnaval.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="profil" className="relative text-white pt-28 pb-24 sm:pt-32 lg:pt-36 lg:pb-28 overflow-hidden min-h-[680px] flex items-center">
      
      {/* Background Image from user with atmospheric navy overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/marching-hero-bg.jpg"
          alt="Marching Band Pose Wallpaper"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.75] contrast-[1.15]"
        />
        {/* Deep Navy Gradient Overlay for high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e1b]/95 via-[#07172c]/88 to-[#051325]/75"></div>
        {/* Top subtle fade */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#071527]/60 to-transparent"></div>
        {/* Bottom subtle transition fade */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#f6f8fb] via-[#07172c]/50 to-transparent"></div>
      </div>

      {/* Full-width container across the screen without empty margins */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            
            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/20 backdrop-blur-md">
                <span className="text-amber-400">📍</span> PARTNER TERBAIK DI JOGJA &amp; JATENG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> RESPONS CEPAT 24/7 DARI TIM KAMI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm">
              Marching Pose Yogyakarta
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-200 text-sm sm:text-base xl:text-lg leading-relaxed max-w-3xl drop-shadow-sm">
              Pusat rental dan pengadaan alat musik marching band serta seragam/kostum karnaval parade terbaik se-Daerah Istimewa Yogyakarta. Melayani SD, SMP, SMA, Universitas, dan Instansi Kedinasan di Yogyakarta serta seluruh Indonesia dengan jaminan akurasi stem, kerapian busana, dan pelayanan resmi.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2.5 bg-[#996515] hover:bg-[#805310] active:bg-[#6b440b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl shadow-amber-950/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tanya ke WhatsApp Kami</span>
              </button>

              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-slate-600/80 shadow-md backdrop-blur-md transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Buka Katalog 24/7</span>
              </button>
            </div>

            {/* Live Stats Row */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                {STATS.map((stat, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Featured Snare & Costume Card) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md xl:max-w-lg bg-gradient-to-b from-slate-900/90 to-[#0b1c33]/90 rounded-2xl p-4 border border-slate-700/80 shadow-2xl backdrop-blur-xl hover:border-amber-500/60 transition-all duration-300 group">
              
              {/* Card Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80"
                  alt="Marching Pose Snare Drum & Royal Uniforms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 bg-[#996515]/95 text-amber-100 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm border border-amber-400/30 flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>Best Seller Karnaval</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Ready Stock
                  </span>
                  <span>Disewakan Harian / Event</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  High Tension Snare &amp; Royal Uniforms
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  Kelengkapan drumband higienis, siap pakai dan akurat stem untuk hari parade Anda. Tersedia fitting langsung di workshop Sewon Bantul.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Mulai dari <strong className="text-white text-sm sm:text-base">Rp 120rb</strong></span>
                  <button
                    onClick={() => onSelectProduct && onSelectProduct('snare-high-tension')}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1"
                  >
                    Lihat Spesifikasi &rarr;
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
