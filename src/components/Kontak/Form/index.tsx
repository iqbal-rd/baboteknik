"use client";

export default function ContactFormMap() {
  return (
    // UBAH 1: Section dibuat full width dengan background putih
    // Hapus padding horizontal (px) pada section agar konten menempel ke tepi
    <section className="w-full bg-white border-t border-gray-100 mb-24">
      
      {/* 
          UBAH 2: Flex Container Full Screen
          - Hapus 'max-w-7xl', 'rounded', 'shadow'
          - Gunakan 'min-h-[600px]' agar area map cukup tinggi
      */}
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* --- KOLOM KIRI: FORMULIR (50%) --- */}
        {/* 
            - Tambahkan padding besar (p-8 md:p-16) agar form tidak mepet pinggir layar
            - flex justify-center: Agar form berada di tengah area putihnya
        */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-[#1E1E1E] text-3xl font-bold mb-3">
              Bagaimana Kami membantu Anda?
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Hubungi kami untuk mendapatkan informasi produk, penawaran terbaik, atau bantuan seputar kebutuhan packaging Anda.
            </p>

            <form className="space-y-5">
              {/* Nama */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Nama" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:border-[#5442CB] focus:ring-1 focus:ring-[#5442CB] focus:outline-none transition-all bg-white" 
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Phone" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:border-[#5442CB] focus:ring-1 focus:ring-[#5442CB] focus:outline-none transition-all bg-white" 
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="contoh@gmail.com" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:border-[#5442CB] focus:ring-1 focus:ring-[#5442CB] focus:outline-none transition-all bg-white" 
                />
              </div>

              {/* Subjek */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Nama" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:border-[#5442CB] focus:ring-1 focus:ring-[#5442CB] focus:outline-none transition-all bg-white" 
                />
              </div>

              {/* Pesan */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Ketik Pesan Disini" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:border-[#5442CB] focus:ring-1 focus:ring-[#5442CB] focus:outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>

              {/* Tombol */}
              <div className="flex justify-end pt-4">
                <button className="bg-[#5442CB] text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-[#4334a3] transition shadow-md w-full md:w-auto">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- KOLOM KANAN: MAPS (50%) --- */}
        {/* 
            - relative: Agar overlay card bisa diatur posisinya
            - min-h-[500px]: Agar tinggi peta di HP tetap ada
            - lg:min-h-full: Agar di desktop tingginya mengikuti tinggi form
        */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto bg-gray-100">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.388703775468!2d106.6975239!3d-6.1809228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9a0c7c8c7ad%3A0x8c7c8c7ad!2sGreen%20Lake%20City!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="absolute inset-0 w-full h-full" 
          ></iframe>

          {/* OVERLAY CARD */}
          <div className="absolute top-6 left-6 right-6 md:right-auto md:max-w-[320px] bg-white p-6 rounded-lg shadow-xl z-10 border border-gray-100">
            <h4 className="font-bold text-[#1E1E1E] text-base mb-2">
              Babo - Banyak Bonus
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Ruko Crown A, Jl. Green Lake City Boulevard no. 39, RT.005/RW.008, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147
            </p>
            
            <div className="flex items-center gap-1 mb-3">
               <span className="text-yellow-400 text-sm tracking-tighter">★★★★★</span>
               <span className="text-xs text-gray-500 ml-1">5 Ulasan</span>
            </div>

            <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
               Lihat peta lebih besar
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}