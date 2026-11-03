"use client";

import Link from "next/link";
import {
  Bell,
  Users,
  GraduationCap,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { useContent } from "@/context/ContentContext";

export default function AspirasiPage() {
  const { data } = useContent();
  const { aspirasiPage } = data;

  const getCardIcon = (iconType?: string) => {
    switch (iconType) {
      case "users":
        return {
          icon: Users,
          iconWrapper: "bg-blue-50 text-blue-500 border-blue-100",
          badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
        };
      case "graduation":
        return {
          icon: GraduationCap,
          iconWrapper: "bg-emerald-50 text-emerald-500 border-emerald-100",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        };
      case "message":
        return {
          icon: MessageSquare,
          iconWrapper: "bg-rose-50 text-rose-500 border-rose-100",
          badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
        };
      case "lightbulb":
      default:
        return {
          icon: Lightbulb,
          iconWrapper: "bg-amber-50 text-amber-500 border-amber-100",
          badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
        };
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      {/* 1. Header Section */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{aspirasiPage.badgeText}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {aspirasiPage.pageTitle}{" "}
          <span className="text-blue-700">{aspirasiPage.pageHighlight}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {aspirasiPage.pageDesc}
        </p>
      </section>

      {/* 2. Banner Pemberitahuan Penting */}
      <section className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white shadow-md shadow-blue-700/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 border border-blue-600/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex-shrink-0 w-13 h-13 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
            <Bell className="w-6 h-6 text-white" />
          </div>

          <div className="relative flex-1 space-y-1">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white/95">
              PEMBERITAHUAN PENTING
            </h2>
            <p className="text-sm text-blue-50 font-normal leading-relaxed">
              Kotak aspirasi periode semester berjalan telah dibuka. Semua masukan
              akan dibahas secara berkala dalam rapat koordinasi pengurus bersama dewan guru dan pembina.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Grid Kartu Formulir Aspirasi */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {(aspirasiPage.cards || []).map((card) => {
            const config = getCardIcon(card.iconType);
            const Icon = config.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-7 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center border ${config.iconWrapper} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${config.badgeColor}`}
                    >
                      {card.badgeLabel}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-blue-700 uppercase group-hover:text-blue-800 transition-colors">
                    Buka Google Form
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 4. Jaminan Anonimitas & Privasi */}
      <section className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center gap-5 justify-between shadow-lg border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl text-blue-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Kerahasiaan &amp; Anonimitas Terjamin
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Anda dapat mengisi formulir secara anonim tanpa perlu mencantumkan identitas pribadi.
                Setiap masukan ditelaah secara objektif demi kemajuan bersama civitas sekolah.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              100% Bebas Suara
            </span>
          </div>
        </div>
      </section>

      {/* 5. Alur Tindak Lanjut Aspirasi */}
      <section className="max-w-5xl mx-auto pt-4">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {aspirasiPage.alurTitle}
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            {aspirasiPage.alurDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(aspirasiPage.alurList || []).map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs relative flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div>
                <span className="text-2xl font-black text-blue-600/25 tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs text-blue-700 font-bold gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Tahap {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bantuan Ringkas & Navigasi Kembali */}
      <section className="max-w-4xl mx-auto pt-2">
        <div className="p-6 sm:p-8 bg-blue-50/70 rounded-3xl border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-blue-700" />
              Ingin berdiskusi langsung dengan pengurus?
            </h3>
            <p className="text-sm text-slate-600">
              Kunjungi ruang sekretariat pada jam istirahat sekolah atau hubungi kontak resmi kami.
            </p>
          </div>
          <Link
            href="/#beranda"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-sm shadow-blue-700/20 whitespace-nowrap"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </div>
  );
}
