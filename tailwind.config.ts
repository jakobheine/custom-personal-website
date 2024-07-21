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
        'custom-orange': '#FF9900',
        'custom-blue': '#146EB4',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;