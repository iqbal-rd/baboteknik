import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/catalog/hero_ctlg.png" // Pastikan siapkan gambar tools di folder public/Catalog/
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
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Katalog</h1>
        <p className="text-sm md:text-base opacity-90 font-light">
          Temukan berbagai alat teknik pilihan yang siap membantu pekerjaan Anda jadi lebih cepat, mudah, dan hasilnya makin maksimal.
        </p>
      </div>
    </section>
  );
}