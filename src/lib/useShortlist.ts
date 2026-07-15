"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const KEY = "cvs-shortlist";
const EVENT = "cvs-shortlist-change";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(slugs: string[]) {
  window.localStorage.setItem(KEY, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent(EVENT));
}

/** Locally-stored shortlist of vehicle slugs (no account needed). */
export function useShortlist() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(read());
    const sync = () => setSlugs(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((slug: string) => {
    const current = read();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    write(next);
    if (!current.includes(slug)) track("shortlist_vehicle", { slug });
  }, []);

  const has = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  return { slugs, toggle, has, count: slugs.length };
}

/** Recently-viewed tracker (most-recent first, capped). */
const RECENT_KEY = "cvs-recent";
export function recordRecentlyViewed(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const list: string[] = JSON.parse(window.localStorage.getItem(RECENT_KEY) || "[]");
    const next = [slug, ...list.filter((s) => s !== slug)].slice(0, 6);
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

export function getRecentlyViewed(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}
