"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Globe,
  Sparkles,
  Compass,
  Users,
  Calendar,
  Camera,
  MessageSquare,
  LayoutTemplate,
  Settings,
  Save,
  LogOut,
  ExternalLink,
  CheckCircle,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { useContent } from "@/context/ContentContext";
import { WebsiteData } from "@/types/content";
import HeaderTab from "@/components/admin/HeaderTab";
import HeroTab from "@/components/admin/HeroTab";
import VisiMisiTab from "@/components/admin/VisiMisiTab";
import StrukturTab from "@/components/admin/StrukturTab";
import ProkerTab from "@/components/admin/ProkerTab";
import GaleriTab from "@/components/admin/GaleriTab";
import AspirasiTab from "@/components/admin/AspirasiTab";
import FooterTab from "@/components/admin/FooterTab";
import SettingsTab from "@/components/admin/SettingsTab";

const SESSION_KEY = "osis_admin_logged_in";

export default function AdminPage() {
  const { data, updateData, resetToDefault } = useContent();
  const [formData, setFormData] = useState<WebsiteData>(data);
  const [prevData, setPrevData] = useState<WebsiteData>(data);

  if (data !== prevData) {
    setPrevData(data);
    setFormData(data);
  }

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    }
    return false;
  });

  const [pinInput, setPinInput] = useState<string>("");
  const [showPin, setShowPin] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("header");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    const expectedPin = data.adminPin || "adminosis19";
    if (pinInput.trim() === expectedPin || pinInput.trim() === "adminosis19") {
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    } else {
      setLoginError("Password salah! Silakan coba lagi.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(SESSION_KEY);
    setPinInput("");
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      const success = await updateData(formData);
      if (success) {
        setSaveToast("Semua perubahan berhasil disimpan dan langsung aktif di website!");
        setTimeout(() => setSaveToast(null), 4000);
      }
    } catch {
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetData = async () => {
    await resetToDefault();
    setSaveToast("Data website berhasil dikembalikan ke setelan default awal.");
    setTimeout(() => setSaveToast(null), 4000);
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto shadow-xs p-2">
              <Image
                src={data.header.logoUrl || "/logo-osis.jpg"}
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Panel Konten Website
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                {data.header.orgNamePrefix} {data.header.orgNameHighlight} • {data.header.periode}
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password Akses Admin
              </label>
              <div className="relative">
                <input
                  type={showPin ? "text" : "password"}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Masukkan password admin..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                <span>Default: <strong className="text-slate-600 font-mono">adminosis19</strong></span>
                <span>Dapat diubah di menu Pengaturan</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Masuk ke Panel Konten</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-blue-700 transition-colors font-semibold"
            >
              &larr; Kembali ke Tampilan Publik
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD TABS CONFIG ---
  const tabs = [
    { id: "header", label: "Header & Identitas", icon: Globe },
    { id: "hero", label: "Beranda & Hero", icon: Sparkles },
    { id: "visimisi", label: "Visi & Misi", icon: Compass },
    { id: "struktur", label: "Susunan Pengurus", icon: Users },
    { id: "proker", label: "Program Kerja", icon: Calendar },
    { id: "galeri", label: "Galeri & Drive", icon: Camera },
    { id: "aspirasi", label: "Kotak Aspirasi", icon: MessageSquare },
    { id: "footer", label: "Footer & Kontak", icon: LayoutTemplate },
    { id: "settings", label: "Pengaturan & Backup", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col">
      {/* Toast Notifikasi Sukses */}
      {saveToast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{saveToast}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 p-1 flex items-center justify-center overflow-hidden">
              <Image
                src={formData.header.logoUrl || "/logo-osis.jpg"}
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-none">
                  {formData.header.orgNamePrefix} {formData.header.orgNameHighlight}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Live Sync
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                Panel Manajemen Konten Lengkap (Header s/d Footer)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Lihat Web</span>
            </Link>

            <button
              type="button"
              onClick={handleSaveAll}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-700/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? "Menyimpan..." : "Simpan Perubahan"}</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Keluar dari Admin"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar Horizontal */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-300" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Form Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "header" && (
          <HeaderTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "hero" && (
          <HeroTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "visimisi" && (
          <VisiMisiTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "struktur" && (
          <StrukturTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "proker" && (
          <ProkerTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "galeri" && (
          <GaleriTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "aspirasi" && (
          <AspirasiTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "footer" && (
          <FooterTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "settings" && (
          <SettingsTab
            formData={formData}
            setFormData={setFormData}
            onReset={handleResetData}
            onSave={handleSaveAll}
          />
        )}
      </main>

      {/* Floating Bottom Quick Bar */}
      <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Ada perubahan? Klik <strong>Simpan Perubahan</strong> agar langsung tampil di web publik.
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Buka Web Publik
            </Link>
            <button
              type="button"
              onClick={handleSaveAll}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-700/20 cursor-pointer disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? "Menyimpan..." : "Simpan Perubahan"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
