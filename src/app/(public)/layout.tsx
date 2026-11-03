import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      {/* Navigasi Atas */}
      <Topbar />

      {/* Konten Halaman Utama */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Navigasi Bawah */}
      <Footer />
    </div>
  );
}

