import { collection, getDocs, addDoc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase/config";

// Mengarah ke tabel (koleksi) "pengurus" di Firestore
const pengurusCollection = collection(db, "pengurus");

export interface PengurusDoc {
  id?: string;
  nama: string;
  jabatan: string;
  kelas: string;
  bidang: string;
  createdAt?: string;
}

// Fungsi untuk mengambil semua data pengurus
export async function getPengurus(): Promise<PengurusDoc[]> {
  const snapshot = await getDocs(pengurusCollection);
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
    id: doc.id,
    ...(doc.data() as Omit<PengurusDoc, "id">),
  }));
}

// Fungsi untuk menambah data pengurus baru
export async function addPengurus(data: Omit<PengurusDoc, "id">): Promise<string> {
  try {
    const docRef = await addDoc(pengurusCollection, {
      ...data,
      createdAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error menambah pengurus: ", error);
    throw error;
  }
}
