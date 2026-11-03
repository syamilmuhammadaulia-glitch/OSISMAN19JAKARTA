"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Users, Search, Award, Shield, Sparkles } from "lucide-react";
import { useContent } from "@/context/ContentContext";
import MemberDetailModal, { ModalMemberData } from "@/components/MemberDetailModal";

// Helper to generate initials from full name
function getInitials(name: string) {
  if (!name) return "OS";
  const clean = name.replace(/,\s*[A-Za-z.,]+/g, "").trim();
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length === 0) return "OS";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Helper to determine role styling
function getRoleBadge(jabatan: string = "") {
  const j = jabatan.toLowerCase();
  if (j.includes("pembina") || j.includes("ketua")) {
    return {
      bg: "bg-amber-50 text-amber-800 border-amber-200",
      avatarBg: "from-amber-500 to-amber-700 text-white",
      ring: "ring-amber-200",
    };
  }
  if (j.includes("sekretaris") || j.includes("bendahara")) {
    return {
      bg: "bg-blue-50 text-blue-800 border-blue-200",
      avatarBg: "from-blue-600 to-blue-800 text-white",
      ring: "ring-blue-200",
    };
  }
  if (j.includes("koordinator")) {
    return {
      bg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      avatarBg: "from-indigo-600 to-blue-700 text-white",
      ring: "ring-indigo-200",
    };
  }
  return {
    bg: "bg-slate-100 text-slate-700 border-slate-200",
    avatarBg: "from-slate-600 to-slate-800 text-white",
    ring: "ring-slate-200",
  };
}

export default function StrukturPengurus() {
  const { data } = useContent();
  const struktur = data.struktur;
  const pengurusIntiList = useMemo(() => struktur.pengurusInti || [], [struktur.pengurusInti]);
  const seksiBidangList = useMemo(() => struktur.seksiBidang || [], [struktur.seksiBidang]);

  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMember, setSelectedMember] = useState<ModalMemberData | null>(null);

  const categories = useMemo(() => {
    return [
      "Semua",
      "Pengurus Inti",
      ...seksiBidangList.map((s) => s.namaSekbid),
    ];
  }, [seksiBidangList]);

  // Filter logic
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const matchQuery = (item: { nama?: string; jabatan?: string; kelas?: string }) => {
      if (!q) return true;
      const n = (item.nama || "").toLowerCase();
      const j = (item.jabatan || "").toLowerCase();
      const k = (item.kelas || "").toLowerCase();
      return n.includes(q) || j.includes(q) || k.includes(q);
    };

    const showInti =
      (activeTab === "Semua" || activeTab === "Pengurus Inti") &&
      pengurusIntiList.some(matchQuery);

    const filteredSekbid = seksiBidangList
      .filter((s) => activeTab === "Semua" || activeTab === s.namaSekbid)
      .map((s) => ({
        ...s,
        anggota: (s.anggota || []).filter(matchQuery),
      }))
      .filter((s) => s.anggota.length > 0);

    return {
      showInti,
      intiMembers: pengurusIntiList.filter(matchQuery),
      sekbidList: filteredSekbid,
    };
  }, [activeTab, searchQuery, pengurusIntiList, seksiBidangList]);

  const totalPengurus =
    pengurusIntiList.length +
    seksiBidangList.reduce((acc, s) => acc + (s.anggota?.length || 0), 0);

  return (
    <section id="struktur" className="space-y-10 scroll-mt-24">
      {/* Popup Modal Detail Anggota (3D Card Flip Animation) */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>{struktur.sectionLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {struktur.sectionTitle}
          </h2>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-sm text-slate-500 max-w-md">
            {struktur.sectionDesc || `Sebanyak ${totalPengurus} pengurus terpilih yang mengemban amanah di bawah bimbingan pembina.`}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Klik pada kartu pengurus untuk membuka kartu profil</span>
          </span>
        </div>
      </div>

      {/* Control Bar: Filter Tabs & Search */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama pengurus, jabatan, atau kelas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-2xs"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-blue-700 text-white shadow-sm shadow-blue-700/25 ring-2 ring-blue-700/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Rendering */}
      <div className="space-y-12">
        {/* 1. Pengurus Inti Section */}
        {filteredData.showInti && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pengurus Inti &amp; Pembina
                </h3>
                <p className="text-xs text-slate-500">
                  Pimpinan komando, koordinator umum, dan tata kelola organisasi
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredData.intiMembers.map((member) => {
                const styling = getRoleBadge(member.jabatan);
                return (
                  <div
                    key={member.id || member.nama}
                    onClick={() =>
                      setSelectedMember({
                        nama: member.nama,
                        jabatan: member.jabatan,
                        kelas: member.kelas,
                        bidang: "Pengurus Inti",
                        fotoUrl: member.fotoUrl,
                        motto: member.motto,
                        instagram: member.instagram,
                        bio: member.bio,
                      })
                    }
                    className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between group cursor-pointer relative"
                    title="Klik untuk detail kartu profil"
                  >
                    <div className="flex flex-col items-center w-full">
                      {/* Avatar / Foto */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${styling.avatarBg} flex items-center justify-center font-extrabold text-base tracking-wider shadow-sm mb-3.5 ring-4 ${styling.ring} group-hover:scale-105 transition-transform overflow-hidden relative`}
                      >
                        {member.fotoUrl ? (
                          <Image
                            src={member.fotoUrl}
                            alt={member.nama}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            unoptimized={member.fotoUrl.startsWith("http")}
                          />
                        ) : (
                          getInitials(member.nama)
                        )}
                      </div>

                      <h4 className="font-bold text-sm text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {member.nama}
                      </h4>
                      <span className="text-xs text-slate-500 mt-0.5">
                        {member.kelas}
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 w-full flex flex-col items-center gap-1.5">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border ${styling.bg}`}
                      >
                        {member.jabatan}
                      </span>
                      <span className="text-[10px] text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Buka Kartu Detail &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Seksi Bidang Sections */}
        {filteredData.sekbidList.map((sekbid) => (
          <div key={sekbid.id || sekbid.namaSekbid} className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Seksi Bidang: {sekbid.namaSekbid}
                  </h3>
                  <p className="text-xs text-slate-500">{sekbid.deskripsi}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                {sekbid.anggota.length} Anggota
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {sekbid.anggota.map((anggota) => {
                const styling = getRoleBadge(anggota.jabatan);
                return (
                  <div
                    key={anggota.id || anggota.nama}
                    onClick={() =>
                      setSelectedMember({
                        nama: anggota.nama,
                        jabatan: anggota.jabatan,
                        kelas: anggota.kelas,
                        bidang: `Seksi Bidang ${sekbid.namaSekbid}`,
                        fotoUrl: anggota.fotoUrl,
                        motto: anggota.motto,
                        instagram: anggota.instagram,
                        bio: anggota.bio,
                      })
                    }
                    className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between group cursor-pointer relative"
                    title="Klik untuk detail kartu profil"
                  >
                    <div className="flex flex-col items-center w-full">
                      <div
                        className={`w-13 h-13 rounded-xl bg-gradient-to-br ${styling.avatarBg} flex items-center justify-center font-bold text-xs tracking-wider shadow-2xs mb-2.5 ring-2 ${styling.ring} group-hover:scale-105 transition-transform overflow-hidden relative`}
                      >
                        {anggota.fotoUrl ? (
                          <Image
                            src={anggota.fotoUrl}
                            alt={anggota.nama}
                            width={52}
                            height={52}
                            className="w-full h-full object-cover"
                            unoptimized={anggota.fotoUrl.startsWith("http")}
                          />
                        ) : (
                          getInitials(anggota.nama)
                        )}
                      </div>
                      <h4 className="font-bold text-xs text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                        {anggota.nama}
                      </h4>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {anggota.kelas}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 w-full flex flex-col items-center gap-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${styling.bg}`}
                      >
                        {anggota.jabatan}
                      </span>
                      <span className="text-[9px] text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Detail Kartu &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Empty Search Fallback */}
        {!filteredData.showInti && filteredData.sekbidList.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-2">
            <Users className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-800">
              Pengurus Tidak Ditemukan
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tidak ada hasil yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;. Silakan coba dengan nama atau kelas lain.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
