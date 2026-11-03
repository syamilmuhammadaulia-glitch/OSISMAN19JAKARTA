"use client";

import { useState, useMemo } from "react";
import { Calendar, Search, Clock } from "lucide-react";
import { useContent } from "@/context/ContentContext";

interface ProkerFlatItem {
  id: string;
  nama: string;
  jenis: string;
  deskripsi: string;
  sekbid: string;
  status?: string;
}

const getBadgeConfig = (jenis: string) => {
  switch ((jenis || "").toLowerCase()) {
    case "eventual":
      return {
        label: "Eventual",
        style: "bg-blue-50 text-blue-700 border-blue-200",
        dot: "bg-blue-600",
      };
    case "rutinitas":
      return {
        label: "Rutinitas",
        style: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-600",
      };
    case "insidental":
      return {
        label: "Insidental",
        style: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-600",
      };
    default:
      return {
        label: jenis || "Eventual",
        style: "bg-slate-100 text-slate-700 border-slate-200",
        dot: "bg-slate-500",
      };
  }
};

export default function ProgramKerja() {
  const { data } = useContent();
  const programKerja = data.programKerja;
  const rawGroups = useMemo(() => programKerja.data || [], [programKerja.data]);

  const [selectedSekbid, setSelectedSekbid] = useState<string>("Semua");
  const [selectedJenis, setSelectedJenis] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sekbidList = useMemo(() => {
    return ["Semua", ...rawGroups.map((g) => g.sekbid)];
  }, [rawGroups]);

  const jenisList = ["Semua", "Eventual", "Rutinitas", "Insidental"];

  // Flatten all proker for uniform filtering & stats
  const allProker: ProkerFlatItem[] = useMemo(() => {
    return rawGroups.flatMap((group) =>
      (group.proker || []).map((p) => ({
        id: p.id || `${group.sekbid}-${p.nama}`,
        nama: p.nama,
        jenis: p.jenis,
        deskripsi: p.deskripsi,
        sekbid: group.sekbid,
        status: p.status,
      }))
    );
  }, [rawGroups]);

  // Filtered proker items
  const filteredProker = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allProker.filter((item) => {
      const matchSekbid =
        selectedSekbid === "Semua" || item.sekbid === selectedSekbid;
      const matchJenis =
        selectedJenis === "Semua" ||
        item.jenis.toLowerCase() === selectedJenis.toLowerCase();
      const matchSearch =
        !q ||
        item.nama.toLowerCase().includes(q) ||
        item.deskripsi.toLowerCase().includes(q) ||
        item.sekbid.toLowerCase().includes(q);

      return matchSekbid && matchJenis && matchSearch;
    });
  }, [allProker, selectedSekbid, selectedJenis, searchQuery]);

  return (
    <section id="proker" className="space-y-10 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{programKerja.sectionLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {programKerja.sectionTitle}
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          {programKerja.sectionDesc || `Sebanyak ${allProker.length} agenda kerja yang dirancang untuk memperkuat solidaritas, prestasi, dan pembinaan karakter.`}
        </p>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari program kerja (e.g. Hari Guru, E-Sport, Ramadhan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Jenis Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
              Tipe:
            </span>
            {jenisList.map((jenis) => {
              const isSelected = selectedJenis === jenis;
              return (
                <button
                  key={jenis}
                  onClick={() => setSelectedJenis(jenis)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {jenis}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sekbid Filter Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">
            Bidang:
          </span>
          {sekbidList.map((sekbid) => {
            const isSelected = selectedSekbid === sekbid;
            return (
              <button
                key={sekbid}
                onClick={() => setSelectedSekbid(sekbid)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-700 text-white shadow-2xs font-bold"
                    : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {sekbid}
              </button>
            );
          })}
        </div>
      </div>

      {/* Proker Grid */}
      {filteredProker.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProker.map((item) => {
            const badge = getBadgeConfig(item.jenis);
            return (
              <div
                key={item.id}
                className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Bar: Sekbid & Type Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                      {item.sekbid}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badge.style}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                      {badge.label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.nama}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{data.header.periode || "Periode Aktif"}</span>
                  </span>
                  <span className="font-semibold text-slate-500">
                    {item.status || data.header.orgNamePrefix || "OSIS"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-2">
          <Calendar className="w-10 h-10 text-slate-400 mx-auto" />
          <h4 className="font-bold text-slate-800">
            Tidak Ada Program Kerja yang Cocok
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Tidak ditemukan kegiatan untuk filter yang dipilih. Coba reset filter atau gunakan kata kunci pencarian lain.
          </p>
          <button
            onClick={() => {
              setSelectedSekbid("Semua");
              setSelectedJenis("Semua");
              setSearchQuery("");
            }}
            className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Reset Filter
          </button>
        </div>
      )}
    </section>
  );
}
