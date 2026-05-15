import { useEffect, useState } from "react";
import type { Page } from "./types";

function getHash(): string {
  try { return window.location.hash; } catch { return ""; }
}

function hashToPage(hash: string): Page {
  if (hash === "#/about") return "about";
  if (hash === "#/projects") return "projects";
  if (hash === "#/blog") return "blog";
  return "home";
}

export function useRoute() {
  const [page, setPage] = useState<Page>(() => hashToPage(getHash()));

  const navigate = (to: Page) => {
    try {
      window.location.hash = to === "home" ? "#/" : `#/${to}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
    setPage(to);
  };

  useEffect(() => {
    const onHash = () => setPage(hashToPage(getHash()));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return { page, navigate };
}

// ─── Root ─────────────────────────────────────────────────────────────────────
