"use client";

import { WebsiteData, AspirasiCardItem } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function AspirasiTab({ formData, setFormData }: Props) {
  const homeBanner = formData.homeAspirasiBanner;
  const aspirasiPage = formData.aspirasiPage;

  const handleBannerChange = (field: keyof typeof homeBanner, val: unknown) => {
    setFormData((prev) => ({
      ...prev,
      homeAspirasiBanner: {
        ...prev.homeAspirasiBanner,
        [field]: val,
      },
    }));
  };

  const handlePageChange = (field: keyof typeof aspirasiPage, val: unknown) => {
    setFormData((prev) => ({
      ...prev,
      aspirasiPage: {
        ...prev.aspirasiPage,
        [field]: val,
      },
    }));
  };

  const handleCardChange = (idx: number, field: keyof AspirasiCardItem, val: string) => {
    const updated = [...aspirasiPage.cards];
    updated[idx] = { ...updated[idx], [field]: val };
    handlePageChange("cards", updated);
  };

  const handleAlurChange = (idx: number, field: "title" | "desc", val: string) => {
    const updated = [...aspirasiPage.alurList];
    updated[idx] = { ...updated[idx], [field]: val };
    handlePageChange("alurList", updated);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Kotak Aspirasi &amp; Tautan Google Form
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Kelola tautan formulir Google Forms untuk aspirasi siswa, masukan guru, kritik saran, ide kegiatan, serta alur pemrosesan aspirasi.
        </p>
      </div>

      {/* Banner Kotak Aspirasi di Halaman Beranda */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Banner Kotak Aspirasi (Halaman Beranda)
        </h3>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Badge Banner
          </label>
          <input
            type="text"
            value={homeBanner.badge}
            onChange={(e) => handleBannerChange("badge", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Judul Banner
          </label>
          <input
            type="text"
            value={homeBanner.title}
            onChange={(e) => handleBannerChange("title", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Deskripsi Banner
          </label>
          <textarea
            rows={2}
            value={homeBanner.desc}
            onChange={(e) => handleBannerChange("desc", e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>
      </div>

      {/* 4 Form Google Forms Resmi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
            4 Tautan Google Forms Utama (/aspirasi)
          </h3>
          <span className="text-xs font-bold text-slate-500">
            {aspirasiPage.cards.length} Formulir
          </span>
        </div>

        <div className="space-y-4">
          {aspirasiPage.cards.map((card, idx) => (
            <div
              key={card.id || idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-blue-800 uppercase">
                  Formulir 0{idx + 1}: {card.title}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200">
                  {card.badgeLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1">
                    Judul Kartu
                  </label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => handleCardChange(idx, "title", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1">
                    Label Badge
                  </label>
                  <input
                    type="text"
                    value={card.badgeLabel}
                    onChange={(e) => handleCardChange(idx, "badgeLabel", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 block mb-1">
                  Deskripsi Singkat Kartu
                </label>
                <input
                  type="text"
                  value={card.description}
                  onChange={(e) => handleCardChange(idx, "description", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  URL Link Google Form (forms.gle)
                </label>
                <input
                  type="text"
                  value={card.href}
                  onChange={(e) => handleCardChange(idx, "href", e.target.value)}
                  placeholder="https://forms.gle/..."
                  className="w-full px-3 py-1.5 rounded-lg border border-blue-200 bg-white text-xs font-mono text-blue-800 outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alur Tindak Lanjut Aspirasi (4 Langkah) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Alur Tindak Lanjut Aspirasi
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aspirasiPage.alurList.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-blue-700">Tahap {item.step}</span>
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleAlurChange(idx, "title", e.target.value)}
                placeholder="Judul Tahap"
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold outline-none"
              />
              <textarea
                rows={2}
                value={item.desc}
                onChange={(e) => handleAlurChange(idx, "desc", e.target.value)}
                placeholder="Deskripsi langkah..."
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

