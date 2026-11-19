import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-slate-50/80 border-t border-slate-200/60">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            Ulasan Pelanggan Terpercaya
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kepercayaan dari Sekolah &amp; Instansi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Pengalaman nyata para kepala sekolah, pembina marching band, dan panitia karnaval parade HUT RI yang telah mempercayakan peralatannya kepada Harmoni Drumband.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                <div
                  className={`w-11 h-11 rounded-xl ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-snug mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

