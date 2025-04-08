
import { useEffect } from "react";

export const ResponsiveMeta = () => {
  useEffect(() => {
    // Check if viewport meta tag exists
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    
    // If it doesn't exist, create it
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    
    // Set the content with proper mobile viewport settings
    viewportMeta.setAttribute('content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
    );
    
    // Add theme-color meta for modern mobile browsers (controls browser UI color)
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute('content', '#186CCC'); // Using ezapply-blue
    
    // Add apple-mobile-web-app-capable meta for iOS fullscreen mode
    let appleWebAppMeta = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleWebAppMeta) {
      appleWebAppMeta = document.createElement('meta');
      appleWebAppMeta.setAttribute('name', 'apple-mobile-web-app-capable');
      document.head.appendChild(appleWebAppMeta);
    }
    appleWebAppMeta.setAttribute('content', 'yes');
    
    return () => {
      // Clean up not needed as we want to keep the viewport meta
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ResponsiveMeta;
