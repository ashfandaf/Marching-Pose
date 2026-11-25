import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageCircle,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Calculator,
  MapPin,
  FileCheck,
  Music,
  User,
} from 'lucide-react';
import { PRODUCTS, WORKSHOP_INFO } from '../data/mockData';

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: 'Halo! 👋 Saya **Marching Pose AI Assistant**, asisten cerdas virtual untuk sewa alat marching band dan kostum karnaval di Yogyakarta.',
    time: 'Baru saja',
  },
  {
    id: 'welcome-2',
    sender: 'bot',
    text: 'Ada yang bisa saya bantu hari ini? Anda bisa menanyakan tarif harian, ukuran seragam mayoret, kuitansi dana BOS, jadwal fitting di workshop Bantul, atau rekomendasi paket parade.',
    time: 'Baru saja',
    quickReplies: [
      '🥁 Berapa tarif sewa alat musik?',
      '👑 Ada kostum mayoret & seragam?',
      '📍 Alamat & jadwal fitting workshop?',
      '📄 Apakah bisa SPK & kuitansi BOS?',
      '🎉 Rekomendasi paket karnaval 20 personil',
    ],
  },
];

export default function AiChatbot({ onOpenWhatsAppModal, onOpenCalculatorModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // Rule-based NLP Knowledge Engine for Marching Band & Carnaval Rental
  const generateAiReply = (query) => {
    const q = query.toLowerCase();

    // 1. Pricing / Tarif
    if (q.includes('tarif') || q.includes('harga') || q.includes('biaya') || q.includes('sewa berapa') || q.includes('price')) {
      return {
        text: `Berikut daftar tarif sewa reguler di **Marching Pose Yogyakarta**:\n\n` +
          `• **Snare Drum High-Tension 14"**: Rp 120.000 / hari (termasuk carrier & stik)\n` +
          `• **Bass Drum Tonal (18"-24")**: Rp 150.000 / hari (termasuk mallet & harness)\n` +
          `• **Marching Bell Lyra 30 Nada**: Rp 110.000 / hari (termasuk strap & stik)\n` +
          `• **Kostum Mayoret Royal Gold**: Rp 250.000 / set (lengkap shako hat & boots)\n` +
          `• **Seragam Pasukan Parade**: Rp 85.000 / set (lengkap topi & selempang)\n` +
          `• **Marching Brass Cymbal 14"**: Rp 80.000 / set\n\n` +
          `💡 *Tersedia Diskon Borongan Sekolah 10% untuk pemesanan minimal 5 unit!*`,
        actionType: 'calculator',
      };
    }

    // 2. Mayoret & Costumes
    if (q.includes('mayoret') || q.includes('kostum') || q.includes('seragam') || q.includes('baju') || q.includes('ukuran') || q.includes('boots') || q.includes('topi')) {
      return {
        text: `Untuk kostum dan seragam karnaval parade, kami menyediakan:\n\n` +
          `1. **Kostum Mayoret Royal Gold & Navy** (Rp 250.000/set):\n` +
          `   - Termasuk Topi Shako bulu mewah, epolet bahu, selempang ornamen mutiara, sarung tangan, dan sepatu boots.\n` +
          `   - Ready size S, M, L, XL untuk siswa SD, SMP, SMA, hingga umum.\n\n` +
          `2. **Setelan Pasukan Drummer & Bell** (Rp 85.000/set):\n` +
          `   - Jas drill premium adem berfuring, celana/rok lipit, selempang bordir kencana, dan topi pet emblem logam.\n` +
          `   - Ready stock seragam hingga 80+ personil.\n\n` +
          `✨ *Semua kostum 100% higienis, dicuci deterjen antibakterial & disetrika uap siap pakai.* Bisa fitting ukuran di workshop Bantul!`,
        actionType: 'whatsapp',
      };
    }

    // 3. Location & Workshop / Fitting
    if (q.includes('lokasi') || q.includes('alamat') || q.includes('workshop') || q.includes('fitting') || q.includes('tempat') || q.includes('bantul') || q.includes('sewon') || q.includes('jogja')) {
      return {
        text: `📍 **Workshop & Gudang Marching Pose:**\n` +
          `Jl. Ringroad Selatan No. 88, Panggungharjo, Sewon, Bantul, D.I. Yogyakarta 55188.\n` +
          `(Selatan Kampus ISI Yogyakarta / 10 menit dari Pojok Beteng Kulon Malioboro).\n\n` +
          `🕒 **Jam Buka:**\n` +
          `Senin - Minggu: 08.00 - 20.00 WIB (Buka Setiap Hari).\n\n` +
          `Bagi pihak sekolah/panitia dipersilakan berkunjung langsung untuk mencoba sound alat drum atau fitting ukuran seragam para siswa sebelum hari H!`,
        actionType: 'maps',
      };
    }

    // 4. SPK / BOS / Administrasi
    if (q.includes('bos') || q.includes('spk') || q.includes('kuitansi') || q.includes('faktur') || q.includes('administrasi') || q.includes('spj') || q.includes('pajak') || q.includes('materai')) {
      return {
        text: `✅ **Layanan Administrasi Resmi Sekolah:**\n\n` +
          `Kami sangat berpengalaman melayani sekolah negeri maupun swasta. Kami menyediakan dokumen lengkap untuk pelaporan **Dana BOS / BOSDA / BOP**:\n\n` +
          `• Surat Perjanjian Kerjasama (SPK) resmi bermaterai.\n` +
          `• Kuitansi resmi bercap basah perusahaan.\n` +
          `• Faktur rincian barang & nota dinas.\n` +
          `• NPWP & Rekening Giro Bank untuk transfer instansi resmi.\n\n` +
          `Tim kami siap membantu format dokumen sesuai arahan bendahara sekolah Anda.`,
        actionType: 'whatsapp',
      };
    }

    // 5. Package Recommendation / 20 Personil / Karnaval
    if (q.includes('paket') || q.includes('20') || q.includes('karnaval') || q.includes('rekomendasi') || q.includes('rombongan') || q.includes('pawai') || q.includes('agustus')) {
      return {
        text: `🎉 **Rekomendasi Paket Parade 20 Personil (Paling Populer):**\n\n` +
          `• 2 Mayoret / Gitapati (Kostum Royal Gold + Baton)\n` +
          `• 6 Snare Drum High-Tension (Carrier + Stik)\n` +
          `• 3 Bass Drum Tonal (Ukuran 18", 20", 22")\n` +
          `• 6 Marching Bell Lyra 30 Nada\n` +
          `• 2 Hand Brass Cymbal 14"\n` +
          `• 1 Trio Tom / Kuarto Tom\n` +
          `• 18 Setelan Seragam Pasukan Drill Lengkap\n\n` +
          `💵 **Estimasi Biaya Normal:** ~Rp 3.800.000 / hari.\n` +
          `🎁 **Diskon Paket Borongan Sekolah (10%):** Jadi sekitar **Rp 3.420.000 / hari**.\n\n` +
          `Sudah termasuk gratis kunci tuning, cover pelindung, dan SPK resmi!`,
        actionType: 'calculator',
      };
    }

    // 6. Snare Drum
    if (q.includes('snare')) {
      return {
        text: `🥁 **Snare Drum High-Tension 14":**\n` +
          `• Tarif sewa: **Rp 120.000 / hari**\n` +
          `• Head: Remo / Evans marching drumhead (suara crispy, tajam khas drumline Amerika)\n` +
          `• Carrier: Vest aluminium ringan ergonomis berlapis busa pundak tebal\n` +
          `• Include: Sepasang marching sticks maple & kunci tuning\n` +
          `• Kondisi: 100% distem nada sebelum diserahterimakan ke sekolah.`,
        actionType: 'whatsapp',
      };
    }

    // 7. Bass Drum
    if (q.includes('bass')) {
      return {
        text: `🥁 **Bass Drum Tonal Parade (18"-24"):**\n` +
          `• Tarif sewa: **Rp 150.000 / hari**\n` +
          `• Shell: 7-ply birchwood shell kokoh, suara bass deep berbobot menggelegar untuk parade outdoor\n` +
          `• Include: Harness dada ergonomis & 1 pasang mallet pemukul berkualitas\n` +
          `• Pilihan diameter: 18", 20", 22", atau 24" Inch.`,
        actionType: 'whatsapp',
      };
    }

    // 8. Bell Lyra
    if (q.includes('bell') || q.includes('lyra') || q.includes('bellyra') || q.includes('balera')) {
      return {
        text: `🔔 **Marching Bell Lyra Full Set:**\n` +
          `• Tarif sewa: **Rp 110.000 / hari**\n` +
          `• Range nada: 30 Nada kromatis akurat standar 440 Hz\n` +
          `• Bilah aluminium solid lapis chrome kilap mewah\n` +
          `• Include: Tas pelindung busa tebal, strap dada empuk, dan 2 pasang stik pemukul.`,
        actionType: 'whatsapp',
      };
    }

    // 9. Booking Procedure / Syarat Sewa
    if (q.includes('cara') || q.includes('syarat') || q.includes('prosedur') || q.includes('booking') || q.includes('dp')) {
      return {
        text: `📋 **Alur & Syarat Sewa di Marching Pose:**\n\n` +
          `1. **Konsultasi & Pilih Kebutuhan**: Sampaikan tanggal acara dan daftar alat/kostum yang diinginkan.\n` +
          `2. **Booking Tanggal**: Mengunci slot tanggal acara agar tidak diambil sekolah lain (terutama periode padat Agustus & akhir tahun).\n` +
          `3. **Fitting Ukuran**: Datang ke workshop di Sewon Bantul untuk fitting seragam dan tes suara alat.\n` +
          `4. **Administrasi & Pengambilan**: Penerbitan SPK/Kuitansi BOS, pengambilan H-1 acara, dan pengembalian H+1 setelah karnaval selesai.`,
        actionType: 'whatsapp',
      };
    }

    // Fallback response
    return {
      text: `Terima kasih atas pertanyaannya! Tim spesialis kami siap membantu segala kebutuhan drumband dan kostum karnaval Anda.\n\n` +
        `Untuk informasi stok tanggal spesifik, negosiasi paket borongan, atau jadwal fitting langsung, Anda juga dapat terhubung langsung dengan customer service kami di WhatsApp.`,
      actionType: 'whatsapp',
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const reply = generateAiReply(query);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        actionType: reply.actionType,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Halo Admin Marching Pose, saya baru saja menggunakan Chatbot AI di website dan ingin konsultasi lebih lanjut mengenai sewa drumband/kostum.'
    );
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  const openMaps = () => {
    window.open(WORKSHOP_INFO.mapsEmbedUrl, '_blank');
  };

  return (
    <>
      {/* Floating Trigger Button (Replaces the static WhatsApp pill in bottom right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleToggle}
          className="relative flex items-center gap-2.5 bg-[#071527] hover:bg-slate-900 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-slate-700/80 hover:scale-105 active:scale-95 transition-all duration-200 group"
          aria-label="Buka Chatbot AI"
        >
          {/* Animated AI Avatar Icon */}
          <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-sm">
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#071527] animate-pulse"></span>
          </div>

          <div className="text-left">
            <span className="block text-[10px] text-amber-400 font-bold tracking-wider uppercase leading-none">
              ONLINE 24/7
            </span>
            <span className="block text-xs font-bold text-white group-hover:text-amber-300 transition-colors leading-tight">
              Tanya Chatbot AI
            </span>
          </div>

          {/* Unread badge indicator */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-md animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

      {/* Interactive AI Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] max-w-[420px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-md">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#071527] to-[#122b4d] text-white p-4 flex items-center justify-between border-b border-slate-700/80 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-white overflow-hidden p-0.5 border border-amber-400/60 flex items-center justify-center flex-shrink-0">
                <img src="/logo.jpg" alt="Marching Pose Bot" className="w-full h-full object-cover rounded-lg" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#071527]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-extrabold text-white leading-tight">
                    Marching Pose AI Assistant
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-400/30">
                    AI 24/7
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Tanya seputar sewa alat &amp; kostum karnaval
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Mulai Ulang Chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Tutup Chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/70 text-xs">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-lg bg-[#071527] text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  )}

                  <div className={`max-w-[85%] space-y-2`}>
                    <div
                      className={`p-3.5 rounded-2xl shadow-sm leading-relaxed whitespace-pre-wrap ${
                        isBot
                          ? 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-sm'
                          : 'bg-[#996515] text-white font-medium rounded-tr-sm shadow-md'
                      }`}
                    >
                      {msg.text.split('\n').map((line, idx) => {
                        // Render simple bold tags
                        const formatted = line.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong>$1</strong>'
                        );
                        return (
                          <span
                            key={idx}
                            className="block"
                            dangerouslySetInnerHTML={{ __html: formatted }}
                          />
                        );
                      })}
                    </div>

                    {/* Quick Replies Options */}
                    {msg.quickReplies && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.quickReplies.map((qr, qrIdx) => (
                          <button
                            key={qrIdx}
                            onClick={() => handleSendMessage(qr)}
                            className="text-[11px] font-semibold bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200 hover:border-amber-300 px-2.5 py-1.5 rounded-full shadow-2xs transition-all text-left"
                          >
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons attached to Bot Message */}
                    {msg.actionType && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {msg.actionType === 'calculator' && (
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              if (onOpenCalculatorModal) onOpenCalculatorModal();
                            }}
                            className="inline-flex items-center gap-1.5 bg-[#071527] text-white hover:bg-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors"
                          >
                            <Calculator className="w-3.5 h-3.5 text-amber-400" />
                            <span>Buka Simulasi Biaya</span>
                          </button>
                        )}

                        {msg.actionType === 'maps' && (
                          <button
                            onClick={openMaps}
                            className="inline-flex items-center gap-1.5 bg-blue-600 text-white hover:bg-blue-700 px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Buka Google Maps Workshop</span>
                          </button>
                        )}

                        <button
                          onClick={openWhatsApp}
                          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-sm transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Hubungi Admin WhatsApp</span>
                        </button>
                      </div>
                    )}

                    <span
                      className={`block text-[10px] text-slate-400 px-1 ${
                        isBot ? 'text-left' : 'text-right'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-500">
                <div className="w-7 h-7 rounded-lg bg-[#071527] text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="bg-white border border-slate-200 px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 flex-shrink-0"
          >
            <input
              type="text"
              placeholder="Tanyakan tarif, kostum, atau alamat..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-[#071527] hover:bg-[#996515] disabled:bg-slate-200 disabled:text-slate-400 text-white transition-all shadow-sm"
              aria-label="Kirim Pesan"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

