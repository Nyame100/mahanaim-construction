import { Bebas_Neue, Barlow } from "next/font/google";

// Bebas Neue — display / heading font.
//
// Not a variable font, so weight must be specified explicitly.
// It only exists in weight 400; there is no bold or light variant.
// subsets: ['latin'] tells next/font which character set to preload —
// only the latin subset is injected as <link rel="preload"> so we don't
// ship Cyrillic or Vietnamese glyphs that will never be used on this site.
//
// variable: '--font-bebas' activates CSS variable mode. next/font will
// declare --font-bebas on whichever element receives bebasNeue.variable
// as a className (the <html> tag in the root layout). From there, Tailwind
// and any CSS rule can reference it via var(--font-bebas) rather than
// hard-coding a font-family string in every component.
export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

// Barlow — body / UI font.
//
// Also not a variable font, so weights must be listed explicitly as an array.
// We load 300 (light body copy), 400 (normal), 500 (medium, for labels and
// captions), and 600 (semibold, for subheadings and button text). We skip
// 700+ because Bebas Neue handles heavy display weight — mixing two bold
// typefaces creates visual noise.
//
// variable: '--font-barlow' follows the same CSS variable pattern as above.
// Both variables are applied to <html> in layout.tsx so every route inherits
// them without re-declaring.
export const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

// Why export the font objects rather than just the CSS variable name strings?
//
// The font object carries two things the string alone cannot provide:
//   1. font.variable — the className that must be applied to <html> for the
//      CSS variable to actually exist in the DOM. Without this className the
//      var(--font-bebas) reference resolves to nothing.
//   2. font.className — a direct className that sets font-family inline,
//      useful if you ever need to apply a font to a single isolated element
//      without going through Tailwind.
//
// Exporting the full object from one file means layout.tsx imports once,
// applies both .variable classNames to <html>, and every component in the
// tree can use the Tailwind utility classes (font-display, font-body) that
// point at those variables — no prop drilling, no duplicated config.
