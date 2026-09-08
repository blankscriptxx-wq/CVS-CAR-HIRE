# CVS Hire — Pre-Phase-2 SEO Ranking Baseline

**Purpose:** frozen "before Phase 2" ranking snapshot so post-Phase-2 impact can be measured
(Previous report → Pre-Phase-2 → Post-Phase-2).

- **Current (pre-Phase-2) snapshot date:** 2026-09-08 (GSC data through ~2026-09-07)
- **Previous report snapshot:** earlier this project (Sept 2026, "Search & Traffic Performance"
  report). Its exact per-keyword figures were **not retained in context**, so — to avoid
  misquoting it — this baseline uses a rigorous, fully-verifiable **period-over-period GSC
  comparison** as the authoritative before/after basis.
- **Source:** Google Search Console via Windsor.ai (property `https://www.cvshire.co.uk/`). This is
  the only legitimate source of the site's own ranking data. **No positions were estimated or
  scraped.**
- **PREV window:** 2026-03-10 → 2026-06-08 (91 days) · **CURRENT window:** 2026-06-09 → 2026-09-07 (91 days)
- **Method:** GSC average position per query. "Position" is Google's averaged position for that
  query across the window (its own ranking metric). Positive movement = rank number decreased = improved.

> ⚠️ **UNVERIFIED where noted.** Live one-off SERP positions (a single manual Google check),
> exact search volumes and keyword difficulty are **not** included — GSC does not provide them and
> they were not fabricated.

---

## 🚨 P0 FINDING — Legacy Wix ↔ new Next.js URL duplication & cannibalisation

Query×page GSC data shows the live domain is serving/indexing **both** the old Wix URLs **and** the
new Next.js URLs for the same terms. For most head terms an **old Wix URL still holds the best
position** (it carries the history), while the new URL is indexed but weak — the ranking signal is
split across 3–13 URLs per query. This is the biggest single ranking issue and must be the first
Phase-2 workstream (redirect/canonical consolidation).

| Query | Best-ranking URL (pos, impr, clk) | Also competing (pos) | # URLs |
|---|---|---|---|
| g wagon hire | **/mercedes-g63-hire** (16.7, 702, 47) | /hire/g-wagon (14.3), /fleet/mercedes-amg-g63-hire (13.3), /product-page/mercedes-g63-hire (63) | 5+ |
| mercedes g63 hire | **/mercedes-g63-hire** (6.4, 131) | /hire/g-wagon (21.4), /fleet/mercedes-amg-g63-hire (37), /product-page/... (30) | 6 |
| rolls royce cullinan hire | **/product-page/rolls-royce-cullinan-hire** (7.5, 591, 18) | /rolls-royce-cullinan-hire (33), /fleet/rolls-royce-cullinan-hire (27) | 3+ |
| audi r8 hire | **/product-page/2023-audi-r8-spyder-performance-hire** (14.9, 834, 34) | /audi-r8-hire (27), /fleet/audi-r8-spyder-hire (24), /ourfleet (26) | 4+ |
| prom car hire birmingham | **/promhire** (4.5, 844, 37) | /services/prom-car-hire (11), / (32), /birmingham/prom-car-hire (66) | 4 |
| wedding car hire birmingham | **/** (12.6, 564) | /wedding-car-hire (23.9, 816 impr), /services/wedding-car-hire (12.6), /birmingham/wedding-car-hire (57) | 5 |
| lamborghini urus hire | /fleet/lamborghini-urus-performante-hire (25) | /lamborghini-urus-hire (38, 506 impr), /product-page/...-yellow (36) | 3+ |
| lamborghini huracan hire | /product-page/...spyder (9.6, 383) | /lamborghini-huracan-hire (55), /lamborghini-huracan-performante-hire (55, 234), /fleet/...spyder (19) | 4+ |
| range rover hire birmingham | **/ourfleet** (10.1, 357) | scattered across ~13 URLs | 13 |
| luxury car hire birmingham | **/** (8.9, 1283, 16) | /ourfleet (52), /birmingham/luxury-car-hire (71), /locations/birmingham (74), /luxurycarhire (70), /prestige-car-hire (80) | 11 |
| v class hire | /luxurycarhire (40, 463 impr) | /mercedes-v-class-hire (76), / (99) | 3 |

**Legacy Wix URLs still indexed & pulling impressions:** `/mercedes-g63-hire`, `/promhire`,
`/luxurycarhire`, `/ourfleet`, `/wedding-car-hire`, `/prestige-car-hire`, `/4x4-car-hire`,
`/audi-r8-hire`, `/lamborghini-huracan-hire`, `/lamborghini-huracan-performante-hire`,
`/lamborghini-urus-hire`, `/range-rover-sport-hire`, `/rolls-royce-cullinan-hire`,
`/news-shape-range-rover-sport-hire`, and many `/product-page/*`.

**New Next.js URLs confirmed live/indexed:** `/`, `/fleet/*`, `/services/*`, `/hire/*`,
`/birmingham/*`, `/coventry/*`, `/locations/birmingham`, `/journal/*` — so the migration IS live,
but the old URLs were **not** consolidated, causing the cannibalisation above.

**Note:** the very newest pages (Revuelto, SF90, Purosangue, Defender, GT3 RS, and the new V-Class
`/services/*` pages) show **no impressions yet** — consistent with brand-new / not-yet-deployed
content. Expected; they simply have no history to baseline.

---

## Aggregate GSC comparison (whole site, www property)

| Metric | PREV (Mar 10–Jun 8) | CURRENT (Jun 9–Sep 7) | Movement |
|---|---|---|---|
| Total clicks | 3,568 | 3,384 | −5.2% |
| Total impressions | 353,793 | 365,370 | +3.3% |
| Distinct queries | 9,790 | 10,463 | +6.9% |
| Queries in Top 3 | 337 | 202 | −135 |
| Queries in Top 10 | 1,349 | 1,296 | −53 |
| Queries in Top 20 | 2,885 | 2,661 | −224 |
| Queries in Top 50 | 7,084 | 8,461 | +1,377 |
| Impression-weighted avg position | 28.5 | 28.4 | ~flat |
| Branded clicks / impr (contains "cvs") | 876 / 5,894 | 1,091 / 7,073 | +215 clk |
| Non-branded clicks / impr | 2,692 / 347,899 | 2,293 / 358,297 | −399 clk |

**Read:** broader footprint (more queries, more Top-50) but **slippage in click-driving Top-3/Top-10
positions** (−135 Top-3), so clicks dipped ~5%. Both windows are **pre-Phase-2**, so this is
natural fluctuation + the unresolved legacy/new URL split — not a Phase-2 effect.

**Relevance dilution:** a large share of impressions comes from **off-topic** queries the domain
surfaces for at poor positions — e.g. `audi hire near me` (16,025 impr, pos 16), `chevrolet hire`
(12,273, pos 29), `suv hire` (12,457, pos 35), `fiat hire` (3,816), `kia hire near me` (1,489),
`ferrari roma hire purchase` (1,788, finance intent). These inflate impressions but convert nothing
and dilute topical focus.

---

## BEFORE → CURRENT — tracked keyword table

Positive movement = improved (rank number fell). "—" = no impressions in that window.

| Keyword | Prev | Cur | Move | Cur impr | Intent |
|---|---|---|---|---|---|
| rs3 hire birmingham | 1.9 | 1.6 | +0.4 | 52 | model+local |
| ferrari roma hire | 7.0 | 1.9 | +5.1 | 19 | model |
| r8 hire birmingham | 2.9 | 4.0 | −1.1 | 1 | model+local |
| audi hire birmingham | 11.5 | 4.1 | +7.4 | 286 | brand+local |
| luxury car hire west midlands | 6.8 | 5.3 | +1.5 | 210 | generic+region |
| prom car hire birmingham | 4.7 | 5.9 | −1.2 | 920 | occasion+local |
| mercedes g63 hire | 14.5 | 6.3 | +8.2 | 146 | model |
| g wagon hire birmingham | 7.8 | 6.6 | +1.2 | 180 | model+local |
| audi rs3 hire | 4.8 | 7.8 | −3.0 | 227 | model |
| huracan hire | 3.8 | 8.4 | −4.6 | 13 | model |
| supercar hire west midlands | 9.1 | 8.9 | +0.2 | 64 | generic+region |
| rolls royce cullinan hire | 19.1 | 9.5 | +9.6 | 639 | model |
| bmw m3 hire | — | 10.5 | NEW | 22 | model |
| performance car hire birmingham | 20.3 | 11.3 | +9.0 | 19 | generic+local |
| urus hire birmingham | — | 11.3 | NEW | 3 | model+local |
| g63 hire | 14.5 | 13.1 | +1.5 | 117 | model |
| premium car hire birmingham | 13.0 | 13.9 | −0.9 | 58 | generic+local |
| prestige car hire birmingham | 11.4 | 14.0 | −2.6 | 583 | generic+local |
| audi r8 hire | 13.9 | 14.4 | −0.5 | 922 | model |
| cullinan hire | 10.2 | 15.3 | −5.0 | 123 | model |
| supercar hire birmingham | 12.7 | 15.7 | −3.1 | 308 | generic+local |
| luxury car hire birmingham | 14.1 | 15.8 | −1.8 | 1,466 | generic+local |
| range rover hire birmingham | 11.2 | 15.9 | −4.7 | 415 | brand+local |
| lamborghini hire birmingham | 14.4 | 16.7 | −2.3 | 87 | brand+local |
| g wagon hire | 11.9 | 17.1 | −5.2 | 728 | model |
| rolls royce phantom hire | 14.3 | 17.1 | −2.8 | 88 | model |
| wedding car hire birmingham | 13.9 | 17.2 | −3.3 | 1,305 | occasion+local |
| urus hire | 20.1 | 18.2 | +1.9 | 66 | model |
| sports car hire birmingham | 17.1 | 19.0 | −1.9 | 400 | generic+local |
| mercedes hire birmingham | 23.8 | 19.5 | +4.3 | 461 | brand+local |
| supercar hire near me | 20.6 | 19.5 | +1.2 | 70 | generic+near-me |
| mercedes v class hire | 27.9 | 20.7 | +7.2 | 10 | model |
| supercar rental birmingham | 14.5 | 20.6 | −6.1 | 87 | generic+local |
| luxury car rental birmingham | 12.4 | 21.0 | −8.7 | 654 | generic+local |
| ghost hire | 14.5 | 22.2 | −7.8 | 9 | model |
| supercar hire uk | 27.0 | 23.8 | +3.2 | 96 | generic+uk |
| ferrari hire birmingham | 19.6 | 25.3 | −5.7 | 53 | brand+local |
| bmw hire birmingham | 28.7 | 27.9 | +0.8 | 228 | brand+local |
| range rover vogue hire | 36.3 | 27.9 | +8.4 | 175 | model |
| rolls royce hire birmingham | 23.7 | 28.1 | −4.4 | 354 | brand+local |
| range rover hire | 30.7 | 28.4 | +2.3 | 285 | brand |
| exotic car hire birmingham | 20.3 | 28.7 | −8.3 | 15 | generic+local |
| rolls royce hire | 23.6 | 29.5 | −5.9 | 544 | brand |
| exotic car hire uk | 24.5 | 30.6 | −6.0 | 20 | generic+uk |
| lamborghini huracan hire | 28.5 | 30.9 | −2.4 | 713 | model |
| chauffeur hire birmingham | — | 37.4 | NEW | 8 | service+local |
| luxury car hire near me | 32.8 | 31.0 | +1.7 | 12,497 | generic+near-me |
| rolls royce ghost hire | 26.7 | 31.8 | −5.1 | 180 | model |
| prestige car hire west midlands | — | 34.0 | NEW | 21 | generic+region |
| lamborghini urus hire | 35.2 | 34.4 | +0.8 | 611 | model |
| luxury car hire uk | 25.3 | 34.4 | −9.1 | 299 | generic+uk |
| ferrari hire uk | 48.3 | 35.0 | +13.3 | 1 | brand+uk |
| lamborghini hire uk | 57.2 | 37.4 | +19.9 | 11 | brand+uk |
| prestige car hire uk | 36.4 | 37.8 | −1.3 | 67 | generic+uk |
| phantom hire | 24.4 | 38.5 | −14.1 | 41 | model |
| range rover sport hire | 38.2 | 40.6 | −2.4 | 549 | model |
| v class hire | 6.5 | 40.8 | −34.3 | 496 | model |
| porsche hire birmingham | 26.3 | 40.9 | −14.6 | 30 | brand+local |
| lamborghini hire | 32.4 | 41.7 | −9.4 | 478 | brand |
| porsche hire | 43.1 | 44.2 | −1.1 | 9 | brand |
| ferrari hire | 42.6 | 44.6 | −1.9 | 145 | brand |
| performance car hire uk | 27.8 | 44.8 | −16.9 | 12 | generic+uk |
| cullinan hire birmingham | 21.4 | 45.5 | −24.1 | 57 | model+local |
| porsche 911 gt3 rs hire | 61.5 | 59.0 | +2.5 | 1 | model |
| rolls royce hire uk | 65.0 | 62.0 | +3.0 | 3 | brand+uk |
| **NOT RANKING (no impressions — new/undeployed):** g63 hire birmingham · sf90 hire birmingham · ferrari sf90 hire · gt3 rs hire birmingham · self drive supercar hire birmingham · luxury 4x4 hire birmingham · best supercar hire birmingham · best luxury car hire birmingham · r8 spyder hire · urus performante hire birmingham · huracan hire birmingham · revuelto hire · lamborghini revuelto hire · purosangue hire · ferrari purosangue hire · defender hire · land rover defender hire | | | | | |

---

## Summary buckets (tracked keywords, CURRENT positions)

- **Top 3:** rs3 hire birmingham (1.6), ferrari roma hire (1.9)
- **Top 4–10:** r8 hire birmingham, audi hire birmingham, luxury car hire west midlands, prom car hire birmingham, mercedes g63 hire, g wagon hire birmingham, audi rs3 hire, huracan hire, supercar hire west midlands, rolls royce cullinan hire
- **Pos 11–20 (Page-1/Page-2 border — highest-value quick wins):** performance car hire birmingham, urus hire birmingham, bmw m3 hire, g63 hire, premium car hire birmingham, prestige car hire birmingham (583 impr), audi r8 hire (922 impr), cullinan hire, supercar hire birmingham (308 impr), luxury car hire birmingham (1,466 impr), range rover hire birmingham, lamborghini hire birmingham, g wagon hire (728 impr), rolls royce phantom hire, wedding car hire birmingham (1,305 impr), urus hire, sports car hire birmingham, mercedes hire birmingham, supercar hire near me
- **Pos 21–50:** supercar rental birmingham, luxury car rental birmingham, mercedes v class hire, ghost hire, supercar hire uk, ferrari hire birmingham, bmw hire birmingham, range rover vogue hire, rolls royce hire birmingham, range rover hire, exotic car hire, rolls royce hire, lamborghini huracan hire, luxury car hire near me, prestige car hire west midlands, lamborghini urus hire, ferrari/lamborghini hire uk, chauffeur hire birmingham, phantom hire, range rover sport hire, v class hire, lamborghini hire, porsche hire, ferrari hire, performance car hire uk, cullinan hire birmingham

### Biggest winners (period-over-period, pre-Phase-2 fluctuation)
lamborghini hire uk **+19.9**, ferrari hire uk **+13.3**, rolls royce cullinan hire **+9.6**,
performance car hire birmingham **+9.0**, range rover vogue hire **+8.4**, mercedes g63 hire **+8.2**,
audi hire birmingham **+7.4**, mercedes v class hire **+7.2**, ferrari roma hire **+5.1**

### Biggest losers
v class hire **−34.3**, cullinan hire birmingham **−24.1**, performance car hire uk **−16.9**,
porsche hire birmingham **−14.6**, phantom hire **−14.1**, luxury car hire uk **−9.1**,
luxury car rental birmingham **−8.7**, exotic car hire birmingham **−8.3**, ghost hire **−7.8**,
g wagon hire **−5.2**

### Google ranking the "wrong" (legacy) CVS URL — priority consolidations
- `g wagon hire` / `mercedes g63 hire` → old `/mercedes-g63-hire` wins; new `/fleet/mercedes-amg-g63-hire` + `/hire/g-wagon` are weaker duplicates
- `rolls royce cullinan hire` → old `/product-page/rolls-royce-cullinan-hire` wins over new `/fleet/rolls-royce-cullinan-hire`
- `audi r8 hire` → old `/product-page/2023-audi-r8-spyder-performance-hire` wins over new `/fleet/audi-r8-spyder-hire`
- `prom car hire birmingham` → old `/promhire` wins over new `/services/prom-car-hire`
- `wedding car hire birmingham` → homepage + old `/wedding-car-hire` outrank new `/services/wedding-car-hire`
- `luxury car hire birmingham` → homepage carries it (8.9); many weak duplicates dilute
- `v class hire` → old `/luxurycarhire` + `/mercedes-v-class-hire`; the new `/services/v-class-hire` cluster not yet indexed

---

## Not captured (honesty)
- **Live one-off SERP positions** (a manual Google check today): **UNVERIFIED** — not scraped; GSC averages are used instead.
- **Search volume / keyword difficulty:** **UNVERIFIED** — GSC does not provide these; not estimated.
- **Previous report's exact per-keyword figures:** not retained in context; period-over-period GSC used as the rigorous substitute.
- **Bing / other engines:** not covered here (GSC = Google only).

*Baseline frozen 2026-09-08. Re-run the identical keyword set + windows after Phase 2 ships (and after
the legacy→new URL consolidation) to produce Previous → Pre-Phase-2 → Post-Phase-2.*
