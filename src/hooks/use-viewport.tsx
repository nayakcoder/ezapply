
import { useState, useEffect } from "react";

export function useViewport() {
  // Initialize with reasonable defaults to prevent layout shifts
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  
  useEffect(() => {
    // Handler to call on window resize
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener("resize", handleWindowResize);
    
    // Call handler right away so state gets updated with initial window size
    handleWindowResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []); // Empty array ensures effect runs only on mount and unmount
  
  // Common breakpoints based on Tailwind defaults
  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isSmallMobile: width < 640,
    isLargeMobile: width >= 640 && width < 768,
    isSmallDesktop: width >= 1024 && width < 1280,
    isLargeDesktop: width >= 1280
  };
}
