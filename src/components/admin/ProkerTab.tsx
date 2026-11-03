"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { WebsiteData, ProkerItem } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function ProkerTab({ formData, setFormData }: Props) {
  const programKerja = formData.programKerja;
  const groups = programKerja.data || [];

  const [selectedSekbid, setSelectedSekbid] = useState<string>(
    groups[0]?.sekbid || "Kewarganegaraan"
  );

  // State form tambah proker
  const [newNama, setNewNama] = useState("");
  const [newJenis, setNewJenis] = useState<"Eventual" | "Rutinitas">("Eventual");
  const [newDeskripsi, setNewDeskripsi] = useState("");
  const [newStatus, setNewStatus] = useState<"Terlaksana" | "Berjalan" | "Terencana">("Terencana");

  const handleHeaderChange = (field: "sectionLabel" | "sectionTitle" | "sectionDesc", val: string) => {
    setFormData((prev) => ({
      ...prev,
      programKerja: {
        ...prev.programKerja,
        [field]: val,
      },
    }));
  };

  const handleAddProker = () => {
    if (!newNama.trim() || !newDeskripsi.trim()) return;

    const newProker: ProkerItem = {
      id: "proker-" + Date.now(),
      nama: newNama.trim(),
      jenis: newJenis,
      deskripsi: newDeskripsi.trim(),
      status: newStatus,
    };

    setFormData((prev) => {
      let groupExists = false;
      const updatedGroups = prev.programKerja.data.map((g) => {
        if (g.sekbid === selectedSekbid) {
          groupExists = true;
          return {
            ...g,
            proker: [...g.proker, newProker],
          };
        }
        return g;
      });

      if (!groupExists) {
        updatedGroups.push({
          id: "group-" + Date.now(),
          sekbid: selectedSekbid,
          proker: [newProker],
        });
      }

      return {
        ...prev,
        programKerja: {
          ...prev.programKerja,
          data: updatedGroups,
        },
      };
    });

    setNewNama("");
    setNewDeskripsi("");
  };

  const handleDeleteProker = (sekbidName: string, prokerId: string) => {
    setFormData((prev) => ({
      ...prev,
      programKerja: {
        ...prev.programKerja,
        data: prev.programKerja.data.map((g) => {
          if (g.sekbid === sekbidName) {
            return {
              ...g,
              proker: g.proker.filter((p) => p.id !== prokerId),
            };
          }
          return g;
        }),
      },
    }));
  };

  const activeGroup = groups.find((g) => g.sekbid === selectedSekbid);
  const totalProker = groups.reduce((acc, g) => acc + (g.proker?.length || 0), 0);

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Program Kerja OSIS ({totalProker} Program)
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Kelola daftar kegiatan dan program kerja yang dikelompokkan berdasarkan Seksi Bidang.
        </p>
      </div>

      {/* Header Pengantar Proker */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Teks Pengantar Bagian
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Label Kecil
            </label>
            <input
              type="text"
              value={programKerja.sectionLabel}
              onChange={(e) => handleHeaderChange("sectionLabel", e.target.value)}
              placeholder="e.g. Agenda Aksi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Seksi
            </label>
            <input
              type="text"
              value={programKerja.sectionTitle}
              onChange={(e) => handleHeaderChange("sectionTitle", e.target.value)}
              placeholder="e.g. Program Kerja Kepengurusan"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>
      </div>

      {/* Selector Sekbid & List Proker */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
            Daftar Kegiatan Per Bidang
          </h3>
          <span className="text-xs font-bold text-slate-500">
            Bidang Terpilih: {selectedSekbid}
          </span>
        </div>

        {/* Tab Pilih Sekbid */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {groups.map((g) => {
            const isSelected = g.sekbid === selectedSekbid;
            return (
              <button
                key={g.id || g.sekbid}
                type="button"
                onClick={() => setSelectedSekbid(g.sekbid)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {g.sekbid} ({g.proker.length})
              </button>
            );
          })}
        </div>

        {/* List Proker dalam Sekbid Aktif */}
        {activeGroup && (
          <div className="space-y-3">
            {activeGroup.proker.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                Belum ada program kerja untuk bidang ini. Silakan tambahkan di bawah.
              </div>
            ) : (
              activeGroup.proker.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start justify-between gap-3"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900">
                        {item.nama}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          item.jenis === "Rutinitas"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {item.jenis}
                      </span>
                      {item.status && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteProker(activeGroup.sekbid, item.id)}
                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 self-end sm:self-center"
                    title="Hapus Program Kerja"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Form Tambah Proker ke Sekbid Aktif */}
        <div className="pt-4 border-t border-slate-100 p-4 rounded-xl bg-slate-50 space-y-3">
          <span className="text-xs font-bold text-slate-800 block">
            + Tambah Program Kerja Baru ke &quot;{selectedSekbid}&quot;
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              value={newNama}
              onChange={(e) => setNewNama(e.target.value)}
              placeholder="Nama Program Kerja (e.g. Hari Guru)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <select
              value={newJenis}
              onChange={(e) => setNewJenis(e.target.value as "Eventual" | "Rutinitas")}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            >
              <option value="Eventual">Eventual (Acara Tertentu)</option>
              <option value="Rutinitas">Rutinitas (Harian / Mingguan)</option>
            </select>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value as "Terlaksana" | "Berjalan" | "Terencana")}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            >
              <option value="Terencana">Terencana</option>
              <option value="Berjalan">Berjalan</option>
              <option value="Terlaksana">Terlaksana</option>
            </select>
          </div>

          <textarea
            rows={2}
            value={newDeskripsi}
            onChange={(e) => setNewDeskripsi(e.target.value)}
            placeholder="Tujuan & deskripsi singkat kegiatan..."
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />

          <button
            type="button"
            onClick={handleAddProker}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Simpan Program Kerja</span>
          </button>
        </div>
      </div>
    </div>
  );
}
