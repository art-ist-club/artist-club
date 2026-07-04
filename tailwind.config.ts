import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#070812",
          panel: "#111321",
          gold: "#F4C76B",
          soft: "#A7ADBD"
        }
      }
    }
  },
  plugins: []
};

export default config;
