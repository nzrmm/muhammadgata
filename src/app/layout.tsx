import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { cn } from "@/utils";
import { Header } from "@/components";
import { spaceGrotesk, inter } from "@/constants/font";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Gata - Personal Portfolio",
  description: "Personal portfolio as a Frontend and Mobile Engineer",
  authors: {
    name: "Muhammad Gata",
  },
  keywords: [
    "muhammad gata",
    "muhammad",
    "gata",
    "frontend developer",
    "frontend engineer",
    "mobile developer",
    "mobile engineer",
    "software engineer",
    "reactjs",
    "vuejs",
    "nextjs",
    "personal website",
  ],
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
