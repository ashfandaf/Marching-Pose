import React, { useState, useEffect } from 'react';
import { NAV_LINKS, WORKSHOP_INFO } from '../data/mockData';
import { Menu, X, MessageCircle, Music, User, LogIn, LogOut, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenWhatsAppModal, onOpenAuthModal, currentUser, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsAppDirect = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Marching Pose Yogyakarta, saya ingin bertanya mengenai ketersediaan sewa alat drumband dan kostum karnaval.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-6xl xl:max-w-7xl flex flex-col pointer-events-auto">
        
        {/* Floating Liquid Glass Pill Capsule (Oval Panjang) */}
        <div
          className={`w-full rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? 'bg-white/85 backdrop-blur-2xl shadow-[0_12px_40px_rgba(7,21,39,0.18)] border border-white/80 ring-1 ring-slate-900/5'
              : 'bg-white/75 backdrop-blur-xl shadow-[0_8px_32px_rgba(7,21,39,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] border border-white/70'
          }`}
        >
          {/* Left: Brand Logo & Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group pl-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0 ring-2 ring-amber-400/80 overflow-hidden p-0.5">
              <img
                src="/logo.jpg"
                alt="Marching Pose Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="hidden xs:block sm:block text-left">
              <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight tracking-tight">
                Marching Pose
              </span>
              <span className="block text-[9px] sm:text-[10px] font-bold text-amber-600 tracking-wider uppercase">
                &amp; Kostum Yogyakarta
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/[0.04] p-1 rounded-full border border-white/50 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-navy-950 hover:bg-white hover:shadow-2xs transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group (Login / User Profile + WhatsApp CTA) */}
          <div className="hidden md:flex items-center gap-2 sm:gap-2.5">
            {/* User Profile or Login/Register Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-white/90 hover:bg-white p-1 pr-3 rounded-full border border-slate-200/80 shadow-2xs transition-all">
                <div className="w-7 h-7 rounded-full bg-[#071527] text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="text-left text-xs">
                  <span className="block font-bold text-slate-800 leading-tight max-w-[110px] truncate">
                    {currentUser.name}
                  </span>
                  <span className="block text-[9px] text-slate-500 leading-none">
                    {currentUser.school || 'Terdaftar'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  title="Keluar (Logout)"
                  className="ml-1 p-1 text-slate-400 hover:text-red-600 rounded-full transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-1.5 bg-white/80 hover:bg-white text-slate-700 hover:text-navy-900 font-bold text-xs px-3.5 py-2 rounded-full border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all"
              >
                <LogIn className="w-3.5 h-3.5 text-slate-500" />
                <span>Login / Register</span>
              </button>
            )}

            {/* WhatsApp CTA Button (Oval Pill) */}
            <button
              onClick={openWhatsAppDirect}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#996515] to-[#b8860b] hover:from-[#805310] hover:to-[#996515] active:from-[#6b440b] active:to-[#805310] text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 ring-1 ring-amber-400/30"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Tanya ke WhatsApp Kami</span>
            </button>
          </div>

          {/* Mobile Actions: Login icon + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-1.5">
            {!currentUser && (
              <button
                onClick={onOpenAuthModal}
                className="px-3 py-1.5 rounded-full bg-white text-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-200 shadow-2xs"
              >
                <LogIn className="w-3 h-3 text-slate-500" />
                <span>Login</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full bg-white/90 text-slate-700 flex items-center justify-center hover:bg-white transition-colors border border-slate-200 shadow-2xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown (Matching Liquid Glass Card) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/90 backdrop-blur-2xl rounded-3xl p-5 border border-white/80 shadow-2xl space-y-3 animate-fadeIn">
            {currentUser && (
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#071527] text-amber-400 font-bold text-xs flex items-center justify-center">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{currentUser.name}</h4>
                    <p className="text-[10px] text-slate-500">{currentUser.school}</p>
                  </div>
                </div>
                <button
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="text-xs text-red-600 font-bold hover:underline"
                >
                  Logout
                </button>
              </div>
            )}

            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-navy-950 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {!currentUser && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-full border border-slate-200"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login / Register Akun Sekolah</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#996515] to-[#b8860b] hover:from-[#805310] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tanya ke WhatsApp Kami</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
