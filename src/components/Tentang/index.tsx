"use client";

import About from "@/components/Tentang/about";
import Content from "@/components/Tentang/content";
import Testimoni from "@/components/Tentang/testimoni";

export default function TentangKami() {
  return (
    <main className="w-full">
      
      <About />
      <section className="bg-[#EEF2FF] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
        
          <Content />
          <Testimoni />
        </div>
      </section>

    </main>
  );
}