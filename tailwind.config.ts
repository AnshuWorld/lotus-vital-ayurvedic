import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "3.5rem",
      },
    },

    extend: {
      colors: {
        ...colors,

        brand: {
          light: "#E0F2FE",
          DEFAULT: "#0EA5E9",
          dark: "#0369A1",
        },

        success: "#22c55e",
        warning: "#facc15",
        danger: "#ef4444",
        info: "#38bdf8",
      },

      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};

export default config;
