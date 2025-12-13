"use client";

import Link from "next/link";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const products = [
    {
      id: 1,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/produk/matabor.png",
    },
    {
      id: 2,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/produk/matabor.png",
    },
    {
      id: 3,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/produk/matabor.png",
    },
    {
      id: 4,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/produk/matabor.png",
    },
    {
      id: 5,
      name: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
      rating: 5,
      reviews: 20,
      image: "/produk/matabor.png",
    },
  ];

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
    <section className="w-full py-16 bg-white text-[#1E1E1E]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[#5D77D5] text-sm font-medium mb-1">Produk</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-[#1E1E1E] mb-3">
              Temukan Alat yang Tepat untuk <br className="hidden md:block"/> Pekerjaan Anda
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              Temukan berbagai alat teknik yang bisa diandalkan untuk membantu
              pekerjaan Anda jadi lebih mudah, cepat, dan hasilnya makin rapi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/produk">
                <button className="bg-[#5442CB] text-white px-6 py-2.5 rounded-lg hover:bg-[#4334a3] transition font-medium shadow-md hover:shadow-lg text-sm md:text-base">
                Lihat Katalog
                </button>
            </Link>
          </motion.div>
        </div>

        {/* --- PRODUCT SLIDER --- */}
        <div className="relative">
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                // PERBAIKAN DISINI: Menambahkan class untuk hide scrollbar
                className="
                    flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8
                    md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                "
            >
            {products.map((item, index) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                    min-w-[260px] snap-center 
                    md:min-w-0 md:w-full 
                    border border-gray-200 rounded-xl p-4 bg-white flex flex-col justify-between h-full hover:shadow-lg transition-shadow
                "
                >
                <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full relative">
                    <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-contain p-4"
                    />
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase leading-snug mb-2 line-clamp-2">
                    {item.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-4">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2 font-medium">
                        ( {item.reviews} )
                    </span>
                    </div>
                </div>

                <Link href="/kontak" className="mt-auto">
                    <button className="w-full bg-[#5442CB] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#4334a3] transition">
                        Hubungi Kami
                    </button>
                </Link>
                </motion.div>
            ))}
            </div>
        </div>

        {/* --- SCROLL INDICATOR (Hanya yang Biru Custom) --- */}
        <div className="flex justify-center mt-2 md:hidden">
            <div className="w-24 h-1.5 bg-[#DCE4FF] rounded-full overflow-hidden relative">
                <motion.div 
                    className="h-full bg-[#5442CB] rounded-full absolute left-0 top-0"
                    style={{ 
                        width: '30%', 
                        left: `${scrollProgress * 0.7}%` 
                    }}
                />
            </div>
        </div>

      </div>
    </section>
  );
}