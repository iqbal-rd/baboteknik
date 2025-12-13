import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Toko Teknik Tangerang Terlengkap | Babo Teknik",
  description:
    "Babo Teknik, toko teknik Tangerang terdekat dan terlengkap. Jual alat teknik, mesin, dan perkakas berkualitas untuk industri dan bengkel.",
  keywords: [
    "toko teknik Tangerang",
    "toko alat teknik Tangerang",
    "toko teknik terdekat",
    "toko alat teknik terdekat",
    "alat teknik Tangerang",
    "mesin bor",
    "gerinda duduk",
    "bor baterai",
    "spray gun elektrik",
    "toko teknik Tangerang terlengkap",
    "toko alat alat teknik",
    "jual alat teknik terdekat",
    "toko alat mesin",
    "toko alat pertukangan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
