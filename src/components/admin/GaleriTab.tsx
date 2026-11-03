"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { WebsiteData, GaleriCategoryItem, GaleriDriveItem } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function GaleriTab({ formData, setFormData }: Props) {
  const galeri = formData.galeri;

  // State tambah kategori album
  const [newCatTitle, setNewCatTitle] = useState("");
  const [newCatDesc, setNewCatDesc] = useState("");
  const [newCatTags, setNewCatTags] = useState("");
  const [newCatCount, setNewCatCount] = useState("Tahunan");
  const [newCatIcon, setNewCatIcon] = useState<"calendar" | "layers" | "film" | "camera">("camera");

  // State tambah card folder drive
  const [newDriveTitle, setNewDriveTitle] = useState("");
  const [newDriveDate, setNewDriveDate] = useState(new Date().toISOString().split("T")[0]);
  const [newDriveLink, setNewDriveLink] = useState("https://drive.google.com");
  const [newDriveCategory, setNewDriveCategory] = useState("Dokumentasi");

  const handleChange = (field: keyof typeof galeri, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      galeri: {
        ...prev.galeri,
        [field]: value,
      },
    }));
  };

  const handleAddCategory = () => {
    if (!newCatTitle.trim() || !newCatDesc.trim()) return;
    const tagsArr = newCatTags
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter(Boolean);

    const newItem: GaleriCategoryItem = {
      id: "gk-" + Date.now(),
      title: newCatTitle.trim(),
      desc: newCatDesc.trim(),
      tags: tagsArr.length > 0 ? tagsArr : ["Dokumentasi"],
      count: newCatCount.trim() || "Arsip Rutin",
      iconType: newCatIcon,
    };

    setFormData((prev) => ({
      ...prev,
      galeri: {
        ...prev.galeri,
        categories: [...prev.galeri.categories, newItem],
      },
    }));

    setNewCatTitle("");
    setNewCatDesc("");
    setNewCatTags("");
  };

  const handleDeleteCategory = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      galeri: {
        ...prev.galeri,
        categories: prev.galeri.categories.filter((c) => c.id !== id),
      },
    }));
  };

  const handleAddDriveCard = () => {
    if (!newDriveTitle.trim() || !newDriveLink.trim()) return;
    const newItem: GaleriDriveItem = {
      id: "dc-" + Date.now(),
      title: newDriveTitle.trim(),
      date: newDriveDate,
      driveLink: newDriveLink.trim(),
      category: newDriveCategory.trim(),
    };

    setFormData((prev) => ({
      ...prev,
      galeri: {
        ...prev.galeri,
        driveCards: [...prev.galeri.driveCards, newItem],
      },
    }));

    setNewDriveTitle("");
  };

  const handleDeleteDriveCard = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      galeri: {
        ...prev.galeri,
        driveCards: prev.galeri.driveCards.filter((d) => d.id !== id),
      },
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Galeri &amp; Arsip Google Drive
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Atur album kategori kegiatan, tautan Google Drive resmi organisasi, dan daftar folder dokumentasi per event.
        </p>
      </div>

      {/* Header Pengantar Galeri */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Pengantar Bagian Galeri
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Label Kecil
            </label>
            <input
              type="text"
              value={galeri.sectionLabel}
              onChange={(e) => handleChange("sectionLabel", e.target.value)}
              placeholder="e.g. Dokumentasi & Publikasi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Seksi
            </label>
            <input
              type="text"
              value={galeri.sectionTitle}
              onChange={(e) => handleChange("sectionTitle", e.target.value)}
              placeholder="e.g. Galeri & Arsip Kegiatan"
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
            value={galeri.sectionDesc}
            onChange={(e) => handleChange("sectionDesc", e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>
      </div>

      {/* Showcase Banner Google Drive Utama */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Banner Google Drive Resmi OSIS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Badge Banner
            </label>
            <input
              type="text"
              value={galeri.driveBadge}
              onChange={(e) => handleChange("driveBadge", e.target.value)}
              placeholder="e.g. Pusat Penyimpanan Aset Digital"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Banner
            </label>
            <input
              type="text"
              value={galeri.driveTitle}
              onChange={(e) => handleChange("driveTitle", e.target.value)}
              placeholder="e.g. Akses Folder Dokumentasi Google Drive Resmi"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Deskripsi Banner
          </label>
          <textarea
            rows={2}
            value={galeri.driveDesc}
            onChange={(e) => handleChange("driveDesc", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Teks Tombol
            </label>
            <input
              type="text"
              value={galeri.driveButtonText}
              onChange={(e) => handleChange("driveButtonText", e.target.value)}
              placeholder="e.g. Buka Google Drive OSIS"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              URL Link Folder Google Drive
            </label>
            <input
              type="text"
              value={galeri.driveButtonHref}
              onChange={(e) => handleChange("driveButtonHref", e.target.value)}
              placeholder="https://drive.google.com/drive/folders/..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      {/* CRUD Kategori Album */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Kategori Dokumentasi ({galeri.categories.length} Kategori)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {galeri.categories.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{c.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(c.id)}
                  className="p-1 rounded-md text-rose-600 hover:bg-rose-50"
                  title="Hapus Kategori"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <span className="font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {c.count}
                </span>
                <span className="truncate max-w-[150px]">
                  {c.tags.map((t) => `#${t}`).join(" ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tambah Kategori */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 pt-3">
          <span className="text-xs font-bold text-slate-800 block">
            + Tambah Kategori Dokumentasi
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              value={newCatTitle}
              onChange={(e) => setNewCatTitle(e.target.value)}
              placeholder="Judul Kategori"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
            <input
              type="text"
              value={newCatCount}
              onChange={(e) => setNewCatCount(e.target.value)}
              placeholder="Periode (e.g. Arsip Rutin, Tahunan)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
            <select
              value={newCatIcon}
              onChange={(e) => setNewCatIcon(e.target.value as "calendar" | "layers" | "film" | "camera")}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            >
              <option value="camera">Ikon Kamera</option>
              <option value="film">Ikon Film / Video</option>
              <option value="calendar">Ikon Kalender</option>
              <option value="layers">Ikon Layers</option>
            </select>
          </div>

          <input
            type="text"
            value={newCatDesc}
            onChange={(e) => setNewCatDesc(e.target.value)}
            placeholder="Deskripsi kegiatan di dalam kategori ini..."
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
          />

          <input
            type="text"
            value={newCatTags}
            onChange={(e) => setNewCatTags(e.target.value)}
            placeholder="Tags dipisah koma (e.g. Keagamaan, Nasional, LDKS)"
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
          />

          <button
            type="button"
            onClick={handleAddCategory}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Kategori</span>
          </button>
        </div>
      </div>

      {/* CRUD Arsip Link Folder Drive */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Folder Drive Dokumentasi Khusus ({galeri.driveCards.length} Folder)
        </h3>

        <div className="space-y-2">
          {galeri.driveCards.map((card) => (
            <div
              key={card.id}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
            >
              <div>
                <span className="font-bold text-slate-900 block">{card.title}</span>
                <span className="text-slate-500 font-mono text-[11px]">
                  {card.category} • {card.date} • {card.driveLink}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteDriveCard(card.id)}
                className="p-1 rounded-md text-rose-600 hover:bg-rose-50"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Tambah Drive Card */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 pt-3">
          <span className="text-xs font-bold text-slate-800 block">
            + Tambah Arsip Folder Kegiatan
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={newDriveTitle}
              onChange={(e) => setNewDriveTitle(e.target.value)}
              placeholder="Nama Event (e.g. Hari Guru Nasional 2026)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
            <input
              type="text"
              value={newDriveCategory}
              onChange={(e) => setNewDriveCategory(e.target.value)}
              placeholder="Kategori (e.g. Nasional / ORSEN)"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="date"
              value={newDriveDate}
              onChange={(e) => setNewDriveDate(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
            <input
              type="text"
              value={newDriveLink}
              onChange={(e) => setNewDriveLink(e.target.value)}
              placeholder="URL Google Drive Folder"
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleAddDriveCard}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Folder Arsip</span>
          </button>
        </div>
      </div>
    </div>
  );
}
