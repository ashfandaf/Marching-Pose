import React, { useState } from 'react';
import { X, Lock, Mail, User, School, Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [regName, setRegName] = useState('');
  const [regSchool, setRegSchool] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification('');

    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: loginEmail.includes('@') ? loginEmail.split('@')[0] : 'Panitia Sekolah',
        email: loginEmail,
        school: 'Instansi / Sekolah DIY',
      };
      if (onLoginSuccess) onLoginSuccess(user);
      onClose();
    }, 600);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification('');

    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: regName || 'Pengguna Baru',
        email: regEmail,
        school: regSchool || 'Sekolah / Panitia',
        phone: regPhone,
      };
      if (onLoginSuccess) onLoginSuccess(user);
      onClose();
    }, 700);
  };

  const handleQuickDemoLogin = (role) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const demoUser = role === 'sekolah'
        ? { name: 'Drs. Prasetyo Wibowo', email: 'kepsek@sman1sleman.sch.id', school: 'SMAN 1 Sleman', role: 'Kepala Sekolah' }
        : { name: 'Nina Kustiasari, S.Pd', email: 'nina@smp2yk.sch.id', school: 'SMP Muhammadiyah 2 Yk', role: 'Pembina Seni' };
      if (onLoginSuccess) onLoginSuccess(demoUser);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header with Background and Tabs */}
        <div className="bg-[#071527] text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-400/20">
              Portal Pelanggan
            </span>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {mode === 'login' ? 'Masuk ke Akun Anda' : 'Daftar Akun Baru'}
            </h2>
            <p className="text-xs text-slate-300">
              Kelola sewa alat drumband, jadwal fitting, dan dokumen SPK sekolah.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700/80">
            <button
              onClick={() => { setMode('login'); setNotification(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Masuk (Login)
            </button>
            <button
              onClick={() => { setMode('register'); setNotification(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Daftar (Register)
            </button>
          </div>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 space-y-4">
          
          {mode === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email atau No. WhatsApp
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="nama@sekolah.sch.id / 08123456789"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    Kata Sandi (Password)
                  </label>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Silakan hubungi WhatsApp kami untuk reset kata sandi instansi Anda.'); }} className="text-[11px] text-amber-700 hover:underline font-semibold">
                    Lupa Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-amber-600 focus:ring-amber-500" />
                  <span>Ingat Saya di Perangkat Ini</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
              >
                <span>{isLoading ? 'Memproses...' : 'Masuk ke Akun'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Demo Login Shortcuts */}
              <div className="pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-400 block mb-2">Atau masuk cepat akun demo:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('sekolah')}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                  >
                    🏫 Demo Kepala Sekolah
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('pembina')}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                  >
                    🎵 Demo Pembina Seni
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Penanggung Jawab
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Haryanto, S.Pd"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Sekolah / Instansi / Komunitas
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: SMAN 2 Bantul / Panitia HUT RI"
                    value={regSchool}
                    onChange={(e) => setRegSchool(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    No. WhatsApp Aktif
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="admin@sekolah.sch.id"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Buat Kata Sandi (Password)
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="Minimal 6 karakter"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" required className="mt-0.5 rounded text-amber-600 focus:ring-amber-500" />
                <span className="text-[11px] text-slate-600 leading-tight">
                  Saya menyetujui Ketentuan Persewaan Alat &amp; Kebijakan Privasi Harmoni Drumband Yogyakarta.
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
              >
                <span>{isLoading ? 'Mendaftarkan Akun...' : 'Daftar Akun Baru'}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Security Assurance */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kerahasiaan data instansi &amp; sekolah terjamin aman</span>
          </div>

        </div>

      </div>
    </div>
  );
}

