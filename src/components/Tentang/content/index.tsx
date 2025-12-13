"use client";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center max-w-5xl mx-auto mb-20"
    >
      <h2 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold mb-8">
        Temukan alat terbaik untuk hasil kerja maksimal
      </h2>

      <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center">
        <p>
          Cari produk kebutuhan industri, rumah tangga anda di Babo Teknik. Alat teknik berkualitas dengan harga bersaing.
        </p>
        <p>
          Babo Teknik adalah perusahaan penyedia alat teknik yang berkomitmen menghadirkan produk berkualitas tinggi 
          untuk mendukung kebutuhan industri, konstruksi, dan perbengkelan. Dengan pengalaman dan dedikasi dalam bidang 
          alat teknik, kami menyediakan berbagai peralatan mulai dari perkakas tangan, mesin industri, hingga perlengkapan 
          keselamatan kerja. Kami selalu memastikan setiap produk yang kami distribusikan memiliki standar mutu terbaik agar 
          memberikan performa optimal dan daya tahan tinggi bagi pelanggan.
        </p>
        <p>
          Kami percaya bahwa kepercayaan pelanggan adalah fondasi utama dalam membangun hubungan jangka panjang. 
          Oleh karena itu, kami tidak hanya menawarkan produk, tetapi juga solusi yang tepat dengan pelayanan yang 
          profesional, cepat, dan ramah. Dengan semangat inovasi dan komitmen terhadap kepuasan pelanggan, Babo Teknik 
          siap menjadi mitra terpercaya dalam mendukung perkembangan bisnis dan proyek Anda.
        </p>
      </div>
    </motion.div>
  );
}