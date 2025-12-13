"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- ICONS INTERNAL ---
const IconQuote = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H10C10.5304 21 11.0391 20.7893 11.4142 20.4142C11.7893 20.0391 12 19.5304 12 19V13C12 12.4696 11.7893 11.9609 11.4142 11.5858C11.0391 11.2107 10.5304 11 10 11ZM10 11V7C10 6.20435 10.3161 5.44129 10.8787 4.87868C11.4413 4.31607 12.2044 4 13 4M20 11H16C15.4696 11 14.9609 11.2107 14.5858 11.5858C14.2107 11.9609 14 12.4696 14 13V19C14 19.5304 14.2107 20.0391 14.5858 20.4142C14.9609 20.7893 15.4696 21 16 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V13C22 12.4696 21.7893 11.9609 21.4142 11.5858C21.0391 11.2107 20.5304 11 20 11ZM20 11V7C20 6.20435 20.3161 5.44129 20.8787 4.87868C21.4413 4.31607 22.2044 4 23 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const IconArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Testimoni() {
  // Saya tambahkan 2 data lagi agar slidernya terasa (Total 5 item)
  const testimonials = [
    {
      text: "Pelayanan sangat memuaskan, barang sampai tepat waktu dan kualitasnya sangat bagus. Sangat merekomendasikan Babo Teknik untuk kebutuhan industri.",
      name: "Darlene Robertson",
    },
    {
      text: "Produk original dan tahan lama. Saya sudah berlangganan alat-alat teknik di sini untuk proyek konstruksi saya. Sukses terus!",
      name: "Budi Santoso",
    },
    {
      text: "Respon penjual cepat dan ramah. Pengiriman aman dengan packing yang rapi. Harga juga sangat bersaing dibanding toko lain.",
      name: "Siti Aminah",
    },
    {
      text: "Kualitas barang premium, sesuai dengan deskripsi. Sangat membantu pekerjaan bengkel saya jadi lebih efisien.",
      name: "Rizky Pratama",
    },
    {
      text: "Terpercaya! Awalnya ragu beli online, tapi ternyata barangnya asli dan bergaransi. Mantap Babo Teknik.",
      name: "Andi Wijaya",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // --- LOGIC RESPONSIVE ---
  // Menentukan berapa kartu yang tampil berdasarkan lebar layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // HP: 1 kartu
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet: 2 kartu
      } else {
        setItemsToShow(3); // Desktop: 3 kartu
      }
    };

    handleResize(); // Jalankan saat awal render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menghitung batas maksimal slide
  const maxIndex = testimonials.length - itemsToShow;

  const nextSlide = () => {
    // Jika sudah di akhir, kembali ke awal (Looping)
    if (currentIndex >= maxIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    // Jika di awal, pindah ke paling akhir
    if (currentIndex <= 0) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold mb-12">
          Apa Yang Pelanggan Kami Katakan?
        </h2>
      </div>

      {/* --- SLIDER CONTAINER --- */}
      <div className="relative overflow-hidden px-4 md:px-0">
        <motion.div
          className="flex"
          // Logic animasi geser: Geser sebesar % berdasarkan item yang tampil
          animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              // Width dinamis sesuai itemsToShow (100% / 50% / 33.3%)
              className="flex-shrink-0 px-4 w-full md:w-1/2 lg:w-1/3 pt-8"
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                
                {/* Quote Icon Bubble */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#5442CB] rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#EEF2FF]">
                  <IconQuote />
                </div>

                {/* Content Wrapper */}
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                </div>

                {/* Footer Card */}
                <div>
                  <hr className="border-t border-gray-200 mb-4" />
                  <h4 className="font-bold text-[#1E1E1E]">
                    {item.name}
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- NAVIGATION BUTTONS --- */}
      <div className="flex justify-center gap-4 mt-12">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-[#DCE4FF] text-[#5442CB] flex items-center justify-center hover:bg-[#5442CB] hover:text-white transition-all active:scale-95"
        >
          <IconArrowLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-[#DCE4FF] text-[#5442CB] flex items-center justify-center hover:bg-[#5442CB] hover:text-white transition-all active:scale-95"
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}