import { useEffect, useState } from "react";

import { theme } from "#constants";

const useMediaQuery = () => {
  const tabletSize = parseInt(theme.breakpoint.tablet, 10);
  const desktopSize = parseInt(theme.breakpoint.desktop, 10);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const onWindowResize = () => {
    setIsMobile(window.innerWidth < tabletSize);
    setIsTablet(
      window.innerWidth >= tabletSize && window.innerWidth < desktopSize
    );
    setIsDesktop(window.innerWidth >= desktopSize);
  };

  useEffect(() => {
    onWindowResize();

    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return { isDesktop, isMobile, isTablet };
};

export default useMediaQuery;
