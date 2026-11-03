"use client";

import { useState } from "react";
import { KeyRound, Download, Upload, RotateCcw, AlertTriangle } from "lucide-react";
import { WebsiteData } from "@/types/content";

interface Props {
  formData: WebsiteData;
  setFormData: React.Dispatch<React.SetStateAction<WebsiteData>>;
  onReset: () => void;
  onSave?: () => void;
}

export default function SettingsTab({ formData, setFormData, onReset }: Props) {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinMessage, setPinMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleUpdatePin = (e: React.FormEvent) => {
    e.preventDefault();
    setPinMessage(null);

    const actualPin = formData.adminPin || "adminosis19";
    if (currentPin !== actualPin) {
      setPinMessage({ text: "Password saat ini salah!", isError: true });
      return;
    }
    if (newPin.length < 4) {
      setPinMessage({ text: "Password baru minimal 4 karakter!", isError: true });
      return;
    }
    if (newPin !== confirmPin) {
      setPinMessage({ text: "Konfirmasi password baru tidak cocok!", isError: true });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      adminPin: newPin,
    }));

    setPinMessage({
      text: "Password berhasil diperbarui! Jangan lupa klik 'Simpan Perubahan' di atas.",
      isError: false,
    });
    setCurrentPin("");
    setNewPin("");
    setConfirmPin("");
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `osis-man19-backup-${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.header && parsed.hero && parsed.footer) {
            setFormData(parsed);
            alert("File backup berhasil dimuat! Klik 'Simpan Perubahan' untuk menerapkannya secara permanen.");
          } else {
            alert("Format file JSON tidak sesuai struktur data website OSIS!");
          }
        } catch {
          alert("Gagal membaca file JSON. Pastikan file valid.");
        }
      };
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-extrabold text-slate-900">
          Pengaturan, Keamanan &amp; Backup
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Ganti password akses panel admin, unduh cadangan (backup) data, atau pulihkan data saat serah terima kepengurusan baru.
        </p>
      </div>

      {/* Ganti Password Admin */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-blue-700">
          <KeyRound className="w-5 h-5" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Ubah Password Akses Admin
          </h3>
        </div>

        <form onSubmit={handleUpdatePin} className="space-y-3 max-w-md">
          {pinMessage && (
            <div
              className={`p-3 rounded-xl text-xs font-semibold ${
                pinMessage.isError
                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              }`}
            >
              {pinMessage.text}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password Saat Ini
            </label>
            <input
              type="password"
              value={currentPin}
              onChange={(e) => setCurrentPin(e.target.value)}
              placeholder="Masukkan password saat ini (bawaan: adminosis19)"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password Baru
            </label>
            <input
              type="password"
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              placeholder="Minimal 4 karakter"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Konfirmasi Password Baru
            </label>
            <input
              type="password"
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
              placeholder="Ulangi password baru"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
          >
            Perbarui Password
          </button>
        </form>
      </div>

      {/* Ekspor & Impor Data (Pindah Kepemilikan) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
          Ekspor &amp; Impor Data (Pindah Kepemilikan / Backup)
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Fitur ini sangat bermanfaat ketika kepemilikan website dialihkan ke pengurus baru atau ke sekolah lain. Anda dapat mengunduh seluruh isi website (dari Header, Hero, Visi Misi, Pengurus, Proker, Galeri, Aspirasi, hingga Footer) dalam satu file JSON untuk disimpan atau diimpor di kemudian hari.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleExportJSON}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Cadangan Lengkap (.JSON)</span>
          </button>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer shadow-xs">
            <Upload className="w-4 h-4 text-blue-600" />
            <span>Pulihkan Dari File (.JSON)</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJSON}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Reset ke Bawaan Awal */}
      <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Zona Bahaya: Reset ke Setelan Pabrik
          </h3>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Mengembalikan semua data header, proker, visi-misi, pengurus, galeri, dan kontak ke setelan default awal OSIS MAN 19. Tindakan ini tidak dapat dibatalkan kecuali Anda memiliki file backup JSON.
        </p>

        <button
          type="button"
          onClick={() => {
            if (confirm("Peringatan: Apakah Anda yakin ingin mereset seluruh website ke setelan bawaan awal?")) {
              onReset();
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 transition-colors shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Semua Konten ke Bawaan</span>
        </button>
      </div>
    </div>
  );
}
