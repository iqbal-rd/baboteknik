import ContactHero from "@/components/Kontak/Hero";
import ContactInfo from "@/components/Kontak/Info";
import ContactFormMap from "@/components/Kontak/Form";

export const metadata = {
  title: "Kontak Kami | Babo Teknik",
  description: "Hubungi Babo Teknik untuk segala kebutuhan alat teknik dan industri Anda.",
};

export default function KontakPage() {
  return (
    // Background halaman dibuat putih kebiruan (#EEF2FF) agar menyatu
    <main className="w-full bg-[#EEF2FF] min-h-screen">
      
      <ContactHero />
      
      {/* Contact Info (Akan naik menimpa Hero) */}
      <ContactInfo />
      
      {/* Form & Map (Akan ada di bawah Contact Info) */}
      <ContactFormMap />

    </main>
  );
}