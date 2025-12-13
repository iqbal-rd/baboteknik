import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Blog/hero_blog.png" // Pastikan siapkan gambar tools di folder public/Catalog/
          alt="Katalog Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Berita</h1>
        <p className="text-sm md:text-base opacity-90 font-light">
          Dapatkan berbagai tips, info, dan wawasan seputar dunia teknik. Dari cara perawatan alat hingga inspirasi kerja di lapangan, semua ada disini.
        </p>
      </div>
    </section>
  );
}