import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-space-grotesk)", ...fontFamily.mono],
      secondary: ["var(--font-inter)", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
