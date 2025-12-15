"use client";

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function Sidebar() {
  const categories = ["Tutorial", "Tutorial", "Tutorial", "Tutorial"];

  return (
    // UBAH DISINI:
    // Ganti 'lg:w-1/4' menjadi 'md:w-[260px] lg:w-1/4'
    // Ini artinya: Di Tablet (md) lebarnya fix 260px, di Desktop (lg) lebarnya 25%
    <aside className="w-full md:w-[260px] lg:w-1/4 flex flex-col gap-6 md:gap-8 flex-shrink-0">
      
      {/* Search Widget */}
      {/* Tambahkan bg-white, p-6, rounded-2xl agar terlihat seperti kartu terpisah */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-[#1E1E1E] font-bold mb-4 text-lg">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#5442CB] focus:bg-white transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <IconSearch />
          </div>
        </div>
      </div>

      {/* Kategori Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-[#1E1E1E] font-bold mb-4 text-lg">Kategori</h3>
        <div className="flex flex-col gap-3">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className="w-full text-left bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-600 hover:border-[#5442CB] hover:text-[#5442CB] transition-all hover:shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}