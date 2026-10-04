import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07111F",
        cyanx: "#00E5FF",
        greenx: "#39FF88",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,255,.12)",
      },
    },
  },
  plugins: [],
};
export default config;