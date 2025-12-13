import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Tentang/hero_abt.png" // Pastikan gambar ada di public/About/
          alt="Tentang Kami Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-base md:text-lg opacity-90 leading-relaxed">
          Babo Teknik hadir untuk menyediakan alat teknik berkualitas bagi kebutuhan industri, konstruksi, 
          dan rumah tangga. Kami percaya, pekerjaan yang baik dimulai dari alat yang tepat.
        </p>
      </div>
    </section>
  );
}