import type { Testimonial } from "@/lib/types";

/**
 * Testimonials / reviews.
 *
 * IMPORTANT: This array is intentionally EMPTY. We do not fabricate reviews.
 * Populate it only with genuine, permitted customer testimonials, or connect a
 * live Google Reviews feed (see components/sections/Reviews and docs/CONTENT-TODO.md).
 * The Reviews UI degrades gracefully when this is empty.
 */
export const testimonials: Testimonial[] = [];

export const hasTestimonials = testimonials.length > 0;
