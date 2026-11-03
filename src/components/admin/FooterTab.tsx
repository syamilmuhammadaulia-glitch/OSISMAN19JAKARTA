"use client";

import { WebsiteData } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function FooterTab({ formData, setFormData }: Props) {
  const footer = formData.footer;
  const collab = formData.homeCtaCollab;

  const handleFooterChange = (field: keyof typeof footer, val: string) => {
    setFormData((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        [field]: val,
      },
    }));
  };

  const handleCollabChange = (field: keyof typeof collab, val: string) => {
    setFormData((prev) => ({
      ...prev,
      homeCtaCollab: {
        ...prev.homeCtaCollab,
        [field]: val,
      },
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Footer &amp; Informasi Kontak
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Kelola informasi alamat sekretariat, jam buka, kontak email/telepon, media sosial, hak cipta, dan banner ajakan kolaborasi bawah.
        </p>
      </div>

      {/* Banner Ajakan Kolaborasi Bawah (Landing Page CTA) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Banner Penutup (Ajakan Kolaborasi)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Badge Teks
            </label>
            <input
              type="text"
              value={collab.badge}
              onChange={(e) => handleCollabChange("badge", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Ajakan
            </label>
            <input
              type="text"
              value={collab.title}
              onChange={(e) => handleCollabChange("title", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Deskripsi Ajakan
          </label>
          <textarea
            rows={2}
            value={collab.desc}
            onChange={(e) => handleCollabChange("desc", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol 1 (Teks &amp; Link)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={collab.btn1Text}
                onChange={(e) => handleCollabChange("btn1Text", e.target.value)}
                placeholder="Teks"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
              />
              <input
                type="text"
                value={collab.btn1Href}
                onChange={(e) => handleCollabChange("btn1Href", e.target.value)}
                placeholder="Link"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol 2 (Teks &amp; Link)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={collab.btn2Text}
                onChange={(e) => handleCollabChange("btn2Text", e.target.value)}
                placeholder="Teks"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
              />
              <input
                type="text"
                value={collab.btn2Href}
                onChange={(e) => handleCollabChange("btn2Href", e.target.value)}
                placeholder="Link"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Identitas & Bio Footer */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Identitas &amp; Jam Operasional Footer
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Organisasi
            </label>
            <input
              type="text"
              value={footer.orgNamePrefix}
              onChange={(e) => handleFooterChange("orgNamePrefix", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Sorotan Teks (Highlight Biru)
            </label>
            <input
              type="text"
              value={footer.orgNameHighlight}
              onChange={(e) => handleFooterChange("orgNameHighlight", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Masa Bakti / Nama Kabinet
            </label>
            <input
              type="text"
              value={footer.kabinetMasaBakti}
              onChange={(e) => handleFooterChange("kabinetMasaBakti", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Jam / Hari Aktif Sekretariat
            </label>
            <input
              type="text"
              value={footer.jamSekretariat}
              onChange={(e) => handleFooterChange("jamSekretariat", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Bio Ringkas Footer
          </label>
          <textarea
            rows={2}
            value={footer.bio}
            onChange={(e) => handleFooterChange("bio", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>
      </div>

      {/* Kontak & Media Sosial */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Alamat &amp; Kontak Resmi
        </h3>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Alamat Lengkap Sekretariat / Sekolah
          </label>
          <textarea
            rows={2}
            value={footer.address}
            onChange={(e) => handleFooterChange("address", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Resmi
            </label>
            <input
              type="email"
              value={footer.email}
              onChange={(e) => handleFooterChange("email", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nomor Telepon / WhatsApp
            </label>
            <input
              type="text"
              value={footer.phone}
              onChange={(e) => handleFooterChange("phone", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Link Instagram Resmi
            </label>
            <input
              type="text"
              value={footer.instagramUrl}
              onChange={(e) => handleFooterChange("instagramUrl", e.target.value)}
              placeholder="https://instagram.com/..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Link YouTube Resmi (Opsional)
            </label>
            <input
              type="text"
              value={footer.youtubeUrl || ""}
              onChange={(e) => handleFooterChange("youtubeUrl", e.target.value)}
              placeholder="https://youtube.com/..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Baris Hak Cipta (Copyright Bar)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Teks Hak Cipta
            </label>
            <input
              type="text"
              value={footer.copyrightText}
              onChange={(e) => handleFooterChange("copyrightText", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Teks Tim Pengelola / Kredit
            </label>
            <input
              type="text"
              value={footer.creditText}
              onChange={(e) => handleFooterChange("creditText", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

