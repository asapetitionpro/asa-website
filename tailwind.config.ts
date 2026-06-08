import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f7f1e7",
        ivory: "#fffdf8",
        ink: "#1d1711",
        espresso: "#2d1d0d",
        mahogany: "#3b250e",
        bronze: "#b88835",
        gold: "#c89a43",
        paleGold: "#ead7ad"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(45, 29, 13, 0.08)",
        gold: "0 16px 30px rgba(184, 136, 53, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
