import HeroSection from "@/components/Produk/Hero";
import Sidebar from "@/components/Produk/Sidebar";
import ProductCatalog from "@/components/Produk/Catalog";

export default function ProdukPage() {
  return (
    <main className="w-full bg-[#EEF2FF] min-h-screen pb-20">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MAIN LAYOUT (Sidebar + Grid) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* KIRI: SIDEBAR */}
          <Sidebar />

          {/* KANAN: KATALOG */}
          <div className="w-full lg:w-3/4">
             <ProductCatalog />
          </div>

        </div>
      </div>

    </main>
  );
}