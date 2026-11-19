import React, { useState } from 'react';
import { X, Calculator, MessageCircle, Plus, Minus, Check, Percent } from 'lucide-react';
import { PRODUCTS, WORKSHOP_INFO } from '../data/mockData';

export default function RentalEstimatorModal({ isOpen, onClose }) {
  const [quantities, setQuantities] = useState({
    'snare-high-tension': 4,
    'bass-drum-tonal': 2,
    'marching-bellra': 4,
    'kostum-mayoret-royal': 2,
    'seragam-pasukan-drummer': 16,
    'marching-hand-cymbal': 2,
  });

  const [days, setDays] = useState(1);
  const [schoolName, setSchoolName] = useState('');
  const [isSchoolDiscount, setIsSchoolDiscount] = useState(true);

  if (!isOpen) return null;

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Calculate Subtotal
  let subtotalPerDay = 0;
  let totalItemsCount = 0;
  PRODUCTS.forEach((p) => {
    const qty = quantities[p.id] || 0;
    subtotalPerDay += qty * p.price;
    totalItemsCount += qty;
  });

  const grossTotal = subtotalPerDay * days;
  // School discount 10% if active and items >= 5
  const discountAmount = isSchoolDiscount && totalItemsCount >= 5 ? grossTotal * 0.1 : 0;
  const netTotal = grossTotal - discountAmount;

  const handleSendToWhatsApp = () => {
    const itemsList = PRODUCTS.filter((p) => (quantities[p.id] || 0) > 0)
      .map((p) => `- ${p.title}: ${quantities[p.id]} unit (@${formatRupiah(p.price)})`)
      .join('\n');

    const msg = encodeURIComponent(
      `Halo Harmoni Drumband Yogyakarta, saya ingin mengajukan estimasi sewa alat & seragam karnaval:\n\n` +
        (schoolName ? `*Nama Sekolah/Instansi:* ${schoolName}\n` : '') +
        `*Durasi Sewa:* ${days} Hari\n` +
        `*Rincian Alat & Seragam:*\n${itemsList}\n\n` +
        `*Total Barang:* ${totalItemsCount} item\n` +
        `*Subtotal:* ${formatRupiah(grossTotal)}\n` +
        (discountAmount > 0 ? `*Diskon Paket Sekolah (10%):* -${formatRupiah(discountAmount)}\n` : '') +
        `*Estimasi Total:* ${formatRupiah(netTotal)}\n\n` +
        `Mohon konfirmasi ketersediaan jadwal serta prosedur penerbitan SPK resminya. Terima kasih!`
    );

    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#071527] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                Kalkulator &amp; Simulasi Sewa Karnaval
              </h2>
              <p className="text-xs text-slate-300">
                Hitung estimasi pengadaan alat drumband dan seragam parade sekolah Anda
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* School Name & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Sekolah / Instansi (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: SMP Negeri 2 Sleman"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Durasi Sewa (Hari)
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDays(Math.max(1, days - 1))}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-extrabold text-slate-900 w-12 text-center">
                  {days} Hari
                </span>
                <button
                  type="button"
                  onClick={() => setDays(days + 1)}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Items Selector */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Pilih Jumlah Alat Musik &amp; Kostum:
            </h3>

            <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
              {PRODUCTS.map((product) => {
                const count = quantities[product.id] || 0;
                return (
                  <div key={product.id} className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {product.title}
                        </h4>
                        <span className="text-xs text-amber-700 font-semibold">
                          {formatRupiah(product.price)} /{product.priceUnit}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-slate-800">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* School Discount Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 text-amber-700" />
              <div>
                <span className="font-bold text-amber-950 block">Diskon Paket Khusus Sekolah (10%)</span>
                <span className="text-amber-800 text-[11px]">Berlaku untuk pemesanan rombongan &gt;= 5 unit</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={isSchoolDiscount}
              onChange={(e) => setIsSchoolDiscount(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500 cursor-pointer"
            />
          </div>

          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Subtotal ({totalItemsCount} item x {days} hari):</span>
              <span className="font-semibold text-slate-200">{formatRupiah(grossTotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Diskon Paket Sekolah:</span>
                <span>-{formatRupiah(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800">
              <span>Total Estimasi Biaya:</span>
              <span className="text-amber-400">{formatRupiah(netTotal)}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl"
          >
            Batal
          </button>
          <button
            onClick={handleSendToWhatsApp}
            disabled={totalItemsCount === 0}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Kirim Estimasi ke WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}

