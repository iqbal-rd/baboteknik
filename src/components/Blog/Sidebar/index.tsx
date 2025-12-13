"use client";

import { useState } from "react";
import { BlogCategory } from "@/types/Blog"; // Import Type

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// --- INTERFACE PROPS ---
interface BlogSidebarProps {
  blogCategory: BlogCategory[];
}

export default function BlogSidebar({ blogCategory }: BlogSidebarProps) {
  
  // Data Dummy untuk Recent Post (Karena belum ada API recent post)
  const recentPosts = [
    { title: "Tips Merawat Perkakas Agar Tetap Awet", date: "1 Oktober 2025" },
    { title: "Cara Memilih Bor Listrik yang Tepat", date: "5 Oktober 2025" },
    { title: "Pentingnya Safety Gear di Proyek", date: "10 Oktober 2025" },
  ];

  // Gunakan data props jika ada, jika error/kosong gunakan array kosong
  const categories = blogCategory || [];

  return (
    <aside className="w-full lg:w-1/4 flex flex-col gap-8">
      
      {/* 1. Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-[#1E1E1E] font-bold mb-4 text-sm">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#5442CB] transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <IconSearch />
          </div>
        </div>
      </div>

      {/* 2. Kategori Widget (DATA ASLI) */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-[#1E1E1E] font-bold mb-4 text-sm">Kategori</h3>
        <div className="flex flex-col gap-3">
          {categories.length > 0 ? (
            categories.map((cat, idx) => (
              <button 
                key={idx}
                // Asumsi properti dari API: cat.name atau cat.attributes.name
                // Sesuaikan dengan struktur JSON dari Strapi kamu
                className="w-full text-left bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-600 hover:border-[#5442CB] hover:text-[#5442CB] transition-all"
              >
                {cat.name} 
              </button>
            ))
          ) : (
            <p className="text-xs text-gray-400">Tidak ada kategori</p>
          )}
        </div>
      </div>

      {/* 3. Blog Terbaru Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-[#1E1E1E] font-bold mb-4 text-sm">Blog Terbaru</h3>
        <div className="flex flex-col gap-4">
          {recentPosts.map((post, idx) => (
            <div key={idx} className="flex gap-3 items-start group cursor-pointer">
              {/* Thumbnail */}
              <div className="w-[70px] h-[50px] bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                 {/* Jika ada gambar real nanti, masukkan Image di sini */}
              </div>
              
              {/* Text */}
              <div>
                <h4 className="text-xs font-bold text-[#1E1E1E] leading-snug group-hover:text-[#5442CB] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}