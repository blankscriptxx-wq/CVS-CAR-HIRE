import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        black: "#050505", // deep black
        charcoal: "#111111",
        soft: "#181818", // soft black
        "warm-white": "#F4F1EA",
        silver: "#A6A6A6",
        champagne: {
          DEFAULT: "#B49A67",
          soft: "#C9B489",
          dim: "#8C7A52",
        },
        line: "rgba(244,241,234,0.12)", // hairline dividers
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.14em",
      },
      maxWidth: {
        shell: "1440px",
        prose: "68ch",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
