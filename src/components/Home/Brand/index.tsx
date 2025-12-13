/* src/app/tentang-kami/page.tsx */
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandLogos = [
  { src: "/brand/tjapmata.png", alt: "Tjap Mata Logo" },
  { src: "/brand/modern.png", alt: "Modern Power Tools Logo" },
  { src: "/brand/makita.png", alt: "makita Logo" },
  { src: "/brand/mollar.png", alt: "mollar Logo" },
  { src: "/brand/tekiro.png", alt: "tekiro Logo" },
  { src: "/brand/toho.png", alt: "toho Logo" },
  { src: "/brand/haston.png", alt: "haston Logo" },
];

const logo = [...brandLogos, ...brandLogos];
export default function Brand() {
  return (
    <div className="w-full">
      {/* Brand Section */}
      <section className="bg-white">
       {/* Logo brand dengan carousel */}
          <div className="mt-2">
            <Marquee speed={40} pauseOnHover={true}>
              {logo.map((brand, index) => (
                <div key={index} className="mx-2">
                  <div className=" relative bg-white rounded-2xl mb-2 lg:w-[285px] lg:h-[98px] md:w-[285px] md:h-[98px] w-[170px] h-[66px] flex items-center justify-center p-6 ">
                     <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      unoptimized
                      loading="lazy"
                      priority={false}
                      
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
      </section>
    </div>
  );
}
