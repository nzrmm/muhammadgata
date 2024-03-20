import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Header } from "@/components";

import { cn } from "@/utils";
import { SITE_URL, SITE_OWNER } from "@/constants/env";
import { KEYWORDS } from "@/constants/seo";
import { spaceGrotesk, inter } from "@/constants/font";

import "@/styles/globals.css";

export const metadata: Metadata = {
  authors: { name: SITE_OWNER, url: SITE_URL },
  keywords: KEYWORDS,
  icons: {
    icon: "/images/favicon.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn(
        spaceGrotesk.className,
        spaceGrotesk.variable,
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body className={cn("antialiased")}>
        <ThemeProvider enableSystem attribute="class" storageKey="app-theme">
          <Header />
          <main
            className={cn("mx-auto w-[88%] py-14", "lg:max-w-4xl lg:py-40")}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
