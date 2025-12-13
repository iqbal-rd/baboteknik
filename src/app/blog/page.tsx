import BlogPage from "@/components/Blog";
// import { getBlogCategory } from "@/lib/Blogs"; // ❌ KOMENTARI INI SEMENTARA

export async function generateMetadata() {
  return {
    title: "Blog Teknik & Perkakas | Babo Teknik Tangerang",
    description:
      "Baca tips, ulasan, dan panduan alat teknik di blog Babo Teknik. Info jual perkakas online dan rekomendasi produk terbaik.",
    keyword: [
      "jual perkakas online",
      "tips memilih bor baterai",
      "keunggulan spray gun elektrik",
      "toko alat teknik Magelang",
      "toko alat pertukangan",
      "distributor lakoni indonesia",
      "cara menggunakan gerinda duduk",
      "rekomendasi mesin potong rumput listrik",
    ],
  };
}

export default async function Page() {
  
  // ❌ JANGAN PANGGIL API DULU KARENA SERVER MATI
  // const blogCategory = await getBlogCategory();

  // ✅ GUNAKAN DATA DUMMY SEMENTARA
  const dummyCategories: any[] = [
    { 
      id: 1, 
      name: "Tutorial", 
      count: 12, 
      slug: "tutorial", 
      created_at: new Date().toISOString(), 
      suksesmulya_blogs: [] 
    },
    { 
      id: 2, 
      name: "Review Produk", 
      count: 8, 
      slug: "review-produk", 
      created_at: new Date().toISOString(), 
      suksesmulya_blogs: [] 
    },
    { 
      id: 3, 
      name: "Tips & Trik", 
      count: 5, 
      slug: "tips-trik", 
      created_at: new Date().toISOString(), 
      suksesmulya_blogs: [] 
    },
  ];

  return <BlogPage blogCategory={dummyCategories} />;
}