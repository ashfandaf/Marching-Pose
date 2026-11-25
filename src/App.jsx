import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Catalog from './components/Catalog';
import Testimonials from './components/Testimonials';
import WorkshopLocation from './components/WorkshopLocation';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import RentalEstimatorModal from './components/RentalEstimatorModal';
import WhatsAppConsultModal from './components/WhatsAppConsultModal';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminLoginPage from './components/AdminLoginPage';
import AiChatbot from './components/AiChatbot';
import { PRODUCTS } from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'login' | 'register' | 'admin-login'
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check saved login session and URL hash on load
  useEffect(() => {
    try {
      const saved = localStorage.getItem('marchingpose_user') || localStorage.getItem('harmoni_user');
      if (saved) {
        setCurrentUser(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#login') setCurrentView('login');
      else if (hash === '#register') setCurrentView('register');
      else if (hash === '#admin' || hash === '#admin-login') setCurrentView('admin-login');
      else if (hash === '#beranda' || hash === '') {
        // stay or go to landing
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'login') window.location.hash = '#login';
    else if (view === 'register') window.location.hash = '#register';
    else if (view === 'admin-login') window.location.hash = '#admin';
    else {
      window.location.hash = '#';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('marchingpose_user', JSON.stringify(user));
    } catch (e) {
      // ignore
    }
    handleNavigate('landing');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('marchingpose_user');
      localStorage.removeItem('harmoni_user');
    } catch (e) {
      // ignore
    }
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId);

  // Render Login View if active
  if (currentView === 'login') {
    return (
      <LoginPage
        onNavigate={handleNavigate}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  // Render Register View if active
  if (currentView === 'register') {
    return (
      <RegisterPage
        onNavigate={handleNavigate}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  // Render Admin Login View if active
  if (currentView === 'admin-login') {
    return (
      <AdminLoginPage
        onNavigate={handleNavigate}
        onAdminLoginSuccess={(admin) => {
          // Admin logged in
        }}
      />
    );
  }

  // Render Main Landing Page View
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar
        onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        onOpenAuthModal={() => handleNavigate('login')}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Dedikasi Seni Musik Marching Sejak 2012 */}
        <WhyChooseUs />

        {/* Peralatan Musik & Seragam Drumband */}
        <Catalog onSelectProduct={(id) => setSelectedProductId(id)} />

        {/* Kepercayaan dari Sekolah & Instansi */}
        <Testimonials />

        {/* Kunjungi Workshop Kami di Yogyakarta */}
        <WorkshopLocation onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />

        {/* Jadwalkan Kebutuhan Parade & Upacara */}
        <CtaBanner
          onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
          onOpenCalculatorModal={() => setIsCalculatorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />

      {/* Floating AI Chatbot 24/7 */}
      <AiChatbot
        onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        onOpenCalculatorModal={() => setIsCalculatorOpen(true)}
      />

      {/* Interactive Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
        />
      )}

      {isCalculatorOpen && (
        <RentalEstimatorModal
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
        />
      )}

      {isWhatsAppModalOpen && (
        <WhatsAppConsultModal
          isOpen={isWhatsAppModalOpen}
          onClose={() => setIsWhatsAppModalOpen(false)}
        />
      )}
    </div>
  );
}
