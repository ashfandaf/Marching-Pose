import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Calendar, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';

export default function ProductDetailModal({ product, onClose }) {
  const [rentalDays, setRentalDays] = useState(1);
  const [eventDate, setEventDate] = useState('');

  if (!product) return null;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const estimatedTotal = product.price * rentalDays;

  const handleBookViaWhatsApp = () => {
    const dateText = eventDate ? ` pada tanggal ${eventDate}` : '';
    const message = encodeURIComponent(
      `Halo Harmoni Drumband & Kostum Yogyakarta, saya tertarik menyewa:\n\n*Item:* ${product.title}\n*Kategori:* ${product.categoryLabel}\n*Durasi:* ${rentalDays} ${product.priceUnit}${dateText}\n*Estimasi Tarif:* ${formatRupiah(estimatedTotal)}\n\nMohon info ketersediaan stok dan syarat administrasinya. Terima kasih!`
    );
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors backdrop-blur-sm"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 uppercase tracking-wide">
                {product.tagPrimary}
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                {product.tagSecondary}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {product.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Price & Overview */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <div>
              <span className="text-xs text-amber-900/70 font-semibold uppercase">Tarif Sewa Reguler</span>
              <div className="text-2xl font-black text-amber-950">
                {formatRupiah(product.price)}{' '}
                <span className="text-xs font-semibold text-amber-800">/{product.priceUnit}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-xl border border-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Sudah Termasuk SPK &amp; Kuitansi Resmi</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Deskripsi Produk
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.desc}
            </p>
          </div>

          {/* Package Inclusions */}
          {product.details?.packageIncludes && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Kelengkapan Dalam Paket Sewa
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.details.packageIncludes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          {product.details?.specs && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Spesifikasi Teknis
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {product.details.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&bull;</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Booking Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Perkiraan Durasi ({product.priceUnit})
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={rentalDays}
                onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Rencana Tanggal Acara
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-slate-500 block">Total Estimasi ({rentalDays} {product.priceUnit}):</span>
            <span className="text-lg font-black text-slate-900">{formatRupiah(estimatedTotal)}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={handleBookViaWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Sewa Lewat WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

