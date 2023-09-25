import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { MainLayout } from "@/layouts";
import { spaceGrotesk, inter } from "@/constants/font";

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
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
