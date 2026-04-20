// Describes a single link item inside a navigation section.
// Kept as its own interface so it can be reused anywhere a label+href pair is needed.
interface NavLink {
  label: string;
  href: string;
}

// Describes one top-level navigation section — a titled group of links.
// Uses NavLink[] rather than inline object literals so the shape is named and reusable.
interface NavSection {
  title: string;
  links: NavLink[];
}

// The complete shape of the site-wide configuration object.
// Using an interface (not a type alias) because this is a named data model with
// no unions or computed types — interface gives cleaner errors and IDE hover text.
interface SiteConfig {
  // Core brand identity
  name: string;
  tagline: string;
  description: string;

  // Primary contact details
  email: string;
  phone: string;

  // Physical presence — used in footer, contact page, and structured data (schema.org)
  locations: string[];

  // Site navigation — drives the header nav and any mobile menu components
  nav: NavSection[];
}

// siteConfig is the single source of truth for site-wide metadata.
// Import this object wherever you need brand, contact, or navigation data
// rather than hard-coding strings in individual components.
export const siteConfig: SiteConfig = {
  // Brand identity — used in <title> tags, Open Graph, and the site header
  name: "Mahanaim Construction",
  tagline: "We Exist to Build Great Things",

  // SEO meta description — shown in Google search snippets; keep under 160 characters
  description:
    "Mahanaim Construction delivers world-class residential, commercial, and infrastructure projects across Ghana. Quality craftsmanship, on time, every time.",

  // Contact details — used in the footer, contact page, and structured data markup
  email: "info@mahanaim.org",
  phone: "+234 800 000 0000",

  // Office locations — rendered in the footer and the contact/locations page
  locations: ["Tema", "Accra", "Takoradi"],

  // Primary navigation structure.
  // Each section maps to a top-level menu item; its links array populates the dropdown.
  // hrefs use lowercase-hyphenated slugs that match the intended route structure.
  nav: [
    // Who We Are — company identity, people, and credentials
    {
      title: "Who We Are",
      links: [
        { label: "Core Ideology", href: "/who-we-are/core-ideology" },
        { label: "Our Story", href: "/who-we-are/our-story" },
        { label: "Leadership Team", href: "/who-we-are/leadership-team" },
        { label: "Certifications", href: "/who-we-are/certifications" },
        { label: "Careers", href: "/who-we-are/careers" },
      ],
    },

    // How We Build — services, methodologies, and delivery capabilities
    {
      title: "How We Build",
      links: [
        { label: "Design-to-Build", href: "/how-we-build/design-to-build" },
        { label: "Preconstruction", href: "/how-we-build/preconstruction" },
        { label: "Project Management", href: "/how-we-build/project-management" },
        { label: "Self-Perform Work", href: "/how-we-build/self-perform-work" },
        { label: "Prefabrication", href: "/how-we-build/prefabrication" },
        { label: "Sustainable Construction", href: "/how-we-build/sustainable-construction" },
        { label: "Virtual Design & BIM", href: "/how-we-build/virtual-design-bim" },
        { label: "Health & Safety", href: "/how-we-build/health-and-safety" },
      ],
    },

    // What We Build — market sectors and project types
    {
      title: "What We Build",
      links: [
        { label: "Residential", href: "/what-we-build/residential" },
        { label: "Commercial & Office", href: "/what-we-build/commercial-office" },
        { label: "Data Centers", href: "/what-we-build/data-centers" },
        { label: "Healthcare Facilities", href: "/what-we-build/healthcare-facilities" },
        { label: "Industrial & Manufacturing", href: "/what-we-build/industrial-manufacturing" },
        { label: "Infrastructure", href: "/what-we-build/infrastructure" },
        { label: "Education", href: "/what-we-build/education" },
        { label: "Mission Critical", href: "/what-we-build/mission-critical" },
      ],
    },

    // News & Insights — content marketing, press, and thought leadership
    {
      title: "News & Insights",
      links: [
        { label: "All News & Media", href: "/news/all" },
        { label: "Stories & Case Studies", href: "/news/stories-case-studies" },
        { label: "Insights & Thought Leadership", href: "/news/insights" },
        { label: "Events", href: "/news/events" },
        { label: "Awards & Recognition", href: "/news/awards-recognition" },
      ],
    },
  ],
};
