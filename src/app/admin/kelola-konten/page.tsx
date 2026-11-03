"use client";

import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function KelolaKontenPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <h1 className="text-xl font-extrabold text-slate-900">
          Panel Kelola Konten
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Fitur autentikasi dan manajemen konten admin sedang dalam tahap konfigurasi sistem.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
