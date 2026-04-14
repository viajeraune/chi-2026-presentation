/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0c0d10",
          raised: "#12141a",
          muted: "#181b24",
        },
        ink: {
          DEFAULT: "#e8eaef",
          muted: "#9aa3b2",
          faint: "#5c6575",
        },
        accent: {
          DEFAULT: "#7c9cff",
          soft: "rgba(124, 156, 255, 0.12)",
        },
        warn: "#f0c674",
        pos: "#6ee7b7",
        neg: "#f87171",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04), 0 12px 40px rgba(0,0,0,0.45)",
      },
      transitionDuration: {
        slide: "420ms",
      },
    },
  },
  plugins: [],
};
