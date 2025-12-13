export default function ContactInfo() {
  return (
    // UBAH DISINI:
    // 1. Hapus '-mt-...' (agar tidak naik ke atas)
    // 2. Tambahkan 'py-16' (Memberi jarak/spasi atas dan bawah sebesar 64px)
    // 3. Tambahkan 'mb-8' jika ingin jarak tambahan ke bawah
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* --- KARTU 1: ALAMAT --- */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-start">
            <h3 className="text-[#1E1E1E] font-bold text-lg mb-4">
              Alamat
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ruko Crown A, Jl. Green Lake City Boulevard no. 39, RT.005/RW.008, 
              Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147
            </p>
          </div>

          {/* --- KARTU 2: JAM OPERASIONAL --- */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-start">
            <h3 className="text-[#1E1E1E] font-bold text-lg mb-4">
              Jam Operasional
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-1">
              <p>Senin - Sabtu</p>
              <p>08 . 00 - 17 . 00</p>
              <p className="mt-3">Minggu</p>
              <p>Libur</p>
            </div>
          </div>

          {/* --- KARTU 3: HUBUNGI KAMI --- */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-start">
            <h3 className="text-[#1E1E1E] font-bold text-lg mb-4">
              Hubungi Kami
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-1">
              <p>(406) 555-0120</p>
              <p>contoh@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}