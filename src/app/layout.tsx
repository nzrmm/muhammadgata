import { Metadata } from "next";

import { spaceGrotesk, inter } from "@/constants/font";
import "@/styles/globals.css";
import { cn } from "@/utils";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
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
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
