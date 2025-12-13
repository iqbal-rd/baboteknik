"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Visi() {
    return(
        <section className="relative w-full h-[480px] md:h-[550px] ">
            <div className="max-w-7xl mx-auto px-3 grid md:grid-cols-2 gap-10 items-center">

                {/* {left side} */}
                <motion.div
                initial={{opacity: 0, y:40 }}
                animate={{opacity: 1, y:0 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
            >
                
                    <p className="text-[#5B71D6] mb-3 text-lg">Tentang Kami</p>

                    <h1 className="text-[#2B2B2B] text-3xl md:text-3xl font-bold leading-tight max-w-lg">
                        Kami Hadir untuk Mendukung Setiap Proyek Anda
                    </h1>

                    <p className="text-[#4F4F4F] mt-6 text-lg leading-relaxed">
                       Babo Teknik menyediakan berbagai alat teknik dan perkakas berkualitas untuk mendukung pekerjaan para tukang, bengkel, dan proyek konstruksi. 
                       Kami percaya, hasil kerja terbaik berawal dari peralatan yang andal dan tepat guna.
                    </p>

                    <button className="mt-8 px-8 py-3 bg-[#6954D8] hover:bg-[#5842c3] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                        <Link href="/tentang">Lihat Selengkapnya</Link>
                    </button>
                </motion.div>

                {/* {Right Side} */}

                <motion.div     
                initial={{ opacity: 0, x: 60}}
                animate={{ opacity: 1, x: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <img
                    src="/Home/rectangle.png"
                    alt="Foto Toko"
                    className="rounded-xl shadow-lg"
                    />
                </motion.div>
                
            </div>
        </section>
    );
}