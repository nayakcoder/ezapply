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
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    );
    
    return () => {
      // Clean up not needed as we want to keep the viewport meta
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ResponsiveMeta;
