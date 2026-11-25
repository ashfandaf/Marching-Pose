import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  Star,
  Lock,
  Mail,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
  Shield,
  FileCheck,
  Award,
  ChevronLeft,
} from 'lucide-react';
import LoginBackgroundDrift from './LoginBackgroundDrift';

export default function LoginPage({ onNavigate, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('masuk'); // 'masuk' | 'daftar'
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
      const isEmail = emailOrPhone.includes('@');
      const user = {
        name: isEmail ? emailOrPhone.split('@')[0] : 'PIC Kontingen',
        email: isEmail ? emailOrPhone : `${emailOrPhone}@kontingen.id`,
        school: 'Sekolah / Madrasah Terdaftar',
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
        role: 'Kepala Sekolah / Penanggung Jawab',
      };
      if (onLoginSuccess) onLoginSuccess(user);
      onNavigate('landing');
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-[#f5f8fc] flex flex-col font-sans text-slate-800 overflow-x-hidden selection:bg-amber-200 selection:text-amber-900 justify-between">
      
      {/* Animated Drifting Marching Band Elements (Kostum, Drum, Gitar, Terompet, Shako, Boots bergerak ke kanan) */}
      <LoginBackgroundDrift />

      {/* Subtle Ambient Decorative Particles & Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Radial Backlights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl"></div>

        {/* Floating Bokeh Dots */}
        <div className="absolute top-16 left-[18%] w-2 h-2 rounded-full bg-blue-400/40"></div>
        <div className="absolute top-28 left-[35%] w-2.5 h-2.5 rounded-full bg-amber-400/30"></div>
        <div className="absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-blue-500/30"></div>
        <div className="absolute top-[68%] left-[22%] w-3 h-3 rounded-full bg-slate-400/30"></div>
        <div className="absolute top-12 right-[25%] w-2 h-2 rounded-full bg-blue-400/40"></div>
        <div className="absolute top-[38%] right-[10%] w-2.5 h-2.5 rounded-full bg-blue-600/30"></div>
        <div className="absolute top-[52%] right-[4%] w-2 h-2 rounded-full bg-amber-500/30"></div>
        <div className="absolute bottom-[20%] right-[18%] w-2 h-2 rounded-full bg-blue-500/35"></div>
      </div>

      {/* ================= TOP HEADER NAVIGATION ================= */}
      <header className="relative z-10 w-full py-4 px-6 sm:px-10 md:px-14 lg:px-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm group-hover:scale-105 transition-transform p-0.5 flex-shrink-0 flex items-center justify-center ring-2 ring-amber-400/50">
              <img
                src="/logo.jpg"
                alt="Marching Pose Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Marching Pose
              </span>
              <span className="block text-[10px] font-semibold text-amber-800 uppercase tracking-widest">
                DRUMBAND &bull; IBU NUR HERWIYANTI
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('landing')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-3.5 rounded-xl hover:bg-slate-100"
            >
              <ChevronLeft className="w-4 h-4 text-slate-400" />
              <span>Beranda</span>
            </button>

            <button
              onClick={() => onNavigate('admin-login')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0f2744] hover:bg-[#071527] text-white text-xs font-semibold transition-all shadow-xs hover:shadow-md"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Admin</span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= MAIN CONTAINER: BALANCED 2-COLUMN UNIT ================= */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 my-auto">
        <div className="w-full max-w-5xl lg:max-w-[1020px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: HERO VALUE PROP (ENCLOSED CARD BOX) ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px] lg:max-w-none bg-white rounded-[32px] p-6 sm:p-8 md:p-9 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(7,21,39,0.08)] flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Platform Drumband &amp; Kostum Terintegrasi</span>
                </div>

                {/* Big Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-[1.25] tracking-tight">
                  Ruang Tepat untuk Pengadaan, Sewa, &amp; Formasi Paripurna.
                </h1>

                {/* Subtitle Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bergabunglah bersama ratusan sekolah dan instansi yang telah mempercayakan kebutuhan parade &amp; lomba dengan pendampingan langsung Ibu Nur Herwiyanti.
                </p>
              </div>

              {/* 3 Elevated Value Cards */}
              <div className="space-y-3 pt-1">
                
                {/* Card 1: 500+ Sekolah */}
                <div className="bg-slate-50/90 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center gap-3.5 transition-all hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0f2744] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#0f2744]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      500+ Sekolah &amp; Kontingen
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      Telah tampil prima di berbagai event &amp; lomba
                    </p>
                  </div>
                </div>

                {/* Card 2: 100% Legal & Terpercaya */}
                <div className="bg-slate-50/90 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center gap-3.5 transition-all hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      100% Legal &amp; Terpercaya
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      Kepatuhan SPK resmi, Faktur Pajak, &amp; e-Bilyet BOS
                    </p>
                  </div>
                </div>

                {/* Card 3: 4.9 / 5 Rating */}
                <div className="bg-slate-50/90 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center gap-3.5 transition-all hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        4.9 / 5
                      </h3>
                      <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                        Rating Kepuasan
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      Kualitas suara instrumen &amp; kebersihan busana terjamin
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: LOGIN CARD ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-white rounded-[32px] p-6 sm:p-8 md:p-9 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(7,21,39,0.1)]">
              
              {/* Top Segmented Control Tab Switcher */}
              <div className="bg-slate-100 p-1 rounded-2xl flex items-center mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('masuk')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    activeTab === 'masuk'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Masuk
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('register')}
                  className="flex-1 py-2 text-xs sm:text-sm font-semibold rounded-xl text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Daftar Akun</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 tracking-wider">
                    GRATIS
                  </span>
                </button>
              </div>

              {/* Centered Welcome Pill */}
              <div className="text-center mb-1.5">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-0.5 rounded-full">
                  SELAMAT DATANG KEMBALI
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl font-extrabold text-center text-slate-900 tracking-tight mb-1.5">
                Masuk ke Marching Pose
              </h2>

              {/* Subtitle */}
              <p className="text-xs text-center text-slate-500 max-w-xs mx-auto mb-5 leading-relaxed">
                Lanjutkan perjalanan pengadaan alat marching band &amp; kostum karnaval bersama kami.
              </p>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Field 1: Email / No. WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Alamat Email atau No. WhatsApp
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="nama@sekolah.sch.id / 081234567890"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-[#0f2744]/20 focus:border-[#0f2744] outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Field 2: Password with forgot link */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      Kata Sandi
                    </label>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Silakan hubungi WhatsApp resmi kami di +62 812-5131-6106 untuk reset kata sandi sekolah.');
                      }}
                      className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      Lupa Kata Sandi?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Masukkan kata sandi Anda"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-[#0f2744]/20 focus:border-[#0f2744] outline-none transition-all placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-[#0f2744] focus:ring-[#0f2744] border-slate-300"
                    />
                    <span>Ingat saya di perangkat ini</span>
                  </label>
                </div>

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#0a192f] hover:bg-[#06101e] text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md shadow-slate-900/15 hover:shadow-lg transition-all duration-200 disabled:opacity-50 active:scale-[0.99] mt-1"
                >
                  <span>{isLoading ? 'Memvalidasi...' : 'Masuk Sekarang'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Divider */}
                <div className="relative py-1.5 flex items-center justify-center">
                  <div className="w-full border-t border-slate-200"></div>
                  <span className="absolute bg-white px-3 text-[10px] font-medium text-slate-400">
                    atau masuk dengan
                  </span>
                </div>

                {/* Google Sign In Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-all hover:border-slate-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
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
                  <span>Lanjutkan dengan Google</span>
                </button>

                {/* Bottom Register Prompt */}
                <div className="text-center pt-1.5 text-xs text-slate-500">
                  Belum memiliki akun Marching Pose?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('register')}
                    className="font-bold text-amber-700 hover:text-amber-800 hover:underline transition-colors"
                  >
                    Daftar Gratis
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </main>

      {/* ================= FOOTER INFO ================= */}
      <footer className="relative z-10 py-4 px-6 text-center border-t border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 mb-1 font-medium">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            BOS &amp; LPJ Compliance
          </span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-amber-600" />
            SPK Resmi &amp; Faktur Pajak
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Garansi QC Instrumen &amp; Kostum
          </span>
        </div>
        <p className="text-[11px] text-slate-400">
          &copy; 2024 Marching Pose Yogyakarta (Ibu Nur Herwiyanti). Pengadaan Resmi Satuan Pendidikan.
        </p>
      </footer>

    </div>
  );
}
