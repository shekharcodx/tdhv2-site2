import type { Config } from "tailwindcss";
import { Poppins } from "next/font/google";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // ✅ register Poppins
      },
    },
  },
  plugins: [
    require("tw-animate-css"), // ✅ existing animation plugin
    require("tailwind-scrollbar"), // ✅ scrollbar plugin
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-pretty": {
          "scrollbar-width": "thin",
          "scrollbar-color": "rgba(100,100,100,0.3) transparent",
        },
        ".scrollbar-pretty::-webkit-scrollbar": {
          width: "6px",
        },
        ".scrollbar-pretty::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".scrollbar-pretty::-webkit-scrollbar-thumb": {
          background: "rgba(100,100,100,0.3)",
          "border-radius": "9999px",
          transition: "background 0.2s ease-in-out",
        },
        ".scrollbar-pretty::-webkit-scrollbar-thumb:hover": {
          background: "rgba(100,100,100,0.5)",
        },
      });
    }),
  ],
};

export default config;
