import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0e",
        surface: {
          50: "#181822",
          100: "#13131a",
          200: "#0f0f14",
          300: "#0b0b0f",
        },
        brand: {
          orange: "#F97316",
          amber: "#F59E0B",
          dark: "#EA580C",
          glow: "rgba(249, 115, 22, 0.25)",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          foreground: "#6B7280",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      boxShadow: {
        "orange-glow": "0 0 40px -10px rgba(249, 115, 22, 0.35)",
        "card-glow": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(249, 115, 22, 0.15)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      }
    },
  },
  plugins: [],
};
export default config;
