"use client";

import { useState } from "react";
import { Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { WebsiteData, MisiItem } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function VisiMisiTab({ formData, setFormData }: Props) {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const visiMisi = formData.visiMisi;

  const handleChange = (field: keyof typeof visiMisi, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      visiMisi: {
        ...prev.visiMisi,
        [field]: value,
      },
    }));
  };

  const handlePillarChange = (idx: number, field: "title" | "desc", val: string) => {
    const updated = [...visiMisi.pillars];
    updated[idx] = { ...updated[idx], [field]: val };
    handleChange("pillars", updated);
  };

  const handleAddMisi = () => {
    if (!newTitle.trim() || !newDesc.trim()) return;
    const newItem: MisiItem = {
      id: "misi-" + Date.now(),
      title: newTitle.trim(),
      desc: newDesc.trim(),
    };
    setFormData((prev) => ({
      ...prev,
      visiMisi: {
        ...prev.visiMisi,
        missions: [...prev.visiMisi.missions, newItem],
      },
    }));
    setNewTitle("");
    setNewDesc("");
  };

  const handleDeleteMisi = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      visiMisi: {
        ...prev.visiMisi,
        missions: prev.visiMisi.missions.filter((m) => m.id !== id),
      },
    }));
  };

  const handleMoveMisi = (index: number, direction: "up" | "down") => {
    const list = [...visiMisi.missions];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;
    handleChange("missions", list);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Visi &amp; Misi Kepengurusan
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Tentukan kutipan visi organisasi, 3 nilai pilar utama, dan butir-butir misi kepengurusan.
        </p>
      </div>

      {/* Header Bagian Visi Misi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Pengantar Bagian
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Label Kecil
            </label>
            <input
              type="text"
              value={visiMisi.sectionLabel}
              onChange={(e) => handleChange("sectionLabel", e.target.value)}
              placeholder="e.g. Arah Gerak Organisasi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Seksi
            </label>
            <input
              type="text"
              value={visiMisi.sectionTitle}
              onChange={(e) => handleChange("sectionTitle", e.target.value)}
              placeholder="e.g. Visi & Misi Kepengurusan"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Deskripsi Pengantar
          </label>
          <input
            type="text"
            value={visiMisi.sectionDesc}
            onChange={(e) => handleChange("sectionDesc", e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>
      </div>

      {/* Visi Utama & 3 Pilar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Visi Utama &amp; Nilai Dasar
        </h3>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Badge Visi
          </label>
          <input
            type="text"
            value={visiMisi.visionBadge}
            onChange={(e) => handleChange("visionBadge", e.target.value)}
            placeholder="e.g. Visi Utama 2026/2027"
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Kutipan Visi Utama
          </label>
          <textarea
            rows={3}
            value={visiMisi.mainVision}
            onChange={(e) => handleChange("mainVision", e.target.value)}
            placeholder="“Menjadikan OSIS sebagai...”"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            3 Pilar Nilai (Pondasi Bawah Card Visi)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {visiMisi.pillars.map((pillar, pIdx) => (
              <div key={pIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-500">Pilar {pIdx + 1}</span>
                <input
                  type="text"
                  value={pillar.title}
                  onChange={(e) => handlePillarChange(pIdx, "title", e.target.value)}
                  placeholder="e.g. Religius"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-sm font-bold outline-none"
                />
                <input
                  type="text"
                  value={pillar.desc}
                  onChange={(e) => handlePillarChange(pIdx, "desc", e.target.value)}
                  placeholder="e.g. Berakhlak Mulia"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CRUD Butir-butir Misi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Daftar Misi Kepengurusan ({visiMisi.missions.length} Misi)
        </h3>

        <div className="space-y-3">
          {visiMisi.missions.map((misi, idx) => (
            <div
              key={misi.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
            >
              <div className="flex items-start gap-3 flex-1">
                <div className="w-7 h-7 rounded-lg bg-blue-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="space-y-1 flex-1">
                  <input
                    type="text"
                    value={misi.title}
                    onChange={(e) => {
                      const updated = [...visiMisi.missions];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      handleChange("missions", updated);
                    }}
                    className="w-full font-bold text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-600 outline-none pb-0.5"
                  />
                  <textarea
                    rows={2}
                    value={misi.desc}
                    onChange={(e) => {
                      const updated = [...visiMisi.missions];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      handleChange("missions", updated);
                    }}
                    className="w-full text-xs text-slate-600 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleMoveMisi(idx, "up")}
                  disabled={idx === 0}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  title="Pindah ke atas"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveMisi(idx, "down")}
                  disabled={idx === visiMisi.missions.length - 1}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  title="Pindah ke bawah"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteMisi(misi.id)}
                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                  title="Hapus Misi"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Tambah Misi */}
        <div className="pt-4 border-t border-slate-100 space-y-3 bg-slate-50 p-4 rounded-xl">
          <span className="text-xs font-bold text-slate-800">Tambah Misi Baru</span>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Judul Pilar Misi (e.g. Pembinaan Karakter & Keagamaan)"
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
          <textarea
            rows={2}
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Deskripsi langkah konkret misi..."
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
          <button
            type="button"
            onClick={handleAddMisi}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Misi</span>
          </button>
        </div>
      </div>
    </div>
  );
}

