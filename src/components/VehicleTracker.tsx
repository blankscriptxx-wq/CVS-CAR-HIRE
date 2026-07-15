"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { recordRecentlyViewed } from "@/lib/useShortlist";

/** Records a vehicle view (analytics + recently-viewed) on mount. */
export function VehicleTracker({ slug, name }: { slug: string; name: string }) {
  useEffect(() => {
    track("view_vehicle", { slug, name });
    recordRecentlyViewed(slug);
  }, [slug, name]);
  return null;
}
