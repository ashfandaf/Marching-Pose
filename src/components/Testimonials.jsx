import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import {
  Star,
  Quote,
  CheckCircle2,
  Camera,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

export default function Testimonials() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="testimoni" className="py-20 bg-slate-50/90 border-t border-slate-200/70 relative">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Dokumentasi &amp; Ulasan Asli Konsumen</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bukti Nyata Kepercayaan Sekolah &amp; Kontingen
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Dokumentasi asli penampilan parade, kejuaraan, dan kepuasan langsung para konsumen yang mempercayakan kebutuhan kostum serta alat drumband di workshop Marching Pose Yogyakarta.
          </p>
        </div>

        {/* Testimonials Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top Badge: Category / Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-[#0a192f]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Top Right: Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(item);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-all hover:scale-110"
                    title="Perbesar Foto Dokumentasi"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <p className="text-[11px] text-white/95 font-medium line-clamp-1 drop-shadow-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{item.imageCaption}</span>
                    </p>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  
                  {/* Rating & Verified Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Dokumentasi Riil
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <div className="relative">
                    <Quote className="w-5 h-5 text-amber-500/20 absolute -top-1 -left-1" />
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic relative z-10 pl-3">
                      "{item.quote}"
                    </p>
                  </div>

                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100/90 flex items-center gap-3.5 mt-auto">
                <div
                  className={`w-11 h-11 rounded-2xl ${item.avatarBg} text-amber-300 font-bold text-sm flex items-center justify-center shadow-sm flex-shrink-0`}
                >
                  {item.avatarText}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight truncate mt-0.5 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-amber-800 font-semibold truncate mt-0.5">
                    {item.school}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0">
              <Camera className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Punya Dokumentasi Kontingen Anda Bersama Kami?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Kirimkan foto parade atau lomba Anda melalui WhatsApp resmi untuk ditampilkan di galeri kebanggaan Marching Pose!
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6281251316106?text=Halo%20Ibu%20Nur%20Herwiyanti%2C%20saya%20ingin%20berbagi%20foto%20dokumentasi%20penampilan%20kontingen%20kami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a192f] hover:bg-[#06101e] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition-all hover:scale-[1.02] flex-shrink-0"
          >
            <span>Kirim Foto Dokumentasi</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* ================= LIGHTBOX PHOTO MODAL ================= */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative max-h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Caption & Details */}
            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 mb-1">
                  <span>{selectedPhoto.tag}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {selectedPhoto.imageCaption}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  "{selectedPhoto.quote}"
                </p>
                <p className="text-xs font-semibold text-slate-800 pt-1">
                  — {selectedPhoto.name} ({selectedPhoto.role})
                </p>
              </div>

              <a
                href="https://wa.me/6281251316106?text=Halo%20Ibu%20Nur%20Herwiyanti%2C%20saya%20tertarik%20dengan%20kostum%20dan%20alat%20seperti%20pada%20foto%20dokumentasi%20ini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex-shrink-0"
              >
                <span>Tanya Paket Serupa via WA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
