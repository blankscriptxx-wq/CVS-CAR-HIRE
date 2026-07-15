"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function LocationTracker({ city, slug }: { city: string; slug: string }) {
  useEffect(() => {
    track("view_location", { city, slug });
  }, [city, slug]);
  return null;
}
