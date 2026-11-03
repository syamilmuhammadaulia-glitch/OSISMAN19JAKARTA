"use client";

import Link from "next/link";
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  Users,
  CalendarCheck2,
  ShieldCheck,
  Compass,
  HeartHandshake,
} from "lucide-react";
import StrukturPengurus from "@/components/sections/StrukturPengurus";
import ProgramKerja from "@/components/sections/ProgramKerja";
import GaleriKegiatan from "@/components/sections/GaleriKegiatan";
import { useContent } from "@/context/ContentContext";

export default function LandingPage() {
  const { data } = useContent();
  const { hero, visiMisi, homeAspirasiBanner, homeCtaCollab } = data;

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section (ID: beranda) */}
      <section
        id="beranda"
        className="pt-24 sm:pt-28 pb-12 border-b border-slate-200/90 relative"
      >
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-24 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Kolom Kiri: Headline & Intro */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{hero.badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {hero.titleRegular}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={hero.ctaPrimaryHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-md shadow-blue-700/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>{hero.ctaPrimaryText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={hero.ctaSecondaryHref}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-xs"
              >
                {hero.ctaSecondaryText}
              </Link>
              <Link
                href={hero.ctaAspirasiHref}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-bold text-xs text-blue-700 hover:text-blue-800 hover:bg-blue-50/80 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>{hero.ctaAspirasiText}</span>
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Executive Council Overview Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {hero.kabinetName}
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                {hero.kabinetStatus}
              </span>
            </div>

            {/* Metric Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-slate-900 leading-none">
                      {hero.stats.pengurusCount}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {hero.stats.pengurusLabel}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  {hero.stats.pengurusSub}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-700 flex items-center justify-center">
                    <CalendarCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-slate-900 leading-none">
                      {hero.stats.prokerCount}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {hero.stats.prokerLabel}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  {hero.stats.prokerSub}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-slate-900 leading-none">
                      {hero.stats.aspirasiStatus}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {hero.stats.aspirasiLabel}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {hero.stats.aspirasiBadge}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <span className="font-semibold text-slate-600">
                {hero.instansiName}
              </span>
              <span>{hero.subInstansi}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{visiMisi.sectionLabel}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {visiMisi.sectionTitle}
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            {visiMisi.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
          {/* Card Visi */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white flex flex-col justify-between shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                {visiMisi.visionBadge}
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed text-white">
                {visiMisi.mainVision}
              </blockquote>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6 grid grid-cols-3 gap-2 text-center relative z-10">
              {visiMisi.pillars.map((pillar, pIdx) => (
                <div key={pIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs font-bold text-blue-300">
                    {pillar.title}
                  </span>
                  <span className="text-[10px] text-slate-300">{pillar.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Misi */}
          <div className="grid gap-3.5">
            {visiMisi.missions.map((misi, i) => (
              <div
                key={misi.id || i}
                className="flex items-start gap-4 p-5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                    {misi.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {misi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Komponen Struktur Pengurus */}
      <StrukturPengurus />

      {/* 4. Komponen Program Kerja */}
      <ProgramKerja />

      {/* 5. Komponen Galeri Kegiatan */}
      <GaleriKegiatan />

      {/* 6. Kotak Aspirasi Section Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>{homeAspirasiBanner.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {homeAspirasiBanner.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {homeAspirasiBanner.desc}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href={homeAspirasiBanner.buttonHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/40"
              >
                <span>{homeAspirasiBanner.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {homeAspirasiBanner.cards.map((item, idx) => (
              <Link
                key={idx}
                href="/aspirasi"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xs transition-all group"
              >
                <div className="text-xs font-extrabold text-blue-300 uppercase tracking-wider">
                  0{idx + 1}
                </div>
                <div className="font-bold text-sm text-white mt-1 group-hover:text-blue-200 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Penutup & Sinergi Civitas */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <HeartHandshake className="w-4 h-4" />
            <span>{homeCtaCollab.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {homeCtaCollab.title}
          </h2>
          <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
            {homeCtaCollab.desc}
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5 w-full md:w-auto">
          <Link
            href={homeCtaCollab.btn1Href}
            className="flex-1 md:flex-none inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-sm shadow-blue-700/20"
          >
            {homeCtaCollab.btn1Text}
          </Link>
          <Link
            href={homeCtaCollab.btn2Href}
            className="flex-1 md:flex-none inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            {homeCtaCollab.btn2Text}
          </Link>
        </div>
      </section>
    </div>
  );
}
