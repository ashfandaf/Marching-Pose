import React, { useState } from 'react';
import {
  Music,
  School,
  MapPin,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Calendar,
  FileText,
  Scissors,
  MessageSquare,
  Shield,
  FileCheck,
  Award,
} from 'lucide-react';

export default function RegisterPage({ onNavigate, onLoginSuccess }) {
  const [schoolName, setSchoolName] = useState('');
  const [level, setLevel] = useState('SMP / MTs');
  const [city, setCity] = useState('');
  const [picName, setPicName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
      return;
    }
    if (!agreeTerms) {
      alert('Silakan setujui ketentuan reservasi terlebih dahulu.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const newUser = {
        name: picName || 'PIC Sekolah',
        school: schoolName || 'Sekolah Terdaftar',
        phone: phone,
        level: level,
        city: city,
        role: 'Penanggung Jawab Kontingen',
      };
      if (onLoginSuccess) onLoginSuccess(newUser);
      onNavigate('landing');
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 selection:bg-amber-200 selection:text-amber-900">
      
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200/80 py-4 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24">
        <div className="w-full flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <div
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0f2744] flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="block text-lg font-bold text-slate-900 leading-tight">
                Harmoni
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                DRUMBAND &amp; KOSTUM • IBU NUR HERWIYANTI
              </span>
            </div>
          </div>

          {/* Right: Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('landing')}
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => {
                onNavigate('landing');
                setTimeout(() => {
                  const el = document.getElementById('katalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:inline-block"
            >
              Kembali ke Katalog
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Registration Form (Col 8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 md:p-10">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 mb-3">
              <span>⭐</span> PORTAL RESMI PENGADAAN TERVERIFIKASI
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Daftar Akun Pengadaan Sekolah &amp; Instansi
            </h1>

            {/* Subhead */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              Registrasi resmi untuk kemudahan booking alat drumband, fitting seragam, dan penerbitan SPK/Kwitansi BAST.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* SECTION 01: Data Instansi */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <div className="w-6 h-6 rounded bg-[#0f2744] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      Data Instansi / Satuan Pendidikan
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Lengkapi profil lembaga untuk administrasi cetak BAST &amp; surat jalan.
                    </p>
                  </div>
                </div>

                {/* Field: Nama Lengkap Sekolah */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Lengkap Sekolah / Instansi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: SDN Menteng 01 Pagi / Korsik Pemkab"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Field: Jenjang Unit Organisasi */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Jenjang Unit Organisasi <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['SD / MI', 'SMP / MTs', 'SMA / SMK', 'Korsik / Dinas'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setLevel(opt)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          level === opt
                            ? 'bg-blue-50 text-blue-800 border-blue-400 shadow-2xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field: Kota / Kabupaten Domisili */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kota / Kabupaten Domisili <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Kabupaten Sleman, D.I. Yogyakarta"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 02: Data PIC & Keamanan */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <div className="w-6 h-6 rounded bg-[#0f2744] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      Data PIC &amp; Keamanan Akun
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Penanggung jawab operasional kegiatan drumband dan verifikasi dokumen.
                    </p>
                  </div>
                </div>

                {/* Grid 2 Cols: Nama PIC & No WA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap Pembina / Panitia <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Nama lengkap beserta gelar"
                        value={picName}
                        onChange={(e) => setPicName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx (untuk konfirmasi fitting)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2 Cols: Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Buat Kata Sandi <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Minimal 8 karakter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="Ketik ulang kata sandi"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Checkbox Terms */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-[#0f2744] focus:ring-navy-800"
                  />
                  <span className="leading-relaxed">
                    Saya menyetujui Ketentuan Reservasi &amp; Jaminan Kerahasiaan Dokumen Administrasi pengadaan unit alat drumband dan sewa kostum Harmoni.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#0a192f] hover:bg-[#06101e] text-white font-bold text-xs sm:text-sm py-4 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
              >
                <span>{isLoading ? 'Mendaftarkan Akun...' : 'Daftar Akun Sekolah & Mulai Reservasi'}</span>
              </button>

              {/* Bottom Switch to Login & Encryption info */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-slate-100">
                <div className="text-slate-600">
                  Sudah memiliki akun pengadaan?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('login')}
                    className="font-bold text-amber-700 hover:text-amber-800 hover:underline"
                  >
                    Masuk di sini &rarr;
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enkripsi Standar Institusi 256-bit</span>
                </div>
              </div>

            </form>

          </div>

          {/* Right Column: Standards & Photo Showcase (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Card: Keleluasaan Pengadaan Terstandarisasi Lembaga */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-7 space-y-5">
              
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60 mb-2">
                  ⭐ STANDAR LAYANAN HARMONI
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Keleluasaan Pengadaan Terstandarisasi Lembaga
                </h3>
              </div>

              {/* 3 Bullet Features */}
              <div className="space-y-4">
                
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      Prioritas Jadwal Parade &amp; Kejuaraan
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Slot ketersediaan set instrumen (senar, bass drum, bellyra, korsik) dikunci khusus pada kalender musiman lomba.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      Format SPK &amp; Kuitansi Siap LPJ
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Format berkas lengkap bertanda tangan, stempel resmi, bermaterai, dan lampiran spesifikasi sesuai pedoman BOS.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      Fitting Supervisi Ibu Nur Herwiyanti
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Garansi penyesuaian ukuran seragam mayoret, gitapati, dan pasukan inti dibimbing langsung oleh tim penjahit berpengalaman.
                    </p>
                  </div>
                </div>

              </div>

              {/* Consultation Note */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs">
                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-blue-950 text-xs">
                      Konsultasi Cepat Panitia
                    </h5>
                    <p className="text-[11px] text-blue-800 leading-relaxed mt-0.5">
                      Butuh estimasi RAB sebelum mengajukan pendaftaran? Hubungi layanan koordinasi langsung melalui WhatsApp resmi operasional.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Card: Photo Showcase with QC Banner */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative">
              <div className="relative aspect-[4/3] bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80"
                  alt="Quality Control Instrumen & Seragam"
                  className="w-full h-full object-cover filter brightness-90"
                />
                
                {/* Bottom Overlay Quality Control */}
                <div className="absolute inset-x-0 bottom-0 bg-[#071527]/95 p-4 backdrop-blur-sm border-t border-slate-700">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/30 mb-1">
                    QUALITY CONTROL TERPADU
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Setiap drum dituning presisi dan seragam disterilkan sebelum serah terima dilakukan kepada panitia sekolah.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Bottom Footer Bar */}
      <footer className="py-6 px-4 text-center border-t border-slate-200/80 bg-white">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 mb-2 font-medium">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-600" />
            BOS &amp; LPJ Compliance
          </span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-amber-600" />
            SPK Resmi &amp; Faktur Pajak
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-600" />
            Garansi QC Instrumen &amp; Kostum
          </span>
        </div>
        <p className="text-[11px] text-slate-400">
          &copy; 2024 Harmoni Drumband &amp; Kostum (Ibu Nur Herwiyanti). Pengadaan Resmi Satuan Pendidikan &amp; Institusi.
        </p>
      </footer>

    </div>
  );
}

