"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface BlogDummy {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  category: string;
}

export default function Artikel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Data Dummy
  const dummyBlogs: BlogDummy[] = [
    {
      id: 1,
      title: "Tips Merawat Perkakas Agar Tetap Awet",
      excerpt: "Perkakas yang terawat bikin kerja lebih lancar dan tahan lama. Yuk, pelajari cara sederhana merawatnya di sini.",
      date: "1 Oktober 2025",
      slug: "tips-merawat-perkakas",
      image: "/Blog/blog_img.png", // Pastikan file ini ada
      category: "Edukasi",
    },
    {
      id: 2,
      title: "Cara Memilih Bor Listrik yang Tepat untuk Pemula",
      excerpt: "Bingung memilih bor listrik? Simak panduan lengkap memilih bor yang sesuai dengan kebutuhan rumahan maupun proyek ringan Anda.",
      date: "5 Oktober 2025",
      slug: "cara-memilih-bor",
      image: "/Blog/blog_img.png",
      category: "Tips & Trik",
    },
    {
      id: 3,
      title: "Pentingnya Safety Gear Saat Bekerja di Proyek",
      excerpt: "Keselamatan adalah prioritas utama. Ketahui alat pelindung diri (APD) apa saja yang wajib Anda gunakan saat bekerja dengan alat berat.",
      date: "10 Oktober 2025",
      slug: "pentingnya-safety-gear",
      image: "/Blog/blog_img.png",
      category: "Safety",
    },
  ];

  // Logic Scroll Indicator
  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const totalScroll = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="artikel" className="w-full py-16 bg-[#EEF2FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- HEADER SECTION --- */}
        {/* PERBAIKAN: Tombol sekarang ada di sini (di atas), bukan di bawah slider */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[#5D77D5] text-sm md:text-base font-medium mb-2">Blog</p>
            <h1 className="text-[#1E1E1E] text-3xl md:text-4xl font-bold leading-tight mb-4">
              Tips & Wawasan Seputar <br className="hidden md:block" /> Dunia Teknik
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-2xl">
              Yuk, baca berbagai tips dan info menarik seputar alat teknik, perawatan, 
              dan cara kerja yang bisa bantu aktivitas Anda jadi lebih efisien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/blog">
              <button className="bg-[#5442CB] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#4334a3] transition shadow-md hover:shadow-lg text-sm md:text-base">
                Lihat Selengkapnya
              </button>
            </Link>
          </motion.div>
        </div>

        {/* --- BLOG CONTAINER (Slider) --- */}
        <div className="relative">
            <motion.div
                ref={scrollRef}
                onScroll={handleScroll}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // PERBAIKAN: Menambahkan class untuk menyembunyikan scrollbar bawaan
                className="
                    flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
                    md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0
                    scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                "
            >
            {dummyBlogs.map((article, index) => (
                <div 
                    key={index}
                    // min-w-[300px]: Agar kartu tidak gepeng di mobile
                    className="
                        min-w-[300px] snap-center 
                        md:min-w-0 md:w-full
                        bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-blue-100
                    "
                >
                    {/* Image & Badge */}
                    <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-xl bg-gray-200">
                        <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-md z-10 text-gray-800 shadow-sm">
                            {article.category}
                        </span>
                        
                        <Image 
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                        <p className="text-gray-400 text-sm mb-2 font-medium">
                            {article.date}
                        </p>
                        <h3 className="text-[#1E1E1E] text-lg font-bold leading-snug mb-3 line-clamp-2 group-hover:text-[#5442CB] transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                            {article.excerpt}
                        </p>
                    </div>

                    {/* Button dalam Card */}
                    <div className="mt-auto">
                        <Link href={`/blog/${article.slug}`}>
                            <button className="w-full bg-[#5442CB] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#4334a3] transition">
                                Baca selengkapnya
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
            </motion.div>
        </div>

        {/* --- SCROLL INDICATOR (Hanya Custom Biru, Bawaan Browser Hidden) --- */}
        <div className="flex justify-center mt-4 md:hidden">
            <div className="w-24 h-1.5 bg-[#DCE4FF] rounded-full overflow-hidden relative">
                <motion.div 
                    className="h-full bg-[#5442CB] rounded-full absolute left-0 top-0"
                    style={{ 
                        width: '33%', 
                        left: `${scrollProgress * 0.66}%` 
                    }}
                />
            </div>
        </div>

      </div>
    </section>
  );
}