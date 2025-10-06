import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Add if you use src/
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "site-primary": "#141007",
        "dark-base": "#141007",
        "site-secondary": "#4E4E4E",
        "site-grey": "#4E4E4E",
        "site-accent": "#09B4C6",
        "slate-teal": "#59787C",
        "soft-grey": "#D0CFC9",
        "off-white": "#EFEEEA",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-right": "slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "ease-out-cubic": "cubic-bezier(0.22, 1, 0.36, 1)",
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
