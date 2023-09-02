import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
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
