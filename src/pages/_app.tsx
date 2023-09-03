import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk, Inter } from "next/font/google";

import { Layout } from "@/layouts";

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
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Muhammad Gata" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="muhammad gata, gata, frontend developer, mobile developer, software engineer, reactjs, nextjs, personal website"
        />
      </Head>

      <style jsx global>{`
        :root {
          --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
        html {
          font-family: var(--font-space-grotesk);
        }
      `}</style>

      <ThemeProvider enableSystem attribute="class" storageKey="app-theme">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
