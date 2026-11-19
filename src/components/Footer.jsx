import React from 'react';
import { WORKSHOP_INFO, NAV_LINKS } from '../data/mockData';
import { Music, MessageCircle, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenWhatsAppModal }) {
  const openWhatsApp = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Harmoni Drumband & Kostum, saya ingin tanya informasi sewa alat dan seragam.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs sm:text-sm">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#071527] flex items-center justify-center text-amber-400 shadow-sm">
                <Music className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="block text-base font-bold text-slate-900 leading-tight">
                  Harmoni Drumband
                </span>
                <span className="block text-xs font-semibold text-amber-600 tracking-wider uppercase">
                  &amp; Kostum Yogyakarta
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Pusat penyedia persewaan alat marching band, drumband anak &amp; remaja, serta kostum karnaval parade berstandar festival nasional di Daerah Istimewa Yogyakarta.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Kuitansi Resmi &amp; Legalitas Lengkap untuk SPJ BOS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-900 transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#workshop"
                  className="text-slate-500 hover:text-slate-900 transition-colors text-xs"
                >
                  Lokasi Workshop Bantul
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Workshop &amp; Informasi
            </h4>
            <div className="space-y-2 text-xs text-slate-500 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{WORKSHOP_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{WORKSHOP_INFO.hours}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>WhatsApp: {WORKSHOP_INFO.phone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2024 Harmoni Drumband &amp; Kostum Yogyakarta. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-600 cursor-pointer">Syarat &amp; Ketentuan Sewa</span>
            <span>&bull;</span>
            <span className="hover:text-slate-600 cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

