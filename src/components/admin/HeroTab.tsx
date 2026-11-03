"use client";

import { WebsiteData } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
}

export default function HeroTab({ formData, setFormData }: Props) {
  const hero = formData.hero;

  const handleHeroChange = (field: keyof typeof hero, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  const handleStatChange = (statField: keyof typeof hero.stats, value: string) => {
    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        stats: {
          ...prev.hero.stats,
          [statField]: value,
        },
      },
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Beranda &amp; Hero Section
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Atur teks sambutan utama, judul headline besar, tombol aksi (CTA), dan kartu ringkasan eksekutif.
        </p>
      </div>

      {/* Headline & Deskripsi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Headline &amp; Teks Sambutan
        </h3>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Badge Atas Headline
          </label>
          <input
            type="text"
            value={hero.badgeText}
            onChange={(e) => handleHeroChange("badgeText", e.target.value)}
            placeholder="e.g. OSIS MAN 19 JAKARTA • PERIODE 2026/2027"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Headline (Teks Biasa)
            </label>
            <input
              type="text"
              value={hero.titleRegular}
              onChange={(e) => handleHeroChange("titleRegular", e.target.value)}
              placeholder="e.g. Mewujudkan Generasi Pemimpin yang"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Judul Headline (Gradient Berwarna)
            </label>
            <input
              type="text"
              value={hero.titleHighlight}
              onChange={(e) => handleHeroChange("titleHighlight", e.target.value)}
              placeholder="e.g. Berkarakter, Unggul & Berdampak"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Paragraf Deskripsi Sambutan
          </label>
          <textarea
            rows={3}
            value={hero.description}
            onChange={(e) => handleHeroChange("description", e.target.value)}
            placeholder="Tuliskan kata sambutan portal resmi..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none"
          />
        </div>
      </div>

      {/* Tombol Aksi (CTA) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Tombol Aksi Utama (Hero CTA)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Utama (Biru) - Teks
            </label>
            <input
              type="text"
              value={hero.ctaPrimaryText}
              onChange={(e) => handleHeroChange("ctaPrimaryText", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Utama - Link Target
            </label>
            <input
              type="text"
              value={hero.ctaPrimaryHref}
              onChange={(e) => handleHeroChange("ctaPrimaryHref", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Kedua (Putih) - Teks
            </label>
            <input
              type="text"
              value={hero.ctaSecondaryText}
              onChange={(e) => handleHeroChange("ctaSecondaryText", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Kedua - Link Target
            </label>
            <input
              type="text"
              value={hero.ctaSecondaryHref}
              onChange={(e) => handleHeroChange("ctaSecondaryHref", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Kotak Aspirasi - Teks
            </label>
            <input
              type="text"
              value={hero.ctaAspirasiText}
              onChange={(e) => handleHeroChange("ctaAspirasiText", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tombol Kotak Aspirasi - Link Target
            </label>
            <input
              type="text"
              value={hero.ctaAspirasiHref}
              onChange={(e) => handleHeroChange("ctaAspirasiHref", e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>
      </div>

      {/* Kartu Ringkasan Eksekutif */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Kartu Ringkasan Eksekutif (Overview Card)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Kabinet / Slogan
            </label>
            <input
              type="text"
              value={hero.kabinetName}
              onChange={(e) => handleHeroChange("kabinetName", e.target.value)}
              placeholder="e.g. Kabinet Bersinergi • BEST OSIS"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Status Bertugas
            </label>
            <input
              type="text"
              value={hero.kabinetStatus}
              onChange={(e) => handleHeroChange("kabinetStatus", e.target.value)}
              placeholder="e.g. Aktif Bertugas"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 outline-none"
            />
          </div>
        </div>

        {/* 3 Metrik Stat */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-blue-700">Stat Pengurus</span>
            <input
              type="text"
              value={hero.stats.pengurusCount}
              onChange={(e) => handleStatChange("pengurusCount", e.target.value)}
              placeholder="Angka (e.g. 44)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-sm font-bold outline-none"
            />
            <input
              type="text"
              value={hero.stats.pengurusLabel}
              onChange={(e) => handleStatChange("pengurusLabel", e.target.value)}
              placeholder="Label (Pengurus Resmi)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
            <input
              type="text"
              value={hero.stats.pengurusSub}
              onChange={(e) => handleStatChange("pengurusSub", e.target.value)}
              placeholder="Sub (6 Sekbid)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-amber-700">Stat Program Kerja</span>
            <input
              type="text"
              value={hero.stats.prokerCount}
              onChange={(e) => handleStatChange("prokerCount", e.target.value)}
              placeholder="Angka (e.g. 39)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-sm font-bold outline-none"
            />
            <input
              type="text"
              value={hero.stats.prokerLabel}
              onChange={(e) => handleStatChange("prokerLabel", e.target.value)}
              placeholder="Label (Proker Teragenda)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
            <input
              type="text"
              value={hero.stats.prokerSub}
              onChange={(e) => handleStatChange("prokerSub", e.target.value)}
              placeholder="Sub (1 Periode)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-emerald-700">Stat Aspirasi</span>
            <input
              type="text"
              value={hero.stats.aspirasiStatus}
              onChange={(e) => handleStatChange("aspirasiStatus", e.target.value)}
              placeholder="Angka (e.g. 100%)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-sm font-bold outline-none"
            />
            <input
              type="text"
              value={hero.stats.aspirasiLabel}
              onChange={(e) => handleStatChange("aspirasiLabel", e.target.value)}
              placeholder="Label (Aspirasi Terbuka)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
            <input
              type="text"
              value={hero.stats.aspirasiBadge}
              onChange={(e) => handleStatChange("aspirasiBadge", e.target.value)}
              placeholder="Badge (Online)"
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs outline-none"
            />
          </div>
        </div>

        {/* Instansi & Kemenag */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Sekolah / Instansi
            </label>
            <input
              type="text"
              value={hero.instansiName}
              onChange={(e) => handleHeroChange("instansiName", e.target.value)}
              placeholder="e.g. MAN 19 Jakarta Selatan"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Afiliasi / Kementerian
            </label>
            <input
              type="text"
              value={hero.subInstansi}
              onChange={(e) => handleHeroChange("subInstansi", e.target.value)}
              placeholder="e.g. Kementerian Agama RI"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

