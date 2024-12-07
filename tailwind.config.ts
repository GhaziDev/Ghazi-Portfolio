import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        transparent:'rgba(0,0,0,0.5)',
        selectorcolor:'#88dded',
        selectorbg:'#171616',
        tag:'black',
        box:'#181818',
        boxshadow:'rgba(0, 255, 255, 0.8)'
      },

      fontFamily: {
        lacquer: ['lacquer'], // Add your custom font here,
        cavaet:['cavaet']
      },
    },
  },
  plugins: [nextui()],
  darkMode:'class'



};
export default config;
