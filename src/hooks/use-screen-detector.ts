"use client";

import { useWindowSize } from "@/hooks";

const useScreenDetector = () => {
  const { width } = useWindowSize();

  const isMobile = width >= 0 && width < 768; // sm
  const isTablet = width >= 768 && width < 1024; // md
  const isDesktop = width >= 1024; // lg

  return { isMobile, isTablet, isDesktop };
};

export default useScreenDetector;
