import React from 'react';
import { WORKSHOP_INFO } from '../data/mockData';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export default function WorkshopLocation({ onOpenWhatsAppModal }) {
  const openWhatsApp = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Harmoni Drumband & Kostum, saya ingin janjian jadwal fitting kostum & cek kondisi alat di workshop Bantul.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  const openGoogleMaps = () => {
    window.open(WORKSHOP_INFO.mapsEmbedUrl, '_blank');
  };

  return (
    <section id="workshop" className="py-20 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              BISA FITTING &amp; COBA ALAT DI TEMPAT
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Kunjungi Workshop Kami di Yogyakarta
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Bagi sekolah atau panitia yang ingin melihat langsung kondisi fisik alat musik, mencoba kekerasan head snare, atau mencocokkan ukuran seragam karnaval sebelum menyewa, silakan berkunjung ke lokasi kami:
            </p>

            {/* Information List */}
            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#071527] text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Alamat Workshop &amp; Gudang
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                    {WORKSHOP_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {WORKSHOP_INFO.landmarks}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#071527] text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Jam Pelayanan &amp; Fitting
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {WORKSHOP_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#071527] text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Kontak Reservasi Langsung
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    WhatsApp: {WORKSHOP_INFO.phone} (Layanan Cepat Tanggap)
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 bg-[#996515] hover:bg-[#805310] active:bg-[#6b440b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tanya ke WhatsApp Kami</span>
              </button>

              <button
                onClick={openGoogleMaps}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-300/80 transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-slate-600" />
                <span>Buka Google Maps</span>
              </button>
            </div>
          </div>

          {/* Right Map Preview Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              
              {/* Map Canvas / Simulated Interactive Map */}
              <div className="relative h-80 sm:h-96 w-full bg-[#e8ecf2] overflow-hidden flex items-center justify-center">
                {/* SVG Street Grid Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                      <rect width="80" height="80" fill="#e8ecf2" />
                      <line x1="0" y1="40" x2="80" y2="40" stroke="#d5dde8" strokeWidth="8" />
                      <line x1="40" y1="0" x2="40" y2="80" stroke="#d5dde8" strokeWidth="6" />
                      <line x1="0" y1="20" x2="80" y2="60" stroke="#ffffff" strokeWidth="3" />
                      <line x1="20" y1="80" x2="60" y2="0" stroke="#ffffff" strokeWidth="3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Major Highways lines */}
                <div className="absolute w-full h-4 bg-amber-200/70 top-1/2 -translate-y-1/2 rotate-6 pointer-events-none"></div>
                <div className="absolute w-4 h-full bg-blue-200/70 left-1/3 pointer-events-none"></div>

                {/* Center Pin Marker */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="bg-white px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 text-center max-w-[220px]">
                    <span className="block text-[11px] font-extrabold text-[#071527] leading-tight">
                      Harmoni Drumband &amp; Kostum
                    </span>
                    <span className="block text-[10px] text-amber-700 font-semibold mt-0.5">
                      Ringroad Selatan No. 88, Sewon
                    </span>
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white -mt-0.5"></div>
                  
                  {/* Pin Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#071527] border-2 border-amber-400 flex items-center justify-center text-white shadow-lg mt-1">
                    <MapPin className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-700 border border-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Area Sewon, Bantul (DIY)
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-md flex items-center justify-between">
                  <div className="text-[11px] text-slate-600">
                    <strong className="text-slate-900">Akses Mudah:</strong> Truk &amp; Bus Sekolah bisa parkir leluasa
                  </div>
                  <button
                    onClick={openGoogleMaps}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 hover:underline"
                  >
                    <span>Petunjuk Rute</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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

