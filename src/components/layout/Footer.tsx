import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Clock,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
        {/* Kolom 1: Identitas & Visi Ringkas (Span 5) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 border border-slate-700/80 shadow-md">
              <Image
                src="/logo-osis.jpg"
                alt="Logo OSIS MAN 19 Jakarta"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white tracking-wide">
                OSIS MAN 19 <span className="text-blue-400">JAKARTA</span>
              </h3>
              <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                Masa Bakti 2026/2027 • Kabinet Bersinergi
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Wadah resmi representasi, kreasi, dan pengabdian seluruh siswa/i MAN 19 Jakarta untuk membentuk insan yang berakhlakul karimah, berjiwa kepemimpinan, dan berwawasan luas.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Sekretariat Aktif Hari Sekolah (07.00 - 15.30 WIB)</span>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat (Span 3) */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-4 pb-2 border-b border-slate-800 inline-block">
            Navigasi Portal
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/#beranda"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <span>Beranda Utama</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#struktur"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Struktur &amp; Susunan Pengurus
              </Link>
            </li>
            <li>
              <Link
                href="/#proker"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Daftar Program Kerja
              </Link>
            </li>
            <li>
              <Link
                href="/#galeri"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Galeri &amp; Arsip Dokumentasi
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/aspirasi"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800/60 text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                Kotak Aspirasi Online
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Informasi Sekolah (Span 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-4 pb-2 border-b border-slate-800 inline-block">
            Sekretariat &amp; Kontak
          </h4>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
              <p className="leading-relaxed">
                Jl. H. Muchtar Raya Gg. H. Jaelani III, Petukangan Utara, Pesanggrahan, Jakarta Selatan 12260
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a
                href="mailto:man19jakarta@kemenag.go.id"
                className="hover:text-blue-300 transition-colors"
              >
                man19jakarta@kemenag.go.id
              </a>
            </div>
          </div>

          <div className="pt-2">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Media Sosial Resmi
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/osisman19jkt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all shadow-xs"
                aria-label="Instagram OSIS MAN 19"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <Link
                href="/aspirasi"
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Saluran Aspirasi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 OSIS MAN 19 Jakarta. Seluruh hak cipta dilindungi.</p>
          <p className="text-slate-400 flex items-center gap-1.5">
            Dikelola bersama oleh Bidang{" "}
            <span className="font-bold text-slate-200">HPDD &amp; Tim IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

