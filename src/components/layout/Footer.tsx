import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";

// Static link lists defined here rather than in siteConfig — footer columns
// are a presentation concern, not site-wide configuration data.
const serviceLinks = [
  { label: "Residential", href: "/what-we-build/residential" },
  { label: "Commercial", href: "/what-we-build/commercial-office" },
  { label: "Data Centers", href: "/what-we-build/data-centers" },
  { label: "Special Facilities", href: "/what-we-build/healthcare-facilities" },
  { label: "Infrastructure", href: "/what-we-build/infrastructure" },
];

const companyLinks = [
  { label: "About Us", href: "/who-we-are/our-story" },
  { label: "Leadership", href: "/who-we-are/leadership-team" },
  { label: "Careers", href: "/who-we-are/careers" },
  { label: "Certifications", href: "/who-we-are/certifications" },
  { label: "Partners", href: "/who-we-are/partners" },
];

const resourceLinks = [
  { label: "Project Portfolio", href: "/projects" },
  { label: "Insights", href: "/news/insights" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "HSE Policy", href: "/hse-policy" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", handle: "in", href: "https://linkedin.com" },
  { label: "Twitter", handle: "tw", href: "https://twitter.com" },
  { label: "Facebook", handle: "fb", href: "https://facebook.com" },
  { label: "Instagram", handle: "ig", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">

      {/* ── TOP SECTION: 4-column grid ──────────────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-lg py-xxl grid grid-cols-1 gap-xxl sm:grid-cols-2 lg:grid-cols-4">

        {/* ── Column 1: Brand identity + contact ──────────────────────────────── */}
        <div className="flex flex-col gap-lg">

          {/* Logo mark — same hexagon + wordmark pattern as Navbar for consistency. */}
          <Link
            href="/"
            className="flex items-center gap-sm hover:opacity-80 transition-opacity w-fit"
            aria-label={`${siteConfig.name} — return to homepage`}
          >
            <div
              className="w-5 h-5 bg-brand-purple-mid flex-shrink-0"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              aria-hidden="true"
            />
            <span className="font-display text-xl tracking-widest uppercase">
              {siteConfig.name}
            </span>
          </Link>

          <p className="font-body font-light text-sm text-white/60 leading-relaxed">
            Building complex, technically demanding projects that change the
            environments we live and work in.
          </p>

          {/* Contact block — sourced from siteConfig so a phone/email change propagates everywhere. */}
          <address className="not-italic flex flex-col gap-sm font-body text-sm text-white/60">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-brand-green-light transition-colors w-fit"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hover:text-brand-green-light transition-colors w-fit"
            >
              {siteConfig.phone}
            </a>
            {/* Locations mapped so adding a new office in siteConfig appears automatically. */}
            <ul className="flex flex-wrap gap-x-sm gap-y-xs">
              {siteConfig.locations.map((location, index) => (
                <li key={location} className="flex items-center gap-xs">
                  {index > 0 && (
                    <span className="text-white/30" aria-hidden="true">·</span>
                  )}
                  {location}
                </li>
              ))}
            </ul>
          </address>
        </div>

        {/* ── Column 2: Services ──────────────────────────────────────────────── */}
        <div>
          <h3 className="font-display text-base tracking-widest uppercase text-white mb-lg">
            Services
          </h3>
          <ul className="flex flex-col gap-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body font-light text-sm text-white/50 hover:text-brand-green-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Company ───────────────────────────────────────────────── */}
        <div>
          <h3 className="font-display text-base tracking-widest uppercase text-white mb-lg">
            Company
          </h3>
          <ul className="flex flex-col gap-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body font-light text-sm text-white/50 hover:text-brand-green-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: Resources ─────────────────────────────────────────────── */}
        <div>
          <h3 className="font-display text-base tracking-widest uppercase text-white mb-lg">
            Resources
          </h3>
          <ul className="flex flex-col gap-sm">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body font-light text-sm text-white/50 hover:text-brand-green-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-lg py-lg flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between">

          <p className="font-body font-light text-sm text-white/40">
            © 2026 Mahanaim Construction. All rights reserved.
          </p>

          {/* Social links as bordered square buttons — icon-only with aria-label for a11y. */}
          <div className="flex items-center gap-sm">
            {socialLinks.map((social) => (
              <a
                key={social.handle}
                href={social.href}
                aria-label={social.label}
                // rel="noopener noreferrer" prevents the new tab from accessing window.opener.
                rel="noopener noreferrer"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/40 font-body font-semibold text-xs uppercase hover:border-brand-green-light hover:text-brand-green-light transition-colors"
              >
                {social.handle}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
