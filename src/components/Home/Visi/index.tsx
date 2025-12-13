"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Visi() {
    return(
        // PERBAIKAN DISINI:
        // 1. Ganti 'h-[480px]' menjadi 'h-auto' (agar tinggi menyesuaikan isi konten di HP).
        // 2. Tambahkan 'py-20' (Padding atas bawah) agar tidak mepet dengan section lain.
        <section className="relative w-full h-auto py-20 md:py-24 bg-white">
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* {Left Side - Text} */}
                <motion.div
                    initial={{opacity: 0, y:40 }}
                    whileInView={{opacity: 1, y:0 }} // Ubah animate ke whileInView agar animasi jalan saat di-scroll
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut"}}
                >
                    <p className="text-[#5B71D6] mb-3 text-lg font-medium">Tentang Kami</p>

                    <h1 className="text-[#2B2B2B] text-3xl md:text-4xl font-bold leading-tight max-w-lg">
                        Kami Hadir untuk Mendukung Setiap Proyek Anda
                    </h1>

                    <p className="text-[#4F4F4F] mt-6 text-base md:text-lg leading-relaxed">
                       Babo Teknik menyediakan berbagai alat teknik dan perkakas berkualitas untuk mendukung pekerjaan para tukang, bengkel, dan proyek konstruksi. 
                       Kami percaya, hasil kerja terbaik berawal dari peralatan yang andal dan tepat guna.
                    </p>

                    <Link href="/tentang">
                        <button className="mt-8 px-8 py-3 bg-[#6954D8] hover:bg-[#5842c3] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                            Lihat Selengkapnya
                        </button>
                    </Link>
                </motion.div>

                {/* {Right Side - Image} */}
                <motion.div     
                    initial={{ opacity: 0, x: 60}}
                    whileInView={{ opacity: 1, x: 0}} // Ubah animate ke whileInView
                    viewport={{ once: true }}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="w-full h-full flex justify-center" // Center image di mobile
                >
                    <img
                        src="/Home/rectangle.png"
                        alt="Foto Toko Babo Teknik"
                        className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]" // Style agar gambar responsif
                    />
                </motion.div>
                
            </div>
        </section>
    );
}