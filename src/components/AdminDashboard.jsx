import React, { useState } from 'react';
import {
  ArrowLeft,
  LogOut,
  Music,
  TrendingUp,
  Package,
  Users,
  Calendar,
  DollarSign,
  Bell,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  Clock,
  Printer,
  Download,
  Phone,
  MessageCircle,
  FileText,
  Scissors,
  Check,
  AlertCircle,
  Sparkles,
  ChevronRight,
  Eye,
  Trash2,
} from 'lucide-react';
import {
  MONTHLY_SALES_DATA,
  INCOMING_NOTIFICATIONS,
  CUSTOMER_PROFILES,
  INITIAL_ORDERS,
  SALES_TRANSACTIONS,
} from '../data/adminData';
import { WORKSHOP_INFO } from '../data/mockData';

export default function AdminDashboard({ onNavigate, onLockPanel }) {
  const [activeTab, setActiveTab] = useState('ringkasan'); // 'ringkasan' | 'pelanggan' | 'pesanan' | 'rekapitulasi'
  
  // Data States
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [customers, setCustomers] = useState(CUSTOMER_PROFILES);
  const [transactions, setTransactions] = useState(SALES_TRANSACTIONS);
  const [notifications, setNotifications] = useState(INCOMING_NOTIFICATIONS);

  // Filters & Search
  const [customerSearch, setCustomerSearch] = useState('');
  const [customerJenjang, setCustomerJenjang] = useState('semua');
  const [orderStatusFilter, setOrderStatusFilter] = useState('semua');
  const [orderSearch, setOrderSearch] = useState('');
  const [reportPeriod, setReportPeriod] = useState('tahun');

  // Modal / Form Catat Pesanan Baru
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    productCategory: 'Paket Drumband & Kostum',
    specifications: '',
    materialDetails: 'Kain American Drill & Velvet Bridal',
    sizes: 'Mayoret S-L, Seragam M (20 pcs)',
    finalPrice: '',
    eventDate: '',
    status: 'Sedang Produksi',
    paymentStatus: 'DP 50%',
  });

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Calculations for Automated Sales Reports
  const totalOmzetTahunan = transactions.reduce((acc, curr) => acc + curr.total, 0);
  const totalPesananAktif = orders.filter((o) => o.status !== 'Selesai').length;
  const unreadNotifsCount = notifications.filter((n) => n.unread).length;

  // Add New Order Handler
  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!newOrder.customerName || !newOrder.finalPrice) {
      alert('Mohon lengkapi nama pelanggan dan nominal harga final!');
      return;
    }

    const orderId = `ORD-2024-${String(orders.length + 1).padStart(3, '0')}`;
    const spkNum = `SPK/MP/2024/${String(orders.length + 80).padStart(3, '0')}`;
    const created = {
      ...newOrder,
      id: orderId,
      spkNumber: spkNum,
      finalPrice: Number(newOrder.finalPrice),
      progress: 30,
    };

    setOrders([created, ...orders]);
    
    // Also record transaction automatically
    const newTrans = {
      id: `INV-2024-08${String(transactions.length + 1).padStart(2, '0')}`,
      date: new Date().toISOString().split('T')[0],
      schoolName: newOrder.customerName,
      description: newOrder.specifications || 'Pengadaan Unit Drumband & Busana',
      method: 'Transfer BOS / Rekening Sekolah',
      subtotal: Number(newOrder.finalPrice),
      tax: 0,
      total: Number(newOrder.finalPrice),
      status: newOrder.paymentStatus,
    };
    setTransactions([newTrans, ...transactions]);

    setIsOrderModalOpen(false);
    setNewOrder({
      customerName: '',
      productCategory: 'Paket Drumband & Kostum',
      specifications: '',
      materialDetails: 'Kain American Drill & Velvet Bridal',
      sizes: 'Mayoret S-L, Seragam M (20 pcs)',
      finalPrice: '',
      eventDate: '',
      status: 'Sedang Produksi',
      paymentStatus: 'DP 50%',
    });
    alert('Pesanan baru berhasil dicatat & masuk rekapitulasi omzet otomatis!');
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          let newProgress = ord.progress;
          if (newStatus === 'Menunggu') newProgress = 20;
          if (newStatus === 'Sedang Produksi') newProgress = 50;
          if (newStatus === 'Fitting Workshop') newProgress = 80;
          if (newStatus === 'Siap Kirim') newProgress = 95;
          if (newStatus === 'Selesai') newProgress = 100;
          return { ...ord, status: newStatus, progress: newProgress };
        }
        return ord;
      })
    );
  };

  const filteredOrders = orders.filter((o) => {
    const matchStatus = orderStatusFilter === 'semua' || o.status === orderStatusFilter;
    const matchSearch =
      o.customerName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.spkNumber.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.specifications.toLowerCase().includes(orderSearch.toLowerCase());
    return matchStatus && matchSearch;
  });

  const filteredCustomers = customers.filter((c) => {
    const matchJenjang = customerJenjang === 'semua' || c.jenjang === customerJenjang;
    const matchSearch =
      c.schoolName.toLowerCase().includes(customerSearch.toLowerCase()) ||
      c.pic.toLowerCase().includes(customerSearch.toLowerCase()) ||
      c.address.toLowerCase().includes(customerSearch.toLowerCase());
    return matchJenjang && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. TOP NAVBAR */}
      <header className="sticky top-0 z-30 py-3.5 px-6 sm:px-10 md:px-14 flex items-center justify-between border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        {/* Left: Kembali ke Beranda */}
        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Right: Kunci Panel & Identitas Marching Pose */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLockPanel}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 transition-all"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-500 rotate-180" />
            <span>Kunci Panel</span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-[#0f2744] flex items-center justify-center text-amber-400 shadow-xs">
              <Music className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="block text-xs font-extrabold text-slate-900 leading-tight">
                Marching Pose
              </span>
              <span className="block text-[10px] font-semibold text-amber-700 uppercase tracking-wider">
                Ibu Nur Herwiyanti
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HEADER BANNER UTAMA */}
      <div className="w-full px-6 sm:px-10 md:px-14 pt-6 pb-2">
        <div className="w-full bg-gradient-to-r from-[#0f2744] via-[#16365c] to-[#1f4a7d] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2 z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold text-amber-300 bg-amber-500/20 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>SISI PEMILIK (DASHBOARD ADMIN)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Dashboard Admin - Ibu Nur Herwiyanti
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pusat kendali performa bisnis, data pemesan instansi/sekolah, pencatatan pesanan &amp; spesifikasi bahan, serta rekapitulasi omzet otomatis tanpa nota manual.
            </p>
          </div>

          {/* Floating Metric Card (Pesanan Aktif) */}
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex items-center gap-4 min-w-[240px] z-10">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Package className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                {totalPesananAktif} Pesanan Aktif
              </div>
              <div className="text-xs text-amber-300/90 font-medium mt-0.5">
                Sedang diproduksi &amp; disiapkan
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MENU TAB NAVIGASI UTAMA (SESUAI 4 POIN DOKUMEN) */}
      <div className="w-full px-6 sm:px-10 md:px-14 pt-4">
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto text-xs sm:text-sm">
          
          <button
            onClick={() => setActiveTab('ringkasan')}
            className={`flex items-center gap-2 px-5 py-3.5 font-bold transition-all border-b-2 -mb-[2px] ${
              activeTab === 'ringkasan'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-xl border-t border-x border-slate-200 shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span>1. Ringkasan Performa Bisnis</span>
          </button>

          <button
            onClick={() => setActiveTab('pelanggan')}
            className={`flex items-center gap-2 px-5 py-3.5 font-bold transition-all border-b-2 -mb-[2px] ${
              activeTab === 'pelanggan'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-xl border-t border-x border-slate-200 shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users className="w-4 h-4 text-amber-600" />
            <span>2. Profil Pemesan &amp; Pelanggan</span>
          </button>

          <button
            onClick={() => setActiveTab('pesanan')}
            className={`flex items-center gap-2 px-5 py-3.5 font-bold transition-all border-b-2 -mb-[2px] ${
              activeTab === 'pesanan'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-xl border-t border-x border-slate-200 shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Package className="w-4 h-4 text-amber-600" />
            <span>3. Pencatatan &amp; Manajemen Pesanan</span>
          </button>

          <button
            onClick={() => setActiveTab('rekapitulasi')}
            className={`flex items-center gap-2 px-5 py-3.5 font-bold transition-all border-b-2 -mb-[2px] ${
              activeTab === 'rekapitulasi'
                ? 'border-amber-600 text-amber-700 bg-white rounded-t-xl border-t border-x border-slate-200 shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <DollarSign className="w-4 h-4 text-amber-600" />
            <span>4. Rekapitulasi Penjualan Otomatis</span>
          </button>

        </div>
      </div>

      {/* 4. KONTEN MODUL TAB */}
      <main className="flex-1 w-full px-6 sm:px-10 md:px-14 py-6 space-y-6">

        {/* ========================================================
            TAB 1: RINGKASAN PERFORMA BISNIS (MAIN DASHBOARD)
           ======================================================== */}
        {activeTab === 'ringkasan' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* 4 KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Total Omzet Usaha 2024</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 mt-1 block">
                    {formatRupiah(totalOmzetTahunan)}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18.4% vs tahun lalu
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-amber-600" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Pesanan Aktif Diproduksi</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 mt-1 block">
                    {totalPesananAktif} Kontingen
                  </span>
                  <span className="text-[11px] text-blue-600 font-bold flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> Siap event 17 Agustus
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Total Pelanggan Terdaftar</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 mt-1 block">
                    {customers.length} Sekolah
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium mt-1 block">
                    DIY &amp; Jawa Tengah
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Unit Alat &amp; Kostum Tersewa</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 mt-1 block">
                    148 Unit
                  </span>
                  <span className="text-[11px] text-purple-600 font-bold mt-1 block">
                    100% Lolos Uji QC
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Grid 2 Columns: Visualisasi Grafik Bulanan & Notifikasi Pesanan Masuk */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Sisi Kiri: Visualisasi Grafik Penjualan Bulanan (Col 8) */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Visualisasi Grafik Penjualan Bulanan (2024)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tren perolehan omzet persewaan instrumen &amp; produksi kostum karnaval
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                      Puncak: Agustus (HUT RI)
                    </span>
                  </div>
                </div>

                {/* Bar Chart Visualization */}
                <div className="pt-4">
                  <div className="h-64 flex items-end justify-between gap-2 sm:gap-3 px-2">
                    {MONTHLY_SALES_DATA.map((item, idx) => {
                      // Max omzet is 52.000.000 in August
                      const heightPercent = Math.round((item.omzet / 52000000) * 100);
                      const isPeak = item.month === 'Agu';

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                          {/* Tooltip on Hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded pointer-events-none mb-1 text-center whitespace-nowrap shadow-md">
                            <div>{item.month}: {formatRupiah(item.omzet)}</div>
                            <div className="text-amber-400 font-normal">{item.orders} Pesanan</div>
                          </div>

                          {/* Bar */}
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className={`w-full rounded-t-lg transition-all duration-500 ${
                              isPeak
                                ? 'bg-gradient-to-t from-amber-600 to-amber-400 shadow-md group-hover:brightness-110'
                                : 'bg-gradient-to-t from-slate-200 to-blue-200 hover:from-blue-400 hover:to-blue-500'
                            }`}
                          ></div>

                          {/* Month Label */}
                          <span className={`text-[11px] font-bold ${isPeak ? 'text-amber-700 font-extrabold' : 'text-slate-500'}`}>
                            {item.month}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-500 to-amber-400"></span>
                    Bulan Event Karnaval Tertinggi
                  </span>
                  <span>Rata-rata Omzet: <strong>Rp 23.400.000 / Bulan</strong></span>
                </div>
              </div>

              {/* Sisi Kanan: Notifikasi Pesanan Masuk (Col 4) */}
              <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-amber-600" />
                      <h3 className="text-base font-extrabold text-slate-900">
                        Notifikasi Pesanan Masuk
                      </h3>
                    </div>
                    {unreadNotifsCount > 0 && (
                      <span className="text-[10px] font-extrabold bg-red-500 text-white px-2 py-0.5 rounded-full">
                        {unreadNotifsCount} Baru
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 pt-3">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3.5 rounded-2xl border transition-all text-xs space-y-1 ${
                          notif.unread
                            ? 'bg-amber-50/60 border-amber-300'
                            : 'bg-slate-50 border-slate-200/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            {notif.unread && <span className="w-2 h-2 rounded-full bg-amber-500"></span>}
                            {notif.title}
                          </span>
                          <span className="text-[10px] text-slate-400">{notif.time}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-[11px]">
                          {notif.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => alert('Semua notifikasi telah ditandai terbaca.')}
                  className="w-full text-center py-2 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline border-t border-slate-100 mt-2"
                >
                  Tandai Semua Sudah Dibaca
                </button>
              </div>

            </div>

            {/* Status Pesanan Aktif Yang Sedang Diproduksi */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Jumlah Pesanan Aktif Yang Sedang Diproduksi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pantauan tahapan pemotongan kain, jahit seragam, dan tuning presisi alat musik
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pesanan')}
                  className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>Lihat Semua Pesanan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-blue-900 bg-blue-100/70 px-2 py-0.5 rounded">
                            {ord.spkNumber}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">{ord.customerName}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-1">{ord.specifications}</p>
                      </div>
                      <span className="text-xs font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        {formatRupiah(ord.finalPrice)}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>Tahap: <strong>{ord.status}</strong></span>
                        <span>{ord.progress}% Selesai</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${ord.progress}%` }}
                          className="h-full bg-amber-500 rounded-full"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: PROFIL PEMESAN & PELANGGAN
           ======================================================== */}
        {activeTab === 'pelanggan' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            
            {/* Header Profil Pelanggan */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  Basis Data Terpusat
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Profil Pemesan &amp; Pelanggan Instansi / Sekolah
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Rekapitulasi riwayat kontak, alamat, penanggung jawab (PIC), dan riwayat pesanan sekolah yang pernah memesan.
                </p>
              </div>

              {/* Action */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert('Fitur tambah data pelanggan baru.')}
                  className="px-4 py-2 bg-[#0f2744] hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Data Sekolah</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama sekolah, PIC, alamat..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-slate-800"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                <span className="text-slate-500 font-semibold flex items-center gap-1 flex-shrink-0">
                  <Filter className="w-3.5 h-3.5" /> Jenjang:
                </span>
                {['semua', 'SD / MI', 'SMP / MTs', 'SMA / SMK', 'Korsik / Dinas'].map((j) => (
                  <button
                    key={j}
                    onClick={() => setCustomerJenjang(j)}
                    className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-all flex-shrink-0 ${
                      customerJenjang === j
                        ? 'bg-[#0f2744] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {j}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Directory Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">ID &amp; Nama Instansi</th>
                    <th className="py-3.5 px-4">Jenjang</th>
                    <th className="py-3.5 px-4">PIC / Penanggung Jawab</th>
                    <th className="py-3.5 px-4">Alamat Domisili</th>
                    <th className="py-3.5 px-4 text-center">Total Pesanan</th>
                    <th className="py-3.5 px-4 text-right">Total Transaksi</th>
                    <th className="py-3.5 px-4 text-center">Aksi Cepat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredCustomers.map((cust) => (
                    <tr key={cust.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4">
                        <span className="font-mono text-[10px] text-slate-400 block">{cust.id}</span>
                        <strong className="text-sm text-slate-900 block mt-0.5">{cust.schoolName}</strong>
                        <span className="text-[10px] text-emerald-600 font-semibold">{cust.status}</span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-800 rounded font-semibold text-[11px]">
                          {cust.jenjang}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <strong className="text-slate-900 block">{cust.pic}</strong>
                        <span className="text-slate-500 text-[11px] block">{cust.role}</span>
                        <span className="text-slate-600 font-mono text-[11px] block">{cust.phone}</span>
                      </td>

                      <td className="py-3.5 px-4 max-w-xs text-slate-600 text-[11px]">
                        {cust.address}
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold">
                          {cust.totalOrders}x Sewa
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right font-extrabold text-slate-900">
                        {formatRupiah(cust.totalSpent)}
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              const msg = encodeURIComponent(`Halo ${cust.pic} dari ${cust.schoolName}, kami dari Harmoni Drumband & Kostum (Ibu Nur Herwiyanti).`);
                              window.open(`https://wa.me/62${cust.phone.replace(/[^0-9]/g, '').slice(1)}?text=${msg}`, '_blank');
                            }}
                            title="Hubungi WhatsApp"
                            className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 fill-emerald-600" />
                          </button>
                          <button
                            onClick={() => alert(`Detail riwayat pemesanan untuk ${cust.schoolName}`)}
                            title="Lihat Detail Riwayat"
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 3: PENCATATAN & MANAJEMEN PESANAN
           ======================================================== */}
        {activeTab === 'pesanan' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Header Manajemen Pesanan */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  Formulir Spesifikasi &amp; Produksi
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Pencatatan &amp; Manajemen Pesanan Pelanggan
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Input spesifikasi produk, detail bahan jahit &amp; instrumen, ukuran personel, dan nominal harga final yang disepakati.
                </p>
              </div>

              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#996515] to-[#c59a15] hover:brightness-110 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>+ Catat Pesanan Baru / SPK</span>
              </button>
            </div>

            {/* Filter Pesanan */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari SPK, nama sekolah, rincian barang..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-slate-800 bg-white"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                {['semua', 'Menunggu', 'Sedang Produksi', 'Fitting Workshop', 'Siap Kirim', 'Selesai'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setOrderStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex-shrink-0 ${
                      orderStatusFilter === st
                        ? 'bg-[#0f2744] text-white shadow-2xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Daftar Rincian Pesanan */}
            <div className="grid grid-cols-1 gap-4">
              {filteredOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {ord.spkNumber}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900">
                        {ord.customerName}
                      </h3>
                      <span className="text-xs text-slate-400">&bull; Event: {ord.eventDate}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block uppercase">Harga Final Disepakati</span>
                        <strong className="text-base font-black text-amber-900">
                          {formatRupiah(ord.finalPrice)}
                        </strong>
                      </div>

                      {/* Dropdown status update */}
                      <select
                        value={ord.status}
                        onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value)}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                      >
                        <option value="Menunggu">Menunggu</option>
                        <option value="Sedang Produksi">Sedang Produksi</option>
                        <option value="Fitting Workshop">Fitting Workshop</option>
                        <option value="Siap Kirim">Siap Kirim</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </div>
                  </div>

                  {/* 3 Detail Boxes: Spesifikasi, Detail Bahan, Ukuran */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Spesifikasi Produk
                      </span>
                      <p className="text-slate-800 font-semibold leading-relaxed">
                        {ord.specifications}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Detail Bahan &amp; Material
                      </span>
                      <p className="text-slate-800 leading-relaxed">
                        {ord.materialDetails}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Ukuran Personil &amp; Status Pembayaran
                      </span>
                      <p className="text-slate-800 leading-relaxed">
                        {ord.sizes}
                      </p>
                      <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-1 border border-emerald-200">
                        {ord.paymentStatus}
                      </span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                      <div
                        style={{ width: `${ord.progress}%` }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-600">{ord.progress}% Rampung</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 4: REKAPITULASI PENJUALAN OTOMATIS (SALES REPORTS)
           ======================================================== */}
        {activeTab === 'rekapitulasi' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            
            {/* Header Rekapitulasi */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Laporan Keuangan Otomatis
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Rekapitulasi Penjualan &amp; Omzet Usaha Otomatis
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Laporan transaksi dan perhitungan omzet usaha secara otomatis tanpa perlu rekap nota kertas manual.
                </p>
              </div>

              {/* Action Buttons: Cetak & Ekspor */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Cetak Laporan</span>
                </button>

                <button
                  onClick={() => alert('Laporan penjualan otomatis diekspor ke format Excel / PDF.')}
                  className="px-4 py-2 bg-[#0f2744] hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Ekspor PDF / Excel</span>
                </button>
              </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <span className="text-xs text-amber-900/70 font-semibold block uppercase">Total Omzet Transaksi</span>
                <span className="text-2xl font-black text-amber-950 mt-1 block">
                  {formatRupiah(totalOmzetTahunan)}
                </span>
                <span className="text-[11px] text-amber-800 mt-1 block">Tercatat di sistem database</span>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <span className="text-xs text-blue-900/70 font-semibold block uppercase">Estimasi Biaya Bahan &amp; Servis</span>
                <span className="text-2xl font-black text-blue-950 mt-1 block">
                  {formatRupiah(totalOmzetTahunan * 0.32)}
                </span>
                <span className="text-[11px] text-blue-800 mt-1 block">Kain drill, sparepart head &amp; mallets</span>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <span className="text-xs text-emerald-900/70 font-semibold block uppercase">Omzet Bersih Usaha (Net Profit)</span>
                <span className="text-2xl font-black text-emerald-950 mt-1 block">
                  {formatRupiah(totalOmzetTahunan * 0.68)}
                </span>
                <span className="text-[11px] text-emerald-800 font-bold mt-1 block">Otomatis dihitung sistem</span>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  Rincian Transaksi Penjualan &amp; Persewaan Terkini
                </h3>
                <span className="text-xs text-slate-500">
                  {transactions.length} Transaksi Tercatat
                </span>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">No. Invoice</th>
                      <th className="py-3 px-4">Tanggal</th>
                      <th className="py-3 px-4">Nama Sekolah / Instansi</th>
                      <th className="py-3 px-4">Deskripsi Pesanan</th>
                      <th className="py-3 px-4">Metode Pembayaran</th>
                      <th className="py-3 px-4 text-right">Nominal Final</th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {transactions.map((trx) => (
                      <tr key={trx.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-blue-900">
                          {trx.id}
                        </td>
                        <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                          {trx.date}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900">
                          {trx.schoolName}
                        </td>
                        <td className="py-3 px-4 text-slate-600 max-w-xs">
                          {trx.description}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            {trx.method}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-black text-slate-900">
                          {formatRupiah(trx.total)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            trx.status.includes('Lunas')
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            {trx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* 5. MODAL FORM: CATAT PESANAN BARU (MANAJEMEN SPESIFIKASI) */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0f2744] text-white p-6 sm:p-7 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Formulir Input Spesifikasi Produk &amp; Bahan
                </span>
                <h3 className="text-lg font-black text-white mt-0.5">
                  Catat Pesanan &amp; Kesepakatan Harga Baru
                </h3>
              </div>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
              >
                &times;
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleCreateOrder} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Instansi / Sekolah Pelanggan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMAN 2 Sleman / Korsik Pemkab"
                  value={newOrder.customerName}
                  onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Pesanan
                  </label>
                  <select
                    value={newOrder.productCategory}
                    onChange={(e) => setNewOrder({ ...newOrder, productCategory: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                  >
                    <option value="Paket Drumband & Kostum">Paket Komplit (Alat + Seragam)</option>
                    <option value="Alat Musik Drumband">Hanya Alat Musik Marching Band</option>
                    <option value="Kostum & Seragam Pasukan">Hanya Kostum &amp; Seragam Mayoret</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tanggal Rencana Acara / Event
                  </label>
                  <input
                    type="date"
                    value={newOrder.eventDate}
                    onChange={(e) => setNewOrder({ ...newOrder, eventDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Spesifikasi Produk (Rincian Unit) *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Contoh: 6 Snare High-Tension 14 Inch, 2 Bass Drum 20 Inch, 4 Bell Lyra 30 nada..."
                  value={newOrder.specifications}
                  onChange={(e) => setNewOrder({ ...newOrder, specifications: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Detail Bahan / Material
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Kain American Drill, Head Remo, Velvet Bridal"
                    value={newOrder.materialDetails}
                    onChange={(e) => setNewOrder({ ...newOrder, materialDetails: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ukuran Personel / Kontingen
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Mayoret Size M, Pasukan S (10), M (10)"
                    value={newOrder.sizes}
                    onChange={(e) => setNewOrder({ ...newOrder, sizes: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nominal Harga Final Disepakati (Rp) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Contoh: 4500000"
                    value={newOrder.finalPrice}
                    onChange={(e) => setNewOrder({ ...newOrder, finalPrice: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Status Pembayaran
                  </label>
                  <select
                    value={newOrder.paymentStatus}
                    onChange={(e) => setNewOrder({ ...newOrder, paymentStatus: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                  >
                    <option value="DP 50%">DP 50%</option>
                    <option value="Lunas SPK BOS">Lunas SPK BOS</option>
                    <option value="Faktur APBD / e-Bilyet">Faktur APBD / e-Bilyet</option>
                    <option value="Menunggu SPK">Menunggu SPK</option>
                  </select>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0f2744] hover:bg-slate-900 text-white font-bold shadow-md"
                >
                  Simpan &amp; Masukkan ke Rekapitulasi
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* FOOTER BAWAH */}
      <footer className="py-6 px-6 text-center border-t border-slate-200 bg-white">
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          MARCHING POSE &bull; SISI PEMILIK (DASHBOARD ADMIN - IBU NUR HERWIYANTI) &bull; SISTEM INTERNAL
        </span>
      </footer>

    </div>
  );
}

