import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "OSIS MAN 19 Jakarta - Wadah Kepemimpinan, Kreasi & Kolaborasi",
  description:
    "Portal resmi Organisasi Siswa Intra Sekolah (OSIS) MAN 19 Jakarta periode 2026/2027. Menghadirkan informasi struktur pengurus, program kerja, dokumentasi kegiatan, dan kotak aspirasi.",
  keywords: [
    "OSIS MAN 19 Jakarta",
    "MAN 19 Jakarta",
    "Organisasi Siswa",
    "Madrasah Aliyah Negeri 19",
    "Program Kerja OSIS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

