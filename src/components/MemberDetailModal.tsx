"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  RotateCw,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Quote,
  CheckCircle2,
} from "lucide-react";

export interface ModalMemberData {
  nama: string;
  jabatan: string;
  kelas: string;
  bidang: string;
  fotoUrl?: string;
  motto?: string;
  instagram?: string;
  bio?: string;
}

interface Props {
  member: ModalMemberData | null;
  onClose: () => void;
}

function getInitials(name: string) {
  if (!name) return "OS";
  const clean = name.replace(/,\s*[A-Za-z.,]+/g, "").trim();
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length === 0) return "OS";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getRoleColor(jabatan: string = "") {
  const j = jabatan.toLowerCase();
  if (j.includes("pembina") || j.includes("ketua")) {
    return {
      gradient: "from-amber-500 via-amber-600 to-amber-700",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      ring: "ring-amber-400",
      accent: "text-amber-600",
      border: "border-amber-500/30",
    };
  }
  if (j.includes("sekretaris") || j.includes("bendahara")) {
    return {
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      badge: "bg-blue-50 text-blue-800 border-blue-200",
      ring: "ring-blue-400",
      accent: "text-blue-600",
      border: "border-blue-500/30",
    };
  }
  if (j.includes("koordinator")) {
    return {
      gradient: "from-indigo-600 via-indigo-700 to-purple-800",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      ring: "ring-indigo-400",
      accent: "text-indigo-600",
      border: "border-indigo-500/30",
    };
  }
  return {
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    ring: "ring-slate-300",
    accent: "text-slate-700",
    border: "border-slate-300",
  };
}

function getDefaultRoleDuties(jabatan: string = "") {
  const j = jabatan.toLowerCase();
  if (j.includes("pembina")) {
    return "Membimbing, mengawasi arah kebijakan kesiswaan madrasah, dan memastikan setiap program selaras dengan norma keagamaan serta visi sekolah.";
  }
  if (j.includes("ketua") && !j.includes("wakil")) {
    return "Memimpin dan mengkoordinasikan seluruh fungsionaris kabinet OSIS, menjadi representasi resmi aspirasi siswa, serta bertanggung jawab penuh atas realisasi proker.";
  }
  if (j.includes("wakil")) {
    return "Mendampingi Ketua OSIS, mengawasi kinerja seksi bidang secara harian, dan menggantikan peran ketua ketika berhalangan hadir.";
  }
  if (j.includes("sekretaris")) {
    return "Mengelola tata persuratan, perizinan proposal, inventarisasi arsip dokumen, serta penyusunan notulensi dan evaluasi rapat kepengurusan.";
  }
  if (j.includes("bendahara")) {
    return "Mengelola arus kas keuangan organisasi, pembukuan transparansi dana kegiatan, serta penyusunan laporan pertanggungjawaban anggaran kas.";
  }
  if (j.includes("koordinator")) {
    return "Mengomandoi perencanaan, penyusunan timeline, dan pembagian tugas operasional kegiatan di seksi bidang terkait.";
  }
  return "Menjadi garda fungsionaris pelaksana lapangan, mengeksekusi agenda kerja secara aktif, dan menyerap aspirasi siswa di lingkungan madrasah.";
}

// ─── Inner Card Content ──────────────────────────────────────────────────────
// Separated into its own component so that when `member` changes, the `key`
// on this component changes too, which remounts it and naturally resets
// `isFlipped` to false — without needing setState inside useEffect.
interface CardContentProps {
  member: ModalMemberData;
  onClose: () => void;
}

function CardContent({ member, onClose }: CardContentProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const roleStyle = getRoleColor(member.jabatan);
  const defaultDuty = getDefaultRoleDuties(member.jabatan);
  const initials = getInitials(member.nama);

  return (
    <div className="relative z-10 w-full max-w-sm sm:max-w-md perspective-1000">
      {/* Tombol Close & Flip Bar atas */}
      <div className="flex items-center justify-between pb-3 px-1 text-white">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-blue-200 border border-white/15">
          <Sparkles className="w-3 h-3 text-blue-300" />
          <span>Kartu Identitas Fungsionaris</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFlipped(!isFlipped)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-xs font-bold transition-all text-white border border-white/20 active:scale-95 cursor-pointer shadow-sm"
            title="Putar Kartu (Flip)"
          >
            <RotateCw className="w-3.5 h-3.5 text-blue-300" />
            <span>{isFlipped ? "Sisi Depan" : "Putar Kartu"}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/15 hover:bg-rose-600 backdrop-blur-md text-white transition-all border border-white/20 cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3D Card Flipping Frame */}
      <div
        className={`w-full transform-style-3d transition-transform duration-700 ease-out animate-card-flip ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ minHeight: "490px" }}
      >
        {/* ================= SISI DEPAN (FRONT SIDE) ================= */}
        <div
          className={`w-full rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col justify-between backface-hidden ${
            isFlipped ? "pointer-events-none" : ""
          }`}
        >
          {/* Top Lanyard / Header Stripe */}
          <div
            className={`p-4 bg-gradient-to-r ${roleStyle.gradient} text-white relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-blue-100">
                    OSIS MAN 19 JAKARTA
                  </span>
                  <span className="block text-[9px] font-medium text-white/80">
                    Masa Bakti 2026/2027
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Aktif
              </span>
            </div>
          </div>

          {/* Body Card Depan */}
          <div className="p-6 text-center flex-1 flex flex-col items-center justify-between space-y-4">
            {/* Foto Anggota */}
            <div className="relative group">
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-b ${roleStyle.gradient} shadow-lg ring-4 ${roleStyle.ring} ring-offset-2 overflow-hidden flex items-center justify-center`}
              >
                {member.fotoUrl ? (
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
                    <Image
                      src={member.fotoUrl}
                      alt={member.nama}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized={member.fotoUrl.startsWith("http")}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white flex flex-col items-center justify-center shadow-inner">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-wider">
                      {initials}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-300 mt-1 uppercase tracking-widest">
                      MAN 19
                    </span>
                  </div>
                )}
              </div>

              {/* Verified Mini Badge */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600 text-white border-2 border-white flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Identitas Nama & Jabatan */}
            <div className="space-y-1.5 w-full">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                {member.nama}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${roleStyle.badge}`}
                >
                  {member.jabatan}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium pt-1">
                {member.kelas} • {member.bidang || "Pengurus OSIS"}
              </p>
            </div>

            {/* Motto Singkat */}
            <div className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-100 text-left relative">
              <Quote className="w-4 h-4 text-slate-300 absolute top-2 right-2" />
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                Motto / Nilai Gerak
              </span>
              <p className="text-xs text-slate-700 italic leading-snug">
                &ldquo;
                {member.motto ||
                  "Mendedikasikan energi terbaik untuk kemajuan organisasi dan madrasah."}
                &rdquo;
              </p>
            </div>

            {/* Tombol Aksi Balik Kartu */}
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
            >
              <span>Lihat Detail Tugas &amp; Kontak</span>
              <RotateCw className="w-3.5 h-3.5 text-blue-300 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>

          {/* Bottom ID Strip */}
          <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>ID: OSIS19-{initials}</span>
            <span className="font-semibold text-slate-500">RESMI DILANTIK</span>
          </div>
        </div>

        {/* ================= SISI BELAKANG (BACK SIDE) ================= */}
        <div
          className={`w-full rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between rotate-y-180 backface-hidden absolute inset-0 ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
        >
          {/* Top Bar Sisi Belakang */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-extrabold tracking-wider uppercase text-slate-200">
                Uraian Peran &amp; Tugas
              </span>
            </div>
            <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded-md border border-blue-800/60">
              {member.bidang || "BEST OSIS"}
            </span>
          </div>

          {/* Content Detail Sisi Belakang */}
          <div className="p-6 space-y-4 flex-1 overflow-y-auto max-h-[380px] scrollbar-none text-left">
            {/* Ringkasan Anggota */}
            <div>
              <h4 className="font-extrabold text-base text-white">
                {member.nama}
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span className="text-blue-300 font-semibold">
                  {member.jabatan}
                </span>
                <span>•</span>
                <span>{member.kelas}</span>
              </div>
            </div>

            {/* Uraian Tugas Pokok */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Amanah &amp; Tanggung Jawab Jabatan</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {member.bio || defaultDuty}
              </p>
            </div>

            {/* Status Bidang */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">
                  Status Fungsionaris
                </span>
                <span className="font-bold text-emerald-400">
                  Pengurus Aktif
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">
                  Tingkat Kelas
                </span>
                <span className="font-bold text-slate-200">{member.kelas}</span>
              </div>
            </div>

            {/* Media Sosial / Instagram */}
            {member.instagram && (
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-pink-600/30 text-pink-400 flex items-center justify-center border border-pink-500/30 font-black text-[10px]">
                    IG
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold">
                      Instagram Resmi
                    </span>
                    <span className="block text-xs font-bold text-white">
                      @{member.instagram.replace(/^@/, "")}
                    </span>
                  </div>
                </div>
                <a
                  href={`https://instagram.com/${member.instagram.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold text-blue-300 transition-colors"
                >
                  Buka
                </a>
              </div>
            )}
          </div>

          {/* Bottom Bar Belakang: Tombol Balik ke Depan */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="w-full py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Balik ke Sisi Depan Kartu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Outer Modal Wrapper ─────────────────────────────────────────────────────
export default function MemberDetailModal({ member, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  // Use member name as key so CardContent remounts when a different member is
  // opened — this naturally resets isFlipped to false without setState-in-effect.
  const cardKey = member.nama + member.jabatan;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <CardContent key={cardKey} member={member} onClose={onClose} />
    </div>
  );
}
