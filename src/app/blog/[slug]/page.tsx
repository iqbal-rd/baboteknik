import Image from "next/image";
import Link from "next/link";

// Mock Data untuk simulasi konten blog
const dummyContent = {
  title: "Tips Merawat Perkakas Agar Tetap Awet",
  date: "1 Oktober 2025",
  author: "Admin Babo",
  category: "Edukasi",
  image: "/Blog/blog-1.jpg", // Pastikan ada gambar dummy atau ganti path ini
  content: `
    <p>Perkakas yang terawat bikin kerja lebih lancar dan tahan lama. Yuk, pelajari cara sederhana merawatnya di sini.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br/>
    <h3>1. Bersihkan setelah dipakai</h3>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <br/>
    <h3>2. Simpan di tempat kering</h3>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
  `
};

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Di Next.js 15/16, params adalah Promise, jadi perlu di-await
  const { slug } = await params;

  return (
    <main className="w-full bg-[#EEF2FF] min-h-screen py-20 px-6 md:px-12 lg:px-20">
      
      {/* Tombol Kembali */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[#5442CB] font-semibold hover:underline"
        >
          ← Kembali ke Blog
        </Link>
      </div>

      {/* Konten Artikel */}
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        
        {/* Gambar Utama */}
        <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200">
           {/* Ganti src dengan gambar dummy kamu yang valid */}
           {/* Jika belum ada gambar, div abu-abu ini akan tampil */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No Image Available ({slug})
           </div>
           
           {/* Aktifkan Image jika file ada */}
           {/* 
           <Image
             src={dummyContent.image}
             alt={dummyContent.title}
             fill
             className="object-cover"
           /> 
           */}
        </div>

        {/* Isi Teks */}
        <div className="p-8 md:p-12">
          
          {/* Header Artikel */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-[#EEF2FF] text-[#5442CB] px-3 py-1 rounded-full font-bold text-xs">
              {dummyContent.category}
            </span>
            <span>{dummyContent.date}</span>
            <span>Oleh {dummyContent.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-8 leading-tight">
            {dummyContent.title} <span className="text-lg font-normal text-gray-400 block mt-2">(Slug: {slug})</span>
          </h1>

          {/* Body Artikel */}
          <div 
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: dummyContent.content }}
          />

        </div>
      </article>

    </main>
  );
}