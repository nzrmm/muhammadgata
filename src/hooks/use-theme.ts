"use client";

import { useState, useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme,
    mounted,
    setTheme,
    systemTheme,
  };
};

export default useTheme;
