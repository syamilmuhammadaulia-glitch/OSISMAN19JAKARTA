"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KelolaKontenPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600 text-sm">
      Mengalihkan ke Panel Konten Admin...
    </div>
  );
}
