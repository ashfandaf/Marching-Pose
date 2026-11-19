import React, { useState } from 'react';
import { X, MessageCircle, School, Shirt, Drum, FileCheck, MapPin } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';

export default function WhatsAppConsultModal({ isOpen, onClose }) {
  const [inquiryType, setInquiryType] = useState('paket-lengkap');
  const [schoolName, setSchoolName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    let inquiryLabel = 'Sewa Alat Drumband & Kostum Karnaval';
    if (inquiryType === 'alat') inquiryLabel = 'Sewa Alat Marching Band Saja';
    if (inquiryType === 'kostum') inquiryLabel = 'Sewa Kostum Mayoret & Pasukan';
    if (inquiryType === 'fitting') inquiryLabel = 'Jadwal Cek Alat & Fitting di Workshop Bantul';
    if (inquiryType === 'spk') inquiryLabel = 'Prosedur Administrasi SPK & Kuitansi Dana BOS';

    const msg = encodeURIComponent(
      `Halo Tim Harmoni Drumband & Kostum Yogyakarta!\n\n` +
      `*Perihal:* ${inquiryLabel}\n` +
      (schoolName ? `*Nama Sekolah / Instansi:* ${schoolName}\n` : '') +
      (eventDate ? `*Rencana Tanggal Pelaksanaan:* ${eventDate}\n` : '') +
      (note ? `*Catatan Tambahan:* ${note}\n\n` : '\n') +
      `Mohon informasinya mengenai ketersediaan jadwal dan prosedur pemesanannya. Terima kasih!`
    );

    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#071527] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Konsultasi WhatsApp Cepat 24/7
              </h2>
              <p className="text-xs text-slate-300">
                Tim admin Harmoni Drumband siap merespons pertanyaan Anda
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
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Pilih Keperluan Anda:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${inquiryType === 'paket-lengkap' ? 'border-amber-500 bg-amber-50/60 font-bold text-slate-900' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input
                  type="radio"
                  name="inquiry"
                  value="paket-lengkap"
                  checked={inquiryType === 'paket-lengkap'}
                  onChange={() => setInquiryType('paket-lengkap')}
                  className="hidden"
                />
                <School className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Paket Alat + Kostum Lengkap</span>
              </label>

              <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${inquiryType === 'alat' ? 'border-amber-500 bg-amber-50/60 font-bold text-slate-900' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input
                  type="radio"
                  name="inquiry"
                  value="alat"
                  checked={inquiryType === 'alat'}
                  onChange={() => setInquiryType('alat')}
                  className="hidden"
                />
                <Drum className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Alat Drumband Saja</span>
              </label>

              <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${inquiryType === 'kostum' ? 'border-amber-500 bg-amber-50/60 font-bold text-slate-900' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input
                  type="radio"
                  name="inquiry"
                  value="kostum"
                  checked={inquiryType === 'kostum'}
                  onChange={() => setInquiryType('kostum')}
                  className="hidden"
                />
                <Shirt className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Kostum &amp; Seragam Mayoret</span>
              </label>

              <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${inquiryType === 'fitting' ? 'border-amber-500 bg-amber-50/60 font-bold text-slate-900' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input
                  type="radio"
                  name="inquiry"
                  value="fitting"
                  checked={inquiryType === 'fitting'}
                  onChange={() => setInquiryType('fitting')}
                  className="hidden"
                />
                <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Janjian Fitting di Workshop</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Sekolah / Instansi / Panitia
            </label>
            <input
              type="text"
              placeholder="Contoh: Panitia HUT RI Desa Panggungharjo"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Perkiraan Tanggal Acara
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Catatan / Jumlah Personil (Opsional)
            </label>
            <textarea
              rows={2}
              placeholder="Contoh: Butuh 20 seragam pasukan SMP dan 1 set snare + bass drum..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

