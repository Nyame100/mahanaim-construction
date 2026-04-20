// Spacing scale for Mahanaim Construction.
//
// Base unit: 4px. Every step is a multiple of 4, which aligns with the
// browser's default font rendering grid and produces whole-pixel values
// at all common screen densities.
//
// These values are consumed in two ways:
//   1. As raw pixel strings in any JS/TS context that needs numeric spacing
//      (e.g. inline styles, canvas rendering, charting libraries).
//   2. As Tailwind utility classes via the @theme block in globals.css:
//      p-xs, m-sm, gap-md, etc.

export const spacing = {
  // 4px — tight internal padding; icon gutters; hairline separators
  xs: "4px",

  // 8px — compact component padding; space between stacked small elements
  sm: "8px",

  // 16px — standard component padding; default gap in flex/grid layouts
  md: "16px",

  // 24px — generous padding inside cards and panels; vertical rhythm between
  //         related content blocks
  lg: "24px",

  // 32px — section-internal spacing; distance between a heading and its body
  xl: "32px",

  // 48px — space between major content sections on a page
  xxl: "48px",

  // 64px — large section breaks; hero vertical padding; top-of-page clearance
  xxxl: "64px",
} as const;
// as const narrows the type from { xs: string } to { xs: "4px" }.
// This lets TypeScript catch typos if someone writes spacing.xss (no such key)
// and enables exhaustive checks over spacing keys in utility functions.
