import * as React from "react";

/* =============================================================================
 *  Container — fixed-width centered with consistent horizontal margins.
 * ============================================================================= */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`fm-container ${className}`}>{children}</div>;
}

/* =============================================================================
 *  Section — uniform vertical rhythm with optional background.
 *  Variants: default (128px desktop / 80px mobile), tight (80px / 56px).
 * ============================================================================= */
export function Section({
  children,
  bg = "surface",
  tight = false,
  bordered = false,
  className = "",
  id,
}: {
  children: React.ReactNode;
  bg?:
    | "surface"
    | "surface-low"
    | "surface"
    | "surface-container"
    | "surface-container-high"
    | "surface-container-lowest"
    | "primary"
    | "transparent";
  tight?: boolean;
  bordered?: boolean;
  className?: string;
  id?: string;
}) {
  const bgMap: Record<string, string> = {
    surface: "var(--color-surface)",
    "surface-low": "var(--color-surface-container-low)",
    "surface-container": "var(--color-surface-container)",
    "surface-container-high": "var(--color-surface-container-high)",
    "surface-container-lowest": "var(--color-surface-container-lowest)",
    primary: "var(--color-primary)",
    transparent: "transparent",
  };

  return (
    <section
      id={id}
      className={`${tight ? "fm-section--tight" : "fm-section"} ${className}`}
      style={{
        background: bgMap[bg] ?? "var(--color-surface)",
        borderTop: bordered ? "1px solid var(--color-outline-variant)" : undefined,
        borderBottom: bordered ? "1px solid var(--color-outline-variant)" : undefined,
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* =============================================================================
 *  Eyebrow — the small uppercase label paired with a hairline.
 *  Used above every page heading for consistent rhythm.
 * ============================================================================= */
export function Eyebrow({
  children,
  centered = false,
  inverse = false,
  color = "secondary",
}: {
  children: React.ReactNode;
  centered?: boolean;
  inverse?: boolean;
  color?: "secondary" | "muted" | "inverse";
}) {
  const colorMap: Record<string, string> = {
    secondary: "var(--color-secondary)",
    muted: "var(--color-on-surface-variant)",
    inverse: "#ffdad5",
  };
  return (
    <span
      className={`text-label-sm ${centered ? "fm-eyebrow--centered" : "fm-eyebrow"}`}
      style={{ color: inverse ? colorMap.inverse : colorMap[color] }}
    >
      {children}
    </span>
  );
}

/* =============================================================================
 *  PageHero — uniform page hero used on every category and standalone page.
 *  Variants:
 *   - "centered": light bg, centered text (default)
 *   - "split":   text left, image right (suits/overcoats/shirts pattern)
 *   - "dark":    dark bg with optional background image + soft red glow
 * ============================================================================= */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "centered",
  image,
  imageAlt = "",
  primaryCTA,
  secondaryCTA,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "centered" | "split" | "dark";
  image?: string;
  imageAlt?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}) {
  if (variant === "dark") {
    return (
      <section
        className="fm-hero"
        style={{
          background: "linear-gradient(to bottom, #1c1b1b, #000)",
          color: "#fbf9f5",
        }}
      >
        {/* Soft terracotta glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: 480,
            height: 480,
            background: "var(--color-secondary)",
            borderRadius: "50%",
            filter: "blur(140px)",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />
        {image && (
          <img
            src={image}
            alt={imageAlt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />
        )}
        <Container>
          <div className="text-center max-w-3xl mx-auto relative">
            {eyebrow && <Eyebrow inverse>{eyebrow}</Eyebrow>}
            <h1 className="text-display-lg mt-2" style={{ color: "#fbf9f5" }}>
              {title}
            </h1>
            {subtitle && (
              <p
                className="text-body-lg mt-6 mx-auto"
                style={{ color: "#c8c6c5", maxWidth: 560 }}
              >
                {subtitle}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
                {primaryCTA && (
                  <a href={primaryCTA.href} className="fm-btn fm-btn--inverse">
                    {primaryCTA.label}
                  </a>
                )}
                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    className="fm-link"
                    style={{ color: "#fbf9f5", borderColor: "#fbf9f5" }}
                  >
                    {secondaryCTA.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="fm-hero" style={{ background: "var(--color-surface)" }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              {eyebrow && <Eyebrow color="muted">{eyebrow}</Eyebrow>}
              <h1 className="text-display-lg mt-2" style={{ color: "var(--color-on-surface)" }}>
                {title}
              </h1>
              {subtitle && (
                <p
                  className="text-body-lg mt-6"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    maxWidth: 540,
                  }}
                >
                  {subtitle}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div className="mt-10 flex flex-wrap gap-5 items-center">
                  {primaryCTA && (
                    <a href={primaryCTA.href} className="fm-btn">
                      {primaryCTA.label}
                    </a>
                  )}
                  {secondaryCTA && (
                    <a href={secondaryCTA.href} className="fm-link">
                      {secondaryCTA.label}
                    </a>
                  )}
                </div>
              )}
            </div>
            {image && (
              <div className="md:col-span-5">
                <div
                  className="cinematic-zoom w-full"
                  style={{
                    aspectRatio: "4 / 5",
                    background: "var(--color-surface-container)",
                  }}
                >
                  <img src={image} alt={imageAlt} />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  // centered (default)
  return (
    <section
      className="fm-hero"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          {eyebrow && <Eyebrow centered>{eyebrow}</Eyebrow>}
          <h1 className="text-display-lg mt-2" style={{ color: "var(--color-on-surface)" }}>
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-body-lg mt-6 mx-auto"
              style={{
                color: "var(--color-on-surface-variant)",
                maxWidth: 560,
              }}
            >
              {subtitle}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              {primaryCTA && (
                <a href={primaryCTA.href} className="fm-btn">
                  {primaryCTA.label}
                </a>
              )}
              {secondaryCTA && (
                <a href={secondaryCTA.href} className="fm-link">
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
 *  SectionHeader — eyebrow + headline pair used on every section.
 * ============================================================================= */
export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <header
      className={`${centered ? "text-center mx-auto" : ""} ${className}`}
      style={{ maxWidth: centered ? 720 : undefined, marginBottom: 64 }}
    >
      {eyebrow && <Eyebrow centered={centered}>{eyebrow}</Eyebrow>}
      <h2
        className="text-display-md mt-2"
        style={{ color: "var(--color-on-surface)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-body-lg mt-6"
          style={{
            color: "var(--color-on-surface-variant)",
            maxWidth: centered ? 640 : 620,
            marginInline: centered ? "auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </header>
  );
}

/* =============================================================================
 *  ProductCard — uniform editorial card used on every category grid.
 * ============================================================================= */
export function ProductCard({
  image,
  alt,
  eyebrow,
  title,
  description,
  price,
  index,
  href = "#",
  aspect = "4/5",
}: {
  image: string;
  alt?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  price?: string;
  index?: string;
  href?: string;
  aspect?: string;
}) {
  return (
    <a href={href} className="group block" style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="cinematic-zoom relative w-full"
        style={{
          aspectRatio: aspect,
          background: "var(--color-surface-container)",
          border: "1px solid var(--color-outline-variant)",
          marginBottom: 20,
        }}
      >
        {index && <span className="fm-stamp">{index}</span>}
        <img src={image} alt={alt ?? title} />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {eyebrow && (
            <span
              className="text-label-micro block"
              style={{ color: "var(--color-on-surface-variant)", marginBottom: 6 }}
            >
              {eyebrow}
            </span>
          )}
          <h3
            className="text-headline-md"
            style={{ color: "var(--color-on-surface)" }}
          >
            {title}
          </h3>
          {description && (
            <p
              className="text-body-md mt-2"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {description}
            </p>
          )}
        </div>
        {price && (
          <span
            className="text-label-sm shrink-0 pt-1"
            style={{ color: "var(--color-on-surface)" }}
          >
            {price}
          </span>
        )}
      </div>
    </a>
  );
}

/* =============================================================================
 *  EditorialQuote — pull-quote block used on multiple pages.
 * ============================================================================= */
export function EditorialQuote({
  quote,
  attribution,
  centered = true,
}: {
  quote: string;
  attribution?: string;
  centered?: boolean;
}) {
  return (
    <figure
      className={centered ? "text-center mx-auto" : ""}
      style={{ maxWidth: 760, marginInline: centered ? "auto" : undefined }}
    >
      <div
        aria-hidden
        style={{
          width: 48,
          height: 1,
          background: "var(--color-secondary)",
          margin: centered ? "0 auto 32px" : "0 0 32px",
        }}
      />
      <blockquote
        className="font-garamond italic"
        style={{
          fontSize: "clamp(24px, 3.2vw, 36px)",
          lineHeight: 1.3,
          color: "var(--color-on-surface)",
          margin: 0,
        }}
      >
        “{quote}”
      </blockquote>
      {attribution && (
        <figcaption
          className="text-label-sm mt-8"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}

/* =============================================================================
 *  StatsRow — uniform 3-column stat bar used across product pages.
 * ============================================================================= */
export function StatsRow({
  items,
  className = "",
}: {
  items: { stat: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 ${className}`}
    >
      {items.map(({ stat, label }) => (
        <div
          key={label}
          className="text-center"
          style={{
            borderTop: "1px solid var(--color-outline-variant)",
            paddingTop: 20,
          }}
        >
          <div
            className="font-garamond"
            style={{
              fontSize: 36,
              lineHeight: 1.1,
              color: "var(--color-on-surface)",
            }}
          >
            {stat}
          </div>
          <p
            className="text-label-micro mt-3"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =============================================================================
 *  TierCard — large alternating row used by Suits / Shirts / Sport-coats etc.
 * ============================================================================= */
export function TierCard({
  index,
  reversed = false,
  category,
  name,
  label,
  body,
  includes,
  image,
}: {
  index: string;
  reversed?: boolean;
  category: string;
  name: string;
  label: string;
  body: string;
  includes: string[];
  image: string;
}) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
      <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
        <div
          className="cinematic-zoom"
          style={{
            aspectRatio: "4 / 5",
            border: "1px solid var(--color-outline-variant)",
            background: "var(--color-surface-container)",
          }}
        >
          <img src={image} alt={name} />
        </div>
      </div>
      <div
        className={`md:col-span-7 ${
          reversed ? "md:order-1 md:pr-8" : "md:pl-4"
        }`}
      >
        <span
          className="text-label-micro block mb-3"
          style={{ color: "var(--color-secondary)" }}
        >
          {index} · {category}
        </span>
        <h3
          className="text-headline-lg"
          style={{ color: "var(--color-on-surface)" }}
        >
          {name}
        </h3>
        <p
          className="text-label-sm mt-3 mb-6"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {label}
        </p>
        <p
          className="text-body-md"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {body}
        </p>
        <p
          className="text-label-sm mt-8 mb-3"
          style={{ color: "var(--color-on-surface)" }}
        >
          Includes
        </p>
        <ul
          className="text-body-md space-y-2"
          style={{
            color: "var(--color-on-surface-variant)",
            listStyle: "none",
            padding: 0,
          }}
        >
          {includes.map((i) => (
            <li key={i}>— {i}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* =============================================================================
 *  ProfileCard — small "Who This Serves" card used on every category page.
 * ============================================================================= */
export function ProfileCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <article
      style={{
        background: "var(--color-surface-container-low)",
        border: "1px solid var(--color-outline-variant)",
        padding: 32,
      }}
    >
      <span
        className="text-label-sm block mb-4"
        style={{ color: "var(--color-secondary)" }}
      >
        {index}
      </span>
      <h4
        className="text-headline-md mb-3"
        style={{ color: "var(--color-on-surface)" }}
      >
        {title}
      </h4>
      <p
        className="text-body-md"
        style={{ color: "var(--color-on-surface-variant)" }}
      >
        {body}
      </p>
    </article>
  );
}

/* =============================================================================
 *  PrincipleList — bordered bullet list used across "What Defines This Collection".
 * ============================================================================= */
export function PrincipleList({
  items,
  title = "What Defines This Collection",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <div className="mt-20 max-w-3xl mx-auto">
      <h3
        className="text-headline-md text-center mb-10"
        style={{ color: "var(--color-on-surface)" }}
      >
        {title}
      </h3>
      <ul
        className="text-body-md space-y-3"
        style={{
          color: "var(--color-on-surface-variant)",
          listStyle: "none",
          padding: 0,
        }}
      >
        {items.map((p) => (
          <li key={p}>— {p}</li>
        ))}
      </ul>
    </div>
  );
}

/* =============================================================================
 *  ReserveCTA — the closing "Reserve a consultation" block used everywhere.
 * ============================================================================= */
export function ReserveCTA({
  eyebrow = "Los Gatos, California",
  title = "Reserve your consultation.",
  description = "Each week, Franco personally accepts a small number of new clients. Begin your journey with us.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Section bg="surface-container-lowest" id="reserve">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow centered>{eyebrow}</Eyebrow>
        <h2
          className="text-display-md mt-2"
          style={{ color: "var(--color-on-surface)" }}
        >
          {title}
        </h2>
        <p
          className="text-body-lg mt-6 mx-auto"
          style={{ color: "var(--color-on-surface-variant)", maxWidth: 560 }}
        >
          {description}
        </p>
        <div className="mt-10">
          <a href="#" className="fm-btn">
            Reserve Consultation
          </a>
        </div>
      </div>
    </Section>
  );
}
