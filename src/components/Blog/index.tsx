"use client";

import BlogHero from "@/components/Blog/Hero";
import BlogSidebar from "@/components/Blog/Sidebar";
import BlogCard from "@/components/Blog/Card";
import FAQSection from "@/components/Blog/FAQ";
import { BlogCategory } from "@/types/Blog"; // Pastikan import type ini ada

// Icon Pagination
const ArrowLeft = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
const ArrowRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;

// --- TAMBAHKAN INTERFACE INI ---
interface BlogPageProps {
  blogCategory: BlogCategory[];
}

export default function BlogPage({ blogCategory }: BlogPageProps) {
  
  // Data Dummy Blog (Masih dummy karena belum ambil dari API Blog List)
  const blogs = Array(6).fill({
    title: "Tips Merawat Perkakas Agar Tetap Awet",
    excerpt: "Perkakas yang terawat bikin kerja lebih lancar dan tahan lama. Yuk, pelajari cara sederhana merawatnya di sini.",
    date: "1 Oktober 2025",
    category: "Edukasi",
    image: "/Blog/blog_img.png", 
    slug: "tips-merawat"
  });

  return (
    <main className="w-full bg-[#EEF2FF] min-h-screen pb-20">
      
      <BlogHero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* SIDEBAR (Kirim data kategori ke sini) */}
          <BlogSidebar blogCategory={blogCategory} />

          {/* MAIN CONTENT */}
          <div className="w-full lg:w-3/4">
             
             {/* GRID ARTIKEL */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {blogs.map((item, index) => (
                    <BlogCard 
                        key={index}
                        title={item.title}
                        excerpt={item.excerpt}
                        date={item.date}
                        category={item.category}
                        image={item.image}
                        slug={item.slug}
                    />
                ))}
             </div>

             {/* PAGINATION */}
             <div className="flex justify-center items-center gap-2 mb-20">
                <button className="w-8 h-8 flex items-center justify-center bg-white rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <ArrowLeft />
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-[#5442CB] text-white rounded font-medium text-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-white rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <ArrowRight />
                </button>
             </div>

          </div>
        </div>

        <FAQSection />

      </div>
    </main>
  );
}