import React, { useState } from 'react';
import {
  Music,
  Users,
  ShieldCheck,
  Star,
  Lock,
  Mail,
  GraduationCap,
  CheckCircle2,
  Info,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  FileCheck,
  Award,
} from 'lucide-react';

export default function LoginPage({ onNavigate, onLoginSuccess }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: emailOrPhone.includes('@')
          ? emailOrPhone.split('@')[0]
          : 'PIC Kontingen',
        email: emailOrPhone,
        school: 'Sekolah / Instansi Terdaftar',
        role: 'Panitia Pengadaan',
      };
      if (onLoginSuccess) onLoginSuccess(user);
      onNavigate('landing');
    }, 600);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: 'Drs. Prasetyo Wibowo',
        email: 'kepsek@sman1sleman.sch.id',
        school: 'SMAN 1 Sleman',
        role: 'Kepala Sekolah',
      };
      if (onLoginSuccess) onLoginSuccess(user);
      onNavigate('landing');
    }, 500);
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

          {/* Right: Nav Links & Admin Button */}
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

            <button
              onClick={() => onNavigate('admin-login')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200/80"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Portal Admin</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column (Brand Promise & Value Points) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#ebf3fe] via-[#f2f7fe] to-[#f8fbff] p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs mb-6">
                <span>✨</span> Platform Drumband &amp; Busana Terintegrasi
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                Ruang Tepat untuk Pengadaan, Sewa, &amp; Formasi Paripurna.
              </h1>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                Bergabunglah bersama ratusan sekolah dan instansi yang telah mempercayakan kebutuhan parade &amp; lomba dengan pendampingan langsung Ibu Nur Herwiyanti.
              </p>
            </div>

            {/* 3 Value Cards */}
            <div className="space-y-3 pt-2">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    500+ Sekolah &amp; Kontingen
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Telah tampil prima di berbagai event &amp; lomba
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    100% Legal &amp; Terpercaya
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Kepatuhan SPK, Faktur, &amp; e-Bilyet BOS
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    4.9 / 5 Rating Kepuasan
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Kualitas suara instrumen &amp; kebersihan kostum terjamin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Login Form) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            
            {/* Top Subtitle & Security Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                AKSES MASUK TERPADU
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                <Lock className="w-3 h-3 text-slate-400" />
                256-Bit SSL
              </span>
            </div>

            {/* Main Header */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
              Masuk ke Akun Anda
            </h2>

            {/* Role Access Selector */}
            <div className="mb-5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                PILIH PERAN AKSES SISTEM:
              </span>

              {/* Selected Role Box */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-amber-400/80 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Portal Panitia &amp; Sekolah
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Booking, SPK &amp; Fitting Kontingen Drumband
                    </p>
                  </div>
                </div>

                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
              </div>

              {/* Info Note Callout */}
              <div className="flex items-start gap-2 p-3 mt-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
                <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  Akses khusus PIC madrasah, sekolah &amp; instansi. Untuk pengelola &amp; kasir produksi, gunakan tombol{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('admin-login')}
                    className="font-bold text-slate-800 hover:text-amber-800 underline inline"
                  >
                    Portal Admin (Supabase)
                  </button>{' '}
                  di kanan atas.
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Field 1: Email or WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Sekolah atau No. WhatsApp PIC
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="nama@sekolah.sch.id / 081234567890"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Field 2: Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Kata Sandi
                  </label>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Silakan hubungi WhatsApp operasional kami untuk bantuan pemulihan kata sandi sekolah.');
                    }}
                    className="text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors"
                  >
                    Lupa Kata Sandi?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Masukkan kata sandi akun"
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

              {/* Remember Me & Safe Session */}
              <div className="flex items-center justify-between text-xs text-slate-600 pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0f2744] focus:ring-navy-800"
                  />
                  <span>Ingat Saya di Perangkat Ini</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  Sesi Aman (30 Hari)
                </span>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#0a192f] hover:bg-[#06101e] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
              >
                <span>{isLoading ? 'Memvalidasi Akun...' : 'Masuk ke Portal Sistem'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Divider */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="w-full border-t border-slate-200"></div>
                <span className="absolute bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  ATAU AKSES CEPAT TANPA SANDI
                </span>
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm py-3 rounded-xl border border-slate-200 shadow-2xs transition-all"
              >
                {/* Google Logo SVG */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Masuk dengan Google</span>
              </button>

              {/* Bottom Switch to Register */}
              <div className="text-center pt-2 text-xs text-slate-500">
                Belum punya akun pengadaan sekolah?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('register')}
                  className="font-bold text-amber-700 hover:text-amber-800 hover:underline"
                >
                  Daftar Akun Instansi
                </button>
              </div>

            </form>

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

