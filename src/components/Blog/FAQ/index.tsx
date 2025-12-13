"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icon Plus/Minus
const IconPlus = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5442CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconMinus = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5442CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

export default function FAQSection() {
  const faqs = [
    "Apakah saya bisa membeli langsung lewat website ini?",
    "Apakah semua produk yang ditampilkan tersedia di toko?",
    "Apakah produk yang dijual bergaransi?",
    "Apakah Babo Teknik melayani pengiriman?",
    "Apakah saya bisa konsultasi sebelum membeli alat tertentu?"
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 0 artinya item pertama terbuka

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-20 mb-10">
      <div className="mb-6">
        <h2 className="text-[#1E1E1E] text-xl md:text-2xl font-bold mb-2">
          Pertanyaan Yang Sering Diajukan
        </h2>
        <p className="text-gray-500 text-sm md:text-sm max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((question, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#1E1E1E] text-sm md:text-base font-bold">
                {question}
              </span>
              <span className="shrink-0 ml-4">
                {activeIndex === index ? (
                    // Ikon Minus Bulat Ungu Solid (sesuai gambar saat aktif)
                   <div className="w-6 h-6 rounded-full bg-[#5442CB] flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                   </div>
                ) : (
                    // Ikon Plus Ungu (sesuai gambar saat tidak aktif)
                    <IconPlus />
                )}
              </span>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 pt-0 text-sm text-gray-500 border-t border-transparent">
                    Tidak, website ini digunakan untuk kebutuhan informasi dan katalog produk. Untuk pembelian, Anda bisa menghubungi kami langsung melalui WhatsApp atau datang ke toko.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}