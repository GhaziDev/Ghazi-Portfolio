import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        incolor:'rgba(3, 85, 145, 0.98)',
        outcolor:'rgba(58, 147, 211, 0.98)',
        glasscolor:'rgba(58, 147, 211, 1)',
        transparent:'rgba(0,0,0,0.1)',
        selectorcolor:'#88dded',
        selectorbg:'#171616',
      },

      fontFamily: {
        lacquer: ['lacquer'], // Add your custom font here,
        cavaet:['cavaet']
      },
    },
  },
  plugins: [],
};
export default config;
