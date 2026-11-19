import React, { useState, useEffect } from 'react';
import { NAV_LINKS, WORKSHOP_INFO } from '../data/mockData';
import { Menu, X, MessageCircle, Music, User, LogIn, LogOut, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenWhatsAppModal, onOpenAuthModal, currentUser, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsAppDirect = () => {
    if (onOpenWhatsAppModal) {
      onOpenWhatsAppModal();
    } else {
      const msg = encodeURIComponent(
        'Halo Harmoni Drumband & Kostum Yogyakarta, saya ingin bertanya mengenai ketersediaan sewa alat drumband dan kostum karnaval.'
      );
      window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy-900 to-navy-700 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-slate-900 leading-tight tracking-tight">
                Harmoni Drumband
              </span>
              <span className="block text-xs font-semibold text-amber-600 tracking-wider uppercase">
                &amp; Kostum Yogyakarta
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-navy-900 hover:font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group (Login / Register + WhatsApp) */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Login / Register Button or User Profile */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 p-1.5 pr-3 rounded-xl border border-slate-200 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#071527] text-amber-400 font-bold text-xs flex items-center justify-center">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="text-left text-xs">
                  <span className="block font-bold text-slate-800 leading-tight max-w-[120px] truncate">
                    {currentUser.name}
                  </span>
                  <span className="block text-[10px] text-slate-500 leading-none">
                    {currentUser.school || 'Terverifikasi'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  title="Keluar (Logout)"
                  className="ml-1 p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-navy-900 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-300/80 hover:border-slate-400 shadow-2xs transition-all duration-200"
              >
                <LogIn className="w-4 h-4 text-slate-500" />
                <span>Login / Register</span>
              </button>
            )}

            {/* WhatsApp CTA Button */}
            <button
              onClick={openWhatsAppDirect}
              className="inline-flex items-center gap-2 bg-[#996515] hover:bg-[#805310] active:bg-[#6b440b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanya ke WhatsApp Kami</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {!currentUser && (
              <button
                onClick={onOpenAuthModal}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col gap-3">
            {currentUser && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#071527] text-amber-400 font-bold text-xs flex items-center justify-center">
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

            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-900"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {!currentUser && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 rounded-lg border border-slate-200"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login / Register Akun Sekolah</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#996515] hover:bg-[#805310] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tanya ke WhatsApp Kami</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
