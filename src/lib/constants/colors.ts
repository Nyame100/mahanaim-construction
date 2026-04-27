// Brand colour palette for Mahanaim Construction.
//
// This file is the single source of truth for hex values.
// It is consumed in two ways:
//   1. globals.css registers these as @theme CSS variables → Tailwind utility classes
//   2. Any JS/TS code that needs raw hex values (e.g. charting libs, canvas, inline styles)
//      imports directly from here instead of hard-coding strings.

export const brandColors = {
  green: {
    // Deep forest green — primary brand colour; used for headings, CTA buttons, nav bar
    dark: "#1a4a2e",
    // Mid green — hover states, active links, section dividers
    mid: "#2d7a4f",
    // Bright accent green — icon fills, badges, progress indicators
    light: "#4caf7d",
    // Near-white tint — section backgrounds, card surfaces, subtle highlights
    pale: "#e8f5ee",
  },

  purple: {
    // Deep purple — secondary brand colour; used for pull-quotes and accent headings
    dark: "#3d1a6e",
    // Mid purple — hover states on secondary elements, tag backgrounds
    mid: "#6b3fa0",
    // Soft purple — decorative accents, icon strokes, gradient endpoints
    light: "#9b6dca",
    // Near-white tint — alternating section backgrounds, callout boxes
    pale: "#f0eaf8",
  },

  // Warm off-white — primary page background; softer than pure white on screen
  off_white: "#f7f5f0",

  // Near-black — body copy, footer background; less harsh than #000000
  charcoal: "#1c1c1c",
};
