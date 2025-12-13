
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[480px] md:h-[550px] overflow-hidden bg-[#5D77D5]">
      
      {/* BACKGROUND & GRADIENT (TIDAK BERUBAH) */}
      <div className="absolute right-0 top-0 w-full md:w-[75%] h-full">
        <Image
          src="/Home/hero.png"
          alt="Hero Hardware Store"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#5D77D5] via-[#5D77D5] to-transparent via-30% md:via-45% z-0"></div>

      <div className="relative z-10 h-full flex items-center px-12 md:pl-85 text-white w-full">
        
        <div className="max-w-[550px]"> {/* Lebar area teks sedikit diperluas */}
          
          <h1 className="text-[32px] md:text-[32px] font-bold leading-tight drop-shadow-sm">
            Temukan alat terbaik <br />
            untuk hasil kerja maksimal
          </h1>

          <p className="mt-5 text-base md:text-lg opacity-90 leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#6954D8] hover:bg-[#5842c3] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
            <Link href="/produk">Lihat Katalog</Link>
          </button>
        </div>
      </div>

    </section>
  );
}