"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";

// Kita buat tipe data sederhana untuk dummy di sini agar tidak error Type
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
  const windowWidth = useWindowWidth();
  const [visibleBlogs, setVisibleBlogs] = useState<BlogDummy[]>([]);

  // --- DATA DUMMY (Pengganti API) ---
  const dummyBlogs: BlogDummy[] = [
    {
      id: 1,
      title: "Tips Merawat Perkakas Agar Tetap Awet",
      excerpt: "Perkakas yang terawat bikin kerja lebih lancar dan tahan lama. Yuk, pelajari cara sederhana merawatnya di sini agar alat tempur Anda selalu siap pakai.",
      date: "1 Oktober 2025",
      slug: "tips-merawat-perkakas",
      image: "/Home/blog-1.jpg", // Ganti dengan path gambar kamu jika ada
      category: "Edukasi",
    },
    {
      id: 2,
      title: "Cara Memilih Bor Listrik yang Tepat untuk Pemula",
      excerpt: "Bingung memilih bor listrik? Simak panduan lengkap memilih bor yang sesuai dengan kebutuhan rumahan maupun proyek ringan Anda.",
      date: "5 Oktober 2025",
      slug: "cara-memilih-bor",
      image: "/Home/blog-2.jpg",
      category: "Tips & Trik",
    },
    {
      id: 3,
      title: "Pentingnya Safety Gear Saat Bekerja di Proyek",
      excerpt: "Keselamatan adalah prioritas utama. Ketahui alat pelindung diri (APD) apa saja yang wajib Anda gunakan saat bekerja dengan alat berat.",
      date: "10 Oktober 2025",
      slug: "pentingnya-safety-gear",
      image: "/Home/blog-3.jpg",
      category: "Safety",
    },
  ];

  // --- LOGIC RESPONSIF (Mengatur jumlah kartu yg tampil) ---
  useEffect(() => {
    // HP = 1 kartu, Tablet = 2 kartu, Desktop = 3 kartu
    const amount = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
    setVisibleBlogs(dummyBlogs.slice(0, amount));
  }, [windowWidth]);

  return (
    // Background Section: Ungu Muda (#EEF2FF)
    <section id="artikel" className="w-full py-20 bg-[#EEF2FF] px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <p className="text-[#5D77D5] text-sm md:text-base font-medium mb-2">
              Blog
            </p>
            <h1 className="text-[#1E1E1E] text-3xl md:text-4xl font-bold leading-tight mb-4">
              Tips & Wawasan Seputar Dunia Teknik
            </h1>
            <p className="text-gray-500 leading-relaxed text-base">
              Yuk, baca berbagai tips dan info menarik seputar alat teknik, perawatan, 
              dan cara kerja yang bisa bantu aktivitas Anda jadi lebih efisien.
            </p>
          </motion.div>

          {/* Tombol Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-auto"
          >
            <Link href="/blog">
              <button className="bg-[#5442CB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4334a3] transition shadow-md hover:shadow-lg w-full md:w-auto whitespace-nowrap">
                Lihat selengkapnya
              </button>
            </Link>
          </motion.div>
        </div>

        {/* --- GRID BLOG CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleBlogs.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-blue-100"
              >
                {/* 1. Image & Badge */}
                <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-xl bg-gray-200">
                    {/* Badge Kategori */}
                    <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-md z-10 text-gray-800 shadow-sm">
                        {article.category}
                    </span>
                    
                    {/* 
                       Logic Gambar:
                       Jika kamu punya gambar di folder public, uncomment Image di bawah.
                       Jika belum ada, biarkan div placeholder aktif.
                    */}
                    
                    <Image 
                       src='/Blog/blog_img.png'
                       alt={article.title}
                       fill
                       className="object-cover hover:scale-105 transition-transform duration-500"
                    />

                    {/* Placeholder (Hapus ini jika <Image> sudah dipakai) */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-sm">Image Placeholder</span>
                    </div>
                </div>

                {/* 2. Content */}
                <div className="flex flex-col flex-grow">
                    {/* Tanggal */}
                    <p className="text-gray-400 text-sm mb-2 font-medium">
                        {article.date}
                    </p>

                    {/* Judul */}
                    <h3 className="text-[#1E1E1E] text-lg font-bold leading-snug mb-3 line-clamp-2 group-hover:text-[#5442CB] transition-colors">
                        {article.title}
                    </h3>

                    {/* Excerpt / Deskripsi Singkat */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                    </p>
                </div>

                {/* 3. Button Baca Selengkapnya */}
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
    </section>
  );
}