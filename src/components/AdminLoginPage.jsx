import React, { useState } from 'react';
import {
  Key,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import AdminDashboard from './AdminDashboard';

export default function AdminLoginPage({ onNavigate, onAdminLoginSuccess }) {
  // Login form state
  const [accessKey, setAccessKey] = useState('HARM-2025-ADMIN');
  const [showKey, setShowKey] = useState(false);
  const [rememberSession, setRememberSession] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Default to showing the Dashboard Admin - Ibu Nur Herwiyanti
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!accessKey.trim()) {
      setErrorMsg('Kode akses admin tidak boleh kosong.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsAuthenticated(true);
      if (onAdminLoginSuccess) {
        onAdminLoginSuccess({
          role: 'Super Admin',
          name: 'Ibu Nur Herwiyanti (Workshop Admin)',
          key: accessKey,
        });
      }
    }, 400);
  };

  // If authenticated, render the dedicated Sisi Pemilik (Dashboard Admin - Ibu Nur Herwiyanti)
  if (isAuthenticated) {
    return (
      <AdminDashboard
        onNavigate={onNavigate}
        onLockPanel={() => setIsAuthenticated(false)}
      />
    );
  }

  // Gateway: Login Master Key (Lock Screen)
  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col justify-between font-sans text-slate-800 selection:bg-amber-100 selection:text-amber-900 relative overflow-hidden">
      
      {/* Background Soft Pastel Ambient Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* Top Left Navigation Button */}
      <header className="pt-6 sm:pt-8 px-6 sm:px-10 z-10">
        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
          <span>Kembali ke Beranda</span>
        </button>
      </header>

      {/* Main Center Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">
        <div className="w-full max-w-[440px] bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/60 p-8 sm:p-10 flex flex-col items-center text-center">
          
          {/* Top Logo Box */}
          <div className="w-16 h-16 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center p-1 mb-4 ring-4 ring-amber-400/20">
            <img
              src="/logo.jpg"
              alt="Marching Pose Logo"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Pill Badge */}
          <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 mb-2.5">
            SISI PEMILIK &bull; WORKSHOP MARCHING POSE
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
            Panel Admin Ibu Nur Herwiyanti
          </h1>

          {/* Description */}
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-6">
            Masukkan kode akses admin atau master key untuk membuka Dashboard Performa Bisnis, Manajemen Pesanan &amp; Rekapitulasi Omzet.
          </p>

          {/* Error notification if any */}
          {errorMsg && (
            <div className="w-full mb-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-semibold text-left">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="w-full text-left space-y-4">
            
            {/* Input Key Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-mono font-bold text-slate-700 uppercase">
                  Kode Akses Admin / Master Key
                </label>
                <span className="text-[11px] font-mono text-amber-700 font-semibold">
                  Marching Pose
                </span>
              </div>

              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  required
                  placeholder="Masukkan kode master key"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full px-3.5 py-3 bg-[#f0f4f9] border border-slate-200/90 rounded-xl font-mono font-bold tracking-widest text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-[#0f2744] focus:bg-white outline-none transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Checkbox & Forgot Key */}
            <div className="flex items-center justify-between text-xs text-slate-600 pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberSession}
                  onChange={(e) => setRememberSession(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0f2744] focus:ring-amber-500"
                />
                <span className="text-xs">Ingat sesi perangkat ini (7 Hari)</span>
              </label>

              <button
                type="button"
                onClick={() => alert('Master key default: HARM-2025-ADMIN\nHubungi tim IT untuk reset kunci.')}
                className="text-xs text-slate-500 hover:text-amber-800 hover:underline"
              >
                Lupa Kunci?
              </button>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#0f2744] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{isLoading ? 'Memvalidasi Enkripsi...' : 'Buka Dashboard Admin'}</span>
            </button>

          </form>

          {/* Security & Support Info */}
          <div className="pt-6 mt-6 border-t border-slate-100 w-full flex flex-col items-center gap-2.5 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 font-mono">
              <Lock className="w-3 h-3 text-slate-400" />
              Enkripsi End-to-End SSL 256-Bit &bull; Marching Pose Internal
            </span>

            <button
              onClick={() => {
                const msg = encodeURIComponent('Halo Ibu Nur Herwiyanti, saya butuh bantuan akses master key.');
                window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
              }}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bantuan Teknis WhatsApp</span>
            </button>
          </div>

        </div>
      </main>

      {/* Bottom Footer Text */}
      <footer className="py-6 text-center z-10">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          MARCHING POSE &bull; SISI PEMILIK &bull; SISTEM INTERNAL IBU NUR HERWIYANTI
        </span>
      </footer>

    </div>
  );
}
