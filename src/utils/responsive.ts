
/**
 * Calculate responsive font size based on screen width
 * @param minSize Minimum size in pixels
 * @param maxSize Maximum size in pixels
 * @param minWidth Screen width at which font should be minSize
 * @param maxWidth Screen width at which font should be maxSize
 * @returns CSS calc() string for font-size
 */
export function fluidTypography(
  minSize: number,
  maxSize: number,
  minWidth: number = 320,
  maxWidth: number = 1200
): string {
  // Calculate the slope and base values
  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const baseSize = minSize - slope * minWidth;

  // Return calc expression
  return `clamp(${minSize}px, ${baseSize}px + ${slope * 100}vw, ${maxSize}px)`;
}

/**
 * Generate responsive padding/margin values
 * @param baseSize Base size in rem
 * @param mobileRatio Multiplier for mobile (usually less than 1)
 * @returns Object with responsive values
 */
export function responsiveSpacing(baseSize: number, mobileRatio: number = 0.625): {
  base: string;
  mobile: string;
} {
  return {
    base: `${baseSize}rem`,
    mobile: `${baseSize * mobileRatio}rem`,
  };
}

/**
 * Generate CSS media query string for various device sizes
 */
export const mediaQuery = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (min-width: 768px) and (max-width: 1023px)",
  desktop: "@media (min-width: 1024px)",
  largeMobile: "@media (min-width: 480px) and (max-width: 767px)",
  smallMobile: "@media (max-width: 479px)",
};
