import Link from "next/link";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Ready-to-Wear", href: "/ready-to-wear" },
  { label: "The House", href: "/the-house" },
  { label: "FAQ", href: "/faq" },
];

const lineupLinks = [
  { label: "Executive", href: "/collections/executive" },
  { label: "Wedding", href: "/collections/wedding" },
  { label: "Resort", href: "/collections/resort" },
];

const customLinks = [
  { label: "Suits", href: "/suits" },
  { label: "Shirts", href: "/shirts" },
  { label: "Sportcoats & Jackets", href: "/sport-coats" },
  { label: "Trousers & Pants", href: "/trousers" },
  { label: "Outerwear", href: "/overcoats" },
  { label: "Vests & Layering", href: "/vests" },
  { label: "Casual & Knitwear", href: "/casual" },
  { label: "Suede & Leather", href: "/suede-jackets" },
  { label: "Accessories", href: "/accessories" },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Shipping & Returns"];

export default function Footer() {
  return (
    <footer
      className="mt-32 border-t"
      style={{
        backgroundColor: "var(--color-surface-container-low)",
        borderColor: "rgba(196,199,199,0.35)",
      }}
    >
      <div className="fm-container py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              className="font-garamond mb-4"
              style={{
                fontSize: 22,
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              Franco Masoma
            </div>
            <p
              className="text-body-md italic"
              style={{
                color: "var(--color-on-surface-variant)",
                maxWidth: 260,
                lineHeight: 1.7,
              }}
            >
              Born in Silicon Valley.
              <br />
              Crafted in Napoli.
            </p>
          </div>

          {/* Navigate */}
          <FooterColumn title="Navigate" links={navigateLinks} />

          {/* Lineups */}
          <FooterColumn title="Lineups" links={lineupLinks} />

          {/* Custom */}
          <FooterColumn title="Garments" links={customLinks} />

          {/* Contact */}
          <div>
            <FooterTitle>Contact</FooterTitle>
            <p
              className="text-body-md mt-5"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Los Gatos, California
            </p>
            <p
              className="text-body-md italic mt-1"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              By appointment only
            </p>
            <Link
              href="#reserve"
              className="fm-link inline-block mt-5"
              style={{ color: "var(--color-secondary)", borderColor: "var(--color-secondary)" }}
            >
              Reserve Consultation →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: "rgba(196,199,199,0.35)" }}
        >
          <span
            className="text-label-sm"
            style={{ color: "var(--color-on-surface-variant)", opacity: 0.6 }}
          >
            © 2024 FRANCO MASOMA. All Rights Reserved.
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {legalLinks.map((text) => (
              <Link
                key={text}
                href="#"
                className="text-label-sm"
                style={{
                  color: "var(--color-on-surface-variant)",
                  opacity: 0.6,
                  textDecoration: "none",
                }}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-label-sm" style={{ color: "#000" }}>
      {children}
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-5 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-body-md transition-colors duration-300"
              style={{
                color: "var(--color-on-surface-variant)",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
