import React from 'react';

// ================= PURE VECTOR SVG ICON GRAPHICS (NO TEXT) ================= //

export function SnareDrumGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-snare" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      {/* Drum Body */}
      <g filter="url(#shadow-snare)">
        <rect x="10" y="22" width="44" height="26" rx="4" fill="#0f2744" stroke="#c59a15" strokeWidth="2.5" />
        {/* Tension Rods */}
        <line x1="16" y1="22" x2="16" y2="48" stroke="#fbbf24" strokeWidth="2" />
        <line x1="26" y1="22" x2="26" y2="48" stroke="#fbbf24" strokeWidth="2" />
        <line x1="38" y1="22" x2="38" y2="48" stroke="#fbbf24" strokeWidth="2" />
        <line x1="48" y1="22" x2="48" y2="48" stroke="#fbbf24" strokeWidth="2" />
        {/* Top Head Rim */}
        <ellipse cx="32" cy="22" rx="22" ry="7" fill="#ffffff" stroke="#c59a15" strokeWidth="2.5" />
        {/* Bottom Rim */}
        <ellipse cx="32" cy="48" rx="22" ry="6" fill="#071527" stroke="#c59a15" strokeWidth="2.5" />
        {/* Crossed Drumsticks */}
        <line x1="6" y1="12" x2="52" y2="34" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="12" x2="12" y2="34" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
        <circle cx="7" cy="12" r="2.5" fill="#f59e0b" />
        <circle cx="57" cy="12" r="2.5" fill="#f59e0b" />
      </g>
    </svg>
  );
}

export function TrumpetGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-trumpet" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-trumpet)">
        {/* Flare Bell */}
        <path d="M52 14 C52 24, 60 22, 60 32 C60 42, 52 40, 52 50 L46 36 L46 28 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
        {/* Main Tube */}
        <path d="M6 32 L46 32" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
        {/* Upper Loop */}
        <path d="M16 32 L16 22 C16 20, 20 20, 20 22 L20 32" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
        <path d="M30 32 L30 20 C30 18, 36 18, 36 20 L36 32" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
        {/* 3 Valves */}
        <rect x="23" y="24" width="3.5" height="15" rx="1.5" fill="#d97706" stroke="#78350f" strokeWidth="1" />
        <rect x="28.5" y="24" width="3.5" height="15" rx="1.5" fill="#d97706" stroke="#78350f" strokeWidth="1" />
        <rect x="34" y="24" width="3.5" height="15" rx="1.5" fill="#d97706" stroke="#78350f" strokeWidth="1" />
        {/* Valve Buttons */}
        <circle cx="24.5" cy="22" r="2" fill="#fbbf24" />
        <circle cx="30" cy="22" r="2" fill="#fbbf24" />
        <circle cx="35.5" cy="22" r="2" fill="#fbbf24" />
        {/* Mouthpiece */}
        <rect x="4" y="30" width="4" height="4" rx="1" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function GuitarGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-guitar" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-guitar)">
        {/* Body */}
        <path
          d="M18 36 C14 30, 16 22, 24 24 C28 25, 29 28, 33 26 C38 23, 44 26, 44 34 C44 44, 38 52, 28 52 C18 52, 16 44, 18 36 Z"
          fill="#dc2626"
          stroke="#991b1b"
          strokeWidth="2"
        />
        {/* Pickguard */}
        <path d="M24 30 C22 28, 20 32, 22 38 C24 44, 30 46, 32 40 Z" fill="#ffffff" />
        {/* Pickups */}
        <rect x="26" y="34" width="8" height="3" rx="1" fill="#1e293b" />
        <rect x="27" y="39" width="8" height="3" rx="1" fill="#1e293b" />
        {/* Bridge */}
        <rect x="28" y="44" width="6" height="3" rx="1" fill="#c59a15" />
        {/* Neck */}
        <rect x="33" y="10" width="4" height="20" fill="#d97706" stroke="#78350f" strokeWidth="1" />
        {/* Frets */}
        <line x1="33" y1="14" x2="37" y2="14" stroke="#ffffff" strokeWidth="1" />
        <line x1="33" y1="18" x2="37" y2="18" stroke="#ffffff" strokeWidth="1" />
        <line x1="33" y1="22" x2="37" y2="22" stroke="#ffffff" strokeWidth="1" />
        {/* Headstock */}
        <path d="M32 6 L38 6 L37 11 L33 11 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
        {/* Tuning Pegs */}
        <circle cx="31" cy="7" r="1.5" fill="#cbd5e1" />
        <circle cx="31" cy="9" r="1.5" fill="#cbd5e1" />
        <circle cx="39" cy="7" r="1.5" fill="#cbd5e1" />
        <circle cx="39" cy="9" r="1.5" fill="#cbd5e1" />
      </g>
    </svg>
  );
}

export function CostumeGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-costume" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-costume)">
        {/* Coat / Jacket */}
        <path d="M22 18 L14 26 L19 29 L23 23 L23 40 L41 40 L41 23 L45 29 L50 26 L42 18 Z" fill="#0f2744" stroke="#c59a15" strokeWidth="1.5" />
        {/* Vest Insert */}
        <polygon points="26,18 38,18 35,40 29,40" fill="#ffffff" />
        {/* Braids */}
        <line x1="28" y1="24" x2="36" y2="24" stroke="#f59e0b" strokeWidth="2" />
        <line x1="28" y1="29" x2="36" y2="29" stroke="#f59e0b" strokeWidth="2" />
        <line x1="29" y1="34" x2="35" y2="34" stroke="#f59e0b" strokeWidth="2" />
        {/* Epaulets */}
        <ellipse cx="18" cy="22" rx="4" ry="2" fill="#f59e0b" />
        <ellipse cx="46" cy="22" rx="4" ry="2" fill="#f59e0b" />
        {/* Pleated Skirt */}
        <path d="M22 40 L42 40 L48 54 L16 54 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
        <line x1="24" y1="40" x2="22" y2="54" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="32" y1="40" x2="32" y2="54" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="42" y2="54" stroke="#ffffff" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function ShakoGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-shako" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-shako)">
        {/* Feather Plume */}
        <path d="M32 4 C30 10, 24 12, 28 22 L36 22 C40 12, 34 10, 32 4 Z" fill="#ffffff" stroke="#c59a15" strokeWidth="1.5" />
        <path d="M30 6 C28 12, 31 16, 32 22" stroke="#f59e0b" strokeWidth="1" />
        {/* Body */}
        <path d="M20 22 L44 22 L42 44 L22 44 Z" fill="#0f2744" stroke="#c59a15" strokeWidth="2" />
        {/* Brim */}
        <path d="M18 44 C24 49, 40 49, 46 44 L44 42 L20 42 Z" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        {/* Emblem */}
        <polygon points="32,27 37,30 35,37 32,39 29,37 27,30" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
        {/* Braid */}
        <path d="M22 42 C26 44, 38 44, 42 42" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2 2" fill="none" />
      </g>
    </svg>
  );
}

export function BootsGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-boots" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-boots)">
        <path d="M18 16 L28 16 L28 36 L36 44 C38 46, 38 49, 36 50 L20 50 C18 50, 16 46, 18 42 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        <rect x="18" y="50" width="6" height="4" rx="1" fill="#0f172a" />
        <rect x="26" y="50" width="10" height="2.5" rx="1" fill="#0f172a" />
        <ellipse cx="23" cy="16" rx="7" ry="3" fill="#ffffff" stroke="#c59a15" strokeWidth="1.5" />
        <line x1="24" y1="22" x2="27" y2="22" stroke="#f59e0b" strokeWidth="2" />
        <line x1="24" y1="28" x2="27" y2="28" stroke="#f59e0b" strokeWidth="2" />
        <line x1="25" y1="34" x2="28" y2="34" stroke="#f59e0b" strokeWidth="2" />

        <path d="M38 20 L48 20 L48 38 L54 44 C56 46, 56 49, 54 50 L40 50 C38 50, 36 46, 38 42 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
        <rect x="38" y="50" width="5" height="4" rx="1" fill="#0f172a" />
        <rect x="45" y="50" width="9" height="2.5" rx="1" fill="#0f172a" />
        <ellipse cx="43" cy="20" rx="6" ry="2.5" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function CymbalsGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-cymbals" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-cymbals)">
        <ellipse cx="26" cy="32" rx="18" ry="14" transform="rotate(-15 26 32)" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
        <ellipse cx="26" cy="32" rx="4" ry="3" transform="rotate(-15 26 32)" fill="#92400e" />
        <path d="M26 32 L22 24" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />

        <ellipse cx="40" cy="32" rx="18" ry="14" transform="rotate(15 40 32)" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
        <ellipse cx="40" cy="32" rx="4" ry="3" transform="rotate(15 40 32)" fill="#78350f" />
        <path d="M40 32 L44 24" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function NotesGraphic({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow-notes" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <g filter="url(#shadow-notes)">
        <ellipse cx="20" cy="44" rx="7" ry="5" fill="#0f2744" transform="rotate(-20 20 44)" />
        <ellipse cx="44" cy="36" rx="7" ry="5" fill="#0f2744" transform="rotate(-20 44 36)" />
        <line x1="26" y1="42" x2="26" y2="16" stroke="#0f2744" strokeWidth="4" />
        <line x1="50" y1="34" x2="50" y2="10" stroke="#0f2744" strokeWidth="4" />
        <polygon points="24,18 52,10 52,18 24,26" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        <circle cx="56" cy="8" r="2" fill="#fbbf24" />
      </g>
    </svg>
  );
}

// ================= SEPARATOR DOT (PERSIS SESUAI SKETSA GAMBAR KE-2) ================= //

function DotSeparator() {
  return (
    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mx-5 sm:mx-7 flex-shrink-0 shadow-xs ring-1 ring-slate-400/30"></div>
  );
}

// ================= MARQUEE LANE COMPONENT (SEAMLESS INFINITE LOOP TO THE RIGHT) ================= //

function MarqueeLane({ items, animationClass, topClass, opacityClass = "opacity-75" }) {
  // Duplikasi 4x pada setiap paruh agar total lebar satu paruh > 3500px,
  // sehingga pada layar besar sekalipun animasi tidak pernah terputus / kosong di sisi kanan
  const halfSet = [...items, ...items, ...items, ...items];

  return (
    <div className={`absolute ${topClass} left-0 w-full overflow-hidden pointer-events-none select-none ${opacityClass}`}>
      <div className={`${animationClass} flex items-center`}>
        {/* Set 1 */}
        <div className="flex items-center flex-shrink-0">
          {halfSet.map((item, index) => (
            <React.Fragment key={`s1-${index}`}>
              <div className="flex-shrink-0 transition-transform">
                {item.component}
              </div>
              <DotSeparator />
            </React.Fragment>
          ))}
        </div>
        {/* Set 2 (Cerminan identik untuk loop berulang mulus tanpa jeda) */}
        <div className="flex items-center flex-shrink-0">
          {halfSet.map((item, index) => (
            <React.Fragment key={`s2-${index}`}>
              <div className="flex-shrink-0 transition-transform">
                {item.component}
              </div>
              <DotSeparator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// ================= MAIN BACKGROUND DRIFT COMPONENT ================= //

export default function LoginBackgroundDrift() {
  // Ordered sequence matching user's sketch:
  // Drum • Trumpet • Costume • Guitar • Shako Hat • Boots • Cymbals • Notes
  const baseSequence = [
    { component: <SnareDrumGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <TrumpetGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <CostumeGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <GuitarGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <ShakoGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <BootsGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <CymbalsGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
    { component: <NotesGraphic className="w-9 h-9 sm:w-11 sm:h-11" /> },
  ];

  // Helper untuk merotasi susunan elemen agar setiap baris memiliki variasi yang dinamis
  const rotateArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));

  const lane1Items = baseSequence;
  const lane2Items = rotateArray(baseSequence, 3);
  const lane3Items = baseSequence.slice().reverse();
  const lane4Items = rotateArray(baseSequence, 5);
  const lane5Items = rotateArray(baseSequence, 2);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 5 Baris Lintasan Animasi Mengalir Tenang & Lembut ke Kanan Secara Penuh & Seamless */}
      
      {/* Baris 1: Atas */}
      <MarqueeLane
        items={lane1Items}
        animationClass="animate-drift-right-1"
        topClass="top-[6%] sm:top-[7%]"
        opacityClass="opacity-50"
      />

      {/* Baris 2: Atas-Tengah */}
      <MarqueeLane
        items={lane2Items}
        animationClass="animate-drift-right-2"
        topClass="top-[25%] sm:top-[27%]"
        opacityClass="opacity-45"
      />

      {/* Baris 3: Tengah (Di belakang ruang antara kedua kotak) */}
      <MarqueeLane
        items={lane3Items}
        animationClass="animate-drift-right-3"
        topClass="top-[46%] sm:top-[48%]"
        opacityClass="opacity-40"
      />

      {/* Baris 4: Tengah-Bawah */}
      <MarqueeLane
        items={lane4Items}
        animationClass="animate-drift-right-4"
        topClass="top-[67%] sm:top-[69%]"
        opacityClass="opacity-45"
      />

      {/* Baris 5: Bawah */}
      <MarqueeLane
        items={lane5Items}
        animationClass="animate-drift-right-5"
        topClass="top-[86%] sm:top-[88%]"
        opacityClass="opacity-50"
      />
    </div>
  );
}
