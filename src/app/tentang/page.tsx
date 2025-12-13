import Tentang from "@/components/Tentang/index";

export async function generateMetadata() {
  return {
    title: "Tentang Utomo Teknik | Toko Teknik Tangerang Terpercaya",
    description:
      "Kenali Babo Teknik, toko teknik Tangerang terpercaya. Menyediakan alat teknik berkualitas untuk industri, konstruksi, dan bengkel.",
    keyword: [
      "toko teknik Tangerang",
      "alat teknik Tangerang",
      "pusat teknik Tangerang",
      "toko alat teknik Tangerang",
      "toko teknik terdekat",
      "toko alat alat teknik",
      "distributor makita",
      "wipro",
      "tekiro",
      "lipro",
      "sakamoto",
      "blizt Tangerang",
      "bengkel teknik Tangerang",
      "toko alat mesin",
    ],
  };
}

export default function Page() {
  return <Tentang />;
}
