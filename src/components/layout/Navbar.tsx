"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// --- KOMPONEN ICON ---
const IconHamburger = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7H20" stroke="#5442CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H20" stroke="#5442CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 17H20" stroke="#5442CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconClose = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#5442CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#5442CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Produk", href: "/produk" },
    { name: "Blog", href: "/blog" },
  ];

  // 1. STATE DISIMPAN DI SINI
  const [isOpen, setIsOpen] = useState(false);

  // 2. USE EFFECT UNTUK OVERFLOW BODY (Tetap dipakai)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleNavClick = (href: string) => {
    // 3. DI SINI KITA SUDAH TUTUP MENU
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");

    if (pathName !== href) {
      router.push(href);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="bg-[#EEF2FF] w-full sticky top-0 z-50 shadow-sm/50 transition-all"> 
      
      <div className="flex items-center justify-between w-full py-5 px-6 md:px-12 lg:px-20">
        
        {/* LOGO */}
        <Link href="/">
            <Image
            src={"/Header/logos.png"}
            alt="logo"
            width={224}
            height={31}
            className="lg:block hidden cursor-pointer"
            unoptimized
            />
            {/* Logo Mobile */}
            <Image
            src={"/Header/logos.png"}
            alt="logo-mobile"
            width={144}
            height={18}
            className="lg:hidden block cursor-pointer"
            unoptimized
            />
        </Link>

        {/* DESKTOP MENU */}
        <div className="lg:flex hidden items-center gap-8">
          {navLinks.map((data) => (
            <Link
              key={data.name}
              href={data.href}
              className={`text-[16px] transition-colors duration-300 ${
                pathName === data.href 
                  ? "text-[#5442CB] font-semibold underline underline-offset-4" 
                  : "text-[#5442CB] font-medium hover:underline hover:underline-offset-4"
              }`}
            >
              {data.name}
            </Link>
          ))}
          
          <Link href="/kontak">
            <button className="bg-[#5442CB] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#4334a3] transition shadow-md hover:shadow-lg translate-y-0 hover:-translate-y-0.5 transform duration-200">
              Hubungi Kami
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block outline-none p-1 transition-transform active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IconClose />
          ) : (
            <IconHamburger />
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#EEF2FF] z-40 px-6 pb-10 flex flex-col h-[calc(100vh-70px)] border-t border-[#5442CB]/10 overflow-y-auto">
          <ul className="flex flex-col gap-6 mt-8 text-base font-medium">
            {navLinks.map((data) => (
              <li key={data.name} className="border-b border-[#5442CB]/10 pb-4">
                <button
                  onClick={() => handleNavClick(data.href)}
                  className={`block w-full text-left transition-all duration-300 ${
                    pathName === data.href
                      ? "text-[#5442CB] font-semibold underline underline-offset-4"
                      : "text-[#5442CB] font-medium hover:underline hover:underline-offset-4"
                  }`}
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
                className="w-full bg-[#5442CB] text-white py-3 rounded-lg font-bold hover:bg-[#4334a3] transition shadow-lg"
                onClick={() => handleNavClick("/kontak")}
            >
                Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}