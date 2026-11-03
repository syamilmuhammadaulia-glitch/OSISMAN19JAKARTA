import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { WebsiteData } from "@/types/content";
import { defaultWebsiteData } from "@/lib/defaultContent";

const STORAGE_KEY = "osis_man19_website_content";
const COLLECTION_NAME = "site_configuration";
const DOC_ID = "main";

export async function getWebsiteContent(): Promise<WebsiteData> {
  // 1. Cek LocalStorage terlebih dahulu untuk respon instan
  let cachedData: WebsiteData | null = null;
  if (typeof window !== "undefined") {
    try {
      const localStr = localStorage.getItem(STORAGE_KEY);
      if (localStr) {
        cachedData = JSON.parse(localStr);
      }
    } catch {
      // ignore
    }
  }

  // 2. Ambil dari Firestore
  try {
    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const remoteData = snap.data() as Partial<WebsiteData>;
      // Gabungkan dengan default agar jika ada field baru tidak undefined
      const mergedData: WebsiteData = {
        ...defaultWebsiteData,
        ...remoteData,
        header: { ...defaultWebsiteData.header, ...(remoteData.header || {}) },
        hero: { ...defaultWebsiteData.hero, ...(remoteData.hero || {}) },
        visiMisi: { ...defaultWebsiteData.visiMisi, ...(remoteData.visiMisi || {}) },
        struktur: { ...defaultWebsiteData.struktur, ...(remoteData.struktur || {}) },
        programKerja: { ...defaultWebsiteData.programKerja, ...(remoteData.programKerja || {}) },
        galeri: { ...defaultWebsiteData.galeri, ...(remoteData.galeri || {}) },
        homeAspirasiBanner: {
          ...defaultWebsiteData.homeAspirasiBanner,
          ...(remoteData.homeAspirasiBanner || {}),
        },
        aspirasiPage: {
          ...defaultWebsiteData.aspirasiPage,
          ...(remoteData.aspirasiPage || {}),
        },
        homeCtaCollab: {
          ...defaultWebsiteData.homeCtaCollab,
          ...(remoteData.homeCtaCollab || {}),
        },
        footer: { ...defaultWebsiteData.footer, ...(remoteData.footer || {}) },
      };

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedData));
        } catch {
          // ignore
        }
      }

      return mergedData;
    }
  } catch (err) {
    console.warn("Gagal memuat dari Firestore, menggunakan cache atau default:", err);
  }

  // Jika Firestore tidak ada data tapi ada cache lokal
  if (cachedData) {
    return {
      ...defaultWebsiteData,
      ...cachedData,
    };
  }

  return defaultWebsiteData;
}

export async function saveWebsiteContent(data: WebsiteData): Promise<boolean> {
  const updatedData: WebsiteData = {
    ...data,
    lastUpdated: new Date().toISOString(),
  };

  // Simpan ke LocalStorage agar langsung live preview
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      window.dispatchEvent(new Event("website-content-updated"));
    } catch {
      // ignore
    }
  }

  // Simpan ke Firestore
  try {
    const docRef = doc(db, COLLECTION_NAME, DOC_ID);
    await setDoc(docRef, updatedData);
    return true;
  } catch (err) {
    console.error("Gagal menyimpan ke Firestore:", err);
    // Masih return true jika localstorage berhasil sehingga admin tidak terblokir
    return true;
  }
}

export async function resetWebsiteContent(): Promise<WebsiteData> {
  const freshData = { ...defaultWebsiteData, lastUpdated: new Date().toISOString() };
  await saveWebsiteContent(freshData);
  return freshData;
}

