"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Vehicle, VehicleCategory } from "@/lib/types";
import { VehicleCard } from "@/components/VehicleCard";
import { categories, categoryLabel } from "@/lib/data/categories";
import { vehicleName } from "@/lib/vehicleDisplay";
import { vehicleInCategory } from "@/lib/data/vehicles";
import { useShortlist } from "@/lib/useShortlist";
import { track } from "@/lib/analytics";
import { CloseIcon, HeartIcon } from "@/components/ui/Icons";

type SortKey = "featured" | "price-asc" | "price-desc" | "az";

const hireTypes = [
  { key: "self-drive", label: "Self-drive" },
  { key: "chauffeur", label: "Chauffeur" },
] as const;

export function FleetShowroom({ vehicles }: { vehicles: Vehicle[] }) {
  const params = useSearchParams();
  const initialCategory = (params.get("category") as VehicleCategory | null) ?? "all";

  const [category, setCategory] = useState<string>(initialCategory);
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [hire, setHire] = useState<string>("");
  const [seats, setSeats] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showShortlistOnly, setShowShortlistOnly] = useState(false);

  const { slugs: shortlisted, count } = useShortlist();

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const manufacturers = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.manufacturer))).sort(),
    [vehicles]
  );

  const filtered = useMemo(() => {
    let list = vehicles.slice();

    if (category !== "all") list = list.filter((v) => vehicleInCategory(v, category));
    if (manufacturer) list = list.filter((v) => v.manufacturer === manufacturer);
    if (hire === "self-drive") list = list.filter((v) => v.selfDriveAvailable);
    if (hire === "chauffeur") list = list.filter((v) => v.chauffeurAvailable);
    if (seats) list = list.filter((v) => (v.seats ?? 0) >= Number(seats));
    if (showShortlistOnly) list = list.filter((v) => shortlisted.includes(v.slug));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((v) => vehicleName(v).toLowerCase().includes(q));
    }

    switch (sort) {
      case "az":
        list.sort((a, b) => vehicleName(a).localeCompare(vehicleName(b)));
        break;
      case "price-asc":
        list.sort((a, b) => (a.dailyPriceFrom ?? Infinity) - (b.dailyPriceFrom ?? Infinity));
        break;
      case "price-desc":
        list.sort((a, b) => (b.dailyPriceFrom ?? -1) - (a.dailyPriceFrom ?? -1));
        break;
      default:
        list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
    return list;
  }, [vehicles, category, manufacturer, hire, seats, query, sort, showShortlistOnly, shortlisted]);

  const activeFilterCount =
    (manufacturer ? 1 : 0) + (hire ? 1 : 0) + (seats ? 1 : 0) + (showShortlistOnly ? 1 : 0);

  const resetFilters = () => {
    setManufacturer("");
    setHire("");
    setSeats("");
    setShowShortlistOnly(false);
  };

  return (
    <div>
      {/* Sticky category + controls bar */}
      <div className="sticky top-[var(--header-h)] z-30 border-y border-line bg-black/90 backdrop-blur">
        <div className="shell flex items-center gap-3 overflow-x-auto py-3 no-scrollbar">
          <button
            onClick={() => setCategory("all")}
            className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wide2 transition-colors ${
              category === "all" ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
            }`}
          >
            All Vehicles
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setCategory(c.slug);
                track("fleet_filter", { category: c.slug });
              }}
              className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wide2 transition-colors ${
                category === c.slug ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="shell py-8">
        {/* Search + controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the fleet…"
            aria-label="Search the fleet"
            className="min-h-[48px] w-full max-w-sm border border-line bg-black/40 px-4 text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none"
          />
          <div className="flex items-center gap-3">
            {count > 0 && (
              <button
                onClick={() => setShowShortlistOnly((v) => !v)}
                className={`inline-flex min-h-[44px] items-center gap-2 border px-4 text-xs uppercase tracking-wide2 ${
                  showShortlistOnly
                    ? "border-champagne bg-champagne text-black"
                    : "border-line text-warm-white hover:border-champagne"
                }`}
              >
                <HeartIcon className="h-4 w-4" /> Shortlist ({count})
              </button>
            )}
            <label className="sr-only" htmlFor="sort">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="min-h-[44px] border border-line bg-black/40 px-3 text-xs uppercase tracking-wide2 text-warm-white focus:border-champagne focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="az">A–Z</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex min-h-[44px] items-center gap-2 border border-line px-4 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
            >
              Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
            </button>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-6 text-xs uppercase tracking-wide2 text-silver">
          {filtered.length} vehicle{filtered.length === 1 ? "" : "s"}
          {category !== "all" ? ` · ${categoryLabel(category as VehicleCategory)}` : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v, i) => (
              <VehicleCard key={v.slug} vehicle={v} priority={i < 3} />
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-line py-16 text-center">
            <p className="text-warm-white">No vehicles match those filters.</p>
            <button
              onClick={() => {
                resetFilters();
                setCategory("all");
                setQuery("");
              }}
              className="mt-4 text-xs uppercase tracking-wide2 text-champagne"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Filter drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/70"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-charcoal"
              role="dialog"
              aria-label="Filters"
            >
              <div className="flex items-center justify-between border-b border-line p-5">
                <h2 className="font-display text-2xl text-warm-white">Filters</h2>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close filters"
                  className="flex h-11 w-11 items-center justify-center text-warm-white"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 space-y-8 overflow-y-auto p-5">
                <fieldset>
                  <legend className="eyebrow mb-3">Manufacturer</legend>
                  <div className="flex flex-wrap gap-2">
                    {manufacturers.map((m) => (
                      <button
                        key={m}
                        onClick={() => setManufacturer((cur) => (cur === m ? "" : m))}
                        className={`border px-3 py-2 text-xs ${
                          manufacturer === m
                            ? "border-champagne bg-champagne text-black"
                            : "border-line text-silver hover:border-champagne"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="eyebrow mb-3">Hire type</legend>
                  <div className="flex flex-wrap gap-2">
                    {hireTypes.map((h) => (
                      <button
                        key={h.key}
                        onClick={() => setHire((cur) => (cur === h.key ? "" : h.key))}
                        className={`border px-3 py-2 text-xs ${
                          hire === h.key
                            ? "border-champagne bg-champagne text-black"
                            : "border-line text-silver hover:border-champagne"
                        }`}
                      >
                        {h.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="eyebrow mb-3">Minimum seats</legend>
                  <div className="flex flex-wrap gap-2">
                    {["2", "4", "5", "7"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSeats((cur) => (cur === s ? "" : s))}
                        className={`border px-4 py-2 text-xs ${
                          seats === s
                            ? "border-champagne bg-champagne text-black"
                            : "border-line text-silver hover:border-champagne"
                        }`}
                      >
                        {s}+
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="flex gap-3 border-t border-line p-5">
                <button
                  onClick={resetFilters}
                  className="min-h-[48px] flex-1 border border-line text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
                >
                  Reset
                </button>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="min-h-[48px] flex-1 bg-champagne text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft"
                >
                  Show {filtered.length}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
