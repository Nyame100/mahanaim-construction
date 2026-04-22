"use client";

// "use client" is required because this component uses useState (React state
// only exists in the browser — servers are stateless) and onClick event handlers
// (a live DOM is needed to attach listeners). Without this directive Next.js would
// refuse to compile the file.

import { useState } from "react";
import Link from "next/link";
// next/link instead of <a>: Link performs client-side transitions, prefetches the
// linked route when it enters the viewport, and avoids a full-page reload.
// A plain <a> throws away the JS bundle and server-rendered cache on every click.

import { siteConfig } from "@/lib/constants/site";
// siteConfig is the single source of truth for brand name, tagline, and nav structure.
// Changes in one place propagate here automatically.

export default function Navbar() {
  // Boolean flag: the menu is either fully open or fully closed — no intermediate states.
  // Functional updater (prev => !prev) is used in the toggle so React always works
  // off the latest committed state, not a stale closure value.
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    // Sticky wrapper: both the navbar and the expanding mega menu move together as a
    // single unit when the page is scrolled. z-50 ensures they layer above all content.
    <div className="sticky top-0 z-50">

      {/* ── PRIMARY NAVIGATION BAR ─────────────────────────────────────────────── */}
      <header className="bg-brand-green-dark text-white">
        <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-lg py-md">

          {/* ── LEFT: Search ──────────────────────────────────────────────────── */}
          {/* <button> not <div>: gives keyboard focus, Enter/Space activation,
              and correct semantics for assistive technology — all for free. */}
          <button
            type="button"
            className="flex items-center gap-sm font-body font-medium text-sm tracking-wider uppercase hover:text-brand-green-light transition-colors"
            aria-label="Open site search"
          >
            {/* Inline SVG magnifying glass — no extra network request or icon library
                dependency. currentColor inherits the button's text colour, so hover
                states work automatically. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <span>Search</span>
          </button>

          {/* ── CENTRE: Logo ──────────────────────────────────────────────────── */}
          {/* Link wraps the whole mark+wordmark so the entire logo is one focusable
              click target — no nested <a> confusion, no separate hit areas. */}
          <Link
            href="/"
            className="flex items-center gap-sm hover:opacity-80 transition-opacity"
            aria-label={`${siteConfig.name} — return to homepage`}
          >
            {/* Hexagon accent mark — clip-path polygon defines the six-sided shape.
                brand-purple-mid as the secondary brand colour creates contrast against
                the brand-green-dark navbar background.
                inline style is used because Tailwind has no built-in clip-path utility;
                an arbitrary value class would work too but the style prop is more readable. */}
            <div
              className="w-5 h-5 bg-brand-purple-mid flex-shrink-0"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              aria-hidden="true"
            />
            {/* font-display maps to Bebas Neue via the CSS variable chain established
                in globals.css and layout.tsx. tracking-widest suits the condensed caps
                style Bebas Neue is designed for. */}
            <span className="font-display text-xl tracking-widest uppercase">
              {siteConfig.name}
            </span>
          </Link>

          {/* ── RIGHT: Hamburger / Close toggle ───────────────────────────────── */}
          {/* onClick chosen over onMouseEnter: click is symmetrical (one press opens,
              one closes), works on touch, and is keyboard-accessible.
              onMouseEnter triggers on accidental cursor passes and has no touch equivalent. */}
          <button
            type="button"
            className="flex items-center gap-sm font-body font-medium text-sm tracking-wider uppercase hover:text-brand-green-light transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mega-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              // Close state — "✕" communicates dismissal universally without an icon dep.
              <>
                <span>Close</span>
                <span className="text-lg leading-none" aria-hidden="true">
                  ✕
                </span>
              </>
            ) : (
              // Hamburger state — three horizontal lines is the universally understood
              // "menu" icon across every platform and culture.
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <span>Menu</span>
              </>
            )}
          </button>

        </nav>
      </header>

      {/* ── MEGA MENU ─────────────────────────────────────────────────────────────── */}
      {/* Conditional rendering (not CSS visibility/display): when isMenuOpen is false
          the node is fully removed from the DOM, which:
            1. Pulls all child <Link> elements out of the tab order automatically.
            2. Eliminates any layout space the menu would otherwise occupy.
            3. Avoids managing tabIndex=-1 on every focusable child manually. */}
      {isMenuOpen && (
        <div
          id="mega-menu"
          role="navigation"
          aria-label="Site navigation"
          className="bg-white border-t border-gray-200"
        >

          {/* ── Navigation columns ──────────────────────────────────────────────── */}
          {/* Mapped from siteConfig.nav — never hardcoded. Adding a fifth section in
              site.ts automatically adds a fifth column here with zero component edits. */}
          <div className="max-w-screen-2xl mx-auto px-lg py-xxl grid grid-cols-2 gap-xl sm:grid-cols-4">
            {siteConfig.nav.map((section) => (
              <div key={section.title}>
                {/* Section heading in brand-purple-mid — secondary accent colour that
                    reads clearly against green-dark and visually groups the links below. */}
                <h3 className="font-display text-base tracking-widest uppercase text-brand-green-dark mb-md">
                  {section.title}
                </h3>
                <ul className="space-y-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {/* Closing the menu on link click: if the user navigates to a page
                          while the menu is open, it would stay open on the new page
                          because React state persists across client-side navigations in
                          the same layout. Explicitly resetting avoids that stale state. */}
                      <Link
                        href={link.href}
                        className="font-body font-light text-sm text-brand-charcoal hover:text-brand-green-mid hover:translate-x-1 inline-block transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Mega menu footer bar ──────────────────────────────────────────────── */}
          {/* Separates the nav columns from the brand statement and the two primary CTAs.
              Having CTAs here means users who open the menu with a specific task in mind
              (contact, project search) can reach it directly without scanning all columns. */}
          <div className="border-t border-gray-200">
            <div className="max-w-screen-2xl mx-auto px-lg py-lg flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between">

              {/* Tagline from siteConfig — single source of truth so any brand copy
                  update propagates everywhere without hunting through component files. */}
              <p className="font-display text-lg tracking-widest uppercase text-brand-charcoal">
                {siteConfig.tagline}
              </p>

              <div className="flex items-center gap-md">
                {/* Outlined secondary CTA */}
                <Link
                  href="/projects"
                  className="px-lg py-sm font-body font-semibold text-sm tracking-wider uppercase border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Project Search
                </Link>

                {/* Solid primary CTA — filled background makes it the dominant action.
                    brand-purple-mid reinforces the secondary brand colour used on section
                    headings above, giving the panel visual cohesion. */}
                <Link
                  href="/contact"
                  className="px-lg py-sm font-body font-semibold text-sm tracking-wider uppercase bg-brand-purple-mid text-white hover:bg-brand-purple-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
