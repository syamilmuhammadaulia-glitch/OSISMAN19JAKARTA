"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronRight, Settings } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data } = useContent();
  const header = data.header;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Judul Instansi */}
          <Link
            href="/#beranda"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden bg-white border border-slate-200/80 shadow-xs group-hover:border-blue-400 transition-colors p-1">
              <Image
                src={header.logoUrl || "/logo-osis.jpg"}
                alt={`Logo ${header.orgNamePrefix}`}
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                {header.orgNamePrefix}{" "}
                <span className="text-blue-700">{header.orgNameHighlight}</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                {header.periode}
              </span>
            </div>
          </Link>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2">
            {header.navLinks.map((link) => {
              const isActive =
                link.href === "/aspirasi"
                  ? pathname === "/aspirasi"
                  : pathname === "/" && link.href === "/#beranda";

              if (link.isSpecial) {
                return (
                  <Link
                    key={link.id || link.label}
                    href={link.href}
                    className={`ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                      pathname === "/aspirasi"
                        ? "bg-blue-700 text-white shadow-sm shadow-blue-600/30 ring-2 ring-blue-700/20"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.id || link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 bg-blue-50/90 font-bold border border-blue-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Quick Admin Access Icon */}
            <Link
              href="/admin"
              title="Panel Admin (#admin)"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors ml-1"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </nav>

          {/* Tombol Mobile Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <Link
              href="/admin"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-700"
              title="Admin Panel"
            >
              <Settings className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {header.navLinks.map((link) => (
            <Link
              key={link.id || link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                link.isSpecial
                  ? "bg-blue-600 text-white shadow-sm"
                  : link.href === "/aspirasi" && pathname === "/aspirasi"
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              }`}
            >
              <span className="flex items-center gap-2">
                {link.isSpecial && <Sparkles className="w-4 h-4 text-blue-200" />}
                {link.label}
              </span>
              <ChevronRight
                className={`w-4 h-4 ${link.isSpecial ? "text-blue-200" : "text-slate-400"}`}
              />
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-200"
          >
            <span className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-600" />
              Kelola Konten Website (Admin)
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      )}
    </header>
  );
}
