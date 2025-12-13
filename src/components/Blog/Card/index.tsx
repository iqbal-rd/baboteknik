import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogCard({ image, title, excerpt, date, category, slug }: BlogCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-lg bg-gray-200">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Badge Category (Dalam Gambar) */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded text-[10px] font-bold text-gray-700 shadow-sm">
            {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Tanggal */}
        <p className="text-gray-400 text-xs mb-2">
            {date}
        </p>

        {/* Judul */}
        <Link href={`/blog/${slug}`}>
            <h3 className="text-[#1E1E1E] text-base font-bold leading-snug mb-3 line-clamp-2 hover:text-[#5442CB] transition-colors">
            {title}
            </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
            {excerpt}
        </p>

        {/* Button */}
        <div className="mt-auto">
            <Link href={`/blog/${slug}`}>
                <button className="bg-[#5442CB] text-white text-xs font-medium px-6 py-2 rounded-md hover:bg-[#4334a3] transition">
                    Baca selengkapnya
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}