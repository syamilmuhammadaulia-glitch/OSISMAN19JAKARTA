"use client";

import { useState } from "react";
import { Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { WebsiteData, NavLinkItem } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function HeaderTab({ formData, setFormData }: Props) {
  const [newLabel, setNewLabel] = useState("");
  const [newHref, setNewHref] = useState("");
  const [newIsSpecial, setNewIsSpecial] = useState(false);

  const header = formData.header;

  const handleChange = (field: keyof typeof header, value: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        [field]: value,
      },
    }));
  };

  const handleAddNav = () => {
    if (!newLabel.trim() || !newHref.trim()) return;
    const newItem: NavLinkItem = {
      id: "nav-" + Date.now(),
      label: newLabel.trim().toUpperCase(),
      href: newHref.trim(),
      isSpecial: newIsSpecial,
    };
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        navLinks: [...prev.header.navLinks, newItem],
      },
    }));
    setNewLabel("");
    setNewHref("");
    setNewIsSpecial(false);
  };

  const handleDeleteNav = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        navLinks: prev.header.navLinks.filter((n) => n.id !== id),
      },
    }));
  };

  const handleMoveNav = (index: number, direction: "up" | "down") => {
    const list = [...header.navLinks];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        navLinks: list,
      },
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Header &amp; Identitas Website
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Atur nama instansi, logo, subtitle kepengurusan, dan tautan menu navigasi atas.
        </p>
      </div>

      {/* Identitas Instansi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Identitas Instansi / Nama Website
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Utama (Prefix)
            </label>
            <input
              type="text"
              value={header.orgNamePrefix}
              onChange={(e) => handleChange("orgNamePrefix", e.target.value)}
              placeholder="e.g. OSIS MAN 19"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
            <span className="text-[11px] text-slate-400">Contoh: OSIS MAN 19 atau BEM FAKULTAS</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Kata Sorotan Warna Biru (Highlight)
            </label>
            <input
              type="text"
              value={header.orgNameHighlight}
              onChange={(e) => handleChange("orgNameHighlight", e.target.value)}
              placeholder="e.g. JAKARTA"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
            <span className="text-[11px] text-slate-400">Contoh: JAKARTA atau UNIVERSITAS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Periode / Sub-judul
            </label>
            <input
              type="text"
              value={header.periode}
              onChange={(e) => handleChange("periode", e.target.value)}
              placeholder="e.g. Periode 2026/2027"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              URL / Path Gambar Logo
            </label>
            <input
              type="text"
              value={header.logoUrl}
              onChange={(e) => handleChange("logoUrl", e.target.value)}
              placeholder="e.g. /logo-osis.jpg atau link gambar https://"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Menu Navigasi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Menu Navigasi Atas (Navbar Links)
        </h3>

        <div className="space-y-2.5">
          {header.navLinks.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 gap-3"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-white border border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-sm text-slate-900 mr-2">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.href}
                  </span>
                  {item.isSpecial && (
                    <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Tombol Sorotan
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleMoveNav(idx, "up")}
                  disabled={idx === 0}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  title="Pindah ke atas"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveNav(idx, "down")}
                  disabled={idx === header.navLinks.length - 1}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-30"
                  title="Pindah ke bawah"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteNav(item.id)}
                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                  title="Hapus menu"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tambah Nav Link Baru */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-end gap-3">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Label Menu (Teks)
            </label>
            <input
              type="text"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              placeholder="e.g. KONTAK KAMI"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              URL Tujuan (Href)
            </label>
            <input
              type="text"
              value={newHref}
              onChange={(e) => setNewHref(e.target.value)}
              placeholder="e.g. /#beranda atau /kontak"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id="isSpecialCheck"
              checked={newIsSpecial}
              onChange={(e) => setNewIsSpecial(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="isSpecialCheck" className="text-xs text-slate-700 font-medium">
              Tombol Sorot (Biru)
            </label>
          </div>

          <button
            type="button"
            onClick={handleAddNav}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
}

