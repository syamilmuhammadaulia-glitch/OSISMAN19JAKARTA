"use client";

import { useState } from "react";
import { Plus, Trash2, Shield, Award } from "lucide-react";
import { WebsiteData, PengurusIntiItem, SekbidItem, AnggotaSekbid } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function StrukturTab({ formData, setFormData }: Props) {
  const struktur = formData.struktur;

  // State untuk form Pengurus Inti
  const [newIntiNama, setNewIntiNama] = useState("");
  const [newIntiJabatan, setNewIntiJabatan] = useState("Ketua OSIS");
  const [newIntiKelas, setNewIntiKelas] = useState("");

  // State untuk form Sekbid
  const [newSekbidNama, setNewSekbidNama] = useState("");
  const [newSekbidDesc, setNewSekbidDesc] = useState("");
  const [activeSekbidId, setActiveSekbidId] = useState<string>(
    struktur.seksiBidang[0]?.id || ""
  );

  // State untuk form Anggota Sekbid
  const [newAnggotaNama, setNewAnggotaNama] = useState("");
  const [newAnggotaJabatan, setNewAnggotaJabatan] = useState("Anggota");
  const [newAnggotaKelas, setNewAnggotaKelas] = useState("");

  // Update Section Header
  const handleHeaderChange = (field: "sectionLabel" | "sectionTitle" | "sectionDesc", val: string) => {
    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        [field]: val,
      },
    }));
  };

  // --- HANDLERS PENGURUS INTI ---
  const handleAddInti = () => {
    if (!newIntiNama.trim() || !newIntiJabatan.trim()) return;
    const newItem: PengurusIntiItem = {
      id: "pi-" + Date.now(),
      nama: newIntiNama.trim(),
      jabatan: newIntiJabatan.trim(),
      kelas: newIntiKelas.trim() || "-",
      bidang: "Pengurus Inti",
      urutan: struktur.pengurusInti.length + 1,
    };
    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        pengurusInti: [...prev.struktur.pengurusInti, newItem],
      },
    }));
    setNewIntiNama("");
    setNewIntiKelas("");
  };

  const handleDeleteInti = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        pengurusInti: prev.struktur.pengurusInti.filter((p) => p.id !== id),
      },
    }));
  };

  // --- HANDLERS SEKBID ---
  const handleAddSekbid = () => {
    if (!newSekbidNama.trim()) return;
    const newSekbid: SekbidItem = {
      id: "sek-" + Date.now(),
      namaSekbid: newSekbidNama.trim(),
      deskripsi: newSekbidDesc.trim() || "Seksi bidang kepengurusan OSIS.",
      anggota: [],
    };
    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        seksiBidang: [...prev.struktur.seksiBidang, newSekbid],
      },
    }));
    setActiveSekbidId(newSekbid.id);
    setNewSekbidNama("");
    setNewSekbidDesc("");
  };

  const handleDeleteSekbid = (id: string) => {
    if (!confirm("Yakin ingin menghapus seksi bidang ini beserta seluruh anggotanya?")) return;
    setFormData((prev) => {
      const remaining = prev.struktur.seksiBidang.filter((s) => s.id !== id);
      if (activeSekbidId === id && remaining.length > 0) {
        setActiveSekbidId(remaining[0].id);
      }
      return {
        ...prev,
        struktur: {
          ...prev.struktur,
          seksiBidang: remaining,
        },
      };
    });
  };

  // --- HANDLERS ANGGOTA SEKBID ---
  const activeSekbid = struktur.seksiBidang.find((s) => s.id === activeSekbidId);

  const handleAddAnggota = () => {
    if (!activeSekbidId || !newAnggotaNama.trim()) return;
    const newAnggota: AnggotaSekbid = {
      id: "a-" + Date.now(),
      nama: newAnggotaNama.trim(),
      jabatan: newAnggotaJabatan.trim(),
      kelas: newAnggotaKelas.trim() || "-",
    };

    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        seksiBidang: prev.struktur.seksiBidang.map((s) => {
          if (s.id === activeSekbidId) {
            return {
              ...s,
              anggota: [...s.anggota, newAnggota],
            };
          }
          return s;
        }),
      },
    }));

    setNewAnggotaNama("");
    setNewAnggotaKelas("");
  };

  const handleDeleteAnggota = (anggotaId: string) => {
    setFormData((prev) => ({
      ...prev,
      struktur: {
        ...prev.struktur,
        seksiBidang: prev.struktur.seksiBidang.map((s) => {
          if (s.id === activeSekbidId) {
            return {
              ...s,
              anggota: s.anggota.filter((a) => a.id !== anggotaId),
            };
          }
          return s;
        }),
      },
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Struktur &amp; Susunan Pengurus
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Kelola nama-nama Pengurus Inti (Ketua, Wakil, Sekretaris, Bendahara) dan Seksi Bidang beserta seluruh anggota.
        </p>
      </div>

      {/* Header Bagian Struktur */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Teks Pengantar Halaman
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Label Bagian
            </label>
            <input
              type="text"
              value={struktur.sectionLabel}
              onChange={(e) => handleHeaderChange("sectionLabel", e.target.value)}
              placeholder="e.g. Susunan Organisasi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Seksi
            </label>
            <input
              type="text"
              value={struktur.sectionTitle}
              onChange={(e) => handleHeaderChange("sectionTitle", e.target.value)}
              placeholder="e.g. Struktur Kepengurusan OSIS"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>
      </div>

      {/* 1. Pengurus Inti & Pembina */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Pengurus Inti &amp; Pembina ({struktur.pengurusInti.length} Orang)
            </h3>
          </div>
        </div>

        <div className="space-y-2">
          {struktur.pengurusInti.map((p, idx) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-600 flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    {p.nama}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-semibold text-[11px]">
                      {p.jabatan}
                    </span>
                    <span>• {p.kelas}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleDeleteInti(p.id)}
                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tambah Pengurus Inti */}
        <div className="pt-3 border-t border-slate-100 p-4 rounded-xl bg-slate-50 space-y-3">
          <span className="text-xs font-bold text-slate-800 block">
            Tambah Pengurus Inti Baru
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              value={newIntiNama}
              onChange={(e) => setNewIntiNama(e.target.value)}
              placeholder="Nama Lengkap"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <input
              type="text"
              value={newIntiJabatan}
              onChange={(e) => setNewIntiJabatan(e.target.value)}
              placeholder="Jabatan (e.g. Ketua OSIS)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <input
              type="text"
              value={newIntiKelas}
              onChange={(e) => setNewIntiKelas(e.target.value)}
              placeholder="Kelas (e.g. XI-A / Guru)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <button
            type="button"
            onClick={handleAddInti}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah ke Pengurus Inti</span>
          </button>
        </div>
      </div>

      {/* 2. Seksi Bidang (Sekbid) & Anggotanya */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-700" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Seksi Bidang &amp; Anggota
            </h3>
          </div>
        </div>

        {/* Tab Pilih Sekbid Aktif */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {struktur.seksiBidang.map((s) => {
            const isActive = s.id === activeSekbidId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSekbidId(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {s.namaSekbid} ({s.anggota.length})
              </button>
            );
          })}
        </div>

        {/* Detail Sekbid Aktif */}
        {activeSekbid && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div className="space-y-1 flex-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase">
                  Nama Seksi Bidang
                </label>
                <input
                  type="text"
                  value={activeSekbid.namaSekbid}
                  onChange={(e) => {
                    const updated = struktur.seksiBidang.map((s) =>
                      s.id === activeSekbid.id ? { ...s, namaSekbid: e.target.value } : s
                    );
                    setFormData((prev) => ({
                      ...prev,
                      struktur: { ...prev.struktur, seksiBidang: updated },
                    }));
                  }}
                  className="w-full text-base font-extrabold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200"
                />
              </div>

              <button
                type="button"
                onClick={() => handleDeleteSekbid(activeSekbid.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 self-start sm:self-center"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus Sekbid Ini</span>
              </button>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                Deskripsi / Tugas Sekbid
              </label>
              <textarea
                rows={2}
                value={activeSekbid.deskripsi}
                onChange={(e) => {
                  const updated = struktur.seksiBidang.map((s) =>
                    s.id === activeSekbid.id ? { ...s, deskripsi: e.target.value } : s
                  );
                  setFormData((prev) => ({
                    ...prev,
                    struktur: { ...prev.struktur, seksiBidang: updated },
                  }));
                }}
                className="w-full text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 outline-none"
              />
            </div>

            {/* List Anggota Sekbid */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800 block">
                Daftar Anggota di {activeSekbid.namaSekbid} ({activeSekbid.anggota.length} orang)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSekbid.anggota.map((ang) => (
                  <div
                    key={ang.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 block">{ang.nama}</span>
                      <span className="text-slate-500">
                        {ang.jabatan} • {ang.kelas}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteAnggota(ang.id)}
                      className="p-1 rounded-md text-rose-600 hover:bg-rose-50"
                      title="Hapus Anggota"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Tambah Anggota */}
              <div className="p-3 bg-white rounded-xl border border-dashed border-slate-300 mt-2 space-y-2">
                <span className="text-xs font-semibold text-slate-600 block">
                  + Tambah Anggota ke Sekbid Ini
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newAnggotaNama}
                    onChange={(e) => setNewAnggotaNama(e.target.value)}
                    placeholder="Nama Anggota"
                    className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 outline-none"
                  />
                  <select
                    value={newAnggotaJabatan}
                    onChange={(e) => setNewAnggotaJabatan(e.target.value)}
                    className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 outline-none bg-white"
                  >
                    <option value="Koordinator">Koordinator</option>
                    <option value="Anggota">Anggota</option>
                  </select>
                  <input
                    type="text"
                    value={newAnggotaKelas}
                    onChange={(e) => setNewAnggotaKelas(e.target.value)}
                    placeholder="Kelas (e.g. XI-F)"
                    className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddAnggota}
                  className="px-3 py-1.5 bg-blue-700 text-white rounded-lg text-xs font-bold hover:bg-blue-800"
                >
                  Tambah Anggota
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Buat Sekbid Baru */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
          <span className="text-xs font-bold text-slate-800 block">
            + Tambah Seksi Bidang (Sekbid) Baru
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={newSekbidNama}
              onChange={(e) => setNewSekbidNama(e.target.value)}
              placeholder="Nama Sekbid (e.g. Humas & Komunikasi)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
            <input
              type="text"
              value={newSekbidDesc}
              onChange={(e) => setNewSekbidDesc(e.target.value)}
              placeholder="Tugas & Deskripsi Singkat"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleAddSekbid}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Sekbid Baru</span>
          </button>
        </div>
      </div>
    </div>
  );
}
