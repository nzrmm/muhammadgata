import { useState, useEffect } from "react";

type IWindowSizeType = {
  width: number;
  height: number;
};

const useWindowSize = (): IWindowSizeType => {
  const [size, setSize] = useState<IWindowSizeType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return size;
};

export default useWindowSize;
