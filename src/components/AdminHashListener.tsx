"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminHashListener() {
  const router = useRouter();

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined" && window.location.hash.toLowerCase() === "#admin") {
        router.push("/admin");
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [router]);

  return null;
}

