import React from 'react';
import { MessageCircle, Calculator, CheckCircle2, AlertCircle } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';

export default function CtaBanner({ onOpenWhatsAppModal, onOpenCalculatorModal }) {
  const openWhatsApp = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Harmoni Drumband, kami ingin booking tanggal dan konsultasi pengadaan sewa drumband untuk sekolah/instansi kami.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <section className="py-12 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
      <div className="relative bg-[#071527] rounded-3xl p-8 sm:p-10 lg:p-12 text-white overflow-hidden shadow-2xl border border-slate-700/60">
        
        {/* Subtle Background Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              SLOT TERBATAS UNTUK PERIODE AGUSTUS &amp; BULAN EVENT
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Jadwalkan Kebutuhan Parade &amp; Upacara Sekolah Anda Sekarang
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Hindari kehabisan stok alat dan ukuran kostum untuk hari penting tim Anda. Hubungi tim kami sekarang juga untuk booking tanggal, penjadwalan fitting seragam di workshop, dan penerbitan SPK resmi.
            </p>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Bebas Ubah Tanggal (H-3)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dilengkapi Kuitansi Resmi &amp; SPK</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Diskon Sewa Borongan Sekolah</span>
              </div>
            </div>
          </div>

          {/* Right Column Action Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 bg-[#996515] hover:bg-[#805310] active:bg-[#6b440b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanya ke WhatsApp Kami</span>
            </button>

            <button
              onClick={onOpenCalculatorModal}
              className="w-full flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-600/80 transition-all duration-200"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Konsultasi &amp; Simulasi Biaya</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

