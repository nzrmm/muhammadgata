import "@/styles/globals.css";
import cx from "classnames";
import type { AppProps } from "next/app";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(spaceGrotesk.variable, inter.variable, "font-primary")}>
      <Component {...pageProps} />
    </main>
  );
}
