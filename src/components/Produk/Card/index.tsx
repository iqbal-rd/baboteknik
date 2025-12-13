import Image from "next/image";
import Link from "next/link";

// Icon Bintang Kuning
const StarIcon = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
}

export default function ProductCard({ image, title, rating, reviewCount }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full h-full">
             <Image 
                src={image} 
                alt={title}
                fill
                className="object-contain"
             />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#1E1E1E] text-sm font-bold leading-snug mb-2 uppercase line-clamp-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ( {reviewCount} )
          </span>
        </div>

        {/* Button */}
        <div className="mt-auto">
            <Link href="/kontak">
                <button className="w-full bg-[#5442CB] text-white text-xs font-semibold py-2.5 rounded-md hover:bg-[#4334a3] transition">
                Hubungi Kami
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}