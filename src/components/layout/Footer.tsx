// src/components/Footer.tsx

"use client";
import Image from "next/image";
import Link from "next/link";

// --- 1. SVG ICONS (Updated) ---

const IconFacebook = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
  </svg>
);

// --- ICON TIKTOK DIPERBAIKI ---
const IconTiktok = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Path ini lebih tebal dan proporsional sesuai logo asli */}
    <path d="M19.5 6.5c-1.4 0-2.7-.5-3.8-1.3v9.6c0 2.9-2.4 5.2-5.3 5.2-2.9 0-5.3-2.3-5.3-5.2s2.4-5.2 5.3-5.2c.2 0 .5 0 .7.1V13c-.2 0-.5-.1-.7-.1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8V2h3.5c0 1.8 1.4 3.3 3.2 3.5V6.5z" />
  </svg>
);

const IconShopee = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
     <path fill="currentColor" d="M19.2 6.5h-3.3c-.4-2.6-2.4-4.5-5-4.5-2.6 0-4.6 1.9-5 4.5H2.6v15.5h16.6V6.5zM10.9 4c1.5 0 2.7 1 3 2.5H7.9c.3-1.5 1.5-2.5 3-2.5zm4 11.5c-.1 1.7-1.5 3-3.8 3-1.6 0-2.8-.5-3.6-1l.7-1.5c.6.4 1.6.8 2.8.8 1.1 0 1.7-.5 1.7-1.1 0-.9-1.3-1.1-2.3-1.5-1.4-.5-2.8-1.2-2.8-3.1 0-1.6 1.3-2.9 3.5-2.9 1.4 0 2.5.4 3.2.8l-.6 1.5c-.6-.4-1.5-.7-2.6-.7-1 0-1.5.5-1.5 1 0 .8 1.2 1 2.3 1.4 1.5.5 2.9 1.3 2.9 3.2.1.1.1.1.1.1z"/>
  </svg>
);


// --- ICON TOKOPEDIA (DIPERBAIKI: MATA BESAR & PARUH JELAS) ---
const IconTokopedia = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* 1. Badan Tas (Outline Luar) */}
    <path fill="currentColor" d="M21 7h-3.2c-.3-2.5-2.2-4.5-4.8-4.5s-4.5 2-4.8 4.5H5c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V10c0-1.7-1.3-3-3-3zm-9-2.5c1.4 0 2.5 1 2.8 2.5h-5.6c.3-1.5 1.4-2.5 2.8-2.5z"/>
    
    {/* 2. Mata Luar (Lubang Besar) */}
    {/* Warnanya mengikuti background (Biru), saat hover jadi Putih */}
    <circle cx="8.5" cy="13.8" r="3.2" className="fill-[#5D77D5] group-hover:fill-white transition-colors duration-300"/>
    <circle cx="15.5" cy="13.8" r="3.2" className="fill-[#5D77D5] group-hover:fill-white transition-colors duration-300"/>

    {/* 3. Pupil Mata (Isi) */}
    {/* Melirik ke atas kanan */}
    <circle cx="9.5" cy="12.8" r="1.4" fill="currentColor"/>
    <circle cx="16.5" cy="12.8" r="1.4" fill="currentColor"/>

    {/* 4. Paruh (Segitiga Terbalik) - DIPERJELAS */}
    {/* Posisinya di antara mata, di bawah sedikit */}
    <path d="M12 17.5l-1.5-2h3z" className="fill-[#5D77D5] group-hover:fill-white transition-colors duration-300"/>
  </svg>
);


// --- 2. DATA (Tidak Berubah) ---
const socialIconsData = [
  { href: "https://facebook.com/baboteknik", Icon: IconFacebook, alt: "Facebook" },
  { href: "https://tiktok.com/@baboteknik", Icon: IconTiktok, alt: "TikTok" },
  { href: "https://shopee.co.id/baboteknik", Icon: IconShopee, alt: "Shopee" },
  { href: "https://tokopedia.com/baboteknik", Icon: IconTokopedia, alt: "Tokopedia" },
];

const footerMenu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/blog", label: "Blog" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[#5D77D5] text-white w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 py-12">
        
        {/* === BAGIAN ATAS === */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-10 mb-12">
          
          {/* GRUP LOGO */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4 text-left">
            <Link href="/" className="inline-block">
              <Image
                src={"/Header/logo footer.png"} 
                alt="Logo Babo Teknik"
                width={150} 
                height={42} 
                className="object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed opacity-90">
              Menyediakan alat teknik berkualitas untuk industri, konstruksi, dan perbengkelan.
            </p>
          </div>

          {/* WRAPPER KONTAK & SOSMED */}
          <div className="w-full lg:w-auto flex flex-col md:flex-row md:justify-between lg:justify-end gap-8 md:gap-10 lg:gap-24 text-left">
            
            {/* Kontak */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold">Hubungi Kami</h3>
              <div className="flex flex-col gap-3 text-sm opacity-90">
                  <Link href="mailto:baboteknik@gmail.com" className="hover:underline hover:text-white/80 transition-colors">
                      baboteknik@gmail.com
                  </Link>
                  <Link href="tel:089519384107" className="hover:underline hover:text-white/80 transition-colors">
                      0895 - 1938 - 4107
                  </Link>
                  <p className="leading-relaxed max-w-[280px]">
                      Petir, Kec. Cipondoh,<br/>
                      Kota Tangerang, Banten 15147
                  </p>
              </div>
            </div>

            {/* Ikuti Kami */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-1">Ikuti Kami</h3>
              <div className="flex items-center gap-4">
                {socialIconsData.map(({ href, Icon, alt }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    // STYLING: Border putih, bg transparan, ikon putih
                    className="w-12 h-12 flex items-center justify-center border-[2.5px] border-white rounded-full bg-transparent text-white hover:bg-white hover:text-[#5D77D5] transition-all duration-300 group"
                    aria-label={alt}
                  >
                    {/* Padding p-2.5 agar ikon tidak terlalu besar/mepet ke border */}
                    <div className="w-full h-full flex items-center justify-center p-[9px]">
                       {Icon ? <Icon className="w-full h-full" /> : <span className="text-xs">{alt[0]}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* GARIS PEMISAH */}
        <hr className="border-t border-white/30 my-8" />

        {/* === BAGIAN BAWAH === */}
        <div className="flex flex-col items-start gap-6 text-sm opacity-90 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-wrap justify-start gap-x-6 gap-y-3 w-full md:w-auto text-left">
            {footerMenu.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:underline hover:text-white/100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-left text-xs md:text-sm md:text-right">
            &copy; 2025 Babo Teknik. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};