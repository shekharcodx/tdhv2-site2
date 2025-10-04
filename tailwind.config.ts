import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ Add if you use src/
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        // ✅ Your custom color
        'slate-teal': '#22b5b1',
      },
    },
  },
  plugins: [
    animate,
    scrollbar,
    scrollbarHide,
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
