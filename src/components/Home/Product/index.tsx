"use client";

import Link from "next/link";
import Image from "next/image"; // Jangan lupa import Image
import { easeOut, motion } from "framer-motion";

// Komponen Icon Bintang (SVG) agar lebih rapi
const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Product() {
  // Data Mockup Produk (Bisa diganti data asli nanti)
  const products = [
    {
      id: 1,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/Home/product-1.png", // Pastikan ganti dengan path gambar kamu
    },
    {
      id: 2,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/Home/product-1.png",
    },
    {
      id: 3,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/Home/product-1.png",
    },
    {
      id: 4,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/Home/product-1.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-white text-[#1E1E1E]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[#5D77D5] text-[16px] font-medium mb-2">Produk</p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1E1E1E]">
              Temukan Alat yang Tepat untuk Pekerjaan Anda
            </h2>
            
            <p className="mt-4 text-gray-500 leading-relaxed">
              Temukan berbagai alat teknik yang bisa diandalkan untuk membantu
              pekerjaan Anda jadi lebih mudah, cepat, dan hasilnya makin rapi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true }}
          >
            {/* Tombol Lihat Katalog (Ungu) */}
            <button className="bg-[#5442CB] text-white px-8 py-3 rounded-lg hover:bg-[#4334a3] transition font-medium shadow-lg hover:shadow-xl">
              <Link href="/produk">Lihat Katalog</Link>
            </button>
          </motion.div>
        </div>

        {/* --- PRODUCT GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col justify-between h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Placeholder Image Logic */}
                <div className="w-full h-full relative">
                    {/* Ganti src ini dengan gambar produkmu */}
                   <Image 
                     src={item.image} 
                     alt={item.name}
                     fill
                     className="object-contain p-4"
                   />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase leading-snug mb-3 line-clamp-2">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    ( {item.reviews} )
                  </span>
                </div>
              </div>

              {/* Button Hubungi Kami (Ungu) */}
              <button className="w-full bg-[#5442CB] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#4334a3] transition">
                Hubungi Kami
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}