import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase/config";

// Mengarah ke tabel (koleksi) "pengurus" di Firestore
const pengurusCollection = collection(db, "pengurus");

// Fungsi untuk mengambil semua data pengurus
export async function getPengurus() {
  const snapshot = await getDocs(pengurusCollection);
  // Tambahkan : any pada parameter doc di bawah ini
  return snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Fungsi untuk menambah data pengurus baru
export async function addPengurus(data: any) {
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
