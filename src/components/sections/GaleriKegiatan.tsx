"use client";

import {
  FolderOpen,
  ExternalLink,
  Camera,
  Film,
  Calendar,
  Layers,
} from "lucide-react";
import { useContent } from "@/context/ContentContext";
import DriveCard from "@/components/DriveCard";

export default function GaleriKegiatan() {
  const { data } = useContent();
  const galeri = data.galeri;
  const categories = galeri.categories || [];
  const driveCards = galeri.driveCards || [];

  const getIcon = (type?: string) => {
    switch (type) {
      case "calendar":
        return Calendar;
      case "layers":
        return Layers;
      case "film":
        return Film;
      default:
        return Camera;
    }
  };

  return (
    <section id="galeri" className="space-y-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{galeri.sectionLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {galeri.sectionTitle}
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          {galeri.sectionDesc}
        </p>
      </div>

      {/* Grid Kategori Dokumentasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => {
          const Icon = getIcon(cat.iconType);
          return (
            <div
              key={cat.id || idx}
              className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                    {cat.count}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {(cat.tags || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Google Drive Integration Showcase Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>{galeri.driveBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {galeri.driveTitle}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {galeri.driveDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={galeri.driveButtonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/40 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>{galeri.driveButtonText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Drive Archive Cards */}
      {driveCards.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Arsip Folder Dokumentasi Per Kegiatan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {driveCards.map((card) => (
              <DriveCard
                key={card.id}
                title={card.title}
                date={card.date}
                driveLink={card.driveLink}
                category={card.category}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
