import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate dark/blue brand palette
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e3a8a",
          900: "#0f2557",
          950: "#0a1733",
        },
        // Green accent used exclusively for calls-to-action
        cta: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        // Orange reserved for the floating call button so it stays
        // distinguishable from the green CTAs it overlaps while scrolling
        hotline: {
          500: "#ff6b35",
          600: "#e5562a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,197,94,0.15), 0 8px 24px -4px rgba(34,197,94,0.35)",
        float:
          "0 0 0 1px rgba(2,6,23,0.12), 0 18px 35px -8px rgba(2,6,23,0.55), 0 8px 14px -6px rgba(2,6,23,0.45)",
      },
      keyframes: {
        // The elevation layers repeat in both steps because an animated
        // box-shadow replaces the element's shadow outright.
        "cta-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 1px rgba(2,6,23,0.12), 0 0 0 0 rgba(255,107,53,0.5), 0 18px 35px -8px rgba(2,6,23,0.55), 0 8px 14px -6px rgba(2,6,23,0.45)",
          },
          "70%": {
            boxShadow:
              "0 0 0 1px rgba(2,6,23,0.12), 0 0 0 14px rgba(255,107,53,0), 0 18px 35px -8px rgba(2,6,23,0.55), 0 8px 14px -6px rgba(2,6,23,0.45)",
          },
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "cta-pulse": "cta-pulse 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
