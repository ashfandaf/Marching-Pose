import React from 'react';
import { WHY_CHOOSE_US } from '../data/mockData';
import { Music2, Sparkles, MapPin, FileCheck } from 'lucide-react';

const iconMap = {
  Music2: Music2,
  Sparkles: Sparkles,
  MapPin: MapPin,
  FileCheck: FileCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="relative z-20 w-full bg-white border-b border-slate-200/80 py-14 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28 shadow-sm">
      <div className="w-full">
        
        {/* Top Header Row - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
              Dedikasi Musik &amp; Seni
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dedikasi Seni Musik Marching Sejak 2012
            </h2>
          </div>
          
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Dipercaya ratusan sekolah dan institusi di Daerah Istimewa Yogyakarta. Harmoni Drumband &amp; Kostum hadir memberikan solusi sewa alat drumband berkualitas tinggi, terawat dengan rapih, stem standar nasional, serta pilihan kostum karnaval berkarakter mewah dan elegan untuk momen terbaik tim Anda.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid - Spans Across Screen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 pt-10">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Music2;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-13 h-13 rounded-xl bg-[#071527] flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-200 shadow-sm p-3">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-5 mt-5 border-t border-slate-200/60">
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-amber-800 transition-colors flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
