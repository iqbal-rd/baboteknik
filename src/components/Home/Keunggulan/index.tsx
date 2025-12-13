"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- ICON SVG COMPONENTS (SAMA SEPERTI SEBELUMNYA) ---
const IconQuality = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
const IconStock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconService = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
const IconPrice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);
const IconTrust = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="12 8 13.09 10.91 16 12 13.09 13.09 12 16 10.91 13.09 8 12 10.91 10.91 12 8"></polygon>
  </svg>
);

export default function Keunggulan() {
  const features = [
    { title: "Produk Berkualitas", text: "Alat pilihan dengan ketahanan tinggi dan siap pakai di lapangan.", icon: <IconQuality /> },
    { title: "Stok Lengkap", text: "Ketersediaan produk selalu terjaga dan mudah dipesan kapan saja.", icon: <IconStock /> },
    { title: "Pelayanan Ramah", text: "Tim kami siap membantu setiap kebutuhan dengan cepat dan sopan.", icon: <IconService /> },
    { title: "Harga Bersahabat", text: "Harga kompetitif tanpa mengurangi mutu produk.", icon: <IconPrice /> },
    { title: "Terbukti Terpercaya", text: "Pengalaman panjang jadi bukti keandalan pelanggan.", icon: <IconTrust /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // HP
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet
      } else {
        setItemsToShow(3); // Desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = features.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);


  return (
    <section className="bg-[#EEF2FF] text-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-[#5D77D5] font-medium tracking-wide">Keunggulan</p>
          <h2 className="text-[#1E1E1E] text-3xl md:text-4xl font-bold mt-2">Keunggulan Baboo Teknik</h2>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {features.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3" 
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-blue-100 h-full flex flex-col items-start text-left">
                  <div className="mb-6 w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#5D77D5] border border-[#dce4ff]">
                    {item.icon}
                  </div>
                  <h3 className="text-[#1E1E1E] font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-normal">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- SCROLL INDICATOR BAR (Updated) --- */}
        <div className="flex justify-center mt-12">
            {/* 1. Track: Garis latar belakang (Ungu Pudar) */}
            <div className="w-48 h-2 bg-[#5D77D5]/20 rounded-full relative overflow-hidden">
                
                {/* 2. Thumb: Indikator yang bergerak (Biru Solid) */}
                <motion.div
                    className="absolute top-0 bottom-0 bg-[#5D77D5] rounded-full"
                    animate={{
                        // Logic Matematika:
                        // Width: Persentase item yang tampil dibanding total item.
                        // Left: Persentase posisi index sekarang dibanding total item.
                        width: `${(itemsToShow / features.length) * 100}%`,
                        left: `${(currentIndex / features.length) * 100}%`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
        </div>

      </div>
    </section>
  );
}