"use client";
import ProductCard from "@/components/Produk/Card";

// Icon Panah
const ArrowLeft = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
const ArrowRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;

export default function ProductCatalog() {
  // Data Dummy (9 Produk)
  const products = Array(9).fill({
    image: "/Home/product-1.png", // Ganti dengan path gambarmu
    title: "MATA BOR BESI NACHI HSS STRAIGHT DRILLS 13,5 13,5mm",
    rating: 5,
    reviewCount: 20
  });

  return (
    <div className="flex flex-col w-full">
      
      {/* GRID PRODUK */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((product, idx) => (
          <ProductCard 
            key={idx}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
          <ArrowLeft />
        </button>
        
        {/* Active Page */}
        <button className="w-8 h-8 flex items-center justify-center bg-[#5442CB] text-white rounded font-medium text-sm">
          1
        </button>
        
        {/* Other Pages */}
        <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 rounded border border-gray-200 hover:bg-gray-50 font-medium text-sm">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 rounded border border-gray-200 hover:bg-gray-50 font-medium text-sm">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 rounded border border-gray-200 hover:bg-gray-50 font-medium text-sm">
          4
        </button>

        <button className="w-8 h-8 flex items-center justify-center bg-white rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
          <ArrowRight />
        </button>
      </div>

    </div>
  );
}