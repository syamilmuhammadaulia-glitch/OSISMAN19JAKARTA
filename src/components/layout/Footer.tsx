"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Phone,
  Shield,
} from "lucide-react";
import { useContent } from "@/context/ContentContext";

export default function Footer() {
  const { data } = useContent();
  const footer = data.footer;
  const header = data.header;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
        {/* Kolom 1: Identitas & Visi Ringkas (Span 5) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 border border-slate-700/80 shadow-md overflow-hidden">
              <Image
                src={header.logoUrl || "/logo-osis.jpg"}
                alt="Logo Organisasi"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white tracking-wide">
                {footer.orgNamePrefix}{" "}
                <span className="text-blue-400">{footer.orgNameHighlight}</span>
              </h3>
              <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                {footer.kabinetMasaBakti}
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            {footer.bio}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{footer.jamSekretariat}</span>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat (Span 3) */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-4 pb-2 border-b border-slate-800 inline-block">
            Navigasi Portal
          </h4>
          <ul className="space-y-2.5 text-sm">
            {header.navLinks.map((item) => (
              <li key={item.id || item.label}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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

        {/* Kolom 3: Kontak & Informasi Instansi (Span 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs text-white tracking-widest uppercase mb-4 pb-2 border-b border-slate-800 inline-block">
            Sekretariat &amp; Kontak
          </h4>
          <div className="space-y-3 text-sm text-slate-400">
            {footer.address && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">{footer.address}</p>
              </div>
            )}
            {footer.email && (
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {footer.email}
                </a>
              </div>
            )}
            {footer.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{footer.phone}</span>
              </div>
            )}
          </div>

          <div className="pt-2">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Media Sosial Resmi
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {footer.instagramUrl && (
                <a
                  href={footer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all shadow-xs"
                  aria-label="Instagram"
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
              )}
              <Link
                href="/aspirasi"
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Saluran Aspirasi</span>
              </Link>
              <Link
                href="/admin"
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 hover:bg-slate-800 transition-all"
                title="Panel Pengaturan Admin"
              >
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>{footer.copyrightText}</p>
          <p className="text-slate-400 flex items-center gap-1.5">
            {footer.creditText}
          </p>
        </div>
      </div>
    </footer>
  );
}
