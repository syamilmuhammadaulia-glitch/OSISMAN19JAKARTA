"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { WebsiteData } from "@/types/content";
import { defaultWebsiteData } from "@/lib/defaultContent";
import { getWebsiteContent, saveWebsiteContent, resetWebsiteContent } from "@/service/contentService";

interface ContentContextType {
  data: WebsiteData;
  isLoading: boolean;
  refreshContent: () => Promise<void>;
  updateData: (newData: WebsiteData) => Promise<boolean>;
  resetToDefault: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType>({
  data: defaultWebsiteData,
  isLoading: true,
  refreshContent: async () => {},
  updateData: async () => false,
  resetToDefault: async () => {},
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<WebsiteData>(defaultWebsiteData);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const fetched = await getWebsiteContent();
      setData(fetched);
    } catch (e) {
      console.error("Error fetching content:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    getWebsiteContent().then((fetched) => {
      if (isMounted) {
        setData(fetched);
        setIsLoading(false);
      }
    });

    const handleUpdate = () => {
      getWebsiteContent().then((fetched) => {
        if (isMounted) {
          setData(fetched);
        }
      });
    };

    window.addEventListener("website-content-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      isMounted = false;
      window.removeEventListener("website-content-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const updateData = async (newData: WebsiteData): Promise<boolean> => {
    setData(newData);
    const success = await saveWebsiteContent(newData);
    return success;
  };

  const resetToDefault = async () => {
    const fresh = await resetWebsiteContent();
    setData(fresh);
  };

  return (
    <ContentContext.Provider
      value={{
        data,
        isLoading,
        refreshContent: fetchContent,
        updateData,
        resetToDefault,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
